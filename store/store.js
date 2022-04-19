import create from "zustand";

const useStore = create(set => ({
  trips: {},
  setTrips: (trips) => set({ trips }),
  addTripPlace: (place, day, placeAt) => set(state => ({
    trips: state.trips.map(t => {
      t.places.splice(placeAt, 0, place)
      if (day === t.day) {
        return {
          ...t,
          places: t.places
        }
      }
    }),
  }))
}))

export default useStore;
