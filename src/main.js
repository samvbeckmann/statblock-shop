import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import autosize from 'autosize'

require('bootstrap');
require('bootstrap/dist/css/bootstrap.css')

new Vue({
  el: 'app',
  store,
  components:{App}
})

autosize(document.querySelectorAll('textarea'))