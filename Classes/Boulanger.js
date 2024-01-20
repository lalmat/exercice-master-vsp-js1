class Boulanger extends Employe {
  constructor(nom) {
    super(nom)
    this.fabrications = []
    this.employeur = null;
    console.log(`${this.nom} est un boulanger`)
  }

  fabriquer(produit, quantite) {
    this.stocker(new Fabrication(produit, quantite))
    console.log(`${this.nom} fabrique ${quantite} ${produit.nom}`)
  }

  stocker(fabrication) {
    this.fabrications.push(fabrication)
  }

  bilan() {
    console.log(`Fabrications de ${this.nom}`)
    let total = 0.00
    for (const fab of this.fabrications) {
      const coutFabrication = fab.coutFabrication();
      total += coutFabrication
      console.log(`  ${fab.quantite} ${fab.produit.nom} x ${fab.produit.cout.toFixed(2)} = ${coutFabrication.toFixed(2)}`)
    }
    console.log(`  Total = ${total.toFixed(2)}`)
    return total;
  }
}