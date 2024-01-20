class Fabrication {
  constructor(produit, quantite) {
    this.produit = produit
    this.quantite = quantite
  }

  coutFabrication() {
    return this.produit.cout * this.quantite
  }
}