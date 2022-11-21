import styled from 'styled-components'
import CardContainer from './CardContainer'

const WhatTypeOfCoffeeDatas = {
  name: 'What type of coffee?',
  datas: [
    {
      title: 'Single Origin',
      description:
        'Distinct, high quality coffee from a specific family-owned farm',
      value: 'Single Origin',
    },
    {
      title: 'Decaf',
      description:
        'Just like regular coffee, except the caffeine has been removed',
      value: 'Decaf',
    },
    {
      title: 'Blended',
      description:
        'Combination of two or three dark roasted beans of organic coffees',
      value: 'Blended',
    },
  ],
}

const { name, datas } = WhatTypeOfCoffeeDatas

const WhatTypeOfCoffeeStyle = styled.div``

const WhatTypeOfCoffee = () => {
  return (
    <WhatTypeOfCoffeeStyle>
      <CardContainer name={name} datas={datas} />
    </WhatTypeOfCoffeeStyle>
  )
}

export default WhatTypeOfCoffee
