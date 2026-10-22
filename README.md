# Portfolio — Elie Laval

Portfolio personnel d'étudiant en BUT Science des données (IUT d'Aurillac).
Site statique en HTML / CSS / JavaScript, sans framework ni étape de build, hébergé sur GitHub Pages.

## Structure

```
portfolio/
├── index.html          # page d'accueil (toutes les sections)
├── projet.html         # page de détail d'un projet (projet.html?id=...)
├── css/
│   └── style.css       # tout le style (couleurs dans :root)
├── js/
│   ├── data.js         # ⭐ TOUT LE CONTENU DU SITE — le seul fichier à remplir
│   ├── main.js         # construit la page d'accueil à partir de data.js
│   ├── projet.js       # construit la page projet à partir de data.js
│   └── stars.js        # ciel étoilé animé du hero
├── assets/
│   ├── img/            # captures d'écran des projets
│   └── cv/             # CV en PDF (CV_Elie_Laval.pdf)
└── .nojekyll           # dit à GitHub Pages de servir les fichiers tels quels
```

## Modifier le contenu

Tout se passe dans `js/data.js` : textes, compétences, projets, parcours, passions, liens de contact.
Les sections de la page se mettent à jour toutes seules.

- **Ajouter un projet** : copier un bloc `{ id: ..., titre: ... }` dans `projets` et changer l'`id`.
- **Filtres des projets** : générés automatiquement à partir des `tags`.
- **Image d'un projet** : la mettre dans `assets/img/` et renseigner `image: "assets/img/mon-image.png"`.

## Voir le site en local

Ouvrir `index.html` dans un navigateur (double-clic), ou avec l'extension **Live Server** de VS Code
pour un rechargement automatique.

## Mettre en ligne sur GitHub Pages

1. Créer un dépôt sur GitHub (nom conseillé : `<ton-pseudo>.github.io` pour avoir l'adresse la plus courte).
2. Envoyer les fichiers dans le dépôt (via GitHub Desktop, VS Code, ou glisser-déposer sur github.com).
3. Dans le dépôt : **Settings → Pages → Branch : `main` / `root` → Save**.
4. Le site est en ligne quelques minutes plus tard à `https://<ton-pseudo>.github.io/`.
