# Guide de l'Outil Tints and Shades Generator

## Qu'est-ce que Tints and Shades Generator ?

**Tints and Shades Generator** est un outil web qui génère automatiquement de belles variations de couleurs à partir d'une seule couleur de base.

**Tints (teintes)** font référence aux couleurs plus claires créées en mélangeant la couleur originale avec du blanc. **Shades (nuances)** font référence aux couleurs plus sombres créées en mélangeant la couleur originale avec du noir.

Avec cet outil, les designers et développeurs n'ont plus besoin d'ajuster manuellement les couleurs une par une. Vous pouvez créer instantanément des palettes de couleurs unifiées et belles. C'est un outil pratique qui peut être utilisé dans divers scénarios comme le design web, le design UI et le développement de couleurs de marque.

## Pourquoi cet outil a-t-il été créé ?

Avez-vous déjà pensé en concevant : "Cette couleur est belle, mais j'aimerais une version un peu plus claire" ou "Je veux aussi créer une version plus sombre" ?

**Tints and Shades Generator** est né de ces défis de design courants. Créer des dégradés naturels et beaux instantanément à partir d'une seule couleur - c'est la raison d'être de cet outil.

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
