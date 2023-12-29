// --- início rotas
import {createRouter, createWebHistory} from 'vue-router'
//import Vendas from '@/components/vendas/Vendas.vue'
//import VendasPadrao from "@/components/vendas/VendasPadrao.vue";
//import Leads from '@/components/vendas/Leads.vue'
//import Lead from '@/components/vendas/Lead.vue'
//import Contratos from '@/components/vendas/Contratos.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Servico from '@/components/servicos/Servico.vue'
import Indicadores from "@/components/servicos/Indicadores.vue";
import Opcoes from "@/components/servicos/Opcoes.vue";
//import Dashboard from '@/components/dashboard/Dashboard.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'
//import DashboardRodape from "@/components/dashboard/DashboardRodape.vue";

const Contratos = () => import(/*webpackChunkName: "vendas"*/ '@/components/vendas/Contratos')
const Dashboard = () => import('@/components/dashboard/Dashboard.vue')
const DashboardRodape = () => import('@/components/dashboard/DashboardRodape.vue')
const Vendas = () => import( /*webpackChunkName: "vendas"*/ '@/components/vendas/Vendas.vue')
const VendasPadrao = () => import( "@/components/vendas/VendasPadrao.vue")
const Leads = () =>import( /*webpackChunkName: "vendas"*/ '@/components/vendas/Leads.vue')
const Lead = () => import( /*webpackChunkName: "vendas"*/ '@/components/vendas/Lead.vue')

const routes = [
    {
        path: '/', //localhost:8080/
        component: Site,
        meta: {
            requerAutenticacao: false

        }

    },

    {


        path: '/home', //localhost:8080/home
        alias: '/app',
        component: Home,
        meta: {
            requerAutenticacao: true

        },
        children: [
            {
                path: 'vendas', component: Vendas, children:
                    [
                        {
                            path: 'leads',
                            component: Leads,
                            name: 'leads',
                            beforeEnter: (to, from, next) => {
                                console.log('Antes de entrar na rota')
                                console.log(to)
                                console.log(from)
                                next()
                            }
                        },
                        {
                            path: 'leads/:id',
                            props: true,
                            /*  props: route => {
                                  console.log(route)
                                  return {
                                    id: route.params.id + 1
                                  }

                              },*/
                            component: Lead,
                            name: 'lead',
                            alias: ['/l/:id', '/pessoa/:id', '/:id']
                        },
                        {path: 'contratos', component: Contratos, name: 'contratos'},
                        {path: '', component: VendasPadrao, name: 'vendas'}
                    ]
            },

            {
                path: 'servicos', component: Servicos, name: 'servicos', children:
                    [
                        {
                            path: ':id',
                            props: {
                                default: true,
                                opcoes: true,
                                indicadores: true

                            },
                            alias: '/s/:id',
                            name: 'servico',
                            components: {
                                default: Servico,
                                opcoes: Indicadores,
                                indicadores: Opcoes


                            }
                        }
                    ]
            },
            {
                path: 'dashboard', components: {
                    default: Dashboard,
                    rodape: DashboardRodape
                }
            },


        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    },
    {path: '/redirecionamento-1', redirect: '/home/servicos'},
    {path: '/redirecionamento-2', redirect: {name: 'leads'}},
    {path: '/redirecionamento-3', redirect: '/home/vendas'},
    {path: '/redirecionamento-4', redirect: {name: 'vendas'}},
    {
        path: '/redirecionamento-5', redirect: to => {
            console.log(to)
            return '/home/vendas'
        }
    },


    {
        path: '/',
        component: Site
    }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
       // return {left: 0, top:150}
        console.log( savedPosition)
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
           return {
               el: to.hash,
           }// correspondente ao elemento com o id
        }
        return {left: 0, top: 0}

    },
    routes //routes: routes
})


/*router.beforeEach((to)=>{
   if(to.meta.requerAutenticacao){
       console.log('Precisa estar logado')
   }else {
       console.log('Não precisa estar logado')
   }

})*/
router.beforeResolve(() => {
  //  console.log('Guarda de rota BeforeResolve')
})

/*router.afterEach((to, from)=>{
   /* console.log('Depois de entrar na rota')
    console.log(to)
    console.log(from)*/

//})
export default router
