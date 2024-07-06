const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/Home.vue')
    },
    {
        path: '/center',
        name: 'center',
        component: () => import('@/views/center/Center.vue')
    },
    {
        path: "/user-manage/adduser",
        name: "adduser",
        component: () => import("@/views/user-manage/UserAdd.vue")
    },
    {
        path: "/user-manage/userlist",
        name: "userlist",
        component: () => import("@/views/user-manage/UserList.vue")
    },
    {
        path: "/news-manage/addnews",
        name: "addnews",
        component: () => import("@/views/news-manage/NewsAdd.vue")
    },
    {
        path: "/news-manage/newslist",
        name: "newslist",
        component: () => import("@/views/news-manage/NewsList.vue")
    },
    {
        path: "/product-manage/addproduct",
        name: "addproduct",
        component: () => import("@/views/product-manage/ProductAdd.vue")
    },
    {
        path: "/product-manage/productlist",
        name: "productlist",
        component: () => import("@/views/product-manage/ProductList.vue")
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/views/NotFound.vue')
    }
]

export default routes