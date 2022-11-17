import styled from 'styled-components'
import Choice from '../Home/Choice'

const ChoiceReasons = [
  {
    path: '/assets/home/desktop/icon-coffee-bean.svg',
    alt_picture: 'coffee bean logo',
    description: 'Gran Espresso',
    details:
      'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
  },
  {
    path: '/assets/home/desktop/icon-gift.svg',
    alt_picture: 'gift logo',
    description: 'Exclusive benefits',
    details:
      'Special offers and swag when you subscribe, including 30% off your first shipment.',
  },
  {
    path: '/assets/home/desktop/icon-truck.svg',
    alt_picture: 'lorry logo',
    description: 'Free shipping',
    details:
      'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
  },
]

const ChoicesContainerStyle = styled.section`
  display: grid;
  grid-template-columns: 8% 84% 8%;
  grid-template-rows: auto 36px 625px;
  background-color: var(--bg-color-footer);
  border-radius: 10px;
  margin-bottom: 592px;

  @media (min-width: 768px) and (max-width: 1439px) {
    grid-template-rows: 573px;
    background-color: transparent;
    margin-bottom: 420px;
  }

  @media (min-width: 1440px) {
    grid-template-rows: 573px;
    background-color: transparent;
    margin-bottom: 220px;
  }
`

const WhyChooseUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dark-grey-blue);
  padding-top: 64px;
  padding-inline: 24px;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  padding-bottom: 28px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (min-width: 768px) and (max-width: 1439px) {
    padding-top: 56px;
    border-radius: 10px;
  }

  @media (min-width: 1440px) {
    grid-template-rows: 577px auto;
    border-radius: 10px;
    padding-top: 100px;
  }

  & h2 {
    font-family: 'Fraunces';
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    color: var(--light-cream);
    margin-bottom: 24px;

    @media (min-width: 768px) and (max-width: 1439px) {
      font-size: 32px;
      line-height: 48px;
    }

    @media (min-width: 1440px) {
      font-size: 40px;
      line-height: 48px;
    }
  }

  & p {
    font-family: 'Barlow';
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: var(--light-cream);
    opacity: 0.8;

    @media (min-width: 768px) and (max-width: 1439px) {
      padding-inline: 74px;
    }

    @media (min-width: 1440px) {
      font-size: 16px;
      line-height: 26px;
      padding-inline: 350px;
    }
  }
`

const ChoicesWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;

  @media (min-width: 768px) and (max-width: 1439px) {
    grid-row: 1 / 2;
    margin-top: 260px;
  }

  @media (min-width: 1440px) {
    grid-row: 2 / 3;
    justify-content: space-between;
    margin-top: -236px;
    display: flex;
  }
`

const ChoiceContainer = () => {
  return (
    <ChoicesContainerStyle>
      <WhyChooseUsContainer>
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </WhyChooseUsContainer>

      <ChoicesWrapper>
        {ChoiceReasons.map((item, index) => (
          <Choice {...item} key={index} />
        ))}
      </ChoicesWrapper>
    </ChoicesContainerStyle>
  )
}

export default ChoiceContainer
