import styled from 'styled-components'
import CreateYourPlanCTA from '../components/utils/CreateYourPlanCTA'
import Coffee from '../components/Coffee'
import Choice from '../components/Choice'
import HowItWorks from '../components/HowItWorks'

const CoffeeItems = [
  {
    picture: '/assets/home/desktop/image-gran-espresso.png',
    alt_picture: 'gran espresso picture',
    name: 'Gran Espresso',
    details:
      'Light and flavorful blend with cocoa and black pepper for an intense experience',
  },
  {
    picture: '/assets/home/desktop/image-planalto.png',
    alt_picture: 'planalto',
    name: 'Planalto',
    details:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
  },
  {
    picture: '/assets/home/desktop/image-piccollo.png',
    alt_picture: 'piccollo',
    name: 'Piccollo',
    details:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry ',
  },
  {
    picture: '/assets/home/desktop/image-danche.png',
    alt_picture: 'danche',
    name: 'Danche',
    details:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
  },
]

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

const HowItWorksItems = [
  {
    number: '01',
    description: 'Pick your coffee',
    details:
      'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    number: '02',
    description: 'Choose the frequency',
    details:
      'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    number: '03',
    description: 'Receive and enjoy!',
    details:
      'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
]

const HomeStyle = styled.div`
  padding-top: 40px;

  @media (min-width: 768px) and (max-width: 1439px) {
    padding-top: 53px;
  }

  @media (min-width: 1440px) {
    padding-top: 43px;
  }
`

const HeroContainer = styled.section`
  width: 100%;
  height: 498px;
  padding-inline: 24px;
  padding-top: 100px;
  border-radius: 10px;
  background-image: url('/assets/home/mobile/image-hero-coffeepress.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: url('/assets/home/tablet/image-hero-coffeepress.jpg');
    align-items: flex-start;
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
    font-family: 'Fraunces';
    font-weight: 900;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: #fefcf7;
    margin-bottom: 24px;

    @media (min-width: 768px) and (max-width: 1439px) {
      font-size: 48px;
      line-height: 48px;
      padding-right: 250px;
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
    padding-inline: 10px;
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

const CollectionContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 72px repeat(4, auto);
  row-gap: 48px;
  margin-bottom: 120px;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1439px) {
    grid-template-rows: 118px repeat(4, auto);
    text-align: left;
    row-gap: 32px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 196px auto;
    row-gap: 0;
    margin-bottom: 200px;
  }
`

const OurCollectionIMGContainer = styled.div`
  background: url('/assets/home/desktop/our-collection.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) and (max-width: 1439px) {
    background: url('/assets/home/tablet/our-collection-tablet.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (min-width: 1440px) {
    background: url('/assets/home/desktop/our-collection-desktop.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    grid-row: 1 / 2;
    grid-column: 1 / 5;
  }
`

const ChoicesContainer = styled.section`
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

const HowItWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1439px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &:last-child {
    padding-bottom: 79px;

    @media (min-width: 1440px) {
      padding-bottom: 200px;
    }
  }

  & h2:first-child {
    font-size: 24px;
    line-height: 32px;
    color: #83888f;
    margin-bottom: 80px;

    @media (min-width: 768px) and (max-width: 1439px) {
      flex-basis: 100%;
      margin-bottom: 40px;
    }

    @media (min-width: 1440px) {
      flex-basis: 100%;
      margin-bottom: 40px;
    }
  }
`

export default function Home() {
  return (
    <HomeStyle>
      <HeroContainer>
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <CreateYourPlanCTA />
      </HeroContainer>

      <CollectionContainer>
        <OurCollectionIMGContainer />
        {CoffeeItems.map((item, index) => (
          <Coffee
            key={index}
            path={item.picture}
            alt={item.alt_picture}
            name={item.name}
            description={item.details}
          />
        ))}
      </CollectionContainer>
      <ChoicesContainer>
        <WhyChooseUsContainer>
          <h2>Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </WhyChooseUsContainer>

        <ChoicesWrapper>
          {ChoiceReasons.map((item, index) => (
            <Choice {...item} key={index} />
          ))}
        </ChoicesWrapper>
      </ChoicesContainer>

      <HowItWorksContainer>
        <h2>How it works</h2>
        {HowItWorksItems.map((item, index) => (
          <HowItWorks {...item} index={index} />
        ))}
        <CreateYourPlanCTA />
      </HowItWorksContainer>
    </HomeStyle>
  )
}
