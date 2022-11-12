import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = () => {
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
        style={{ cursor: 'pointer' }}
        src="/assets/shared/mobile/icon-hamburger.svg"
        alt="roasted coffee logo"
        width="16"
        height="15"
      />
    </HeaderStyle>
  )
}

export default Header
