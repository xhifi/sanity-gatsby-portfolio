export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f5c80c59dcbf151775f110',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4s5ghwwx',
                  apiId: 'ceabdec8-4fbb-4871-aa4e-884f40d61827'
                },
                {
                  buildHookId: '61f5c80c48ae70e12d7cb212',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g5zkz26r',
                  apiId: '4a413b03-5d8a-439c-ba19-d0c78874d187'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xhifi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g5zkz26r.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
