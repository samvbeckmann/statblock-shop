import Vue from 'vue'

import autosize from 'autosize'

export const Autosize = {
	bind: function(el) {
		Vue.nextTick(function() {
			autosize(el)
		})
	},

	update: function(el) {
		Vue.nextTick(function() {
			autosize.update(el)
		})
	},

	unbind: function(el) {
		autosize.destroy(el)
	}
}

Vue.directive('autosize', Autosize);