import DButton from "./components/D-Button.vue";

const Dino = {
 install(Vue) {
  Vue.component("hello-world", DButton);
 }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Dino);
}

export default Dino;