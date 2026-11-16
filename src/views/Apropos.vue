<template>
  <div class="min-h-screen flex flex-col font-sans bg-[#f8fafc]">
    <Navbar />

    <!-- ================= HÉRO À PROPOS ================= -->
    <main class="relative bg-white px-6 md:px-20 py-16 border-b border-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-4xl mb-12">
          <span class="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
            <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Notre histoire & engagement
          </span>
          <h1 class="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
            Bâtir l'avenir numérique<br>
            <span class="text-blue-600">de l'Afrique</span>
          </h1>
          <p class="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl">
            L'essor technologique et l'éveil d'une nouvelle génération de bâtisseurs numériques. Nous forgeons l'indépendance technologique, l'excellence de code et la transformation durable des entreprises du continent.
          </p>
        </div>

        <!-- Image avec badge superposé -->
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Équipe AFA Tech" class="w-full h-[450px] object-cover rounded-xl shadow-lg" />
          
          <div class="absolute bottom-6 left-6 bg-white p-5 rounded-lg shadow-xl max-w-md">
            <div class="flex items-start gap-4">
              <div class="bg-blue-50 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <div>
                <p class="text-sm font-bold text-gray-900 mb-1">Initiative Panafricaine & R&D</p>
                <p class="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">Hub Tech Excellence</p>
                <p class="text-xs text-gray-500 leading-relaxed">Former, concevoir et déployer au standard international depuis le cœur de l'Afrique.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- ================= GENÈSE DU MOUVEMENT ================= -->
    <section class="py-24 px-6 md:px-20 bg-white">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <!-- Texte gauche -->
        <div>
          <span class="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">Genèse du mouvement</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Un éveil psychologique<br>face à l'ère numérique</h2>
          
          <div class="space-y-6 text-gray-500 text-sm leading-relaxed">
            <p>
              <span class="font-bold text-gray-900">AFA TECH SOLUTION</span> a été fondée le <span class="font-bold text-gray-900">13 novembre 2025</span>. Notre création puise sa force dans une certitude inébranlable : le continent africain ne peut demeurer simple consommateur des technologies globales, mais doit s'affirmer comme producteur majeur et visionnaire.
            </p>
            <p>
              Face à la vitesse fulgurante de la digitalisation, nous catalysons un renouveau profond de la mentalité opérationnelle. Nous outillons la jeunesse d'une posture d'audace, de rigueur d'ingénierie et d'innovation afin d'anticiper les défis sociétaux et corporatifs de demain.
            </p>
          </div>
        </div>

        <!-- Cartes stats droite -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-6">
            <p class="text-4xl font-black text-blue-600 mb-2">13.11</p>
            <p class="font-bold text-gray-900 text-sm mb-1">Novembre 2025</p>
            <p class="text-xs text-gray-500">Date officielle de fondation et lancement de l'écosystème d'ingénierie AFA Tech Solution.</p>
          </div>
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-6">
            <p class="text-4xl font-black text-blue-600 mb-2">100%</p>
            <p class="font-bold text-gray-900 text-sm mb-1">Panafricain</p>
            <p class="text-xs text-gray-500">Vision sans frontière, intégrant les talents et entreprises de tout le territoire africain.</p>
          </div>
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-6">
            <p class="text-4xl font-black text-gray-900 mb-2">Éveil & Impact</p>
            <p class="font-bold text-gray-900 text-sm mb-1">Notre force</p>
            <p class="text-xs text-gray-500">Transformation des perspectives individuelles et puissance de développement macroéconomique.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= MISSION FONDATRICE ================= -->
    <section class="px-6 md:px-20 pb-24 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="bg-white border-2 border-blue-600 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div class="bg-blue-50 text-blue-600 w-16 h-16 rounded-xl flex items-center justify-center shrink-0">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
          </div>
          <div>
            <p class="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Notre mission fondatrice</p>
            <h3 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 uppercase">Propulser la jeunesse et les entreprises africaines</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              AFA TECH SOLUTION a été conçue dans le but de sensibiliser la jeunesse africaine pour le développement de l'Afrique, de permettre à toute la population d'Afrique de migrer vers une nouvelle ère technologique et de profiter pleinement des opportunités et avantages qu'offre cette révolution.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= NOS 4 GRANDS VOLETS ================= -->
    <section class="py-24 px-6 md:px-20 bg-[#f8fafc]">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12">
          <span class="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">Cadre opérationnel</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Nos 4 grands volets d'action &<br>d'excellence</h2>
          <p class="text-gray-500 max-w-3xl text-sm">De l'alphabétisation technique de haut niveau aux infrastructures informatiques d'envergure, nous couvrons l'ensemble de la chaîne de valeur du numérique.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Volet 1 : Formations (Prend 2 colonnes) -->
          <div class="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-8">
            <div class="flex items-start gap-4 mb-6">
              <div class="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">Formations aux Fondamentaux de l'Informatique</h3>
                <p class="text-xs font-semibold text-gray-500 mt-1">Parcours Certifiant</p>
              </div>
            </div>
            <p class="text-sm text-gray-500 mb-8 max-w-xl">Un cursus pédagogique immersif conçu pour forger des développeurs complets, autonomes et directement opérationnels sur les marchés locaux et internationaux.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- WEB 1 -->
              <div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
                <h4 class="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2"><span class="bg-blue-100 text-blue-600 p-1 rounded">#</span> WEB 1 : Fondations & Frontend</h4>
                <p class="text-xs text-gray-500 mb-4">Maîtrise de l'interface utilisateur, accessibilité et interactivité côté client.</p>
                <ul class="space-y-2 text-xs text-gray-600">
                  <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> <span class="font-semibold text-gray-800">HTML</span> : Structuration sémantique solide d'une page web.</li>
                  <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> <span class="font-semibold text-gray-800">CSS</span> : Conception visuelle, responsive design et systèmes de grilles.</li>
                  <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> <span class="font-semibold text-gray-800">JavaScript</span> : Dynamisme interactif, manipulation du DOM et logique client.</li>
                </ul>
              </div>
              <!-- WEB 2 -->
              <div class="bg-gray-50 border border-gray-100 rounded-lg p-5">
                <h4 class="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2"><span class="bg-blue-100 text-blue-600 p-1 rounded">{ }</span> WEB 2 : Backend & Données</h4>
                <p class="text-xs text-gray-500 mb-4">Architectures applicatives, logique serveur et intégrité de la persistance.</p>
                <ul class="space-y-2 text-xs text-gray-600">
                  <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> <span class="font-semibold text-gray-800">PHP</span> : Traitement serveur, architecture MVC et services applicatifs.</li>
                  <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> <span class="font-semibold text-gray-800">SQL</span> : Conception, manipulation et optimisation des bases relationnelles.</li>
                </ul>
              </div>
            </div>
            
            <div class="mt-8 flex justify-between items-center border-t border-gray-100 pt-4">
              <p class="text-xs text-gray-500 font-medium">Sessions intensives & mentorat direct</p>
              <router-link to="/formation" class="text-blue-600 font-bold text-sm hover:text-blue-700 transition">Consulter le syllabus →</router-link>
            </div>
          </div>

          <!-- Volet 2 : Sites Web & Systèmes IT (1 colonne) -->
          <div class="bg-white rounded-xl border border-gray-200 p-8 flex flex-col">
            <div class="flex items-start gap-4 mb-6">
              <div class="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">Sites Web & Systèmes IT</h3>
              </div>
            </div>
            <p class="text-sm text-gray-500 mb-6 flex-grow">Création sur mesure de plateformes institutionnelles et gestion intégrée des systèmes informatiques pour tous les secteurs d'activité :</p>
            
            <ul class="space-y-3 text-xs text-gray-600 mb-6">
              <li class="flex items-start gap-2"><svg class="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ERP & Solutions de gestion intégrée</li>
              <li class="flex items-start gap-2"><svg class="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Portails e-Commerce & Interfaces métiers</li>
              <li class="flex items-start gap-2"><svg class="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Intégration d'API et interconnexions d'outils</li>
            </ul>

            <div class="bg-blue-50 rounded-lg p-4 mt-auto">
              <div class="flex items-center gap-2 mb-1">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                <p class="text-xs font-bold text-gray-900">Adapté aux PME, grandes comptes et administrations publiques.</p>
              </div>
            </div>
          </div>

          <!-- Volet 3 : Développement Mobile (Prend 1.5 colonnes) -->
          <div class="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-8">
            <div class="flex items-start gap-4 mb-6">
              <div class="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Développement Mobile (iOS & Android)</h3>
            </div>
            <p class="text-xs text-gray-500 mb-6">Création d'applications mobiles réactives, fluides et performantes, spécifiquement taillées pour les réalités de connectivité et les usages quotidiens sur les marchés africains.</p>
            
            <div class="flex gap-3 mb-6">
              <span class="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1">
                <svg class="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> iOS Natif & Flutter
              </span>
              <span class="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1">
                <svg class="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9997.9993-.9997c.5511 0 .9993.4486.9993.9997s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9997.9993-.9997c.5511 0 .9993.4486.9993.9997s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8544 12 7.8544s-3.5902.3895-5.1377 1.0492L4.84 5.4007a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/></svg> Android & Offline-first
              </span>
            </div>

            <div class="bg-gray-50 rounded-lg p-4 mt-auto border border-gray-100">
              <p class="text-[10px] text-gray-500 leading-relaxed">Architecture sécurisée, intégration native de paiements mobiles (Mobile Money, cartes) et conformité stricte aux standards UX mobiles modernes.</p>
            </div>
          </div>

          <!-- Volet 4 : Hébergement & Conseil (Prend 2 colonnes) -->
          <div class="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-8">
            <div class="flex items-start gap-4 mb-6">
              <div class="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Hébergement Sécurisé & Conseil TI</h3>
            </div>
            <p class="text-sm text-gray-500 mb-6 max-w-2xl">Accompagnement stratégique et déploiement d'environnements cloud haute disponibilité pour faciliter la transformation numérique de vos organisations.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div class="flex items-center gap-2 text-xs text-gray-700 font-semibold bg-gray-50 p-3 rounded-lg border border-gray-100">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                Serveurs redondants & Sauvegardes automatisées
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-700 font-semibold bg-gray-50 p-3 rounded-lg border border-gray-100">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                Audit cybersécurité & Gouvernance TI
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-4 mt-auto border border-gray-100">
              <p class="text-[10px] text-gray-500">Surveillance 24/7 de vos actifs numériques pour assurer la continuité d'activité sans interruption de service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= NOTRE OBJECTIF ULTIME ================= -->
    <section class="px-6 md:px-20 pb-24 bg-[#f8fafc]">
      <div class="max-w-7xl mx-auto bg-afa-dark rounded-2xl p-12 md:p-20 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
        <!-- Forme géométrique arrière-plan -->
        <div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" class="w-full h-full fill-white"><polygon points="50,0 100,100 0,100" /></svg>
        </div>
        
        <div class="relative z-10 max-w-3xl">
          <span class="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
            <span class="w-1.5 h-1.5 bg-afa-cyan rounded-full"></span> Ambition globale
          </span>
          <h2 class="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">
            Notre objectif <span class="text-afa-cyan">ultime</span>
          </h2>
          
          <blockquote class="border-l-4 border-afa-cyan pl-6 mb-8">
            <p class="text-xl md:text-2xl text-white font-medium leading-relaxed">
              « Permettre l'avancée technologique de l'Afrique entière dans le monde et contribuer activement à l'évolution numérique pérenne du continent. »
            </p>
          </blockquote>
          
          <p class="text-sm text-gray-400 max-w-2xl leading-relaxed">
            Ce dessein structure chacune de nos lignes de code, chaque étudiant formé dans nos académies et chaque architecture de données livrée à nos partenaires.
          </p>
        </div>
      </div>
    </section>

    <!-- ================= REJOIGNEZ LA TRANSFORMATION ================= -->
    <section class="py-24 px-6 md:px-20 bg-white text-center">
      <div class="max-w-3xl mx-auto">
        <span class="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">Prenons part à l'histoire</span>
        <h2 class="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          Rejoignez la<br>transformation numérique<br>avec AFA Tech Solution
        </h2>
        <p class="text-gray-500 mb-10 text-lg leading-relaxed">
          Que vous souhaitiez former vos équipes, concrétiser un projet d'infrastructure stratégique ou amorcer votre transition numérique, nos ingénieurs sont à vos côtés.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-bold transition text-sm shadow-lg shadow-blue-500/30">
            Nous contacter pour un projet
          </router-link>
          <router-link to="/formation" class="bg-white border border-gray-300 text-gray-700 px-8 py-3.5 rounded-md font-bold hover:bg-gray-50 transition text-sm">
            Découvrir le programme formations
          </router-link>
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