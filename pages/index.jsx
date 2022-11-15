import styled from 'styled-components'
import Image from 'next/image'
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
  width: 100%;
  background-color: var(--light-cream);
  padding-inline: 24px;
  padding-top: 40px;
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

  & h1 {
    font-family: 'Fraunces';
    font-weight: 900;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: #fefcf7;
    margin-bottom: 24px;
  }

  & p {
    font-family: 'Barlow';
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #fefcf7;
    opacity: 0.8;
    padding-inline: 10px;
    margin-bottom: 39px;
  }
`

const CollectionContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 72px repeat(4, auto);
  row-gap: 48px;
  margin-bottom: 120px;
`

const OurCollectionIMGContainer = styled.div`
  background: url('/assets/home/desktop/our-collection.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const ChoicesContainer = styled.section`
  display: grid;
  grid-template-columns: 8% 84% 8%;
  grid-template-rows: auto 36px 625px;
  background-color: var(--bg-color-footer);
  border-radius: 10px;
  margin-bottom: 717px;
`

const WhyChooseUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dark-grey-blue);
  padding-top: 64px;
  padding-inline: 24px;
  grid-column: 1/4;
  grid-row: 1 / 2;
  padding-bottom: 28px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  & h2 {
    font-family: 'Fraunces';
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    color: var(--light-cream);
    margin-bottom: 24px;
  }

  & p {
    font-family: 'Barlow';
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: var(--light-cream);
    opacity: 0.8;
  }
`

const ChoicesWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
`

const HowItWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:last-child {
    padding-bottom: 79px;
  }

  & h2:first-child {
    font-size: 24px;
    line-height: 32px;
    color: #83888f;
    margin-bottom: 80px;
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
          {ChoiceReasons.map((item) => (
            <Choice {...item} />
          ))}
        </ChoicesWrapper>
      </ChoicesContainer>

      <HowItWorksContainer>
        <h2>How it works</h2>
        {HowItWorksItems.map((item) => (
          <HowItWorks {...item} />
        ))}
        <CreateYourPlanCTA />
      </HowItWorksContainer>
    </HomeStyle>
  )
}
