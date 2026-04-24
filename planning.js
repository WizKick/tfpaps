// ========== PLANNING DE RÉVISION INTENSIF 3 SEMAINES ==========
// TFP APS · Lundi au Dimanche · 6h de travail actif par jour
// Structure : 3 sessions (Matin 08h-12h / Après-midi 12h45-17h / Soir 18h30-20h30)
// Chaque session = 4 blocs Pomodoro 25min + pauses 5min

// Temps de travail actif par jour :
// J01 Lundi: 305min de travail actif = 5h05
// J02 Mardi: 305min de travail actif = 5h05
// J03 Mercredi: 305min de travail actif = 5h05
// J04 Jeudi: 305min de travail actif = 5h05
// J05 Vendredi: 305min de travail actif = 5h05
// J06 Samedi: 310min de travail actif = 5h10
// J07 Dimanche: 300min de travail actif = 5h00
// J08 Lundi: 305min de travail actif = 5h05
// J09 Mardi: 305min de travail actif = 5h05
// J10 Mercredi: 305min de travail actif = 5h05
// J11 Jeudi: 305min de travail actif = 5h05
// J12 Vendredi: 310min de travail actif = 5h10
// J13 Samedi: 310min de travail actif = 5h10
// J14 Dimanche: 300min de travail actif = 5h00
// J15 Lundi: 305min de travail actif = 5h05
// J16 Mardi: 305min de travail actif = 5h05
// J17 Mercredi: 305min de travail actif = 5h05
// J18 Jeudi: 315min de travail actif = 5h15
// J19 Vendredi: 315min de travail actif = 5h15
// J20 Samedi: 310min de travail actif = 5h10
// J21 Dimanche: 300min de travail actif = 5h00

