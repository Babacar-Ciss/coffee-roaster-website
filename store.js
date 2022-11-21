import create from 'zustand'

const useStore = create((set) => ({
  isHamburgerClicked : false,
  ToggleHamburgerClicked : () => set((state) => ({ isHamburgerClicked: !state.isHamburgerClicked})),
  closeMenu : () => set({ isHamburgerClicked: false}),

  HowDoYouDrinkYourCoffeeState : null,
  SetHowDoYouDrinkYourCoffeeState : (value) => set({HowDoYouDrinkYourCoffeeState : value}),
  
  WhatTypeOfCoffeeState : null,
  SetWhatTypeOfCoffeeState : (value) => set({WhatTypeOfCoffeeState : value}),

  HowMuchWouldYouLikeState : null,
  SetHowMuchWouldYouLikeState : (value) => set({HowMuchWouldYouLikeState : value}),

  WantUsToGridThemState : null,
  SetWantUsToGridThemState : (value) => set({WantUsToGridThemState : value}),

  HowOftenShouldWeDeliverState : null,
  SetHowOftenShouldWeDeliverState : (value) => set({HowOftenShouldWeDeliverState : value}),

  allFullFill : false,  
  SetAllFullFill : () => set((state) => ({allFullFill : [state.HowDoYouDrinkYourCoffeeState, state.WhatTypeOfCoffeeState, state.HowMuchWouldYouLikeState, state.WantUsToGridThemState, state.HowOftenShouldWeDeliverState].every(item => item !== null)}))

}))


export default useStore;