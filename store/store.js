import create from "zustand";

const useStore = create(set => ({
  trips: [
    {
        day: 1,
        places: [
            {
                city: {
                    name: 'Nashville',
                    state: 'TN'
                }
            },
            {
                attraction: {
                    name: 'Some Attraction',
                    details: ['Expected duration: 2 hours']
                }
            },
            {
                attraction: {
                    name: 'Some Restaurant',
                    details: ['Expected duration: 2 hours']
                }
            },
            {
                attraction: {
                    name: 'Nashville Airport',
                    details: ['Flight: XX001', 'Expected time: 3:30pm - 7:15pm']
                }
            },
            {
                city: {
                    name: 'Atlanta',
                    state: 'GA'
                }
            },
        ]
    }
  ],
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
