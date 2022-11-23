import create from 'zustand'
import CalculateTotalToPayPerMounth from './CalculateTotalToPayPerMounth';


const useStore = create((set) => ({
  
  
  isHamburgerClicked : false,
  ToggleHamburgerClicked : () => set((state) => ({ isHamburgerClicked: !state.isHamburgerClicked})),
  closeMenu : () => set({ isHamburgerClicked: false}),


  isOrderSummaryModalShown : false,
  OpenOrderSummaryModal: () => set({ isOrderSummaryModalShown: true}),
  CloseOrderSummaryModal : () => set({ isOrderSummaryModalShown: false}),

  HowDoYouDrinkYourCoffeeState : null,
  SetHowDoYouDrinkYourCoffeeState : (value) => set({HowDoYouDrinkYourCoffeeState : value}),
  
  WhatTypeOfCoffeeState : null,
  SetWhatTypeOfCoffeeState : (value) => set({WhatTypeOfCoffeeState : value}),

  HowMuchWouldYouLikeState : null,
  SetHowMuchWouldYouLikeState : (value) => set({HowMuchWouldYouLikeState : value}),

  WantUsToGridThemState : null,
  SetWantUsToGridThemState : (value) => set({WantUsToGridThemState : value}),
  ReinitializeWantUsToGridThemState : () => set({WantUsToGridThemState : null}),

  HowOftenShouldWeDeliverState : null,
  SetHowOftenShouldWeDeliverState : (value) => set({HowOftenShouldWeDeliverState : value}),

  allFullFill : false,  
  SetAllFullFill : () => set((state) => ({allFullFill : [state.HowDoYouDrinkYourCoffeeState, state.WhatTypeOfCoffeeState, state.HowMuchWouldYouLikeState, (state.HowDoYouDrinkYourCoffeeState === "Capsules" || state.WantUsToGridThemState ? true : null),  state.HowOftenShouldWeDeliverState].every(item => item !== null)})),

  // TotalToPay : 0,
  // CalculateTotalToPay : (weight, frequency) => set( (state) =>  ({TotalToPay : CalculateTotalToPayPerMounth(weight, frequency)}) )
}))


export default useStore;