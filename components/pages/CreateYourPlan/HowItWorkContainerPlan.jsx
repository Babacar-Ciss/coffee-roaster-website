import styled from 'styled-components'
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

const HowItWorkContainerPlanStyle = styled.div`
  width: calc(100% + 48px);
  margin-left: -24px;
  border-radius: 10px;
  padding-top: 80px;
  padding-bottom: 79px;
  padding-inline: 25px;
  background-color: var(--bg-color-footer);
  margin-bottom: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: calc(100% + 78px);
    margin-left: -39px;
    padding-left: 40px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-left: 0;
    padding-left: 88px;
  }
`

const HowItWorkContainerPlan = () => {
  return (
    <HowItWorkContainerPlanStyle>
      {HowItWorksItems.map((item, index) => (
        <HowItWorks {...item} key={index} index={index} type="plan" />
      ))}
    </HowItWorkContainerPlanStyle>
  )
}

export default HowItWorkContainerPlan
