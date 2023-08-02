import { createWebHistory, createRouter } from "vue-router";
import Home from "@/view/Home.vue"; 
import About from "@/view/About.vue";
import Contact from "@/view/Contact.vue"
import Produk from "@/view/Produk.vue"
import Detail from "@/view/Detail.vue"
import Kategori from "@/view/Kategori.vue"
import KategoriProduk from "@/view/KategoriProduk.vue"
import NotFound from "@/view/NotFound.vue"

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/KategoriProduk",
    name: "KategoriProduk",
    component: KategoriProduk,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;