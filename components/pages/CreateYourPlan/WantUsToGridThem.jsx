import styled from 'styled-components'
import CardContainer from './CardContainer'
import useStore from '../../../store'

const WantUsToGridThemDatas = {
  name: 'Want us to grind them?',
  datas: [
    {
      title: 'Wholebean',
      description: 'Best choice if you cherish the full sensory experience',
      value: 'Wholebean',
    },
    {
      title: 'Filter',
      description:
        'For drip or pour-over coffee methods such as V60 or Aeropress',
      value: 'FilterGrind',
    },
    {
      title: 'Cafetiére',
      description:
        'Course ground beans specially suited for french press coffee',
      value: 'Cafetiére',
    },
  ],
}

const { name, datas } = WantUsToGridThemDatas

const WantUsToGridThemStyle = styled.div`
  opacity: ${(props) => (props.isCapsuleChecked ? '0.5' : '1')};
  pointer-events: ${(props) => (props.isCapsuleChecked ? 'none' : 'auto')};
`

const WantUsToGridThem = () => {
  const HowDoYouDrinkYourCoffeeState = useStore(
    (state) => state.HowDoYouDrinkYourCoffeeState,
  )

  return (
    <WantUsToGridThemStyle
      isCapsuleChecked={HowDoYouDrinkYourCoffeeState === 'Capsules'}
    >
      <CardContainer name={name} datas={datas} />
    </WantUsToGridThemStyle>
  )
}

export default WantUsToGridThem
