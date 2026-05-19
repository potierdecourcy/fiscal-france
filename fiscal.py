CONFIGS = {
    "Alimentation (Base)": {"tva": 0.055, "ratio_mo": 0.25, "accises": 0.01},
    "Produit Manufacturé / Luxe": {"tva": 0.20, "ratio_mo": 0.15, "accises": 0},
    "Service / Artisanat": {"tva": 0.20, "ratio_mo": 0.60, "accises": 0},
    "Restauration": {"tva": 0.10, "ratio_mo": 0.40, "accises": 0},
    "Électronique": {"tva": 0.20, "ratio_mo": 0.10, "accises": 0.03},
    "Téléphone/Smartphone": {"tva": 0.20, "ratio_mo": 0.08, "accises": 7.50},
}


def calculer_taxes_ultimes(prix_ttc, categorie, origine_france=True):
    conf = CONFIGS.get(categorie)
    if conf is None:
        raise ValueError(f"Catégorie inconnue : {categorie}")

    prix_ht = prix_ttc / (1 + conf["tva"])
    montant_tva = prix_ttc - prix_ht

    droits_douane = 0 if origine_france else prix_ht * 0.04

    base_mo = prix_ht if origine_france else prix_ht * 0.30
    masse_brute = base_mo * conf["ratio_mo"]
    patronales = masse_brute * 0.42
    salariales = masse_brute * 0.22
    net_salarie = masse_brute - salariales

    impots_prod = prix_ht * 0.03
    marge_avant_is = prix_ht * 0.10
    is_montant = marge_avant_is * 0.25
    benefice_net = marge_avant_is - is_montant

    total_etat = montant_tva + droits_douane + patronales + salariales + impots_prod + is_montant + conf["accises"]
    # La somme des prélèvements ne peut pas excéder le prix payé
    total_etat = min(total_etat, prix_ttc)

    return {
        "tva": montant_tva,
        "douane": droits_douane,
        "social": patronales + salariales,
        "prod": impots_prod,
        "is": is_montant,
        "accises": conf["accises"],
        "net_ent": benefice_net,
        "net_sal": net_salarie,
        "total_prelev": total_etat,
    }
