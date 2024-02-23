import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OVO Tab",
  description: "自定义的新标签页，支持管理书签、海量壁纸、数据云同步等多种功能",
  // 主题相关配置
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  // base: '/ovotab/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { light: '/logo-black.svg', dark: '/logo.svg', },
    nav: [
      { text: '首页', link: '/' },
      { text: '网页版', link: 'https://www.waylon.online/ovotab/newtab.html' },
    ],

    sidebar: [
      {
        text: '安装',
        items: [
          { text: '插件介绍', link: '/installHelp' },
          { text: 'chrome安装', link: '/installHelp' }
        ]
      },
      {
        text: '使用',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '隐私政策', link: '/privacyPolicy' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://www.waylon/ovotab/assets/icon-s0JiMFF1.png' }
    // ]
  }
})
