import styles from '../../styles/trips/Trips.module.css'
import React from 'react'
import dynamic from 'next/dynamic'
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'

const EmailPasswordAuthNoSSR = dynamic(
  new Promise<typeof EmailPassword.EmailPasswordAuth>((res) =>
    res(EmailPassword.EmailPasswordAuth)
  ),
  { ssr: false }
)

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:5000/trips`)
    const json = await res.json()

    return { props: { data: json.data } }
}

export default function Trips({ data }) {
    return (
        <EmailPasswordAuthNoSSR>
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
        </EmailPasswordAuthNoSSR>
    )
}
Trips.title = "List of Trips"
