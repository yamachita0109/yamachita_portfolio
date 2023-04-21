import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(
  AOS.init({
    // once: true,
    // disable: 'phone',
    // duration: 750,
    // easing: 'ease-out-quart',
  })
)