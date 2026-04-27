# Bonus TFP APS · Installation

## Ce que contient ce module

**Module séparé** du parcours principal, pour ne pas polluer ta progression, ton SRS, et tes statistiques. C'est un compartiment isolé pour la prépa finale.

### 100 nouvelles questions

| Section | Questions | Description |
|---|---|---|
| **UV 7 · Risques terroristes** | 12 | Vigipirate, NRBC, conduite face à attentat, colis suspect |
| **UV 11 · Premiers secours** | 8 | PAS, PLS, DAE, hémorragie, brûlure, infarctus |
| **Examen blanc LLL** | 20 | Reconstitution exacte du PDF Quizzbox LLL |
| **Examen blanc HGFD** | 20 | Reconstitution exacte du PDF Quizzbox HGFD |
| **Examen blanc SQ** | 20 | Reconstitution exacte du PDF Quizzbox SQ |
| **Examen blanc Mix Expert** | 20 | Sélection des questions les plus piégeuses |

### Fonctionnalités spéciales

- **Mode examen blanc** : timer 25 min, ordre des questions figé (comme l'examen réel), pas de shuffle
- **Mode UV 7 / UV 11** : entraînement libre, sans timer
- **Bouton "09 / Bonus"** ajouté automatiquement sur la home, après tes 8 modes existants, avec une bordure dorée pour le distinguer
- **Aucune contamination** : ces questions ne rentrent pas dans `questionsQCM`, donc elles n'apparaissent pas dans le QCM aléatoire, dans les thèmes, ni dans le SRS, ni dans le parcours guidé

## Installation (2 étapes)

### 1. Mettre `bonus.js` à la racine du projet

À côté de `data.js`, `parcours.js`, etc.

### 2. Ajouter une ligne dans `index.html`

Dans le bloc en bas du fichier (vers la ligne 2509), juste après les autres scripts :

```html
<script src="data.js"></script>
<script src="fiches.js"></script>
<script src="parcours.js"></script>
<script src="definitions.js"></script>
<script src="pomodoro.js"></script>
<script src="bonus.js"></script>   <!-- ← AJOUTER CETTE LIGNE -->
```

C'est tout. Pas de modification de l'HTML, pas de modification du CSS, pas de modification de tes scripts existants.

## Comment ça marche

Le fichier `bonus.js` :

1. Définit `bonusQuestions` et `examensBlancs` (arrays isolés du `questionsQCM` principal)
2. Expose `startBonusQuiz(uvFilter)` et `startExamenBlanc(examId)` qui réutilisent ton `state` global et ta fonction `renderQuestion()` existante (donc même UI, même feedback SRS, même corrections)
3. Injecte automatiquement un bouton "09 / Bonus" sur la home au chargement de la page (via une IIFE qui attend le DOM)
4. Crée à la volée un écran `bonusScreen` quand tu cliques sur le bouton — pas besoin de toucher à `index.html`
5. Patch léger de `showHome()` pour bien masquer l'écran bonus quand on revient à l'accueil

## Format des questions

Identique à ton `data.js` existant — tu peux donc librement déplacer une question de `bonus.js` vers `data.js` (ou inversement) si tu changes d'avis sur ce qui est "principal" vs "bonus".

```javascript
{
  theme: "UV7 · Risques terroristes",
  q: "Question ?",
  options: ["A", "B", "C", "D"],
  correct: 1,  // index de la bonne réponse (0-indexed)
  explanation: "Justification claire et opérationnelle."
}
```

## Si tu veux désactiver le bonus temporairement

Commente simplement la ligne `<script src="bonus.js"></script>` dans `index.html`. Aucune trace dans le reste de ton app, aucune dépendance.

## Notes pédagogiques

- Les 4 examens blancs reproduisent les vraies épreuves Quizzbox que tu as passées le 03/07 et le 07/07. Refaire ces examens sans regarder les corrections est le meilleur indicateur de ta progression.
- Les UV 7 et UV 11 sont des **modules pratiques** : ne te contente pas de mémoriser, comprends la logique. À l'oral, on peut t'interroger là-dessus.
- Vise **16/20 minimum** sur les examens blancs avant de te présenter à l'examen réel. Si tu es à 12-14/20, retravaille les thèmes où tu te plantes.
