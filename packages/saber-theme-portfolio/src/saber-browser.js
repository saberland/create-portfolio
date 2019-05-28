import 'normalize.css/normalize.css'
import 'typeface-source-sans-pro/index.css'
import 'grid.css/grid.css'
import './css/global.css'
import HomeSection from './components/HomeSection.vue'

export default ({ Vue, setHead }) => {
  Vue.component(HomeSection.name, HomeSection)

  setHead(vm => {
    const { style } = vm.$themeConfig
    return {
      bodyAttrs: {
        class: `is-${style}-style`
      },
      meta: [
        {
          name: 'description',
          content: vm.$siteConfig.description
        }
      ]
    }
  })
}
