class Patisserie extends Produit {
  constructor(nom, cout, prix, isBeure) {
    super(nom, cout, prix)
    this.isBeure = isBeure
    console.log(`${this.nom} est précisément une pâtisserie au beurre`)
  }
}