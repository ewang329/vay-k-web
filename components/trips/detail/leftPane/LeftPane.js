import useStore from '../../../../store/store';
import styles from '../../../../styles/trips/detail/leftPane/LeftPane.module.css'
import StopContainer from './StopContainer';
import BoxContainer from './BoxContainer';
import CityContainer from './CityContainer';


export default function LeftPane() {
    const trips = useStore(state => state.trips);

    return (
        <div className={styles.leftPane}>
            <span>day</span>
            <div className={styles.timelineContainerWrapper}>
            <div className={styles.line}></div>
                <div className={styles.timelineContainer}>
                    {trips.map(d => {
                        return (
                            <div key={`trip-${d.day}`}>
                                <span className={styles.circle}>{d.day}</span>
                                <div className={`${styles.dayContentContainer}`}>
                                    {d.places.map((p, i) => {
                                        const containers = []
                                        if (p.city) {
                                            containers.push(<CityContainer city={p.city.name} state={p.city.state} />)
                                        } else if (p.attraction) {
                                            // if the previous place is also attraction, display stop button
                                            if (d.places[i - 1] && d.places[i - 1].attraction) {
                                                containers.push(<StopContainer index={i} />)
                                            }
                                            containers.push(<BoxContainer title={p.attraction.name} details={p.attraction.details} />)
                                        }
                                        return (
                                            <div key={`trip-${d.day}-place-${i}`}>{containers.map(c => c)}</div>
                                        )
                                    })}
                                    <StopContainer index={d.places.length} />
                                </div>
                            </div>
                        )
                    })}
                    <span className={styles.circle}>2</span>
                    <div className={`${styles.circle} ${styles.addIconWrapper}`}>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}