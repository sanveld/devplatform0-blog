// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behavior.
    DefaultTheme.enhanceApp(ctx)
  }
}
