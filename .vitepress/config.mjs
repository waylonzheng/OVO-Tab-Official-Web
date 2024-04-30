import { defineConfig, loadEnv  } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig((({ command, mode }) => {
  const { VITE_BASE_DIR } = loadEnv(mode, "./")
  return {
    title: "OVO Tab",
    description: "管理您的新标签页，支持管理书签、海量壁纸、数据云同步等多种功能",
    // 主题相关配置
    head: [['link', { rel: 'icon', href: `${VITE_BASE_DIR}icon.png` }]],
    assetsDir: './public',
    outDir:VITE_BASE_DIR === '/ovo-tab/' ? './mine' : './docs',
    base: VITE_BASE_DIR,
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
            { text: '插件介绍', link: '/installationHelp' },
            { text: 'chrome安装', link: '/installationHelp.html#chrome插件版安装' },
            { text: 'edge安装', link: '/installationHelp.html#edge插件版安装' },
            { text:'网页版', link: '/installationHelp.html#网页版'},
            { text: '压缩包下载', link: '/installationHelp.html#压缩包下载' }
          ]
        },
        {
          text: '使用',
          items: [
            { text: '更新指南', link: '/updateGuide.html'}
          ]
        },
        {
          text: '关于',
          items: [
            { text: '隐私政策', link: '/privacyPolicy' },
            { text: '合作推广', link: '/cooperation'},
            { text: '联系站长', link: 'https://www.waylon.online'}
          ]
        }
      ],
  
      // socialLinks: [
      //   { icon: 'github', link: 'https://www.waylon/ovotab/assets/icon-s0JiMFF1.png' }
      // ]
    }
  }
}))
