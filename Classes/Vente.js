class Vente {
  constructor(produit, quantite) {
    this.produit = produit
    this.quantite = quantite
  }

  prixTotal() {
    return this.produit.prix * this.quantite
  }
}