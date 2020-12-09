import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

Vue.use(VueRouter)
NProgress.configure({ showSpinner: false })

const lazyLoad = (view) => {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('Home'),
    meta: {
      title: 'Tsavo Seed'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: lazyLoad('About'),
    meta: {
      title: 'Tsavo Seed - About'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: lazyLoad('Services'),
    meta: {
      title: 'Tsavo Seed - Services'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: lazyLoad('Contact'),
    meta: {
      title: 'Tsavo Seed - Contact'
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: lazyLoad('Terms'),
    meta: {
      title: 'Tsavo Seed - Terms'
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: lazyLoad('Privacy'),
    meta: {
      title: 'Tsavo Seed - Privacy'
    }
  },
  {
    path: '*',
    name: '404Error',
    component: lazyLoad('errors/NotFound'),
    meta: {
      title: 'Tsavo Seed - Not Found'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next();
  document.title = `${to.meta.title}`

})

router.afterEach(() => {
  NProgress.done()
})

export default router