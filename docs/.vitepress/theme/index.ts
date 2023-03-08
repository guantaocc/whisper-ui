// .vitepress/theme/index.js

import DefaultTheme from 'vitepress/theme';
import './style/var.css';
import './style/style.css';
import '@whisper-ui/theme-chalk/src/index.scss';
import WhisperUI from '@whisper-ui/components';
export default {
  ...DefaultTheme,
  // Layout,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(WhisperUI)
  }
};
