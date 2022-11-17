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
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 1439px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 70px;
    margin-bottom: 144px;
  }
`
const Title = styled.h2`
  color: var(--grey);
  font-size: 24px;
  line-height: 32px;
  flex-basis: 100%;
  margin-bottom: 72px;
`

const OurHeadquarter = () => {
  return (
    <OurHeadquarterStyled>
      <Title>Our headquarters</Title>
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
