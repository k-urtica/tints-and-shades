# Guide de l'Outil Tints and Shades Generator

## Qu'est-ce que Tints and Shades Generator ?

**Tints and Shades Generator** est un outil web qui crée des variations de couleurs qui paraissent vraiment naturelles à l'œil humain, à partir d'une seule couleur de base.

**Tints (teintes)** sont des couleurs plus claires obtenues en mélangeant la couleur de base avec du blanc. **Shades (nuances)** sont des couleurs plus foncées obtenues en mélangeant la couleur de base avec du noir.

Mais cet outil ne se contente pas de mélanger les couleurs simplement. Il utilise la technologie moderne de l'espace colorimétrique **oklch** pour rendre les transitions de couleurs perceptuellement douces et naturelles.

Oklch permet d'ajuster la "luminosité", la "teinte" et la "chroma" d'une manière beaucoup plus proche de la perception humaine. Ainsi, peu importe la couleur de départ, vous obtenez des dégradés qui semblent toujours justes.

Par exemple, éclaircir un bleu vers le blanc ne donne pas un bleu terne, mais un bleu clair et éclatant. Assombrir une couleur vers le noir conserve la richesse et la profondeur, sans tomber dans le gris boueux.

Grâce à cela, designers et développeurs peuvent créer instantanément des palettes harmonieuses et belles, sans ajustements manuels fastidieux. Que ce soit pour le web, l'UI ou les couleurs de marque, cet outil est pratique et fiable.

## Pourquoi cet outil a-t-il été créé ?

Avez-vous déjà pensé : "J'adore cette couleur, mais j'aimerais une version plus claire" ou "Je veux une nuance plus profonde et plus riche" ?

Mais quand on ajuste les couleurs à la main, elles finissent souvent ternes ou pas tout à fait comme on le souhaite.

**Tints and Shades Generator** a été créé pour résoudre ces problèmes de couleur. Avec une seule couleur, vous obtenez tout un dégradé naturel—plus de transitions maladroites ou ternes. Chaque couleur garde son caractère, et l'équilibre entre luminosité et éclat est toujours parfait.

## Détails techniques & Pourquoi c'est important

Cet outil utilise l'espace colorimétrique **oklch** pour tous les mélanges et dégradés de couleurs.
Oklch est conçu pour correspondre à la perception humaine des couleurs, donc les dégradés sont bien plus naturels qu'avec le mélange RGB ou Lab traditionnel.

- Le mélange avec le blanc (#fff) et le noir (#000) se fait en oklch
- Les échelles de couleurs TailwindCSS sont générées en oklch
- Peu importe la couleur choisie, vous obtenez des dégradés perceptuellement corrects et harmonieux

Cela signifie que les couleurs ne se cassent presque jamais et que l'équilibre entre luminosité et éclat est toujours au rendez-vous.

## Quand l'utiliser ?

### Lors de la création de sites web ou d'applications

"J'ai décidé de la couleur principale, mais penser aux couleurs de survol pour les boutons, couleurs d'arrière-plan, couleurs de texte... c'est accablant"
→ Obtenez un ensemble complet de couleurs unifiées à partir d'une seule couleur

### Lors de l'utilisation de TailwindCSS

"Je veux définir des couleurs personnalisées, mais penser à toutes les échelles de 50 à 950 ?"
→ L'onglet "✨Tailwind" crée instantanément des échelles de couleurs prêtes à l'emploi

### Lors de la décision des couleurs de marque

"J'ai décidé de la couleur du logo, mais j'ai besoin de variations de couleurs pour tout le site"
→ Obtenez des options de couleurs riches tout en maintenant la cohérence des couleurs de marque

## Comment l'utiliser (Essayons-le)

### Étape 1 : Choisir une couleur

- Entrez `#3b82f6` dans le champ de saisie de couleur en haut à gauche (c'est bleu)
- Ou cliquez sur le sélecteur de couleur (petit bouton carré) à côté pour choisir n'importe quelle couleur que vous aimez
- ※Prend actuellement en charge uniquement le format HEX (codes couleur à 6 chiffres commençant par #)

### Étape 2 : Ajuster l'intensité

- Déplacez le curseur "Weight" sur le côté droit
- Les nombres plus petits créent des changements graduels, les nombres plus grands créent des changements audacieux
- Le réglage par défaut de "5" fonctionne bien, mais ajustez selon votre préférence

### Étape 3 : Voir et copier les résultats

Une palette de couleurs sera affichée au centre de l'écran :

- **Couleurs claires (Tints)** : Comme mélanger du blanc avec la couleur originale
- **Couleur originale (Base)** : La couleur exacte que vous avez entrée (avec icône d'alerte)
- **Couleurs sombres (Shades)** : Comme mélanger du noir avec la couleur originale

Cliquez sur n'importe quelle couleur que vous aimez pour copier son code. Vous devriez voir "Copied!" apparaître en haut à droite.

### Étape 4 : Ajuster l'affichage (optionnel)

Dans les paramètres sur le côté droit, vous pouvez :

- **Changement de thème** : Vérifier les couleurs aussi en mode sombre
- **Options d'affichage** : Ajouter des bordures ou masquer les codes
- **Taille de pas** : Ajustements fins jusqu'à des incréments de 0,1%

## Utilisation des différents onglets

- **All** : Voir toutes les couleurs (c'est le paramètre par défaut)
- **Tints** : Quand vous voulez seulement voir les couleurs claires
- **Shades** : Quand vous voulez seulement voir les couleurs sombres
- **✨Tailwind** : Format d'échelle de couleur TailwindCSS (50-950)

## Conseils utiles

**Quand vous n'êtes pas sûr de la sélection de couleur** : Cliquez sur le bouton 🔄 en haut à gauche pour des couleurs aléatoires. Vous pourriez découvrir quelque chose d'inattendu.

**Pour des ajustements fins** : Réglez la "Taille de pas" sous les paramètres Weight à 0,1 pour un contrôle extrêmement précis.

**Pour améliorer l'efficacité du flux de travail** : Marquez les URLs avec les couleurs que vous utilisez fréquemment. Les couleurs sont sauvegardées avec le paramètre `?color=`.

---

Cet outil a été créé avec l'intention de "raccourcir le temps de décision des couleurs pour que vous puissiez passer plus de temps sur la création." Nous espérons qu'il vous aidera à créer des œuvres merveilleuses.
