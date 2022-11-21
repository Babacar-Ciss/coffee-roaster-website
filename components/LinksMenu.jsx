import Link from 'next/link'
import useStore from '../store'

const LinksMenu = () => {
  const closeMenu = useStore((state) => state.closeMenu)

  return (
    <>
      <Link onClick={() => closeMenu()} href="/">
        Home
      </Link>
      <Link onClick={() => closeMenu()} href="/About">
        About Us
      </Link>
      <Link onClick={() => closeMenu()} href="/Plans">
        Create Your Plan
      </Link>
    </>
  )
}

export default LinksMenu
