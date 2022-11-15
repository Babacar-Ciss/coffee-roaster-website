import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import useStore from '../../store'
import LinksMenu from '../LinksMenu'

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 24px;

  & img[alt='roasted coffee hamburger menu'] {
    @media (min-width: 768px) and (max-width: 1439px) {
      display: none;
    }

    @media (min-width: 1440px) {
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

  return (
    <HeaderStyle>
      <Link href="/">
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="roasted coffee logo"
          width="163"
          height="18"
        />
      </Link>
      <Image
        onClick={ToggleHamburgerClicked}
        style={{ cursor: 'pointer' }}
        src="/assets/shared/mobile/icon-hamburger.svg"
        alt="roasted coffee hamburger menu"
        width="16"
        height="15"
      />
      <LinksContainer>
        <LinksMenu />
      </LinksContainer>
    </HeaderStyle>
  )
}

export default Header
