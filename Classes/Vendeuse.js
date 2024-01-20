class Vendeuse extends Employe {
  constructor(nom) {
    super(nom)
    this.ventes = []
    console.log(`${this.nom} est une vendeuse`)
  }

  vendre(produit, quantite) {
    this.ventes.push(new Vente(produit, quantite));
    console.log(`${this.nom} vend ${quantite} ${produit.nom}`)
  }

  bilan() {
    console.log(`Ventes de ${this.nom}`)
    let total = 0
    for (const vte of this.ventes) {
      const prixTotal = vte.prixTotal();
      total += prixTotal
      console.log(`  ${vte.quantite} ${vte.produit.nom} x ${vte.produit.prix.toFixed(2)} = ${prixTotal.toFixed(2)}`)
    }
    console.log(`  Total = ${total.toFixed(2)}`)
    return total;
  }
}