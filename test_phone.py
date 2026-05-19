import pytest
from fiscal import calculer_taxes_ultimes, CONFIGS


CATEGORIE = "Téléphone/Smartphone"
PRIX = 800.0


def test_tva_20_pourcent():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    prix_ht = PRIX / 1.20
    assert abs(res["tva"] - (PRIX - prix_ht)) < 0.01


def test_redevance_copie_privee_fixe():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    assert res["accises"] == 7.50


def test_redevance_independante_du_prix():
    # La redevance copie privée est fixe, elle ne varie pas avec le prix
    res_bas = calculer_taxes_ultimes(200.0, CATEGORIE)
    res_haut = calculer_taxes_ultimes(1500.0, CATEGORIE)
    assert res_bas["accises"] == res_haut["accises"] == 7.50


def test_droits_douane_france():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    assert res["douane"] == 0.0


def test_droits_douane_import():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=False)
    prix_ht = PRIX / 1.20
    assert abs(res["douane"] - prix_ht * 0.04) < 0.01


def test_cotisations_sociales_france():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    prix_ht = PRIX / 1.20
    masse_brute = prix_ht * 0.08  # ratio_mo = 0.08
    attendu = masse_brute * (0.42 + 0.22)
    assert abs(res["social"] - attendu) < 0.01


def test_cotisations_sociales_import_base_reduite():
    # À l'import, la base sociale est réduite à 30% du HT
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=False)
    prix_ht = PRIX / 1.20
    masse_brute = prix_ht * 0.30 * 0.08
    attendu = masse_brute * (0.42 + 0.22)
    assert abs(res["social"] - attendu) < 0.01


def test_cotisations_import_inferieures_a_france():
    res_fr = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    res_im = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=False)
    assert res_im["social"] < res_fr["social"]


def test_impots_production():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    prix_ht = PRIX / 1.20
    assert abs(res["prod"] - prix_ht * 0.03) < 0.01


def test_impot_societes():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    prix_ht = PRIX / 1.20
    is_attendu = prix_ht * 0.10 * 0.25
    assert abs(res["is"] - is_attendu) < 0.01


def test_total_prelev_egal_somme_composantes():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    somme = res["tva"] + res["douane"] + res["social"] + res["prod"] + res["is"] + res["accises"]
    assert abs(res["total_prelev"] - somme) < 0.01


def test_total_prelev_superieur_a_tva():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    assert res["total_prelev"] > res["tva"]


def test_benefice_net_positif():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    assert res["net_ent"] > 0


def test_salaire_net_positif():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    assert res["net_sal"] > 0


def test_import_plus_taxe_que_france():
    res_fr = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    res_im = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=False)
    assert res_im["total_prelev"] > res_fr["total_prelev"]


def test_redevance_depasse_tva_sur_prix_bas():
    # Sur un smartphone à 15€, la redevance (7.50€) dépasse la TVA (~2.50€)
    res = calculer_taxes_ultimes(15.0, CATEGORIE)
    assert res["accises"] > res["tva"]


def test_categorie_inconnue_leve_erreur():
    with pytest.raises(ValueError, match="Catégorie inconnue"):
        calculer_taxes_ultimes(PRIX, "Catégorie Inexistante")


def test_total_prelev_ne_depasse_pas_prix():
    # La redevance fixe (7.50€) ne doit jamais faire dépasser le prix payé
    for prix in [9.0, 10.0, 15.0]:
        res = calculer_taxes_ultimes(prix, CATEGORIE)
        assert res["total_prelev"] <= prix, f"total_prelev {res['total_prelev']:.2f} > prix {prix}"


def test_telephone_present_dans_configs():
    assert CATEGORIE in CONFIGS


def test_net_sal_valeur_exacte():
    res = calculer_taxes_ultimes(PRIX, CATEGORIE, origine_france=True)
    prix_ht = PRIX / 1.20
    masse_brute = prix_ht * 0.08
    attendu = masse_brute * (1 - 0.22)
    assert abs(res["net_sal"] - attendu) < 0.01
