import styled from 'styled-components'
import Head from 'next/head'
import Header from './Header'
import Menu from '../Menu'
import Footer from './Footer'

const LayoutStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-color);
  padding: 32px 24px 72px 24px;

  @media (min-width: 768px) and (max-width: 1439px) {
    padding: 40px 39px 72px 39px;
  }

  @media (min-width: 1440px) {
    padding: 43px 80px 88px 80px;
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Fraunces:opsz,wght@9..144,400;9..144,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Menu />
      <Footer />
      {children}
    </LayoutStyle>
  )
}

export default Layout
