import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/AboutMe',
      component:() => import("../components/AboutMe"),
      name:'aboutMe'
    },
    {
      path:'/Portfolio',
      component:() => import('../components/Portfolio'),
      name:'portfolio'
    },
    {
      path:'/Skill',
      component:() => import('../components/Skill'),
      name:'skill'
    },
    {
      path:'Contact',
      component:() => import('../components/Contact'),
      name:'contact'
    }
  ]
})

export default router