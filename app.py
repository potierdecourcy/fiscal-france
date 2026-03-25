import streamlit as st

# Configuration de la page
st.set_page_config(page_title="Scanner Fiscal France", page_icon="🇫🇷")

def calculer_taxes_ultimes(prix_ttc, categorie, origine_france=True):
    # Paramètres par catégorie (TVA, part main d'oeuvre, accises)
    configs = {
        "Alimentation (Base)": {"tva": 0.055, "ratio_mo": 0.25, "accises": 0.01},
        "Produit Manufacturé / Luxe": {"tva": 0.20, "ratio_mo": 0.15, "accises": 0},
        "Service / Artisanat": {"tva": 0.20, "ratio_mo": 0.60, "accises": 0},
        "Restauration": {"tva": 0.10, "ratio_mo": 0.40, "accises": 0},
        "Électronique": {"tva": 0.20, "ratio_mo": 0.10, "accises": 0.03} # Copie privée
    }
    
    conf = configs.get(categorie)
    
    # 1. TVA
    prix_ht = prix_ttc / (1 + conf["tva"])
    montant_tva = prix_ttc - prix_ht
    
    # 2. Douane (si importé)
    droits_douane = 0 if origine_france else prix_ht * 0.04
    
    # 3. Social (Main d'oeuvre)
    # Si import, on ne taxe socialement que la part "distribution/logistique" (30% du HT)
    base_mo = prix_ht if origine_france else prix_ht * 0.30
    masse_brute = base_mo * conf["ratio_mo"]
    patronales = masse_brute * 0.42
    salariales = masse_brute * 0.22
    net_salarie = masse_brute - salariales
    
    # 4. Production & IS
    impots_prod = prix_ht * 0.03
    marge_avant_is = prix_ht * 0.10
    is_montant = marge_avant_is * 0.25
    benefice_net = marge_avant_is - is_montant
    
    total_etat = montant_tva + droits_douane + patronales + salariales + impots_prod + is_montant + conf["accises"]
    
    return {
        "tva": montant_tva,
        "douane": droits_douane,
        "social": patronales + salariales,
        "prod": impots_prod,
        "is": is_montant,
        "accises": conf["accises"],
        "net_ent": benefice_net,
        "net_sal": net_salarie,
        "total_prelev": total_etat
    }

# --- INTERFACE UTILISATEUR ---
st.title("🇫🇷 Scanner de Transparence Fiscale")
st.write("Découvrez ce que l'État et le modèle social prélèvent réellement sur vos achats.")

col1, col2 = st.columns(2)

with col1:
    produit = st.text_input("Nom du produit", "Bouteille de Badoit")
    prix = st.number_input("Prix TTC (€)", min_value=0.1, value=0.8, step=0.1)

with col2:
    cat = st.selectbox("Catégorie", ["Alimentation (Base)", "Produit Manufacturé / Luxe", "Service / Artisanat", "Restauration", "Électronique"])
    origine = st.radio("Origine", ["Fabriqué en France", "Importé (Hors UE)"])

if st.button("Analyser le prix"):
    res = calculer_taxes_ultimes(prix, cat, origine == "Fabriqué en France")
    
    st.divider()
    st.subheader(f"Analyse détaillée : {produit}")
    
    # Affichage des résultats
    st.metric("Part totale de l'État & Social", f"{round((res['total_prelev']/prix)*100, 1)} %")
    
    c1, c2, c3 = st.columns(3)
    c1.write("**📦 État (Direct)**")
    c1.write(f"TVA : {res['tva']:.2f}€")
    c1.write(f"Douane/Accises : {res['douane'] + res['accises']:.2f}€")
    
    c2.write("**🏥 Modèle Social**")
    c2.write(f"Cotisations : {res['social']:.2f}€")
    c2.write(f"*(Santé, Retraite)*")
    
    c3.write("**🏢 Entreprise**")
    c3.write(f"Impôts Prod/IS : {res['prod'] + res['is']:.2f}€")
    c3.write(f"Bénéfice Net : {res['net_ent']:.2f}€")
    
    st.info(f"Sur vos {prix}€, le travailleur reçoit environ {res['net_sal']:.2f}€ en salaire net.")
