import * as React from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'gatsby'
import SEO from './seo'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='p-20'>
      <SEO title={pageTitle} />
      <main>
        {children}
      </main>
      <hr className='mt-6 mb-2'/>
      <footer className="prose">Nueva Acción Universitaria de Chile | 2022</footer>
    </div>
  )
}

export default Layout
