# Diagramme de classes
> Information : Ce diagramme utilise la notation "Mermaid" en markdown. Il devrait s'ouvrir sans problème sous Visual Studio Code Plus. d'information ici : https://mermaid.js.org/syntax/classDiagram.html

```mermaid
---
title: Boulangerie
---
classDiagram
    class Boulangerie {
      +nom: string
      +employes: Employe[]
      +constructor(nom: string)
      +embaucher(employe: Employe) void
      +bilan() void
    }

    class Employe {
      +nom: string
      +constructor(nom: string)
    }

    Employe o-- Boulangerie

    class Boulanger {
      +nom: string
      +fabrications: Fabrications[]
      +constructor(nom: string)
      +fabriquer(produit: Produit, quantite: number) void
      +stocker(fabrication: Fabrication) void
      +bilan() number
    }

    Employe <|-- Boulanger

    class Patissier {
      +constructor(nom: string)
      +fabriquer(produit: Produit, quantite: number)
    }

    Boulanger <|-- Patissier

    class Produit {
      +nom: string
      +cout: number
      +prix: number
      +constructor(nom: string, cout: number, prix: number)
    }
    Boulanger --> Fabrication
    class Patisserie {
      +constructor(nom: string, cout: number, prix: number, isBeure: bool)
    }

    Produit <|-- Patisserie

    class Fabrication {
      +produit: Produit
      +quantite: number
      +constructor(produit: Produit, quantite: number)
      +coutFabrication(): number
    }

    Produit o-- Fabrication
    Fabrication o-- Boulanger
    class Vente {
      +produit: Produit
      +quantite: number
      +constructor(produit: Produit, quantite: number)
      +prixTotal()
    }

    Produit o-- Vente
    Vente o-- Vendeuse

    class Vendeuse {
      +ventes: Ventes[]
      +vendre(produit: Produit, quantite: number)
    }

    Employe <|-- Vendeuse

```

<!-- note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra -->

Informations :
- `+` : Public
- `-` : Private
- `#` : Protected