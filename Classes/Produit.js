class Produit {
  constructor(nom, cout, prix) {
    this.nom = nom
    this.cout = cout
    this.prix = prix
    console.log(`${this.nom} est un produit (${this.cout.toFixed(2)}/${this.prix.toFixed(2)})`)
  }
}