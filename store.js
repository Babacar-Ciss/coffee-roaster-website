import create from 'zustand'

const useStore = create((set) => ({
  isHamburgerClicked : false,
  ToggleHamburgerClicked : () => set((state) => ({ isHamburgerClicked: !state.isHamburgerClicked})),
  closeMenu : () => set({ isHamburgerClicked: false})
}))


export default useStore;