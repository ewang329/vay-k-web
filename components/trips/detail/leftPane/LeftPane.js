import {useEffect, useState} from 'react';
import useStore from '../../../../store/store';
import styles from '../../../../styles/trips/detail/leftPane/LeftPane.module.css'
import StopContainer from './StopContainer';
import BoxContainer from './BoxContainer';
import CityContainer from './CityContainer';

export default function LeftPane(props) {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        if (!props.id) return
        const getTrips = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/trips/${props.id}/itinerary`)
            const json = await res.json()
            setTrips(json.data);
        };
        getTrips();
    }, [props]);

    console.log(trips);
    
    return (
        <div className={styles.leftPane}>
            <span>day</span>
            <div className={styles.timelineContainerWrapper}>
            <div className={styles.line}></div>
                <div className={styles.timelineContainer}>
                    {trips ? trips.map(d => {
                        return (
                            <div key={`trip-${d.day}`}>
                                <span className={styles.circle}>{d.day}</span>
                                <div className={`${styles.dayContentContainer}`}>
                                    {d.places ? d.places.map((p, i) => {
                                        const containers = []
                                        if (p.city) {
                                            containers.push(<CityContainer city={p.city.name} state={p.city.state} />)
                                        } else if (p.Attraction) {
                                            // if the previous place is also attraction, display stop button
                                            if (d.places[i - 1] && d.places[i - 1].Attraction) {
                                                containers.push(<StopContainer index={i} />)
                                            }
                                            containers.push(<BoxContainer title={p.Attraction.name} details={p.Attraction.details} />)
                                        }
                                        return (
                                            <div key={`trip-${d.day}-place-${i}`}>{containers.map(c => c)}</div>
                                        )
                                    }) : null}
                                    <StopContainer index={d.places ? d.places.length : 0} />
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        </div>
    )
}
