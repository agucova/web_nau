import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Inicio">
      <div className="prose">
        <StaticImage
          alt="NAU!"
          src="../images/isologotipo.svg"
          className='max-w-xs mb-10'
          placeholder='tracedSVG'
        />
        <h1>Nueva Acción Universitaria UC</h1>
        <p>Somos un movimiento político universitario de centro-izquierda fundado en la <a href="https://uc.cl">Universidad Católica de Chile</a>. Nos caracteriza ser un movimiento activo, propositivo, autónomo, tolerante, pluralista, progresista y <b>profundamente democrático</b>.</p>

        <p>Esta página web todavía está en construcción, pero puedes visitar nuestro <a href="https://linktr.ee/nau.uc">Linktree</a> o <a href="instagram.com/nau.puc/">Instagram</a> para saber más de nosotres.</p>

        Si estás interesado en sumarte o quieres hacer una consulta, puedes escribir a <a href="mailto:contacto@naupuc.cl">contacto@naupuc.cl</a>.
      </div>
    </Layout>
  )
}
export default IndexPage
