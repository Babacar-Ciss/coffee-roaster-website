import styled from 'styled-components'
import useStore from '../../../store'
import shallow from 'zustand/shallow'

const OrderStyle = styled.p`
  font-weight: 900;
  font-size: 24px;
  line-height: 40px;
  color: ${(props) =>
    props.type === 'summary' ? 'var(--grey)' : 'var(--light-cream)'};

  span {
    color: var(--dark-cyan);
  }
`

const Order = ({ type }) => {
  const BLANK_SPACE = '_______'

  const [
    HowDoYouDrinkYourCoffeeState,
    WhatTypeOfCoffeeState,
    HowMuchWouldYouLikeState,
    WantUsToGridThemState,
    HowOftenShouldWeDeliverState,
  ] = useStore(
    (state) => [
      state.HowDoYouDrinkYourCoffeeState,
      state.WhatTypeOfCoffeeState,
      state.HowMuchWouldYouLikeState,
      state.WantUsToGridThemState,
      state.HowOftenShouldWeDeliverState,
    ],
    shallow,
  )
  console.log(HowDoYouDrinkYourCoffeeState)

  // prettier-ignore
  return (
    <OrderStyle type={type}>
      “I drink my coffee as
      <span> { HowDoYouDrinkYourCoffeeState ? HowDoYouDrinkYourCoffeeState : BLANK_SPACE} </span>
      , with a
      <span> {WhatTypeOfCoffeeState ? WhatTypeOfCoffeeState : BLANK_SPACE} </span>
      type of bean.
      <span> {HowMuchWouldYouLikeState ? HowMuchWouldYouLikeState : BLANK_SPACE} </span>

      {HowDoYouDrinkYourCoffeeState !== 'Capsules' ? (
        <>
          ground ala
          <span> {` ${ WantUsToGridThemState === 'FilterGrind' ? 'Filter' : 
                       WantUsToGridThemState ? WantUsToGridThemState : BLANK_SPACE } `} </span>
        </> ) : null}

      , sent to me
      <span> { HowOftenShouldWeDeliverState ? HowOftenShouldWeDeliverState : BLANK_SPACE} </span>
      .”
    </OrderStyle>
  )
}

export default Order
