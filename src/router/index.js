import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Formation from '../views/Formation.vue'
import Services from '../views/Services.vue'
// import APropos from '../views/APropos.vue'
import APropos from '../views/PageAPropos.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/formation', name: 'Formation', component: Formation },
    // { path: '/services', name: 'Services', component: Services },
    { path: '/apropos', name: 'APropos', component: APropos },
    { path: '/contact', name: 'Contact', component: Contact },
    
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router