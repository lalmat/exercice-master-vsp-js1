class Boulangerie {
  constructor(nom) {
    this.nom      = nom
    this.employes = []
    console.log(`${this.nom} est une boulangerie`)
  }

  embaucher(employe) {
    this.employes.push(employe)
    this.sortEmployes()
    console.log(`${this.nom} embauche ${employe.nom}.`)
  }

  bilan() {
    console.log('BILAN')
    let totalFabrications = 0
    let totalVentes = 0
    for (const employe of this.employes) {
      if (employe instanceof Boulanger) {
        totalFabrications += employe.bilan(); continue
      }
      totalVentes += employe.bilan()
    }
    console.log('Totaux')
    console.log(`  Fabrications = ${totalFabrications.toFixed(2)}`)
    console.log(`  Ventes = ${totalVentes.toFixed(2)}`)
    console.log(`  Résultat = ${(totalVentes - totalFabrications).toFixed(2)}`)
  }

  sortEmployes() {
    this.employes.sort((employeA, employeB) => {
      if (employeA.nom > employeB.nom) return 1
      if (employeA.nom > employeB.nom) return -1
      return 0
    })
  }
}