import index from './components/index.vue'
import login from './components/login.vue'
import dashboard from './components/dashboard.vue'
import quiz from './components/quiz.vue'

export default [{path:'/',component:index},
{path:'/index',component:index},
{path:'/login',component:login},
{path:'/quiz/:c/:l/:limit',component:quiz},
{path:'/dashboard',component:dashboard}];