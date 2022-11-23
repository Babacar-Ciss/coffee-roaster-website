import styled from 'styled-components'
import Card from './Card'
import { useState } from 'react'
import useStore from '../../../store'

const CardContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`

const WrapperName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContainerName = styled.h2`
  color: var(--grey);
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 32px;
  padding-right: 25%;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 32px;
    line-height: 48px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 56px;
    font-size: 40px;
    line-height: 48px;
    padding-right: 0;
  }
`

const Arrow = styled.img`
  color: var(--grey);
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 32px;
  cursor: pointer;
  rotate: ${(props) => (props.arrowClicked ? '180deg' : null)};
  margin-top: -10px;
`

const CardContainer = ({ name, datas }) => {
  const [isChoiceClose, setIsChoiceClose] = useState(false)
  const [selected, setSelected] = useState(null)
  const HowDoYouDrinkYourCoffeeState = useStore(
    (state) => state.HowDoYouDrinkYourCoffeeState,
  )

  const selectedCardHandler = (index) => {
    if (selected === index) {
      setSelected(null)
    }
    setSelected(index)
  }

  return (
    <CardContainerStyle>
      <WrapperName onClick={() => setIsChoiceClose(!isChoiceClose)}>
        <ContainerName>{name}</ContainerName>
        <Arrow
          arrowClicked={isChoiceClose}
          src="/assets/plan/desktop/icon-arrow.svg"
          alt="Arrow"
        />
      </WrapperName>
      {isChoiceClose ? (
        <Wrapper>
          {datas.map((data, index) => (
            <Card
              {...data}
              key={index}
              indexSelected={index}
              cardSelected={selected}
              selectedCardHandler={selectedCardHandler}
            />
          ))}
        </Wrapper>
      ) : null}
    </CardContainerStyle>
  )
}

export default CardContainer
