import Vue from 'vue'
import IndicatorVue from './src/index.vue'

const Indicator = Vue.extend(IndicatorVue)

let instance

export default {
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({ el: document.createElement('div') })
    }
    if (instance.visible) return
    instance.text = typeof options === 'string' ? options : options.text || ''
    instance.type = options.type || 'default'
    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
      instance.visible = true
    })
  },

  close() {
    if (instance) {
      instance.visible = false
    }
  },
}
