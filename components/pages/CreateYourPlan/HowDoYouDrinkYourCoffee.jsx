import styled from 'styled-components'
import CardContainer from './CardContainer'

const HowDoYouDrinkDatas = {
  name: 'How do you drink your coffee?',
  datas: [
    {
      title: 'Capsule',
      description: 'Compatible with Nespresso systems and similar brewers',
      value: 'Capsules',
    },
    {
      title: 'Filter',
      description:
        'For pour over or drip methods like Aeropress, Chemex, and V60',
      value: 'Filter',
    },
    {
      title: 'Expresso',
      description:
        'Dense and finely ground beans for an intense, flavorful experience',
      value: 'Expresso',
    },
  ],
}

const { name, datas } = HowDoYouDrinkDatas

const HowDoYouDrinkYourCoffeeStyle = styled.div``

const HowDoYouDrinkYourCoffee = () => {
  return (
    <HowDoYouDrinkYourCoffeeStyle>
      <CardContainer name={name} datas={datas} />
    </HowDoYouDrinkYourCoffeeStyle>
  )
}

export default HowDoYouDrinkYourCoffee
