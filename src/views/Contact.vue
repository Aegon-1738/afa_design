<template>
  <div class="min-h-screen flex flex-col font-sans bg-white">
    <Navbar />

    <!-- ================= HÉRO CONTACT ================= -->
    <main class="px-6 md:px-20 py-16 bg-[#f8fafc] border-b border-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          <!-- Texte gauche -->
          <div class="max-w-2xl">
            <span class="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 bg-blue-50 px-3 py-1.5 rounded-full">
              <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Support & Conseil Stratégique
            </span>
            <h1 class="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              Contactez AFA Tech Solution
            </h1>
            <p class="text-gray-500 text-lg leading-relaxed">
              Une question, un projet ou une demande d'audit ? Notre équipe d'experts est à votre écoute pour concevoir des réponses technologiques d'excellence.
            </p>
          </div>

          <!-- Encarts disponibilité / SLA -->
          <div class="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div class="bg-white border border-gray-200 rounded-lg p-4 min-w-[200px] shadow-sm">
              <p class="text-xs font-bold text-gray-500 mb-1">Disponibilité</p>
              <p class="text-blue-600 font-bold text-lg">Lun - Ven : 8h30 - 18h30</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 min-w-[200px] shadow-sm">
              <p class="text-xs font-bold text-gray-500 mb-1">SLA Réponse</p>
              <p class="text-blue-600 font-bold text-lg">&lt; 24h ouvrées</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- ================= CONTENU PRINCIPAL (2 COLONNES) ================= -->
    <section class="py-16 px-6 md:px-20 bg-[#f8fafc]">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- ============ COLONNE GAUCHE (Infos) ============ -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Carte Informations Directes -->
          <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div class="flex justify-between items-center mb-8">
              <h2 class="font-bold text-gray-900 text-lg">Informations Directes</h2>
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>

            <!-- Coordonnées -->
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex gap-4">
                <div class="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Courriel prioritaire</p>
                  <a href="mailto:afatechsolution@gmail.com" class="text-blue-600 text-lg font-bold hover:underline">afatechsolution@gmail.com</a>
                  <p class="text-xs text-gray-500 mt-1">Accusé de réception automatique</p>
                </div>
              </div>

              <!-- Téléphone -->
              <div class="flex gap-4">
                <div class="bg-gray-100 text-gray-700 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p class="font-bold text-gray-900 text-sm mb-1">Standard International</p>
                  <p class="text-gray-900 font-bold text-lg leading-tight">+257 69 14 29 98</p>
                  <p class="text-gray-900 font-bold text-lg leading-tight">+257 69 14 29 98</p>
                  <p class="text-xs text-gray-500 mt-1">Lundi au Vendredi, 8h30 – 18h30 (GMT/UTC+1)</p>
                </div>
              </div>

              <!-- Bureaux -->
              <div class="flex gap-4">
                <div class="bg-gray-100 text-gray-700 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div>
                  <p class="font-bold text-gray-900 text-sm mb-1">Bureaux et Siège</p>
                  <p class="text-gray-900 font-bold text-base">Pôle Technologique d'Excellence</p>
                  <p class="text-xs text-gray-500 mt-1">Zone d'Affaires Innovantes, Dakar • Paris</p>
                </div>
              </div>
            </div>

            <!-- Engagements -->
            <div class="mt-8 bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-100">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <p class="text-xs text-gray-700 font-medium">Confidentialité absolue (Accord NDA standard)</p>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <p class="text-xs text-gray-700 font-medium">Chiffrage technique et devis gratuit sans engagement</p>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p class="text-xs text-gray-700 font-medium">Réponse préliminaire d'ingénierie garantie sous 24h</p>
              </div>
            </div>
          </div>

          <!-- Carte Taux de résolution -->
          <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-bold text-gray-900">Taux de résolution initiale</h3>
              <span class="text-blue-600 font-black text-lg">98.4%</span>
            </div>
            <p class="text-xs text-gray-500 mb-4">Nos ingénieurs d'affaires qualifient et traitent vos exigences dès le premier échange.</p>
            
            <!-- Barre de progression -->
            <div class="w-full bg-gray-100 rounded-full h-2 mb-2">
              <div class="bg-blue-600 h-2 rounded-full" style="width: 98.4%"></div>
            </div>
            <div class="flex justify-between text-[10px] font-semibold text-gray-500">
              <span>Demandes formulées</span>
              <span>1,420+ traitées en 2024</span>
            </div>
          </div>

          <!-- Image Centre d'opérations -->
          <div class="relative rounded-xl overflow-hidden shadow-sm h-48">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Bureau AFA Tech" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              <span class="font-bold text-sm">Centre d'Opérations • R&D</span>
            </div>
          </div>
        </div>

        <!-- ============ COLONNE DROITE (Formulaire) ============ -->
        <div class="lg:col-span-7 bg-white rounded-xl border border-gray-200 p-8 md:p-10 shadow-sm">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Initier une collaboration</h2>
          <p class="text-sm text-gray-500 mb-8">Remplissez le formulaire ci-dessous. Un consultant technique dédié analysera votre besoin opérationnel.</p>

          <form class="space-y-5">
            <!-- Ligne 1 : Nom + Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-1">Nom et Prénom <span class="text-red-500">*</span></label>
                <input type="text" placeholder="Ex : Jean-Marc Faye" class="w-full bg-gray-50 border border-gray-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-1">Adresse e-mail professionnelle <span class="text-red-500">*</span></label>
                <input type="email" placeholder="nom@entreprise.com" class="w-full bg-gray-50 border border-gray-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
              </div>
            </div>

            <!-- Ligne 2 : Téléphone + Service -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-1 flex justify-between">
                  Téléphone <span class="text-gray-400 font-normal">(Facultatif)</span>
                </label>
                <input type="tel" placeholder="+33 6 12 34 56 78" class="w-full bg-gray-50 border border-gray-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-1 flex justify-between">
                  Service concerné <span class="text-red-500">*</span>
                </label>
                <select class="w-full bg-gray-50 border border-gray-200 rounded-md p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none">
                  <option>Sélectionnez un domaine d'intervention</option>
                  <option>Formation</option>
                  <option>Développement Web & Mobile</option>
                  <option>Hébergement & Cloud</option>
                  <option>Conseil & Audit IT</option>
                </select>
              </div>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1 flex justify-between">
                Message / Description de votre projet <span class="text-red-500">*</span>
                <span class="text-[10px] text-gray-400 font-normal">Spécifications techniques ou calendrier</span>
              </label>
              <textarea rows="6" placeholder="Détaillez vos objectifs technologiques, volume d'utilisateurs cibles, contraintes d'infrastructure ou délais souhaités..." class="w-full bg-gray-50 border border-gray-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"></textarea>
            </div>

            <!-- Consentement RGPD -->
            <div class="flex items-start gap-3 bg-gray-50 p-4 rounded-md border border-gray-100">
              <input type="checkbox" class="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
              <p class="text-[11px] text-gray-600 leading-relaxed">
                En cochant cette case, j'accepte que les données saisies soient recueillies et traitées par AFA Tech Solution afin de répondre à ma demande de contact et d'établir un devis commercial personnalisé, conformément au RGPD et à notre charte de protection des données.
              </p>
            </div>

            <!-- Zone d'envoi -->
            <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-100">
              <div class="flex items-center gap-2 text-xs text-gray-500">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Transmission sécurisée par protocole TLS 1.3
              </div>
              <button type="button" class="w-full md:w-auto bg-[#00a8ff] hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-md transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                Envoyer le message
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </form>

          <!-- Badges de confiance -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <div><p class="text-xs font-bold text-gray-900">ISO / SOC</p><p class="text-[10px] text-gray-500">Conformité stricte</p></div>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <div><p class="text-xs font-bold text-gray-900">Partenaire B2B</p><p class="text-[10px] text-gray-500">Contrats d'infogérance</p></div>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div><p class="text-xs font-bold text-gray-900">Astreinte 24/7</p><p class="text-[10px] text-gray-500">Monitoring critique</p></div>
            </div>
          </div>
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