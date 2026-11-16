<template>
  <div class="min-h-screen flex flex-col font-sans bg-[#f8fafc]">
    <Navbar />

    <!-- ================= HÉRO FORMATION ================= -->
    <main class="relative bg-white px-6 md:px-20 py-16 border-b border-gray-200">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <!-- Texte à gauche -->
        <div>
          <span class="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
            <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Cursus certifiant d'excellence
          </span>
          <h1 class="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
            Formation aux<br>Fondamentaux du Web<br>& Ingénierie Logicielle
          </h1>
          <p class="text-gray-500 mb-8 max-w-lg leading-relaxed text-sm">
            Une immersion intensive de haut niveau axée sur la pratique rigoureuse et les standards industriels. Structurée en deux cycles complémentaires d'autonomie numérique : <span class="font-bold text-gray-700">WEB 1 (Front-End & UI)</span> et <span class="font-bold text-gray-700">WEB 2 (Back-End & Architecture Données)</span>.
          </p>

          <!-- Petites cartes de stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="border border-gray-200 rounded-lg p-3 text-center bg-white shadow-sm">
              <div class="text-blue-600 flex justify-center mb-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
              <p class="font-bold text-xs text-gray-900">100% Pratique</p>
              <p class="text-[10px] text-gray-500 mt-0.5">Projets réels déployés</p>
            </div>
            <div class="border border-gray-200 rounded-lg p-3 text-center bg-white shadow-sm">
              <div class="text-blue-600 flex justify-center mb-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div>
              <p class="font-bold text-xs text-gray-900">Mentorat Dédié</p>
              <p class="text-[10px] text-gray-500 mt-0.5">Code reviews 1-to-1</p>
            </div>
            <div class="border border-gray-200 rounded-lg p-3 text-center bg-white shadow-sm">
              <div class="text-blue-600 flex justify-center mb-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
              <p class="font-bold text-xs text-gray-900">Certification</p>
              <p class="text-[10px] text-gray-500 mt-0.5">Attestation officielle</p>
            </div>
            <div class="border border-gray-200 rounded-lg p-3 text-center bg-white shadow-sm">
              <div class="text-blue-600 flex justify-center mb-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
              <p class="font-bold text-xs text-gray-900">Cohortes Rares</p>
              <p class="text-[10px] text-gray-500 mt-0.5">15 places maximum</p>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap items-center gap-6">
            <a href="#contact-formation" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-bold transition text-sm shadow-lg shadow-blue-500/30">
              S'inscrire à la prochaine session →
            </a>
            <a href="#" class="text-sm font-semibold text-gray-700 flex items-center gap-2 hover:text-blue-600 transition">
              <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Télécharger le syllabus PDF
            </a>
          </div>
        </div>

        <!-- Image et stats à droite -->
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Formation" class="rounded-xl shadow-lg w-full h-[450px] object-cover" />
          
          <!-- Carte de stats superposée -->
          <div class="absolute -bottom-10 left-6 right-6 bg-afa-dark/95 backdrop-blur-sm text-white rounded-lg p-6 shadow-2xl border border-white/10">
            <div class="flex justify-between items-center text-center">
              <div><p class="text-xl font-bold">14 Semaines</p><p class="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Durée totale</p></div>
              <div class="w-px h-8 bg-white/20"></div>
              <div><p class="text-xl font-bold">+120h</p><p class="text-[10px] text-gray-400 uppercase tracking-wider mt-1">De pratique</p></div>
              <div class="w-px h-8 bg-white/20"></div>
              <div><p class="text-xl font-bold">100%</p><p class="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Projets réels</p></div>
              <div class="w-px h-8 bg-white/20"></div>
              <div><p class="text-xl font-bold">1 850€</p><p class="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Tarif total</p></div>
            </div>
            <div class="flex justify-between items-center border-t border-white/10 mt-4 pt-3 text-[10px] text-gray-400">
              <span>Dernière mise à jour: 24 Mai 2026</span>
              <span>Certificat inclus: Oui, attestation de réussite</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- ================= DEUX CYCLES ================= -->
    <section class="py-24 px-6 md:px-20 bg-[#f8fafc]">
      <div class="max-w-7xl mx-auto text-center mb-16">
        <span class="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">Architecture du parcours pédagogique</span>
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Deux Cycles Complémentaires pour<br>une Maîtrise Totale</h2>
        <p class="text-gray-500 max-w-2xl mx-auto text-sm">De la première ligne de code jusqu'à la mise en production, une formation vous conduit pas à pas vers un niveau d'ingénieur logiciel junior autonome.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <!-- Cycle 1 -->
        <div class="bg-white rounded-xl border border-gray-200 p-8 relative overflow-hidden flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <span class="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">Premier Cycle</span>
            <span class="text-4xl font-black text-blue-100">01</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">WEB 1 : Client-Side & Expérience Utilisateur</h3>
          <p class="text-sm text-gray-500 mb-6 flex-grow">L'art de forger des interfaces modernes, fluides, esthétiques et adaptées à tous les terminaux. Maîtrisez le trio incontournable du web standard.</p>
          
          <!-- Badges technos -->
          <div class="grid grid-cols-3 gap-2 mb-6">
            <div class="bg-gray-50 border border-gray-100 rounded p-2 text-center"><p class="font-bold text-xs text-gray-800">HTML5</p><p class="text-[9px] text-gray-400">Sémantique</p></div>
            <div class="bg-gray-50 border border-gray-100 rounded p-2 text-center"><p class="font-bold text-xs text-gray-800">CSS3</p><p class="text-[9px] text-gray-400">Flex & Grid</p></div>
            <div class="bg-gray-50 border border-gray-100 rounded p-2 text-center"><p class="font-bold text-xs text-gray-800">JS Moderne</p><p class="text-[9px] text-gray-400">ES6+ & DOM</p></div>
          </div>

          <ul class="text-sm text-gray-600 space-y-3 mb-8">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5">✓</span> Construction de layouts responsives impeccables (Mobile-First)</li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5">✓</span> Accessibilité Web (WCAG) et optimisation pour les moteurs de recherche</li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5">✓</span> Consommation d'APIs REST et dynamisation interactive</li>
          </ul>
          <a href="#module-web-1" class="text-sm font-bold text-blue-600 flex items-center gap-2 hover:text-blue-700 transition mt-auto">Explorer le détail de WEB 1 →</a>
        </div>

        <!-- Cycle 2 -->
        <div class="bg-white rounded-xl border border-gray-200 p-8 relative overflow-hidden flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <span class="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">Second Cycle</span>
            <span class="text-4xl font-black text-blue-100">02</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">WEB 2 : Architecture Serveur & Données</h3>
          <p class="text-sm text-gray-500 mb-6 flex-grow">Concevez le cerveau de vos applications. Apprenez à manipuler les bases de données relationnelles, sécuriser les flux de données et bâtir une architecture back-end robuste.</p>
          
          <!-- Badges technos -->
          <div class="grid grid-cols-3 gap-2 mb-6">
            <div class="bg-gray-50 border border-gray-100 rounded p-2 text-center"><p class="font-bold text-xs text-gray-800">PHP 8+</p><p class="text-[9px] text-gray-400">POO & MVC</p></div>
            <div class="bg-gray-50 border border-gray-100 rounded p-2 text-center"><p class="font-bold text-xs text-gray-800">SQL</p><p class="text-[9px] text-gray-400">Modélisation</p></div>
            <div class="bg-gray-50 border border-gray-100 rounded p-2 text-center"><p class="font-bold text-xs text-gray-800">Sécurité</p><p class="text-[9px] text-gray-400">Auth & RGPD</p></div>
          </div>

          <ul class="text-sm text-gray-600 space-y-3 mb-8">
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5">✓</span> Modélisation Mentor / Schémas de bases de données relationnelles</li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5">✓</span> Implémentation de l'authentification et des sessions utilisateurs</li>
            <li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5">✓</span> Blindage contre les attaques courantes (Injection SQL, XSS, CSRF)</li>
          </ul>
          <a href="#module-web-2" class="text-sm font-bold text-blue-600 flex items-center gap-2 hover:text-blue-700 transition mt-auto">Explorer le détail de WEB 2 →</a>
        </div>
      </div>
    </section>

    <!-- ================= MODULE WEB 1 ================= -->
    <section id="module-web-1" class="py-24 px-6 md:px-20 bg-[#f1f5f9] border-t border-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span class="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">Curriculum Précis - Premier Module</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Module WEB 1 : Front-End Engineering &<br>Expérience Client</h2>
            <p class="text-gray-500 max-w-3xl text-sm">Objectif opérationnel : Maîtriser la création d'interfaces ergonomiques, conformes aux standards W3C, parfaitement adaptées aux smartphones et tablettes, dynamisées par la puissance d'ES6+.</p>
          </div>
          <div class="flex gap-4 text-xs font-semibold text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-200">
            <span class="flex items-center gap-1"><svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 5 Semaines</span>
            <span class="flex items-center gap-1"><svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 3 Semaines / Semestre</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Carte HTML -->
          <div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
            <div class="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-4">
              <span class="text-lg">{ }</span> HTML5 Moderne
            </div>
            <p class="text-xs text-gray-500 mb-6 flex-grow">Création de structures de l'information claires et universelles.</p>
            <ul class="text-xs text-gray-600 space-y-2 mb-6">
              <li class="flex gap-2"><span class="text-gray-400">•</span> Balisage sémantique rigoureux (header, main, footer).</li>
              <li class="flex gap-2"><span class="text-gray-400">•</span> Optimisation SEO technique et balises OpenGraph.</li>
              <li class="flex gap-2"><span class="text-gray-400">•</span> Formulaires complexes avec validation native HTML5.</li>
              <li class="flex gap-2"><span class="text-gray-400">•</span> Standards et Accessibilité ARIA (pour tous les publics).</li>
            </ul>
            <div class="border-t border-gray-100 pt-3 mt-auto">
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Compétences Clés</p>
              <p class="text-xs text-gray-600">Sémantique & SEO propre et standardisé</p>
            </div>
          </div>

          <!-- Carte CSS -->
          <div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
            <div class="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-4">
              <span class="text-lg">#</span> CSS3 & Systèmes de Design
            </div>
            <p class="text-xs text-gray-500 mb-6 flex-grow">L'art de donner vie et style au contenu à travers une mise en page fluide et harmonieuse.</p>
            <ul class="text-xs text-gray-600 space-y-2 mb-6">
              <li class="flex gap-2"><span class="text-gray-400">•</span> Mise en page puissante avec Flexbox et CSS Grid 2D.</li>
              <li class="flex gap-2"><span class="text-gray-400">•</span> Théorie Responsive Mobile-First via Media Queries.</li>
              <li class="flex gap-2"><span class="text-gray-400">•</span> Variables CSS custom, méthodologie BEM & Tailwind.</li>
              <li class="flex gap-2"><span class="text-gray-400">•</span> Transitions fluides, animations 60 FPS et micro-interactions.</li>
            </ul>
            <div class="border-t border-gray-100 pt-3 mt-auto">
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Compétences Clés</p>
              <p class="text-xs text-gray-600">Design System & expérience interactive</p>
            </div>
          </div>

          <!-- Carte JS -->
          <div class="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
            <div class="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-4">
              <span class="text-lg">{}</span> JavaScript ES6+ Moderne
            </div>
            <p class="text-xs text-gray-500 mb-6 flex-grow">Le moteur d'interactivité et de logique dynamique côté client.</p>
            <ul class="text-xs text-gray-600 space-y-2 mb-6">
              <li class="flex gap-2"><span class="text-gray-400">•</span> Syntaxe ES6+ : destructuring, arrow functions, spread.</li>
              <li class="flex gap-2"><span class="text-gray-400">•</span> Manipulation dynamique du DOM (sélecteurs, gestion des événements).</li>
              <li class="flex gap-2"><span class="text-gray-400">•</span> Asynchronisme maîtrisé : fetch API, Promises et Async/Await.</li>
              <li class="flex gap-2"><span class="text-gray-400">•</span> Persistance des données via Web Storage (localStorage).</li>
            </ul>
            <div class="border-t border-gray-100 pt-3 mt-auto">
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Compétences Clés</p>
              <p class="text-xs text-gray-600">Architecture composant réactive et fluide</p>
            </div>
          </div>
        </div>

        <!-- Bandeau Projet Web 1 -->
        <div class="mt-8 bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="bg-blue-600 p-3 rounded-lg text-white"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></div>
            <div>
              <p class="font-bold text-gray-900 text-sm">Déploiement d'un Portail Interactif B2B Complet</p>
              <p class="text-xs text-gray-500 mt-1">Intégration d'une interface SPA avec catalogue dynamique, formulaires de contact et déploiement en production via GitHub Pages / Vercel.</p>
            </div>
          </div>
          <button class="bg-gray-100 text-gray-700 font-bold px-6 py-2.5 rounded-md text-xs hover:bg-gray-200 transition shrink-0">Lancer l'aperçu</button>
        </div>
      </div>
    </section>

    <!-- ================= MODULE WEB 2 ================= -->
    <section id="module-web-2" class="py-24 px-6 md:px-20 bg-[#f8fafc] border-t border-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span class="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">Curriculum Précis - Second Module</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Module WEB 2 : Architecture Backend, Logique<br>& Données</h2>
            <p class="text-gray-500 max-w-3xl text-sm">Objectif opérationnel : Maîtriser le cycle de vie des données, implémenter une logique métier robuste avec PHP, architecturer des bases relationnelles scalables et sécuriser les interactions contre la cyber-malveillance.</p>
          </div>
          <div class="flex gap-4 text-xs font-semibold text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-200">
            <span class="flex items-center gap-1"><svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 6 Semaines</span>
            <span class="flex items-center gap-1"><svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 6 Semaines / Semestre</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Carte Backend 1 -->
          <div class="bg-white border border-gray-200 rounded-xl p-8">
            <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2"><span class="text-blue-600 text-lg">{ }</span> Ingénierie PHP & Modèle MVC</h3>
            <p class="text-xs text-gray-500 mb-6">Dépassez le simple script procédural pour aborder les canons du génie logiciel professionnel.</p>
            <div class="grid grid-cols-2 gap-x-6 gap-y-6 text-xs text-gray-600">
              <div>
                <p class="font-bold text-gray-900 mb-1 text-sm">Architecture MVC</p>
                <p>Compréhension du cycle requête-réponse. Contrôleurs pour le rendu et la logique.</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 mb-1 text-sm">Programmation OO</p>
                <p>Classes, objets, héritage, polymorphisme et encapsulation pour un PHP structuré.</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 mb-1 text-sm">Sessions & Auth</p>
                <p>Gestion cryptographique des mots de passe (bcrypt) et persistance des sessions.</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 mb-1 text-sm">Défense en Profondeur</p>
                <p>Neutralisation des failles majeures (XSS, CSRF, SQL Injection).</p>
              </div>
            </div>
            <div class="border-t border-gray-100 pt-4 mt-6 text-[10px] text-gray-500 font-semibold flex items-center gap-2">
              <span class="text-blue-500">●</span> Notions de sécurité informatique appliquées à chaque ligne de code
            </div>
          </div>

          <!-- Carte Backend 2 -->
          <div class="bg-white border border-gray-200 rounded-xl p-8">
            <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2"><span class="text-blue-600 text-lg">#</span> SQL Avancé & Modélisation Relationnelle</h3>
            <p class="text-xs text-gray-500 mb-6">Concevoir le meilleur entrepôt de données d'entreprise avec rigueur algorithmique et performance.</p>
            <div class="grid grid-cols-2 gap-x-6 gap-y-6 text-xs text-gray-600">
              <div>
                <p class="font-bold text-gray-900 mb-1 text-sm">Conception Relationnelle</p>
                <p>Entité-Association (MCD/MLD) et normalisation (1NF, 2NF, 3NF).</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 mb-1 text-sm">Requêtes Complexes</p>
                <p>Jointures, sous-requêtes, agrégations GROUP BY, vues et procédures stockées.</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 mb-1 text-sm">PDO & Transactions</p>
                <p>Abstraction d'accès aux données et gestion de l'intégrité (Commit / Rollback).</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 mb-1 text-sm">Performance & Index</p>
                <p>Indexation stratégique et optimisation des requêtes (EXPLAIN).</p>
              </div>
            </div>
            <div class="border-t border-gray-100 pt-4 mt-6 text-[10px] text-gray-500 font-semibold flex items-center gap-2">
              <span class="text-blue-500">●</span> Requêtes exécutées en moins de 10ms sur des milliers d'enregistrements
            </div>
          </div>
        </div>

        <!-- Bandeau Projet Web 2 -->
        <div class="mt-8 bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="bg-blue-600 p-3 rounded-lg text-white"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg></div>
            <div>
              <p class="font-bold text-gray-900 text-sm">Projet de fin de cycle WEB 2 :</p>
              <p class="text-xs text-gray-500 mt-1">Plateforme Web Sécurisée de Gestion Opérationnelle (ERP Light)<br>CRUD complet (utilisateurs, stocks, commandes) avec authentification et tableaux de bord.</p>
            </div>
          </div>
          <button class="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-md text-xs hover:bg-blue-700 transition shrink-0">Lancer l'aperçu</button>
        </div>
      </div>
    </section>

    <!-- ================= LA MÉTHODE AFA ================= -->
    <section class="py-24 px-6 md:px-20 bg-white">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Image gauche -->
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Méthode" class="rounded-xl w-full h-[500px] object-cover" />
          <!-- Badge Taux de réussite -->
          <div class="absolute bottom-6 left-6 bg-white rounded-lg p-5 shadow-2xl flex items-center gap-4 border border-gray-100">
            <div class="bg-blue-50 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            </div>
            <div>
              <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Taux d'insertion</p>
              <p class="text-2xl font-black text-gray-900">92%</p>
            </div>
          </div>
        </div>

        <!-- Texte droite -->
        <div>
          <span class="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">L'ADN Pédagogique</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">La Méthode AFA : Du Code, Rien Que du Code Utile</h2>
          <p class="text-gray-500 mb-8 max-w-lg">Notre programme est une immersion totale dans l'ingénierie. Ici, la théorie n'est là que pour servir la pratique.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-start gap-3">
              <div class="text-blue-600 mt-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
              <div><p class="font-bold text-gray-900 text-sm mb-1">80% Pratique & Live Coding</p><p class="text-xs text-gray-500">Des exercices réels, des projets, pas de slides sans code.</p></div>
            </div>
            <div class="flex items-start gap-3">
              <div class="text-blue-600 mt-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
              <div><p class="font-bold text-gray-900 text-sm mb-1">Revues de Code Rigoureuses</p><p class="text-xs text-gray-500">Des feedbacks réguliers sur votre code et vos bonnes pratiques.</p></div>
            </div>
            <div class="flex items-start gap-3">
              <div class="text-blue-600 mt-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
              <div><p class="font-bold text-gray-900 text-sm mb-1">Projets à Impact Local & Global</p><p class="text-xs text-gray-500">Des applications utiles pour le tissu économique africain et mondial.</p></div>
            </div>
            <div class="flex items-start gap-3">
              <div class="text-blue-600 mt-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
              <div><p class="font-bold text-gray-900 text-sm mb-1">Coaching Carrière & Freelancing</p><p class="text-xs text-gray-500">Préparation aux entretiens, portfolios et gestion de clients.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= MODALITÉS & PRÉREQUIS ================= -->
    <section class="py-24 px-6 md:px-20 bg-[#f8fafc]">
      <div class="max-w-7xl mx-auto text-center mb-16">
        <span class="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">Organisation pratique</span>
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Modalités, Calendrier & Prérequis</h2>
        <p class="text-gray-500 max-w-2xl mx-auto text-sm">Tout ce que vous devez savoir pour aborder cette aventure technique dans des conditions optimales.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <!-- Modalité 1 -->
        <div class="bg-white p-8 rounded-xl border border-gray-200">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
            <h3 class="font-bold text-gray-900 text-lg">Format de Formation</h3>
          </div>
          <p class="text-xs text-gray-500 mb-4">Une formule hybride exigeante pour conjuguer l'intensité et la flexibilité nécessaire.</p>
          <ul class="text-xs text-gray-600 space-y-3">
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> Sessions intensives 3 jours par semaine + Samedi.</li>
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> Slides interactifs (supports vidéo et tutoriels).</li>
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> Accès 24/7 au campus virtuel & enregistrements.</li>
          </ul>
        </div>
        <!-- Modalité 2 -->
        <div class="bg-white p-8 rounded-xl border border-gray-200">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
            <h3 class="font-bold text-gray-900 text-lg">Prérequis & Profils</h3>
          </div>
          <p class="text-xs text-gray-500 mb-4">Notre cursus est ouvert à tous, à condition d'une réelle motivation intellectuelle.</p>
          <ul class="text-xs text-gray-600 space-y-3">
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> Être à l'aise avec la logique de base (algorithmie).</li>
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> Maîtrise du français & compréhension de l'anglais technique.</li>
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> Ordinateur personnel performant (minimum i5 / 8Go RAM conseillé).</li>
          </ul>
        </div>
        <!-- Modalité 3 -->
        <div class="bg-white p-8 rounded-xl border border-gray-200">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
            <h3 class="font-bold text-gray-900 text-lg">Prochaines Cohortes</h3>
          </div>
          <p class="text-xs text-gray-500 mb-4">Afin de préserver l'excellence pédagogique, chaque promotion est strictement limitée en effectif.</p>
          <ul class="text-xs text-gray-600 space-y-3">
            <li class="flex justify-between border-b border-gray-100 pb-2"><span>Cohorte Automne :</span> <span class="font-bold text-blue-600">5 places</span></li>
            <li class="flex justify-between border-b border-gray-100 pb-2"><span>Cohorte Hiver :</span> <span class="font-bold text-gray-900">Sur liste d'attente</span></li>
            <li class="flex justify-between"><span>Cohorte Printemps :</span> <span class="font-bold text-blue-600">3 places</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ================= CONTACT & FORMULAIRE ================= -->
    <section id="contact-formation" class="px-6 md:px-20 py-24 bg-[#f8fafc]">
      <div class="max-w-7xl mx-auto bg-afa-dark rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
        
        <!-- Texte gauche -->
        <div class="p-12 md:p-16 flex flex-col justify-center relative">
          <div class="relative z-10">
            <span class="inline-flex items-center gap-2 bg-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              <span class="w-1.5 h-1.5 bg-afa-cyan rounded-full"></span> Places limitées à 15 élèves
            </span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Prêt à devenir un architecte du web ? Rejoignez l'élite technique.</h2>
            <p class="text-gray-400 mb-10 max-w-md text-sm">Rejoignez la cohorte de votre réussite. Bâtissez votre avenir professionnel sur des compétences concrètes, éprouvées et recherchées par les entreprises.</p>
            
            <div class="flex gap-6 text-white mb-8">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-afa-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div><p class="text-sm font-bold">12 Semaines</p><p class="text-[10px] text-gray-400">De formation intensive</p></div>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-afa-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <div><p class="text-sm font-bold">2 Projets Pro</p><p class="text-[10px] text-gray-400">Portfolio professionnel</p></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulaire droite -->
        <div class="bg-white p-12 md:p-16">
          <h3 class="text-2xl font-bold text-gray-900 mb-1">Candidater à la formation</h3>
          <p class="text-xs text-gray-500 mb-6">Réponse garantie sous 24 heures ouvrées.</p>
          
          <form class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">Nom complet</label>
              <input type="text" placeholder="Ex: Amadou Diallo" class="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">Adresse email</label>
              <input type="email" placeholder="ex: contact@exemple.com" class="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">Téléphone / WhatsApp</label>
              <input type="tel" placeholder="ex: +33 6 00 00 00 00" class="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">Choix du cursus</label>
              <select class="w-full border border-gray-300 rounded-md p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
                <option>Cursus Complet : WEB 1 + WEB 2 (Recommandé)</option>
                <option>WEB 1 : Front-End uniquement</option>
                <option>WEB 2 : Back-End uniquement</option>
              </select>
            </div>
            <button type="button" class="w-full bg-[#00a8ff] hover:bg-blue-600 text-white font-bold py-3.5 rounded-md transition mt-4 shadow-lg shadow-blue-500/30">
              Envoyer ma candidature maintenant
            </button>
            <p class="text-center text-[10px] text-gray-400 mt-4">En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pédagogique.</p>
          </form>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>