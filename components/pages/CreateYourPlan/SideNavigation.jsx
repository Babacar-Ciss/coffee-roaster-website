import styled from 'styled-components'
import SingleNavigation from './SingleNavigation'

const NavigationItem = [
  {
    number: '01',
    title: 'Preference',
  },
  {
    number: '02',
    title: 'Bean Type',
  },
  {
    number: '03',
    title: 'Quantity',
  },
  {
    number: '04',
    title: 'Grid Option',
  },
  {
    number: '05',
    title: 'Deliveries',
  },
]

const SideNavigationStyle = styled.ul`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    margin-left: 85px;
    margin-right: 125px;
  }
`

const SideNavigation = () => {
  return (
    <SideNavigationStyle>
      {NavigationItem.map((item, index) => (
        <SingleNavigation {...item} key={index} />
      ))}
    </SideNavigationStyle>
  )
}

export default SideNavigation
