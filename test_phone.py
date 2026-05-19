import pytest
from fiscal import calculer_taxes_ultimes


CATEGORIE = "Téléphone/Smartphone"


def test_tva_20_pourcent():
    res = calculer_taxes_ultimes(800.0, CATEGORIE, origine_france=True)
    prix_ht = 800.0 / 1.20
    assert abs(res["tva"] - (800.0 - prix_ht)) < 0.01


def test_redevance_copie_privee_fixe():
    res = calculer_taxes_ultimes(800.0, CATEGORIE, origine_france=True)
    assert res["accises"] == 7.50


def test_droits_douane_france():
    res = calculer_taxes_ultimes(800.0, CATEGORIE, origine_france=True)
    assert res["douane"] == 0.0


def test_droits_douane_import():
    prix = 800.0
    res = calculer_taxes_ultimes(prix, CATEGORIE, origine_france=False)
    prix_ht = prix / 1.20
    assert abs(res["douane"] - prix_ht * 0.04) < 0.01


def test_total_prelev_superieur_a_tva():
    res = calculer_taxes_ultimes(800.0, CATEGORIE, origine_france=True)
    assert res["total_prelev"] > res["tva"]


def test_benefice_net_positif():
    res = calculer_taxes_ultimes(800.0, CATEGORIE, origine_france=True)
    assert res["net_ent"] > 0


def test_salaire_net_positif():
    res = calculer_taxes_ultimes(800.0, CATEGORIE, origine_france=True)
    assert res["net_sal"] > 0


def test_import_plus_taxe_que_france():
    res_fr = calculer_taxes_ultimes(800.0, CATEGORIE, origine_france=True)
    res_im = calculer_taxes_ultimes(800.0, CATEGORIE, origine_france=False)
    assert res_im["total_prelev"] > res_fr["total_prelev"]
