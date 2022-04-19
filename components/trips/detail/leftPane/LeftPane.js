import {useEffect} from 'react';
import useStore from '../../../../store/store';
import styles from '../../../../styles/trips/detail/leftPane/LeftPane.module.css'
import StopContainer from './StopContainer';
import BoxContainer from './BoxContainer';
import CityContainer from './CityContainer';


export default function LeftPane(props) {
    const trips = useStore((state) => state.trips);
    const setTrips = useStore((state) => state.setTrips);

    useEffect(() => {
        const getTrips = async () => {
            const res = await fetch(`http://localhost:5000/trips/1/itinerary`)
            const json = await res.json()
            setTrips(json.data);
        };
        getTrips();
    }, []);


    return (
        <div className={styles.leftPane}>
            <span>day</span>
            <div className={styles.timelineContainerWrapper}>
            <div className={styles.line}></div>
                <div className={styles.timelineContainer}>
                    {trips.map ? trips.map(d => {
                        return (
                            <div key={`trip-${d.day}`}>
                                <span className={styles.circle}>{d.day}</span>
                                <div className={`${styles.dayContentContainer}`}>
                                    {d.places.map((p, i) => {
                                        const containers = []
                                        if (p.City) {
                                            containers.push(<CityContainer city={p.City.name} state={p.City.state} />)
                                        } else if (p.Attraction || p.Accomodation) {
                                            // if the previous place is also attraction, display stop button
                                            if (d.places[i - 1] && (d.places[i - 1].Attraction || d.places[i - 1].Accomodation)) {
                                                containers.push(<StopContainer index={i} />)
                                            }
                                            containers.push(<BoxContainer title={(p.Attraction || p.Accomodation).name} details={(p.Attraction || p.Accomodation).notes} />)
                                        }
                                        return (
                                            <div key={`trip-${d.day}-place-${i}`}>{containers.map(c => c)}</div>
                                        )
                                    })}
                                    <StopContainer index={d.places.length} />
                                </div>
                            </div>
                        )
                    }) : null}
                    <span className={styles.circle}>{trips.length + 1}</span>
                    <div className={`${styles.circle} ${styles.addIconWrapper}`}>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}