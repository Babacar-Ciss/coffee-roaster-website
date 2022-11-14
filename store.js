import create from 'zustand'

const useStore = create((set) => ({
  isHamburgerClicked : false,
  ToggleHamburgerClicked : () => set((state) => ({ isHamburgerClicked: !state.isHamburgerClicked}))
}))


export default useStore;