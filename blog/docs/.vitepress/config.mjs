import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Internal Developer Platform',
  description: 'Documentation site for the Internal Developer Platform PoC',
  
  // Base path for GitHub Pages
  base: '/devplatform-2/',
  
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'IDP Blog',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Architecture', link: '/architecture/' },
      {
        text: 'Resources',
        items: [
          { text: 'Kubernetes', link: '/resources/kubernetes' },
          { text: 'Crossplane', link: '/resources/crossplane' },
          { text: 'GitOps', link: '/resources/gitops' },
          { text: 'Azure', link: '/resources/azure' },
        ]
      }
    ],
    
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is IDP?', link: '/introduction/what-is-idp' },
          { text: 'Getting Started', link: '/introduction/getting-started' }
        ]
      },
      {
        text: 'Architecture',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/architecture/' },
          { text: 'AKS Control Plane', link: '/architecture/aks-control-plane' },
          { text: 'Resource Abstractions', link: '/architecture/resource-abstractions' },
          { text: 'GitOps Workflow', link: '/architecture/gitops-workflow' }
        ]
      },
      {
        text: 'Developer Guide',
        collapsed: false,
        items: [
          { text: 'Requesting Resources', link: '/guide/requesting-resources' },
          { text: 'Resource Types', link: '/guide/resource-types' },
          { text: 'Working with Git', link: '/guide/working-with-git' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/devplatform-2' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025'
    },
    
    search: {
      provider: 'local'
    },
    
    // Enable dark mode
    appearance: true
  }
})
