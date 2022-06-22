import * as React from 'react'
import SEO from './seo'
import "@fontsource/inter"
import { graphql, StaticQuery } from 'gatsby'
import Navbar from './navbar'
import Footer from './footer'



const pageMetadataQuery = graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            twitterUsername
            instagramUsername
            youtubeUsername
            menuLinks {
              name
              link
            }
          }
        }
      }
    `

const Layout = ({ pageTitle, children }) => {
  return (
    <StaticQuery
      query={pageMetadataQuery}
      render={data => (
        <div>
          <SEO />
          <header>
            <Navbar navItems={data.site.siteMetadata.menuLinks} />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer
              navItems={data.site.siteMetadata.menuLinks}
              twitterUsername={data.site.siteMetadata.twitterUsername}
              instagramUsername={data.site.siteMetadata.instagramUsername}
              youtubeUsername={data.site.siteMetadata.youtubeUsername} />
          </footer>
        </div>
      )}
    />
  )
}

export default Layout
