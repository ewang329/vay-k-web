import styles from '../../styles/trips/Trips.module.css'

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:5000/trips`)
    const json = await res.json()

    return { props: { data: json.data } }
}

export default function Trips({ data }) {
    return (
        <div className={styles.tripContainer}>
            {data.map(trip => {
                return (
                    <a key={trip.id} href={"/trips/" + trip.id} className={styles.tripBoxContainer}>
                        <div className={styles.tripBox}>
                            <img src="/logo.png"/>
                            <div>
                                <h3>{trip.title}</h3>
                                <span>{trip.startDate} - {trip.endDate}</span>
                                <div className={styles.locationContainer}>
                                    {trip.locations.map((l, i) =>
                                        <span key={i}>{l.city}, {l.country}{i == trip.locations.length - 1 ? "" : ";"}</span>
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