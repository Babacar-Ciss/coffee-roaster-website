import styled from 'styled-components'
import CreateYourPlanCTA from '../../utils/CreateYourPlanCTA'
import HowItWorks from '../Home/HowItWorks'

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

const HowItWorksContainerStyle = styled.div`
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

const HowItWorksContainer = () => {
  return (
    <HowItWorksContainerStyle>
      <h2>How it works</h2>
      {HowItWorksItems.map((item, index) => (
        <HowItWorks {...item} key={index} index={index} />
      ))}
      <CreateYourPlanCTA />
    </HowItWorksContainerStyle>
  )
}

export default HowItWorksContainer
