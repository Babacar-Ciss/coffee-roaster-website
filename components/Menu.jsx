import styled from 'styled-components'
import useStore from '../store'
import LinksMenu from './LinksMenu'

const MenuStyle = styled.div`
  z-index: 1000;
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(254, 252, 247, 0.504981) 0%,
    var(--light-cream) 70%
  );

  transform: matrix(1, 0, 0, -1, 0, 0);

  display: flex;
  justify-content: center;
`

const LinksContainer = styled.div`
  transform: matrix(1, 0, 0, -1, 0, 0);
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  & a {
    color: var(--dark-grey-blue);
    font-size: 24px;
    font-weight: 900;
    text-decoration: none;
    text-align: center;
    line-height: 32px;
    margin-bottom: 32px;
  }
`

const Menu = () => {
  const isHamburgerClicked = useStore((state) => state.isHamburgerClicked)

  return (
    isHamburgerClicked && (
      <MenuStyle>
        <LinksContainer>
          <LinksMenu />
        </LinksContainer>
      </MenuStyle>
    )
  )
}

export default Menu