const planningData = {
  semaine1: {
    titre: "Semaine 1 — Cadre légal & Fondamentaux",
    couleur: "#d9b98c",
    objectif: "Maîtriser les bases légales. Articles de loi, CNAPS, palpation, droits du travail.",
    jours: [
      {
        jour: 1, label: "Lundi", theme: "⚖️ CNAPS & Carte professionnelle",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : CNAPS & Carte professionnelle", action: "showFicheDetail('cnaps')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "parcours", label: "Parcours Étape 1 : CNAPS", action: "openStep('step-1')", emoji: "🎯" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM : Droit & CNAPS", action: "startQuiz('theme','Droit & CNAPS')", emoji: "❓" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "flashcard", label: "Flashcards — Cadre légal", action: "showDefs()", emoji: "🃏" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : CNAPS & Carte professionnelle", action: "showFicheDetail('cnaps')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 2, label: "Mardi", theme: "⚖️ Article 73 & Appréhension",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Article 73 — Appréhension", action: "showFicheDetail('article-73')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "parcours", label: "Parcours Étape 2 : Article 73", action: "openStep('step-2')", emoji: "🎯" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM : Appréhension", action: "startQuiz('theme','Appréhension et article 73')", emoji: "❓" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : Article 73 — Appréhension", action: "showFicheDetail('article-73')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 3, label: "Mercredi", theme: "⚖️ Palpation de sécurité",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Palpation de sécurité", action: "showFicheDetail('palpation')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "parcours", label: "Parcours Étape 3 : Palpation", action: "openStep('step-3')", emoji: "🎯" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM : Palpation", action: "startQuiz('theme','Palpation de sécurité')", emoji: "❓" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "flashcard", label: "Flashcards — Cadre légal", action: "showDefs()", emoji: "🃏" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : Palpation de sécurité", action: "showFicheDetail('palpation')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 4, label: "Jeudi", theme: "⚖️ Droit du travail APS",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Droit du travail APS", action: "showFicheDetail('droit-travail')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "parcours", label: "Parcours Étape 4 : Droit travail", action: "openStep('step-4')", emoji: "🎯" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM : Droit du travail", action: "startQuiz('theme','Droit du travail')", emoji: "❓" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : Droit du travail APS", action: "showFicheDetail('droit-travail')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 5, label: "Vendredi", theme: "⚖️ Vidéosurveillance & CNIL",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Vidéosurveillance & CNIL", action: "showFicheDetail('videosurveillance')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "parcours", label: "Parcours Étape 5 : CNIL", action: "openStep('step-5')", emoji: "🎯" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM : CNIL", action: "startQuiz('theme','Vidéosurveillance et CNIL')", emoji: "❓" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : Vidéosurveillance & CNIL", action: "showFicheDetail('videosurveillance')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 6, label: "Samedi", theme: "🔄 Révision Bloc 1 — Cadre légal complet",
        blocs: [
          { heure: "08h00", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "11h40", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h45", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "12h10", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h15", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h40", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h45", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "13h10", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h40", duree: 25, type: "fiche", label: "Fiche : CNAPS & Carte professionnelle", action: "showFicheDetail('cnaps')", emoji: "📖" },
          { heure: "15h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h10", duree: 25, type: "fiche", label: "Fiche : Article 73 — Appréhension", action: "showFicheDetail('article-73')", emoji: "📖" },
          { heure: "15h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h40", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
        ]
      },
      {
        jour: 7, label: "Dimanche", theme: "🧘 Repos actif — ancrage mémoire",
        blocs: [
          { heure: "08h00", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "16h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h05", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
        ]
      }
    ]
  },
  semaine2: {
    titre: "Semaine 2 — Incendie & SSI",
    couleur: "#fb8585",
    objectif: "Maîtriser le triangle du feu, les extincteurs, le SSI et le désenfumage. Partie la plus technique.",
    jours: [
      {
        jour: 8, label: "Lundi", theme: "🔥 Triangle du feu & Classes",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Triangle du feu & Classes", action: "showFicheDetail('triangle-feu')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "parcours", label: "Parcours Étape 6 : Triangle feu", action: "openStep('step-6')", emoji: "🎯" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM : Incendie", action: "startQuiz('theme','Incendie')", emoji: "❓" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : Triangle du feu & Classes", action: "showFicheDetail('triangle-feu')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 9, label: "Mardi", theme: "🔥 Extincteurs & Agents extincteurs",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Extincteurs & Agents", action: "showFicheDetail('extincteurs')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "parcours", label: "Parcours Étape 7 : Extincteurs", action: "openStep('step-7')", emoji: "🎯" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM : Extincteurs", action: "startQuiz('theme','Extincteurs')", emoji: "❓" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : Extincteurs & Agents", action: "showFicheDetail('extincteurs')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 10, label: "Mercredi", theme: "🔥 SSI — 1ère lecture & Composants",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : SSI — Système Sécurité Incendie", action: "showFicheDetail('ssi')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "fiche", label: "Fiche : SSI — Système Sécurité Incendie", action: "showFicheDetail('ssi')", emoji: "📖" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM : SSI", action: "startQuiz('theme','SSI')", emoji: "❓" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "parcours", label: "Parcours Étape 8 : SSI", action: "openStep('step-8')", emoji: "🎯" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : SSI — Système Sécurité Incendie", action: "showFicheDetail('ssi')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 11, label: "Jeudi", theme: "🔥 SSI (révision) + Désenfumage",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Désenfumage & Compartimentage", action: "showFicheDetail('desenfumage')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "parcours", label: "Parcours Étape 9 : Désenfumage", action: "openStep('step-9')", emoji: "🎯" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM : Désenfumage", action: "startQuiz('theme','Désenfumage')", emoji: "❓" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : SSI — Système Sécurité Incendie", action: "showFicheDetail('ssi')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 12, label: "Vendredi", theme: "🔥 Révision Incendie complète",
        blocs: [
          { heure: "08h00", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "11h40", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h45", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "12h10", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h15", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "12h40", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h45", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "13h10", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h40", duree: 25, type: "fiche", label: "Fiche : SSI — Système Sécurité Incendie", action: "showFicheDetail('ssi')", emoji: "📖" },
          { heure: "15h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h10", duree: 25, type: "fiche", label: "Fiche : Extincteurs & Agents", action: "showFicheDetail('extincteurs')", emoji: "📖" },
          { heure: "15h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h40", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
        ]
      },
      {
        jour: 13, label: "Samedi", theme: "🔄 Révision Blocs 1+2 — Légal + Incendie",
        blocs: [
          { heure: "08h00", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "11h40", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h45", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "12h10", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h15", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "12h40", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h45", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "13h10", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h40", duree: 25, type: "fiche", label: "Fiche : Triangle du feu & Classes", action: "showFicheDetail('triangle-feu')", emoji: "📖" },
          { heure: "15h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h10", duree: 25, type: "fiche", label: "Fiche : CNAPS & Carte professionnelle", action: "showFicheDetail('cnaps')", emoji: "📖" },
          { heure: "15h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h40", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h10", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h15", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 14, label: "Dimanche", theme: "🧘 Repos actif",
        blocs: [
          { heure: "08h00", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "16h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h05", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
        ]
      }
    ]
  },
  semaine3: {
    titre: "Semaine 3 — Opérationnel, Relationnel & Examens blancs",
    couleur: "#6ee7a8",
    objectif: "Finir le programme, révision totale et simulation d'examen. Tu arrives en confiance.",
    jours: [
      {
        jour: 15, label: "Lundi", theme: "🚶 Prise de service & Rondes",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Prise de service", action: "showFicheDetail('prise-service')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "fiche", label: "Fiche : Rondes de sécurité", action: "showFicheDetail('ronde')", emoji: "📖" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "parcours", label: "Parcours Étape 10 : Prise service", action: "openStep('step-10')", emoji: "🎯" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : Prise de service", action: "showFicheDetail('prise-service')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 16, label: "Mardi", theme: "🚶 Main courante & Rapports",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Main courante & Rapports", action: "showFicheDetail('main-courante')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "parcours", label: "Parcours Étape 11 : Rondes", action: "openStep('step-11')", emoji: "🎯" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "parcours", label: "Parcours Étape 12 : Main courante", action: "openStep('step-12')", emoji: "🎯" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : Main courante & Rapports", action: "showFicheDetail('main-courante')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 17, label: "Mercredi", theme: "🤝 Gestion de conflit & fin parcours",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Gestion de conflit", action: "showFicheDetail('conflit')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "parcours", label: "Parcours Étape 13 : Conflit", action: "openStep('step-13')", emoji: "🎯" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "quiz", label: "QCM : Relationnel", action: "startQuiz('theme','Relationnel')", emoji: "❓" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "fiche", label: "Fiche : Gestion de conflit", action: "showFicheDetail('conflit')", emoji: "📖" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "16h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h10", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
        ]
      },
      {
        jour: 18, label: "Jeudi", theme: "🔁 Révision programme complet",
        blocs: [
          { heure: "08h00", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "09h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h35", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "10h00", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h15", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h15", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "11h45", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h50", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "12h15", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h20", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "12h45", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h50", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "13h15", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h45", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "15h10", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h15", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "15h45", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h50", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "16h15", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h20", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
        ]
      },
      {
        jour: 19, label: "Vendredi", theme: "📝 Journée simulations d'examen",
        blocs: [
          { heure: "08h00", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "09h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h05", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "09h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h35", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "10h05", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h20", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h20", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "11h45", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h50", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "12h15", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h20", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "12h45", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h50", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "13h15", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h45", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "15h15", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h20", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "15h45", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h50", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "16h15", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h20", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
        ]
      },
      {
        jour: 20, label: "Samedi", theme: "⚡ Révision finale éclair",
        blocs: [
          { heure: "08h00", duree: 25, type: "fiche", label: "Fiche : Article 73 — Appréhension", action: "showFicheDetail('article-73')", emoji: "📖" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "fiche", label: "Fiche : SSI — Système Sécurité Incendie", action: "showFicheDetail('ssi')", emoji: "📖" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "09h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h35", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "10h00", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h15", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h15", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "11h40", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h45", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "12h10", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h15", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "12h40", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h45", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "13h10", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h40", duree: 30, type: "exam", label: "Examen blanc — 30 questions chrono", action: "startQuiz('exam')", emoji: "📝" },
          { heure: "15h10", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h15", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "15h40", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h45", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "16h10", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h15", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
        ]
      },
      {
        jour: 21, label: "Dimanche", theme: "✅ Veille d'examen — Confiance & sérénité",
        blocs: [
          { heure: "08h00", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "08h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "08h30", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "08h55", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h00", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "09h25", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "09h30", duree: 25, type: "quiz", label: "QCM Aléatoire — 20 questions", action: "startQuiz('random')", emoji: "🎲" },
          { heure: "09h55", duree: 15, type: "pause", label: "Pause longue", emoji: "🚶" },
          { heure: "10h10", duree: 60, type: "pause", label: "Déjeuner 🍽️ — recharge", emoji: "🍽️" },
          { heure: "11h10", duree: 25, type: "errors", label: "Réviser mes erreurs", action: "startErrorsMode()", emoji: "🔁" },
          { heure: "11h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "11h40", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "12h05", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h10", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "12h35", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "12h40", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "13h05", duree: 90, type: "pause", label: "Pause dîner + détente", emoji: "🍽️" },
          { heure: "14h35", duree: 25, type: "oral", label: "Questions Oral TFP", action: "startOral()", emoji: "🎤" },
          { heure: "15h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h05", duree: 25, type: "flashcard", label: "Flashcards — toutes catégories", action: "startFlashcards('Toutes', definitions)", emoji: "🃏" },
          { heure: "15h30", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "15h35", duree: 25, type: "srs", label: "Répétition espacée (SRS)", action: "startSRS()", emoji: "🧠" },
          { heure: "16h00", duree: 5, type: "pause", label: "Pause courte", emoji: "☕" },
          { heure: "16h05", duree: 25, type: "fiche", label: "Relis fiches clés : Art.73, SSI, CNAPS", action: "showFicheDetail('cnaps')", emoji: "📖" },
        ]
      }
    ]
  }
};

// ========== ÉTAT DU PLANNING ==========
const planningState = {
  startDate: null,         // Date ISO de début de révision (J1)
  completedBlocs: {},      // { "jour-X-bloc-Y": true }
  pomodoroActive: false,
  pomodoroSeconds: 25 * 60,
  pomodoroInterval: null,
  pomodoroType: 'work',    // 'work' | 'pause'
  pomodoroCustom: 25,
  totalWorkSeconds: 0,
  todayWorkSeconds: 0,
  lastWorkDate: null
};

// ========== PERSISTANCE ==========
function savePlanningState() {
  try {
    localStorage.setItem('tfp_planning', JSON.stringify({
      startDate: planningState.startDate,
      completedBlocs: planningState.completedBlocs,
      totalWorkSeconds: planningState.totalWorkSeconds,
      todayWorkSeconds: planningState.todayWorkSeconds,
      lastWorkDate: planningState.lastWorkDate
    }));
  } catch(e) {}
}

function loadPlanningState() {
  try {
    const raw = localStorage.getItem('tfp_planning');
    if (!raw) return;
    const data = JSON.parse(raw);
    planningState.startDate = data.startDate || null;
    planningState.completedBlocs = data.completedBlocs || {};
    planningState.totalWorkSeconds = data.totalWorkSeconds || 0;
    planningState.todayWorkSeconds = data.todayWorkSeconds || 0;
    planningState.lastWorkDate = data.lastWorkDate || null;

    // Reset today counter if new day
    const today = new Date().toDateString();
    if (planningState.lastWorkDate !== today) {
      planningState.todayWorkSeconds = 0;
      planningState.lastWorkDate = today;
      savePlanningState();
    }
  } catch(e) {}
}

// ========== CALCUL DU JOUR ACTUEL ==========
function getCurrentPlanningDay() {
  if (!planningState.startDate) return null;
  const start = new Date(planningState.startDate);
  const now = new Date();
  start.setHours(0,0,0,0);
  now.setHours(0,0,0,0);
  const diffMs = now - start;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1; // J1 = jour 0
  return Math.max(1, Math.min(21, diffDays));
}

function getAllDays() {
  return [
    ...planningData.semaine1.jours,
    ...planningData.semaine2.jours,
    ...planningData.semaine3.jours
  ];
}

function getDayData(jourNum) {
  return getAllDays().find(j => j.jour === jourNum);
}

function getSemaineForDay(jourNum) {
  if (jourNum <= 7) return planningData.semaine1;
  if (jourNum <= 14) return planningData.semaine2;
  return planningData.semaine3;
}

// ========== FORMATAGE TEMPS ==========
function formatSeconds(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function formatHours(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  if (h > 0) return `${h}h${String(m).padStart(2,'0')}`;
  return `${m}min`;
}

// ========== WIDGET POMODORO FLOTTANT ==========
function initPomodoroWidget() {
  if (document.getElementById('pomodoroWidget')) return;

  const widget = document.createElement('div');
  widget.id = 'pomodoroWidget';
  widget.innerHTML = `
    <div id="pomodoroHandle" title="Déplacer">⏱</div>
    <div id="pomodoroBody">
      <div id="pomodoroHeader">
        <div id="pomodoroTitle">Pomodoro</div>
        <div id="pomodoroStats">
          <span id="pomodoroTodayLabel">Aujourd'hui</span>
          <span id="pomodoroTodayTime">0min</span>
        </div>
        <button id="pomodoroClose" onclick="togglePomodoroWidget()" title="Réduire">−</button>
      </div>
      <div id="pomodoroDisplay">
        <div id="pomodoroCircle">
          <svg id="pomodoroSvg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6"/>
            <circle id="pomodoroArc" cx="50" cy="50" r="44" fill="none" stroke="#d9b98c" stroke-width="6"
              stroke-dasharray="276.46" stroke-dashoffset="0" stroke-linecap="round"
              transform="rotate(-90 50 50)"/>
          </svg>
          <div id="pomodoroTime">25:00</div>
          <div id="pomodoroTypeLabel">Travail</div>
        </div>
      </div>
      <div id="pomodoroControls">
        <button class="pomo-btn" id="pomodoroDec" onclick="changePomoDuration(-5)" title="-5 min">−5</button>
        <button class="pomo-btn pomo-main" id="pomodoroPlayBtn" onclick="togglePomodoro()">▶</button>
        <button class="pomo-btn" id="pomoReset" onclick="resetPomodoro()" title="Reset">↺</button>
        <button class="pomo-btn" id="pomoInc" onclick="changePomoDuration(5)" title="+5 min">+5</button>
      </div>
      <div id="pomodoroModes">
        <button class="pomo-mode-btn active" id="modeWork" onclick="setPomodoroMode('work')">Travail 25m</button>
        <button class="pomo-mode-btn" id="modePause" onclick="setPomodoroMode('pause')">Pause 5m</button>
        <button class="pomo-mode-btn" id="modeLong" onclick="setPomodoroMode('long')">Longue 15m</button>
      </div>
      <div id="pomodoroDayProgress">
        <div id="pdpLabel">Progression du jour</div>
        <div id="pdpBar"><div id="pdpFill"></div></div>
        <div id="pdpText">0 / 0 blocs</div>
      </div>
    </div>
  `;

  // Styles intégrés dans le widget
  const style = document.createElement('style');
  style.textContent = `
    #pomodoroWidget {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      font-family: 'Outfit', sans-serif;
      user-select: none;
    }

    #pomodoroHandle {
      display: none;
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 999px;
      width: 28px;
      height: 28px;
      text-align: center;
      line-height: 28px;
      font-size: 0.85rem;
      cursor: move;
      z-index: 10000;
    }

    #pomodoroWidget:hover #pomodoroHandle { display: block; }

    /* Collapsed state */
    #pomodoroWidget.collapsed #pomodoroBody { display: none; }
    #pomodoroWidget.collapsed {
      cursor: pointer;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: var(--text-dim);
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }
    #pomodoroWidget.collapsed::after {
      content: attr(data-time);
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      color: var(--gold);
    }

    #pomodoroBody {
      background: var(--surface);
      border: 1px solid var(--border-strong);
      border-radius: 16px;
      padding: 1.25rem;
      width: 220px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      transition: all 0.3s;
    }

    #pomodoroHeader {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    #pomodoroTitle {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      color: var(--text);
    }

    #pomodoroStats {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    #pomodoroTodayLabel {
      font-size: 0.55rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-faint);
    }

    #pomodoroTodayTime {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--gold);
    }

    #pomodoroClose {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text-faint);
      width: 22px;
      height: 22px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1rem;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    #pomodoroClose:hover { border-color: var(--gold); color: var(--gold); }

    #pomodoroDisplay {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }

    #pomodoroCircle {
      position: relative;
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #pomodoroSvg {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
    }

    #pomodoroTime {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      color: var(--text);
      position: relative;
      z-index: 2;
      line-height: 1;
    }

    #pomodoroTypeLabel {
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--text-faint);
      position: relative;
      z-index: 2;
      margin-top: 0.2rem;
    }

    #pomodoroControls {
      display: flex;
      gap: 0.4rem;
      justify-content: center;
      margin-bottom: 0.85rem;
    }

    .pomo-btn {
      background: var(--surface-hover);
      border: 1px solid var(--border);
      color: var(--text-dim);
      border-radius: 6px;
      padding: 0.4rem 0.6rem;
      font-size: 0.75rem;
      cursor: pointer;
      font-family: 'Syne', sans-serif;
      font-weight: 600;
      transition: all 0.2s;
      flex: 1;
    }

    .pomo-btn:hover { border-color: var(--gold); color: var(--gold); }

    .pomo-main {
      background: var(--gold);
      border-color: var(--gold);
      color: var(--bg);
      font-size: 1rem;
      flex: 1.5;
    }

    .pomo-main:hover {
      background: var(--text);
      border-color: var(--text);
      color: var(--bg);
    }

    .pomo-main.running {
      background: var(--error);
      border-color: var(--error);
    }

    #pomodoroModes {
      display: flex;
      gap: 0.35rem;
      margin-bottom: 0.85rem;
    }

    .pomo-mode-btn {
      flex: 1;
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text-faint);
      border-radius: 4px;
      padding: 0.3rem 0.2rem;
      font-size: 0.55rem;
      cursor: pointer;
      font-family: 'Outfit', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.2s;
      text-align: center;
    }

    .pomo-mode-btn:hover,
    .pomo-mode-btn.active {
      border-color: var(--gold);
      color: var(--gold);
      background: rgba(217, 185, 140, 0.07);
    }

    #pomodoroDayProgress {
      border-top: 1px solid var(--border);
      padding-top: 0.75rem;
    }

    #pdpLabel {
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--text-faint);
      margin-bottom: 0.4rem;
    }

    #pdpBar {
      height: 3px;
      background: var(--border);
      border-radius: 999px;
      overflow: hidden;
      margin-bottom: 0.3rem;
    }

    #pdpFill {
      height: 100%;
      background: var(--success);
      border-radius: 999px;
      transition: width 0.5s;
      width: 0%;
    }

    #pdpText {
      font-size: 0.65rem;
      color: var(--text-faint);
      text-align: center;
    }

    /* Animation quand pause finie */
    @keyframes pomoBlink {
      0%,100% { box-shadow: 0 8px 32px rgba(0,0,0,0.4); }
      50% { box-shadow: 0 0 0 6px rgba(110, 231, 168, 0.3), 0 8px 32px rgba(0,0,0,0.4); }
    }
    #pomodoroWidget.notify #pomodoroBody {
      animation: pomoBlink 0.8s ease 3;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(widget);

  // Click sur widget réduit → ouvrir
  widget.addEventListener('click', (e) => {
    if (widget.classList.contains('collapsed') && e.target === widget) {
      togglePomodoroWidget();
    }
  });

  // Drag support
  makeDraggable(widget, document.getElementById('pomodoroHandle'));

  updatePomodoroDisplay();
  updateDayProgress();
}

// ========== DRAG ==========
function makeDraggable(el, handle) {
  let offsetX, offsetY, dragging = false;
  handle.addEventListener('mousedown', (e) => {
    dragging = true;
    const rect = el.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    el.style.transition = 'none';
    e.preventDefault();
  });
  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    el.style.right = 'auto';
    el.style.bottom = 'auto';
    el.style.left = (e.clientX - offsetX) + 'px';
    el.style.top = (e.clientY - offsetY) + 'px';
  });
  document.addEventListener('mouseup', () => { dragging = false; });
}

// ========== TOGGLE WIDGET ==========
function togglePomodoroWidget() {
  const w = document.getElementById('pomodoroWidget');
  if (!w) return;
  w.classList.toggle('collapsed');
  updatePomodoroDisplay();
}

// ========== POMODORO CORE ==========
function togglePomodoro() {
  if (planningState.pomodoroActive) {
    pausePomodoro();
  } else {
    startPomodoro();
  }
}

function startPomodoro() {
  planningState.pomodoroActive = true;
  const btn = document.getElementById('pomodoroPlayBtn');
  if (btn) { btn.textContent = '⏸'; btn.classList.add('running'); }

  planningState.pomodoroInterval = setInterval(() => {
    planningState.pomodoroSeconds--;

    // Track work time
    if (planningState.pomodoroType === 'work') {
      planningState.totalWorkSeconds++;
      planningState.todayWorkSeconds++;
      planningState.lastWorkDate = new Date().toDateString();
      if (planningState.totalWorkSeconds % 30 === 0) savePlanningState();
    }

    updatePomodoroDisplay();

    if (planningState.pomodoroSeconds <= 0) {
      clearInterval(planningState.pomodoroInterval);
      planningState.pomodoroActive = false;
      onPomodoroEnd();
    }
  }, 1000);
}

function pausePomodoro() {
  clearInterval(planningState.pomodoroInterval);
  planningState.pomodoroActive = false;
  const btn = document.getElementById('pomodoroPlayBtn');
  if (btn) { btn.textContent = '▶'; btn.classList.remove('running'); }
}

function resetPomodoro() {
  pausePomodoro();
  const durations = { work: planningState.pomodoroCustom, pause: 5, long: 15 };
  planningState.pomodoroSeconds = (durations[planningState.pomodoroType] || 25) * 60;
  updatePomodoroDisplay();
}

function setPomodoroMode(mode) {
  pausePomodoro();
  planningState.pomodoroType = mode;
  const durations = { work: planningState.pomodoroCustom, pause: 5, long: 15 };
  planningState.pomodoroSeconds = (durations[mode] || 25) * 60;

  // Update mode button styles
  ['modeWork','modePause','modeLong'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  const modeMap = { work: 'modeWork', pause: 'modePause', long: 'modeLong' };
  const activeEl = document.getElementById(modeMap[mode]);
  if (activeEl) activeEl.classList.add('active');

  // Update SVG color
  const arc = document.getElementById('pomodoroArc');
  if (arc) {
    arc.style.stroke = mode === 'work' ? '#d9b98c' : mode === 'pause' ? '#6ee7a8' : '#fcc864';
  }
  const typeLabel = document.getElementById('pomodoroTypeLabel');
  if (typeLabel) {
    typeLabel.textContent = mode === 'work' ? 'Travail' : mode === 'pause' ? 'Pause' : 'Longue pause';
  }

  updatePomodoroDisplay();
}

function changePomoDuration(delta) {
  pausePomodoro();
  planningState.pomodoroCustom = Math.max(5, Math.min(60, planningState.pomodoroCustom + delta));
  if (planningState.pomodoroType === 'work') {
    planningState.pomodoroSeconds = planningState.pomodoroCustom * 60;
  }
  // Update button label
  const workBtn = document.getElementById('modeWork');
  if (workBtn) workBtn.textContent = `Travail ${planningState.pomodoroCustom}m`;
  updatePomodoroDisplay();
}

function onPomodoroEnd() {
  const btn = document.getElementById('pomodoroPlayBtn');
  if (btn) { btn.textContent = '▶'; btn.classList.remove('running'); }

  // Notify
  const widget = document.getElementById('pomodoroWidget');
  if (widget) {
    widget.classList.add('notify');
    setTimeout(() => widget.classList.remove('notify'), 3000);
  }

  // Sound notification
  try {
    if (typeof state !== 'undefined' && state.soundEnabled) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [523, 659, 784, 1047].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = freq;
        osc.type = 'sine';
        const t = ctx.currentTime + i * 0.15;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.2, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        osc.connect(gain).connect(ctx.destination);
        osc.start(t); osc.stop(t + 0.35);
      });
    }
  } catch(e) {}

  // Auto switch to pause
  if (planningState.pomodoroType === 'work') {
    setPomodoroMode('pause');
  } else {
    setPomodoroMode('work');
  }

  savePlanningState();
  updateDayProgress();
}

function updatePomodoroDisplay() {
  const timeEl = document.getElementById('pomodoroTime');
  const arcEl = document.getElementById('pomodoroArc');
  const todayEl = document.getElementById('pomodoroTodayTime');
  const widget = document.getElementById('pomodoroWidget');

  if (!timeEl) return;

  const timeStr = formatSeconds(planningState.pomodoroSeconds);
  timeEl.textContent = timeStr;

  if (widget && widget.classList.contains('collapsed')) {
    widget.setAttribute('data-time', timeStr);
  }

  // Arc progress
  if (arcEl) {
    const durations = { work: planningState.pomodoroCustom * 60, pause: 300, long: 900 };
    const total = durations[planningState.pomodoroType] || 1500;
    const progress = planningState.pomodoroSeconds / total;
    const circumference = 276.46;
    arcEl.style.strokeDashoffset = circumference * (1 - progress);
  }

  if (todayEl) {
    todayEl.textContent = formatHours(planningState.todayWorkSeconds);
  }
}

// ========== PROGRESSION DU JOUR ==========
function updateDayProgress() {
  const dayNum = getCurrentPlanningDay();
  const textEl = document.getElementById('pdpText');
  const fillEl = document.getElementById('pdpFill');

  if (!textEl || !fillEl) return;

  if (!planningState.startDate || !dayNum) {
    textEl.textContent = 'Démarre ton planning';
    fillEl.style.width = '0%';
    return;
  }

  const dayData = getDayData(dayNum);
  if (!dayData) return;

  const workBlocs = dayData.blocs.filter(b => b.type !== 'pause');
  const completed = workBlocs.filter((b, i) => planningState.completedBlocs[`jour-${dayNum}-bloc-${i}`]).length;
  const pct = workBlocs.length > 0 ? Math.round((completed / workBlocs.length) * 100) : 0;

  fillEl.style.width = pct + '%';
  textEl.textContent = `${completed} / ${workBlocs.length} blocs · J${dayNum}`;
}

function markBlocDone(jourNum, blocIdx) {
  planningState.completedBlocs[`jour-${jourNum}-bloc-${blocIdx}`] = true;
  savePlanningState();
  updateDayProgress();
  // Refresh planning screen if open
  if (document.getElementById('planningScreen') && document.getElementById('planningScreen').style.display !== 'none') {
    renderPlanningDay(jourNum);
  }
}

// ========== ÉCRAN PLANNING ==========
function showPlanning() {
  if (!document.getElementById('planningScreen')) {
    createPlanningScreen();
  }

  loadPlanningState();

  if (!planningState.startDate) {
    showPlanningSetup();
  } else {
    const dayNum = getCurrentPlanningDay();
    showPlanningDay(dayNum || 1);
  }
}

function createPlanningScreen() {
  const screen = document.createElement('section');
  screen.id = 'planningScreen';
  screen.style.cssText = 'display:none; animation: fadeIn 0.4s ease;';
  screen.innerHTML = `<div id="planningContent"></div>`;
  document.querySelector('main').appendChild(screen);
}

function showPlanningSetup() {
  const screens = ['homeScreen','themesScreen','fichesScreen','ficheDetailScreen','quizScreen','resultsScreen','oralScreen','parcoursScreen','stepDetailScreen','defsScreen','flashcardScreen','flashcardDoneScreen','planningScreen'];
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('active'); el.style.display = ''; }
  });
  const ps = document.getElementById('planningScreen');
  ps.style.display = 'block';

  document.getElementById('planningContent').innerHTML = `
    <div style="max-width:600px; margin:0 auto; text-align:center; padding: 4rem 0;">
      <div style="font-size:3rem; margin-bottom:1.5rem;">📅</div>
      <h2 style="font-family:'Syne',sans-serif; font-weight:500; font-size:2rem; letter-spacing:-0.02em; margin-bottom:1rem;">
        Ton planning <em style="color:var(--gold); font-weight:300;">3 semaines</em>
      </h2>
      <p style="color:var(--text-dim); font-size:1rem; line-height:1.7; margin-bottom:2.5rem;">
        Lundi au dimanche, à fond. Chaque jour est structuré en blocs Pomodoro de 25 minutes.<br>
        <strong style="color:var(--text);">Quand as-tu commencé à réviser ?</strong>
      </p>
      <div style="background:var(--surface); border:1px solid var(--border); border-radius:8px; padding:2rem; margin-bottom:2rem;">
        <label style="display:block; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.2em; color:var(--text-faint); margin-bottom:0.75rem;">Date de début (Jour 1)</label>
        <input type="date" id="planningStartDate"
          value="${new Date().toISOString().split('T')[0]}"
          style="background:var(--bg); border:1px solid var(--border-strong); color:var(--text); padding:0.75rem 1rem; border-radius:6px; font-family:'Outfit',sans-serif; font-size:1rem; width:100%; text-align:center; cursor:pointer;"
        />
      </div>
      <button onclick="startPlanning()" style="background:var(--gold); border:none; color:var(--bg); font-family:'Syne',sans-serif; font-weight:700; font-size:1rem; padding:1rem 2.5rem; border-radius:6px; cursor:pointer; letter-spacing:0.05em; width:100%;">
        Démarrer mon planning →
      </button>
      <div style="margin-top:1.5rem;">
        <button class="btn btn-ghost" onclick="showHome()">← Retour</button>
      </div>
    </div>
  `;
}

function startPlanning() {
  const input = document.getElementById('planningStartDate');
  if (!input || !input.value) return;
  planningState.startDate = input.value;
  savePlanningState();
  const dayNum = getCurrentPlanningDay();
  showPlanningDay(dayNum || 1);
}

function showPlanningDay(jourNum) {
  const screens = ['homeScreen','themesScreen','fichesScreen','ficheDetailScreen','quizScreen','resultsScreen','oralScreen','parcoursScreen','stepDetailScreen','defsScreen','flashcardScreen','flashcardDoneScreen','planningScreen'];
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('active'); el.style.display = ''; }
  });
  const ps = document.getElementById('planningScreen');
  ps.style.display = 'block';

  renderPlanningDay(jourNum);
}

function renderPlanningDay(jourNum) {
  const container = document.getElementById('planningContent');
  const dayData = getDayData(jourNum);
  const semaine = getSemaineForDay(jourNum);
  const currentDay = getCurrentPlanningDay();
  const isToday = jourNum === currentDay;
  const isPast = jourNum < (currentDay || 999);

  const workBlocs = dayData.blocs.filter(b => b.type !== 'pause');
  const completed = workBlocs.filter((_, i) => {
    // Map work bloc index back to full bloc index
    let wi = -1;
    dayData.blocs.forEach((b, idx) => {
      if (b.type !== 'pause') { wi++; if (wi === i) { /* idx is bloc index */ } }
    });
    return planningState.completedBlocs[`jour-${jourNum}-bloc-${i}`];
  }).length;

  const totalCompleted = Object.keys(planningState.completedBlocs).filter(k => k.startsWith('jour-')).length;

  // Week navigation
  const weekStart = jourNum <= 7 ? 1 : jourNum <= 14 ? 8 : 15;
  const weekEnd = jourNum <= 7 ? 7 : jourNum <= 14 ? 14 : 21;

  let weekDaysHTML = '';
  for (let d = weekStart; d <= weekEnd; d++) {
    const dd = getDayData(d);
    const isActive = d === jourNum;
    const isCur = d === currentDay;
    const isDone = d < (currentDay || 999);
    weekDaysHTML += `
      <button onclick="renderPlanningDay(${d})"
        style="
          flex:1; background:${isActive ? 'var(--gold)' : isDone ? 'rgba(110,231,168,0.1)' : 'var(--surface)'};
          border:1px solid ${isActive ? 'var(--gold)' : isCur ? 'var(--gold)' : 'var(--border)'};
          color:${isActive ? 'var(--bg)' : 'var(--text-dim)'};
          border-radius:6px; padding:0.5rem 0.25rem; cursor:pointer;
          font-size:0.65rem; font-family:'Syne',sans-serif; font-weight:600;
          text-transform:uppercase; letter-spacing:0.05em; text-align:center;
          ${isCur && !isActive ? 'box-shadow:0 0 0 2px var(--gold)' : ''}
        ">
        J${d}${isDone ? ' ✓' : isCur ? ' ←' : ''}
      </button>
    `;
  }

  let blocsHTML = '';
  let workBlocCounter = 0;
  dayData.blocs.forEach((bloc, idx) => {
    const isWork = bloc.type !== 'pause';
    const workIdx = isWork ? workBlocCounter++ : -1;
    const isDone = isWork && planningState.completedBlocs[`jour-${jourNum}-bloc-${workIdx}`];

    const typeColors = {
      fiche: '#d9b98c', quiz: '#fcc864', parcours: '#fb8585',
      srs: '#a78bfa', errors: '#f97316', flashcard: '#38bdf8',
      oral: '#34d399', exam: '#ec4899', pause: '#4a4a4a'
    };
    const color = typeColors[bloc.type] || '#888';

    blocsHTML += `
      <div style="
        display:flex; align-items:flex-start; gap:1rem; padding:1rem;
        background:${isDone ? 'rgba(110,231,168,0.06)' : 'var(--surface)'};
        border:1px solid ${isDone ? 'rgba(110,231,168,0.3)' : 'var(--border)'};
        border-left:3px solid ${isDone ? 'var(--success)' : bloc.type === 'pause' ? 'var(--border)' : color};
        border-radius:6px; margin-bottom:0.5rem;
        opacity:${bloc.type === 'pause' ? '0.5' : '1'};
        transition: all 0.2s;
      ">
        <div style="font-size:1.5rem; flex-shrink:0; line-height:1; margin-top:0.1rem;">${bloc.emoji}</div>
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
            <div>
              <span style="font-size:0.65rem; text-transform:uppercase; letter-spacing:0.15em; color:${color}; font-family:'Syne',sans-serif; font-weight:600;">${bloc.heure}</span>
              ${bloc.duree > 5 ? `<span style="font-size:0.6rem; color:var(--text-faint); margin-left:0.4rem;">${bloc.duree}min</span>` : ''}
            </div>
            ${isDone ? '<span style="color:var(--success); font-size:0.8rem; flex-shrink:0;">✓ Fait</span>' : ''}
          </div>
          <div style="font-size:0.9rem; color:var(--text); margin-top:0.25rem; font-weight:400;">${bloc.label}</div>
        </div>
        ${isWork && !bloc.type.includes('pause') ? `
          <div style="display:flex; flex-direction:column; gap:0.35rem; flex-shrink:0;">
            ${bloc.action ? `<button
              onclick="${bloc.action}"
              style="background:${color}; border:none; color:var(--bg); border-radius:4px; padding:0.35rem 0.7rem; font-size:0.65rem; font-family:'Syne',sans-serif; font-weight:700; cursor:pointer; white-space:nowrap; letter-spacing:0.05em;">
              Ouvrir →
            </button>` : ''}
            <button
              onclick="markBlocDone(${jourNum}, ${workIdx})"
              ${isDone ? 'disabled' : ''}
              style="background:transparent; border:1px solid ${isDone ? 'var(--success)' : 'var(--border)'}; color:${isDone ? 'var(--success)' : 'var(--text-faint)'}; border-radius:4px; padding:0.35rem 0.5rem; font-size:0.65rem; cursor:pointer; font-family:'Outfit',sans-serif;">
              ${isDone ? '✓' : '+ Fait'}
            </button>
          </div>
        ` : ''}
      </div>
    `;
  });

  const pct = Math.round((totalCompleted / (21 * 8)) * 100); // Approx

  container.innerHTML = `
    <div style="max-width:760px; margin:0 auto;">

      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:2rem; padding-bottom:1.5rem; border-bottom:1px solid var(--border);">
        <div>
          <div style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.25em; color:${semaine.couleur}; font-family:'Syne',sans-serif; margin-bottom:0.5rem;">${semaine.titre}</div>
          <h2 style="font-family:'Syne',sans-serif; font-weight:500; font-size:clamp(1.5rem,4vw,2rem); letter-spacing:-0.02em; margin-bottom:0.25rem;">
            Jour ${jourNum} — ${dayData.label}
            ${isToday ? '<span style="background:var(--gold);color:var(--bg);font-size:0.65rem;padding:0.2rem 0.6rem;border-radius:999px;margin-left:0.75rem;font-weight:700;vertical-align:middle;">AUJOURD\'HUI</span>' : ''}
          </h2>
          <div style="font-size:0.9rem; color:var(--text-dim);">${dayData.theme}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-family:'Syne',sans-serif; font-weight:700; font-size:2rem; color:var(--gold); line-height:1;">${formatHours(planningState.todayWorkSeconds)}</div>
          <div style="font-size:0.65rem; text-transform:uppercase; letter-spacing:0.15em; color:var(--text-faint);">travaillés aujourd'hui</div>
        </div>
      </div>

      <!-- Objectif semaine -->
      <div style="background:var(--surface); border:1px solid var(--border); border-left:3px solid ${semaine.couleur}; border-radius:6px; padding:1rem 1.25rem; margin-bottom:1.5rem; font-size:0.875rem; color:var(--text-dim); line-height:1.6;">
        🎯 <strong style="color:var(--text);">Objectif semaine :</strong> ${semaine.objectif}
      </div>

      <!-- Navigation jours de la semaine -->
      <div style="display:flex; gap:0.4rem; margin-bottom:1.5rem; flex-wrap:wrap;">
        ${weekDaysHTML}
      </div>

      <!-- Blocs du jour -->
      <div style="margin-bottom:2rem;">
        <div style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.25em; color:var(--text-faint); margin-bottom:1rem; padding-bottom:0.5rem; border-bottom:1px solid var(--border);">
          Programme du jour · ${workBlocs.length} blocs de travail
        </div>
        ${blocsHTML}
      </div>

      <!-- Navigation globale -->
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; padding-top:1.5rem; border-top:1px solid var(--border);">
        <div style="display:flex; gap:0.75rem;">
          ${jourNum > 1 ? `<button class="btn btn-ghost" onclick="renderPlanningDay(${jourNum-1})">← Jour ${jourNum-1}</button>` : '<div></div>'}
        </div>
        <button class="btn btn-ghost" onclick="showHome()">Accueil</button>
        ${jourNum < 21 ? `<button class="btn" onclick="renderPlanningDay(${jourNum+1})">Jour ${jourNum+1} →</button>` : '<div></div>'}
      </div>
      
      <div style="margin-top:1rem; text-align:center;">
        <button onclick="resetPlanningConfirm()" style="background:transparent;border:none;color:var(--text-faint);font-size:0.7rem;cursor:pointer;text-decoration:underline;">
          Recommencer le planning depuis une nouvelle date
        </button>
      </div>
    </div>
  `;
}

function resetPlanningConfirm() {
  if (confirm('Recommencer le planning depuis une nouvelle date ? Tes blocs cochés seront conservés.')) {
    planningState.startDate = null;
    savePlanningState();
    showPlanningSetup();
  }
}

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', () => {
  loadPlanningState();
  initPomodoroWidget();
  updateDayProgress();
});

// Si DOM déjà chargé
if (document.readyState !== 'loading') {
  loadPlanningState();
  initPomodoroWidget();
  updateDayProgress();
}
