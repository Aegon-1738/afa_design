<template>
  <div class="min-h-screen flex flex-col font-sans bg-gray-50">
    <Navbar />

    <!-- SECTION HÉRO -->
    <main class="relative flex flex-col justify-center px-6 md:px-20 py-24 bg-afa-dark text-white overflow-hidden min-h-[600px]">
      <!-- Image de fond (à remplacer par la tienne plus tard) -->
      <div class="absolute inset-0 z-0">
        <div class="w-full h-full bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div class="relative z-10 max-w-4xl">
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-md mb-8">
          <span class="w-2 h-2 bg-afa-cyan rounded-full animate-pulse"></span>
          <span class="text-xs font-semibold uppercase tracking-wider text-gray-200">Avec AFA TECH SOLUTION</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-black uppercase leading-[1.1] mb-6 tracking-tight">
          Devenez un leader du<br>marché grâce à notre<br>
          <span class="text-afa-cyan">innovation numérique</span><br>pointue
        </h1>

        <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
          Nous accompagnons les entreprises dans leur transformation digitale avec des solutions technologiques sur mesure, fiables et performantes.
        </p>

        <div class="flex flex-wrap gap-4 mb-20">
          <a href="#" class="bg-gradient-to-r from-blue-600 to-afa-cyan text-white px-8 py-3.5 rounded-md font-bold hover:opacity-90 transition shadow-lg shadow-blue-500/20 text-sm">
            Commencez votre transformation dès aujourd'hui
          </a>
          <a href="#" class="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-md font-bold hover:bg-white/20 transition text-sm">
            Découvrir nos services
          </a>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
          <div><p class="text-3xl font-bold mb-1">99.98%</p><p class="text-sm text-gray-400">Disponibilité SLA</p></div>
          <div><p class="text-3xl font-bold mb-1">+180</p><p class="text-sm text-gray-400">Systèmes livrés</p></div>
          <div><p class="text-3xl font-bold mb-1">24/7</p><p class="text-sm text-gray-400">Supervision active</p></div>
          <div><p class="text-3xl font-bold mb-1">100%</p><p class="text-sm text-gray-400">Sur-mesure certifié</p></div>
        </div>
      </div>
    </main>

    <!-- SECTION NOS SERVICES -->
    <section class="py-24 px-6 md:px-20 bg-white">
      <div class="max-w-7xl mx-auto">
        <span class="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2 block">Nos Services</span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 max-w-2xl">Des expertises complètes pour propulser votre entreprise</h2>
        <p class="text-gray-500 mb-16 max-w-2xl">De l'acculturation technologique à l'infrastructure infonuagique critique, nous concevons des sociétés d'ingénierie résilientes et modulaires.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Carte 1 -->
          <div class="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col hover:shadow-md transition">
            <div class="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Formation aux fondamentaux de l'informatique</h3>
            <p class="text-sm text-gray-500 mb-8 flex-grow">Renforcez les compétences numériques de vos équipes grâce à des modules de formation pratiques et adaptés à votre secteur.</p>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
              <span class="text-xs font-semibold text-gray-400">Programme RH & IT</span>
              <span class="text-gray-400">→</span>
            </div>
          </div>

          <!-- Carte 2 -->
          <div class="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col hover:shadow-md transition">
            <div class="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Création de sites web et systèmes de gestion</h3>
            <p class="text-sm text-gray-500 mb-8 flex-grow">Conception de plateformes web sur mesure, portails d'entreprise et ERP/CRM sécurisés pour optimiser votre productivité.</p>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
              <span class="text-xs font-semibold text-gray-400">Portails & ERP</span>
              <span class="text-gray-400">→</span>
            </div>
          </div>

          <!-- Carte 3 -->
          <div class="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col hover:shadow-md transition">
            <div class="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Développement d'applications mobiles</h3>
            <p class="text-sm text-gray-500 mb-8 flex-grow">Applications iOS et Android performantes et ergonomiques, créées pour offrir une expérience utilisateur remarquable.</p>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
              <span class="text-xs font-semibold text-gray-400">iOS & Android Natif</span>
              <span class="text-gray-400">→</span>
            </div>
          </div>

          <!-- Carte 4 -->
          <div class="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col hover:shadow-md transition">
            <div class="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Hébergement web, conseil en TI et transformation numérique</h3>
            <p class="text-sm text-gray-500 mb-8 flex-grow">Infrastructure cloud haute disponibilité, audits de systèmes d'information et stratégie globale de modernisation IT.</p>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
              <span class="text-xs font-semibold text-gray-400">Cloud & Audit IT</span>
              <span class="text-gray-400">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION POURQUOI NOUS CHOISIR -->
    <section class="py-24 px-6 md:px-20 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span class="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2 block">Valeur Ajoutée</span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Pourquoi nous choisir</h2>
            <p class="text-gray-500 max-w-xl">Une gouvernance axée sur le résultat tangible, la réduction des risques d'ingénierie et l'alignement strict avec votre retour sur investissement.</p>
          </div>
          <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm text-xs font-medium text-gray-600">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            Conformité RGPD, ISO 27001 & SLA Garanti
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-8 rounded-xl border border-gray-100">
            <div class="w-8 h-8 bg-blue-50 text-blue-600 rounded flex items-center justify-center mb-4"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
            <h3 class="font-bold text-gray-900 mb-2">Expertise Technique Pointue</h3>
            <p class="text-sm text-gray-500">Maîtrise des technologies de pointe et des standards de sécurité les plus rigoureux pour des sociétés pérennes.</p>
          </div>
          <div class="bg-white p-8 rounded-xl border border-gray-100">
            <div class="w-8 h-8 bg-blue-50 text-blue-600 rounded flex items-center justify-center mb-4"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div>
            <h3 class="font-bold text-gray-900 mb-2">Accompagnement Personnalisé</h3>
            <p class="text-sm text-gray-500">Une équipe dédiée à vos côtés de la phase de cadrage jusqu'au déploiement avec points d'étape réguliers.</p>
          </div>
          <div class="bg-white p-8 rounded-xl border border-gray-100">
            <div class="w-8 h-8 bg-blue-50 text-blue-600 rounded flex items-center justify-center mb-4"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg></div>
            <h3 class="font-bold text-gray-900 mb-2">Solutions Sur Mesure</h3>
            <p class="text-sm text-gray-500">Des développements alignés précisément sur vos enjeux métiers et vos flux de travail internes sans dette technique.</p>
          </div>
          <div class="bg-white p-8 rounded-xl border border-gray-100">
            <div class="w-8 h-8 bg-blue-50 text-blue-600 rounded flex items-center justify-center mb-4"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></div>
            <h3 class="font-bold text-gray-900 mb-2">Suivi & Maintenance Continue</h3>
            <p class="text-sm text-gray-500">Support réactif, mises à jour régulières et infogérance proactive après livraison pour pérenniser vos actifs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION MÉTHODOLOGIE -->
    <section class="py-24 px-6 md:px-20 bg-white">
      <div class="max-w-7xl mx-auto text-center mb-16">
        <div class="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-4">Méthodologie Éprouvée</div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Comment nous travaillons</h2>
        <p class="text-gray-500 max-w-2xl mx-auto">Un cadre opérationnel agile et transparent en 4 phases structurées, garantissant le respect scrupuleux des délais et des exigences.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative">
        <!-- Ligne de connexion (optionnelle) -->
        <div class="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-gray-100 z-0"></div>

        <!-- Étape 1 -->
        <div class="bg-white border border-gray-100 rounded-xl p-8 relative z-10 shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">1</div>
            <span class="text-xs font-semibold text-gray-400">Phase 01</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-3">Analyse de vos besoins</h3>
          <p class="text-sm text-gray-500 mb-6">Audit approfondi de votre écosystème, cadrage technique et définition claire des objectifs opérationnels.</p>
          <div class="flex items-center gap-2 text-xs font-semibold text-blue-600"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Atelier de cadrage</div>
        </div>

        <!-- Étape 2 -->
        <div class="bg-white border border-gray-100 rounded-xl p-8 relative z-10 shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">2</div>
            <span class="text-xs font-semibold text-gray-400">Phase 02</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-3">Proposition Stratégique</h3>
          <p class="text-sm text-gray-500 mb-6">Conception de l'architecture, cahier des charges détaillé et feuille de route budgétaire cadencée.</p>
          <div class="flex items-center gap-2 text-xs font-semibold text-blue-600"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Spécifications claires</div>
        </div>

        <!-- Étape 3 -->
        <div class="bg-white border border-gray-100 rounded-xl p-8 relative z-10 shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">3</div>
            <span class="text-xs font-semibold text-gray-400">Phase 03</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-3">Réalisation & Développement</h3>
          <p class="text-sm text-gray-500 mb-6">Conception agile, développements itératifs avec démonstrations continues et tests de qualité stricts.</p>
          <div class="flex items-center gap-2 text-xs font-semibold text-blue-600"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Sprints itératifs</div>
        </div>

        <!-- Étape 4 -->
        <div class="bg-white border border-gray-100 rounded-xl p-8 relative z-10 shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">4</div>
            <span class="text-xs font-semibold text-gray-400">Phase 04</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-3">Suivi & Maintenance</h3>
          <p class="text-sm text-gray-500 mb-6">Déploiement sécurisé en production, formation complète des utilisateurs et maintenance évolutive 24/7.</p>
          <div class="flex items-center gap-2 text-xs font-semibold text-blue-600"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Garantie de service</div>
        </div>
      </div>
    </section>

    <!-- SECTION CTA FINAL -->
    <section class="px-6 md:px-20 pb-24 bg-white">
      <div class="max-w-7xl mx-auto bg-afa-dark rounded-2xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Effet de lumière en arrière-plan -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
        
        <div class="relative z-10 max-w-xl">
          <span class="inline-block bg-afa-cyan text-black text-xs font-bold px-3 py-1 rounded mb-4">Démarrez rapide</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">Commencez votre transformation dès aujourd'hui</h2>
          <p class="text-gray-400">Échangez avec nos experts pour concrétiser votre vision technologique dès maintenant. Audit initial offert sans engagement.</p>
        </div>
        <div class="relative z-10 flex gap-4">
          <a href="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-bold transition text-sm">Prendre rendez-vous</a>
          <a href="mailto:yedidyaeddy@gmail.com" class="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-md font-bold hover:bg-white/20 transition text-sm flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Nous écrire
          </a>
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