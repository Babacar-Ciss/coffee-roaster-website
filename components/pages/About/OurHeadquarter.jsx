import styled from 'styled-components'
import Headquarter from './Headquarter'

const hearquartersItems = [
  {
    path: '/assets/about/desktop/illustration-uk.svg',
    country: 'United Kingdom',
    address: '68 Asfordby Rd',
    city: 'Alcaston',
    post: 'SY6 1YA',
    phone: '+44 1241 918425',
  },
  {
    path: '/assets/about/desktop/illustration-canada.svg',
    country: 'Canada',
    address: '1528  Eglinton Avenue',
    city: 'Toronto',
    post: 'Ontario M4P 1A6',
    phone: '+1 416 485 2997',
  },
  {
    path: '/assets/about/desktop/illustration-australia.svg',
    country: 'Australia',
    address: '36 Swanston Street',
    city: 'Kewell',
    post: 'Victoria',
    phone: '+61 4 9928 3629',
  },
]

const OurHeadquarterStyled = styled.section`
  margin-bottom: 120px;
`

const OurHeadquarter = () => {
  return (
    <OurHeadquarterStyled>
      {hearquartersItems.map((item, index) => (
        <Headquarter
          key={index}
          path={item.path}
          country={item.country}
          address={item.address}
          city={item.city}
          post={item.post}
          phone={item.phone}
        />
      ))}
    </OurHeadquarterStyled>
  )
}

export default OurHeadquarter
