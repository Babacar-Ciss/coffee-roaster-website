import styled from 'styled-components'
import useStore from '../../../store'
import shallow from 'zustand/shallow'

const SingleNavigationStyle = styled.li`
  width: 255px;
  margin-bottom: 24px;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(131, 136, 143, 0.25);
  cursor: pointer;
  opacity: 0.4;

  &:hover {
    opacity: 0.6;
    transition: all 0.3s;
  }

  &:last-child {
    padding-bottom: 0;
    border: none;
  }

  h4 {
    color: red;
    margin-right: 29px;
  }

  p {
    color: var(--dark-grey-blue);
  }
`

const SingleNavigation = ({ number, title }) => {
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

  const ColorHightLight = (number) => {
    if (number === '01' && HowDoYouDrinkYourCoffeeState) {
      return { color: 'var(--dark-cyan)' }
    } else if (number === '02' && WhatTypeOfCoffeeState) {
      return { color: 'var(--dark-cyan)' }
    } else if (number === '03' && HowMuchWouldYouLikeState) {
      return { color: 'var(--dark-cyan)' }
    } else if (number === '04' && WantUsToGridThemState) {
      return { color: 'var(--dark-cyan)' }
    } else if (number === '05' && HowOftenShouldWeDeliverState) {
      return { color: 'var(--dark-cyan)' }
    } else {
      return { color: 'var(--grey)' }
    }
  }

  console.log(HowDoYouDrinkYourCoffeeState)

  return (
    <SingleNavigationStyle>
      <h4 style={ColorHightLight(number)}>{number}</h4>
      <p>{title}</p>
    </SingleNavigationStyle>
  )
}

export default SingleNavigation
