import styled from 'styled-components'

const HeadquarterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;

  img {
    margin-bottom: 48px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--dark-grey-blue);
  font-size: 16px;
  line-height: 26px;

  @media (min-width: 768px) and (max-width: 1439px) {
    text-align: left;
  }

  @media (min-width: 1440px) {
    text-align: left;
  }
  p {
    font-family: 'Barlow';
  }
`

const CountryName = styled.h2`
  font-weight: 900;
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 22px;
`

const Headquarter = ({ path, country, address, city, post, phone }) => {
  return (
    <HeadquarterStyle>
      <img src={path} alt={`${country} picture`} />
      <Wrapper>
        <CountryName>{country}</CountryName>
        <p>{address}</p>
        <p>{city}</p>
        <p>{post}</p>
        <p>{phone}</p>
      </Wrapper>
    </HeadquarterStyle>
  )
}

export default Headquarter
