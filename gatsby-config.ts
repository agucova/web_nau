import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://naupuc.cl`,
    title: `Nueva Acción Universitaria UC`,
    titleTemplate: `NAU UC | %s`,
    description: `La Nueva Acción Universitaria (NAU) es un movimiento político universitario de centro-izquierda de la Universidad Católica de Chile.`,
    image: `/assets/images/banner-meta.png`,
    twitterUsername: `@naupuc`,
    instagramUsername: `nau.puc`,
    youtubeUsername: `UCvX03TlevSaxsihkYiXRcTg`,
    language: "es",
    locale: "es_CL",
    menuLinks: [
      {
        name: "Inicio",
        link: "/",
      },
      {
        name: "Quiénes somos",
        link: "/quienes-somos",
      },
      {
        name: "Nuestra historia",
        link: "/nuestra-historia",
      },
      {
        name: "Contacto",
        link: "/contacto",
      }
    ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
      },
    }
  ]
};

export default config;
