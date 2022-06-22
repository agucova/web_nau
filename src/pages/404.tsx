import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 | No encontrado">
      <div className="prose">
        <h1>Página no encontrada</h1>
        <p>
          Lo sentimos{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          no pudimos encontrar la página que estabas buscando.
          <br />
          <Link to="/">Volver al inicio</Link>.
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
