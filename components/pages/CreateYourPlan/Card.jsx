import styled from 'styled-components'
import useStore from '../../../store'
import shallow from 'zustand/shallow'

const CardStyle = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.selected ? 'var(--dark-cyan)' : 'var(--bg-card)'};
  border-radius: 10px;
  padding: 24px 25px;
  margin-bottom: 16px;
  color: ${(props) =>
    props.selected ? 'var(--light-cream)' : 'var(--dark-grey-blue)'};
  color: ;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.selected ? 'var(--dark-cyan)' : 'var(--pale-orange)'};
    transition: all 0.5s;
  }

  &:last-child {
    margin-bottom: 0;

    @media (min-width: 768px) {
      margin-right: 0;
    }

    @media (min-width: 1440px) {
      margin-right: 0;
    }
  }

  @media (min-width: 768px) {
    padding: 32px 57px 84px 25px;
    margin-right: 10px;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    padding: 32px 28px 84px 28px;
    margin-right: 23px;
  }
`

const Title = styled.h2`
  color: inherit;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`

const Description = styled.p`
  color: inherit;
  font-family: 'Barlow';
  font-size: 16px;
  line-height: 26px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`

const Card = ({
  title,
  description,
  value,
  indexSelected,
  cardSelected,
  selectedCardHandler,
}) => {
  const [
    SetHowDoYouDrinkYourCoffeeState,
    SetWhatTypeOfCoffeeState,
    SetHowMuchWouldYouLikeState,
    SetWantUsToGridThemState,
    SetHowOftenShouldWeDeliverState,
    SetAllFullFill,
  ] = useStore(
    (state) => [
      state.SetHowDoYouDrinkYourCoffeeState,
      state.SetWhatTypeOfCoffeeState,
      state.SetHowMuchWouldYouLikeState,
      state.SetWantUsToGridThemState,
      state.SetHowOftenShouldWeDeliverState,
      state.SetAllFullFill,
    ],
    shallow,
  )

  // prettier-ignore
  const SetStateChoiceHandler = (value) => {
    if ( value === 'Capsules' ||  value === 'Filter' ||  value === 'Expresso') { SetHowDoYouDrinkYourCoffeeState(value) } 

    else if ( value === 'Single Origin' || value === 'Decaf' || value === 'Blended') { SetWhatTypeOfCoffeeState(value) } 
    
    else if ( value === '250g' || value === '500g' || value === '1000g') { SetHowMuchWouldYouLikeState(value) } 
    
    else if ( value === 'Wholebean' || value === 'FilterGrind' || value === 'Cafetiére') { SetWantUsToGridThemState(value) }

    else if ( value === 'Every week' || value === 'Every 2 weeks' || value === 'Every month') { SetHowOftenShouldWeDeliverState(value) }
  }

  return (
    <CardStyle
      value={value}
      selected={indexSelected === cardSelected}
      onClick={() => {
        selectedCardHandler(indexSelected)
        SetStateChoiceHandler(value)
        SetAllFullFill()
      }}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardStyle>
  )
}

export default Card
