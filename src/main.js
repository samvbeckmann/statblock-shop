import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import autosize from 'autosize'

new Vue({
  el: 'app',
  store,
  components:{App}
})

autosize(document.querySelectorAll('textarea'))