// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
/*
* STYLES
* */
import './assets/Bootstrap/dist/css/bootstrap-reboot.css';
import './assets/Bootstrap/dist/css/bootstrap.css';
import './assets/Bootstrap/dist/css/bootstrap-grid.css';
import './assets/css/jquery.mCustomScrollbar.min.css';
import './assets/css/daterangepicker.css';
import './assets/css/bootstrap-select.css';
import './assets/css/theme-styles.css';
import './assets/css/blocks.css';
import './assets/css/fonts.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
