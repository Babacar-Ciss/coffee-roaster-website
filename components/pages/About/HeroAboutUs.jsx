import styled from 'styled-components'

const Hero = styled.section`
  width: 100%;
  height: 400px;
  padding-inline: 24px;
  padding-top: 100px;
  border-radius: 10px;
  background-image: url('/assets/about/mobile/image-hero-whitecup.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: url('/assets/about/tablet/image-hero-whitecup.jpg');
    align-items: flex-start;
    padding-top: 118px;
    padding-left: 58px;
    margin-bottom: 144px;
  }

  @media (min-width: 1440px) {
    height: 600px;
    background-image: url('/assets/home/desktop/image-hero-coffeepress.jpg');
    align-items: flex-start;
    padding-left: 58px;
    margin-bottom: 136px;
    padding-top: 117px;
  }

  & h1 {
    font-weight: 900;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    color: #fefcf7;
    margin-bottom: 24px;

    @media (min-width: 768px) and (max-width: 1439px) {
      font-size: 32px;
      line-height: 48px;
      text-align: left;
    }

    @media (min-width: 1440px) {
      font-size: 72px;
      line-height: 72px;
      padding-right: 55%;
      text-align: left;
      margin-bottom: 32px;
    }
  }

  & p {
    font-family: 'Barlow';
    font-size: 15px;
    line-height: 25px;
    color: #fefcf7;
    opacity: 0.8;
    margin-bottom: 39px;

    @media (min-width: 768px) and (max-width: 1439px) {
      padding-right: 200px;
      padding-left: 0;
      text-align: left;
    }

    @media (min-width: 1440px) {
      font-size: 16px;
      line-height: 26px;
      padding-right: 65%;
      text-align: left;
      margin-bottom: 56px;
    }
  }
`

const HeroAboutUs = () => {
  return (
    <Hero>
      <h1>About Us</h1>
      <p>
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </Hero>
  )
}

export default HeroAboutUs
