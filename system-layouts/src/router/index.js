import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import ArticlesPage from '@/components/ArticlesPage.vue';
import ArticlePage from '@/components/ArticlePage.vue';
import ContactPage from '@/components/ContactPage.vue';
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage.vue';
import TermsPage from '../components/TermsPage.vue';
import NotFoundPage from '../components/NotFoundPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/home', component: HomePage },
  { path: '/articles', component: ArticlesPage },
  { path: '/articles/:slug', component: ArticlePage, props: true },
  { path: '/contact', component: ContactPage },
  { path: '/privacy-policy', component: PrivacyPolicyPage },
  { path: '/terms-of-service', component: TermsPage },
  {
    path: '/:catchAll(.*)*',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;