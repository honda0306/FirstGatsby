import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hey everyone, I have an announcement:</h1>
    <h3>This is my first <i>real</i> Gatsby site.</h3>
    <p>I know, I know... I'm a bit late to the game, but I'm still very excited to learn about it!</p>
    {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
