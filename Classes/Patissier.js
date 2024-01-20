class Patissier extends Boulanger {
  constructor(nom) {
    super(nom)
    console.log(`${this.nom} est aussi un patissier`)
  }

  fabriquer(produit, quantite) {
    const fabrication = new Fabrication(produit, quantite);
    const context = (produit.isBeure) ? "pâtisserie" : "boulangerie";
    console.log(`En ${context}, ${this.nom} fabrique ${quantite} ${produit.nom}`)
    this.stocker(fabrication);
  }
}