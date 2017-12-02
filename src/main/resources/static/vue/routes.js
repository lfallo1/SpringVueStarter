import Home from './components/Home/Home.vue'
import UserFull from './components/User/UserFull.vue'
import Login from './components/Login/Login.vue'
import About from './components/About/About.vue'
import Contact from './components/Contact/Contact.vue'
import Support from './components/Support/Support.vue'
import UserMain from './components/User/UserMain.vue'
import UserInbox from './components/User/Inbox.vue'
import UserProfile from './components/User/Profile.vue'
import UserSettings from './components/User/Settings.vue'
import PageNotFound from './components/Errors/PageNotFound.vue';

export default [
    {path: '/', component: Home},
    {
        path: '/login',
        component: Login,
        meta: {
            isAnonymousRequired: true
        }
    },
    {path: '/userfull/:id', component: UserFull, props: true},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    {path: '/support', component: Support},
    {
        //user routes
        path: '/user/:user',
        component: UserMain,
        meta: {
            isAuthRequired: true
        },
        props: true,
        children: [
            {path: 'profile', component: UserProfile, props: true},
            {path: 'settings', component: UserSettings},
            {path: 'inbox', component: UserInbox}
        ]
    },
    {path: '*', component: PageNotFound}
]