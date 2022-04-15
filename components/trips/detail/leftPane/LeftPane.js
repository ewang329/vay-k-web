import styles from '../../../../styles/trips/detail/leftPane/LeftPane.module.css'
import StopContainer from './StopContainer';
import BoxContainer from './BoxContainer';
import CityContainer from './CityContainer';

const data = [
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
];

export default function LeftPane() {
    return (
        <div className={styles.leftPane}>
            <span>day</span>
            <div className={styles.timelineContainerWrapper}>
            <div className={styles.line}></div>
                <div className={styles.timelineContainer}>
                    {data.map(d => {
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
                                                containers.push(<StopContainer />)
                                            }
                                            containers.push(<BoxContainer title={p.attraction.name} details={p.attraction.details} />)
                                        }
                                        return (
                                            <div key={`trip-${d.day}-place-${i}`}>{containers.map(c => c)}</div>
                                        )
                                    })}
                                    <StopContainer />
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