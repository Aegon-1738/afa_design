<template>
  <nav class="bg-[#f8f9fa] px-6 py-4 flex items-center justify-between border-b border-gray-200">
    <div class="flex items-center gap-3">
      <div class="bg-gray-300 w-10 h-10 flex items-center justify-center rounded text-xs font-bold text-gray-600">img</div>
      <span class="text-xl font-bold text-gray-900 tracking-tight">Afa <span class="font-normal">TECH SOLUTION</span></span>
    </div>
    <div class="hidden md:flex items-center gap-6 font-medium text-gray-600">
      <router-link to="/" class="hover:text-blue-600 transition" active-class="text-blue-600 font-bold">Accueil</router-link>
      <router-link to="/formation" class="hover:text-blue-600 transition" active-class="text-blue-600 font-bold">Formation</router-link>
      <router-link to="/apropos" class="hover:text-blue-600 transition" active-class="text-blue-600 font-bold">apropos</router-link>
      <router-link to="/contact" class="hover:text-blue-600 transition" active-class="text-blue-600 font-bold">Contact</router-link>
    </div>
    <div>
      <router-link to="/contact" class="bg-[#0084ff] hover:bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium transition">Nous contacter</router-link>
    </div>
  </nav>
</template>