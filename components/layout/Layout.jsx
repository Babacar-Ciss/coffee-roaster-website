import styled from 'styled-components'
import Head from 'next/head'
import Header from './Header'
import Menu from '../Menu'

const LayoutStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-color);
  padding-inline: 24px;
  padding-top: 32px;
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
          href="https://fonts.googleapis.com/css2?family=Barlow&family=Fraunces:opsz,wght@9..144,400;9..144,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Menu />
      {children}
    </LayoutStyle>
  )
}

export default Layout
