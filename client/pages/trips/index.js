import styles from '../../styles/Trips.module.css'

export default function Trips() {

    const data = [
        {
            id: 1,
            title: 'Spring Break Road Trip',
            startDate: '02/03/2022',
            endDate: '02/06/2022',
            locations: [{
                state: 'GA',
                city: 'Atlanta',
                country: 'USA'
            }, {
                state: 'FL',
                city: 'Miami',
                country: 'USA'
            }, {
                state: 'TN',
                city: 'Nashville',
                country: 'USA'
            }]
        }, {
            id: 2,
            title: 'Winter Break',
            startDate: '12/13/2022',
            endDate: '01/06/2023',
            locations: [{
                state: '',
                city: 'Cancun',
                country: 'Mexico'
            }]
        }, {
            id: 3,
            title: 'Family Trip',
            startDate: '01/21/2023',
            endDate: '02/12/2023',
            locations: [{
                state: '',
                city: 'London',
                country: 'UK'
            }]
        },
    ]

    return (
        <div className={styles.tripContainer}>

            {data.map(trip => {
                return (
                    <a href={"/trips/" + trip.id} className={styles.tripBoxContainer}>
                        <div className={styles.tripBox}>
                            <img src="/logo.png"/>
                            <div>
                                <h3>{trip.title}</h3>
                                <span>{trip.startDate} - {trip.endDate}</span>
                                <div className={styles.locationContainer}>
                                    {trip.locations.map((l, i) =>
                                        <span>{l.city}, {l.country}{i == trip.locations.length - 1 ? "" : ";"}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}
Trips.title = "List of Trips"