import streamlit as st
from fiscal import calculer_taxes_ultimes

# Configuration de la page
st.set_page_config(page_title="Scanner Fiscal France", page_icon="🇫🇷")

# --- INTERFACE UTILISATEUR ---
st.title("🇫🇷 Scanner de Transparence Fiscale")
st.write("Découvrez ce que l'État et le modèle social prélèvent réellement sur vos achats.")

col1, col2 = st.columns(2)

with col1:
    produit = st.text_input("Nom du produit", "Bouteille de Badoit")
    prix = st.number_input("Prix TTC (€)", min_value=0.1, value=0.8, step=0.1)

with col2:
    cat = st.selectbox("Catégorie", ["Alimentation (Base)", "Produit Manufacturé / Luxe", "Service / Artisanat", "Restauration", "Électronique", "Téléphone/Smartphone"])
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
