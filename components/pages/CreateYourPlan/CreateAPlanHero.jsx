import styled from 'styled-components'

const Hero = styled.section`
  width: 100%;
  height: 400px;
  padding-inline: 24px;
  padding-top: 100px;
  border-radius: 10px;
  background-image: url('/assets/plan/mobile/image-hero-blackcup.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  text-align: center;

  @media (min-width: 768px) {
    background-image: url('/assets/plan/tablet/image-hero-blackcup.jpg');
    align-items: flex-start;
    padding-top: 118px;
    padding-left: 58px;
    margin-bottom: 144px;
  }

  @media (min-width: 1440px) {
    height: 450px;
    background-image: url('/assets/plan/desktop/image-hero-blackcup.jpg');
    align-items: flex-start;
    padding-top: 137px;
    padding-left: 58px;
    margin-bottom: 136px;
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
    }
  }
`

const CreateAPlanHero = () => {
  return (
    <Hero>
      <h1>Create a plan</h1>
      <p>
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </p>
    </Hero>
  )
}

export default CreateAPlanHero
