import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

require('bootstrap');
require('bootstrap/dist/css/bootstrap.css')

new Vue({
  el: 'app',
  store,
  components:{App}
})

Vue.directive('autosize', {
	bind: function() {
		var self = this
			Vue.nextTick(function() {
			autosize(self.el)
		})
	},

	update: function(value) {
		var self = this
		Vue.nextTick(function() {
			self.el.value = value
			autosize.update(self.el)
		})
	},

	unbind: function() {
		autosize.destroy(this.el)
	}
});

//autosize(document.querySelectorAll('textarea'))