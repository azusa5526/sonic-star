import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import animated from 'animate.css';
import WOW from 'wow.js';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import i18n from './common/plugins/vue-i18n';
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import EN from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

Vue.config.productionTip = false;

// animated.css & wow.js
Vue.use(animated);
new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 65,
  mobile: true,
  live: true,
  resetAnimation: true
}).init();

// VeeValidate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
localize('en', EN);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});

// Global Loading component
Vue.component('Loading', Loading);

new Vue({
  i18n,
  render: (h) => h(App)
}).$mount('#app');
