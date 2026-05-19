#!/usr/bin/env bash
# Audit ADB - Samsung Galaxy S21
# Prérequis : adb installé, débogage USB activé sur le téléphone

set -euo pipefail

SEPARATOR="────────────────────────────────────────"
REPORT="audit_s21_$(date +%Y%m%d_%H%M%S).txt"

log() { echo "$1" | tee -a "$REPORT"; }
section() { log ""; log "$SEPARATOR"; log "  $1"; log "$SEPARATOR"; }

# Vérifie qu'un appareil est connecté
if ! adb devices | grep -q "device$"; then
    echo "Aucun appareil détecté. Vérifie le câble et le débogage USB."
    exit 1
fi

log "AUDIT GALAXY S21 — $(date '+%d/%m/%Y %H:%M:%S')"

# ── 1. Identité de l'appareil ─────────────────────────────────────────────────
section "1. APPAREIL"
log "Modèle         : $(adb shell getprop ro.product.model)"
log "Fabricant      : $(adb shell getprop ro.product.manufacturer)"
log "Android        : $(adb shell getprop ro.build.version.release)"
log "One UI         : $(adb shell getprop ro.build.version.oneui 2>/dev/null || echo 'n/a')"
log "Build          : $(adb shell getprop ro.build.display.id)"
log "Numéro série   : $(adb shell getprop ro.serialno 2>/dev/null || adb get-serialno)"
log "IMEI           : $(adb shell service call iphonesubinfo 1 2>/dev/null | grep -oP "(?<=')[\d.]+" | tr -d '.' || echo 'non accessible')"

# ── 2. Batterie ───────────────────────────────────────────────────────────────
section "2. BATTERIE"
BATT=$(adb shell dumpsys battery)
log "Niveau         : $(echo "$BATT" | grep 'level' | awk '{print $2}')%"
log "Statut         : $(echo "$BATT" | grep 'status' | awk '{print $2}') (1=inconnu 2=charge 3=décharge 4=non charge 5=plein)"
log "Santé          : $(echo "$BATT" | grep 'health' | awk '{print $2}') (2=bon 3=surchauffe 4=mort 5=dégradé)"
log "Température    : $(echo "$BATT" | grep 'temperature' | awk '{printf "%.1f°C\n", $2/10}')"
log "Tension        : $(echo "$BATT" | grep 'voltage' | awk '{printf "%dmV\n", $2}')"
log "Technologie    : $(echo "$BATT" | grep 'technology' | awk '{print $2}')"
log "Branché        : $(echo "$BATT" | grep 'powered' | head -1)"

# ── 3. CPU & Températures ─────────────────────────────────────────────────────
section "3. CPU & TEMPÉRATURES"
log "SoC            : $(adb shell getprop ro.board.platform)"
log "ABI            : $(adb shell getprop ro.product.cpu.abi)"
log "Nb cœurs       : $(adb shell nproc 2>/dev/null || echo 'n/a')"
log "Charge CPU     : $(adb shell top -bn1 2>/dev/null | grep '%cpu' | head -1 || echo 'n/a')"
log ""
log "Températures zones thermiques :"
adb shell cat /sys/class/thermal/thermal_zone*/temp 2>/dev/null \
    | awk '{printf "  zone %-3d : %.1f°C\n", NR-1, $1/1000}' \
    | tee -a "$REPORT" || log "  (non accessibles sans root)"

# ── 4. Mémoire RAM ────────────────────────────────────────────────────────────
section "4. MÉMOIRE RAM"
MEM=$(adb shell cat /proc/meminfo)
total=$(echo "$MEM"  | grep MemTotal   | awk '{printf "%.0f", $2/1024}')
free=$(echo "$MEM"   | grep MemFree    | awk '{printf "%.0f", $2/1024}')
avail=$(echo "$MEM"  | grep MemAvailable | awk '{printf "%.0f", $2/1024}')
used=$((total - avail))
log "Total          : ${total} Mo"
log "Utilisée       : ${used} Mo"
log "Disponible     : ${avail} Mo"
log "Libre          : ${free} Mo"

# ── 5. Stockage ───────────────────────────────────────────────────────────────
section "5. STOCKAGE"
adb shell df -h /data /sdcard 2>/dev/null | tee -a "$REPORT" || log "n/a"
log ""
log "Espace /data détaillé :"
adb shell du -sh /data/* 2>/dev/null | sort -rh | head -10 | tee -a "$REPORT" \
    || log "  (non accessible sans root)"

# ── 6. Réseau ─────────────────────────────────────────────────────────────────
section "6. RÉSEAU"
log "Wi-Fi SSID     : $(adb shell dumpsys wifi 2>/dev/null | grep 'mWifiInfo' | grep -oP 'SSID: \K[^,]+' || echo 'n/a')"
log "Adresse IP     : $(adb shell ip addr show wlan0 2>/dev/null | grep 'inet ' | awk '{print $2}' || echo 'n/a')"
log "Opérateur      : $(adb shell getprop gsm.operator.alpha)"
log "Type réseau    : $(adb shell getprop gsm.network.type)"
log "Force signal   : $(adb shell dumpsys telephony.registry 2>/dev/null | grep 'mSignalStrength' | head -1 || echo 'n/a')"

# ── 7. Applications & Performances ───────────────────────────────────────────
section "7. APPLICATIONS"
log "Apps installées (user) : $(adb shell pm list packages -3 | wc -l)"
log "Apps système           : $(adb shell pm list packages -s | wc -l)"
log ""
log "Top 10 apps par consommation mémoire (Mo) :"
adb shell dumpsys meminfo 2>/dev/null \
    | grep -E '^\s+[0-9]+K:' \
    | sort -rn \
    | head -10 \
    | awk '{printf "  %-45s %6.1f Mo\n", $2, $1/1024}' \
    | tee -a "$REPORT" || log "n/a"

# ── 8. Intégrité système ──────────────────────────────────────────────────────
section "8. INTÉGRITÉ SYSTÈME"
log "Bootloader     : $(adb shell getprop ro.boot.bootloader)"
log "Verrouillé     : $(adb shell getprop ro.boot.verifiedbootstate)"
log "SELinux        : $(adb shell getenforce 2>/dev/null || echo 'n/a')"
log "Root détecté   : $(adb shell which su 2>/dev/null && echo OUI || echo NON)"
log "Mises à jour   : $(adb shell pm list packages --show-versioncode 2>/dev/null | grep -c 'versionCode' || echo 'n/a') paquets indexés"
log "Dernière MAJ   : $(adb shell getprop ro.build.date)"
log "Patch sécurité : $(adb shell getprop ro.build.version.security_patch)"

# ── 9. Erreurs & Crashs récents ──────────────────────────────────────────────
section "9. ERREURS & CRASHS RÉCENTS (dernières 24h)"
adb shell dumpsys dropbox --print 2>/dev/null \
    | grep -E "^[0-9]{4}-[0-9]{2}-[0-9]{2}.*crash|anr|native_crash" \
    | tail -20 \
    | tee -a "$REPORT" || log "Aucun crash récent détecté ou accès restreint."

# ── 10. Résumé ────────────────────────────────────────────────────────────────
section "RÉSUMÉ"
batt_level=$(adb shell dumpsys battery | grep 'level' | awk '{print $2}')
batt_health=$(adb shell dumpsys battery | grep 'health' | awk '{print $2}')
patch=$(adb shell getprop ro.build.version.security_patch)
log "Batterie       : ${batt_level}% (santé: $( [ "$batt_health" = "2" ] && echo 'bonne' || echo 'à vérifier' ))"
log "Patch sécurité : $patch $( [[ "$patch" < "2024-01" ]] && echo '⚠ ancien' || echo '✓ récent' )"
log "RAM libre      : ${avail} Mo / ${total} Mo"
log ""
log "Rapport complet : $REPORT"
