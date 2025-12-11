//在构建时确定的公共令牌、网站配置（如主题变体、标题）以及任何非敏感的项目配置。
export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000',
    },
  },
})
