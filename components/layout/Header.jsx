import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import useStore from '../../store'
import LinksMenu from '../LinksMenu'

const HeaderStyle = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-inline: 24px;
  padding-top: 32px;
  padding-bottom: 10px;
  margin-bottom: 48px;
  background-color: var(--light-cream);
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-inline: 39px;
    position: absolute;
  }

  @media (min-width: 1440px) {
    padding-inline: 80px;
    position: absolute;
  }

  & img[alt='roasted coffee logo mobile'],
  & img[alt='roasted coffee hamburger menu'] {
    @media (min-width: 768px) {
      display: none;
    }
  }

  & img[alt='roasted coffee logo tablet and desktop'] {
    @media (min-width: 768px) {
      display: block;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  margin-bottom: 48px;
  display: none;

  @media (min-width: 768px) and (max-width: 1439px) {
    display: block;
    flex-direction: row;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 1440px) {
    display: block;
    flex-direction: row;
    padding: 0;
    margin: 0;
  }

  & a {
    color: var(--grey);
    font-family: 'Barlow';
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.923077px;
    text-transform: uppercase;
    text-decoration: none;
    margin-bottom: 32px;
    text-align: center;

    @media (min-width: 768px) and (max-width: 1439px) {
      margin-right: 33px;
    }

    @media (min-width: 1440px) {
      margin-right: 33px;
    }
  }

  & a:last-child {
    margin-right: 0;
  }
`

const Header = () => {
  const ToggleHamburgerClicked = useStore(
    (state) => state.ToggleHamburgerClicked,
  )
  const isHamburgerClicked = useStore((state) => state.isHamburgerClicked)

  return (
    <HeaderStyle>
      <Link href="/">
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="roasted coffee logo mobile"
          width="163"
          height="18"
        />
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="roasted coffee logo tablet and desktop"
          width="236"
          height="26"
        />
      </Link>

      {isHamburgerClicked ? (
        <Image
          onClick={() => ToggleHamburgerClicked()}
          style={{ cursor: 'pointer' }}
          src="/assets/shared/mobile/icon-close.svg"
          alt="roasted coffee hamburger menu"
          width="16"
          height="15"
        />
      ) : (
        <Image
          onClick={() => ToggleHamburgerClicked()}
          style={{ cursor: 'pointer' }}
          src="/assets/shared/mobile/icon-hamburger.svg"
          alt="roasted coffee hamburger menu"
          width="16"
          height="15"
        />
      )}
      <LinksContainer>
        <LinksMenu />
      </LinksContainer>
    </HeaderStyle>
  )
}

export default Header
