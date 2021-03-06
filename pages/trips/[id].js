import { useRouter } from 'next/router'
import { useEffect } from 'react';
import styles from '../../styles/trips/detail/TripDetail.module.css'
import RightPane from '../../components/trips/detail/rightPane/RightPane';
import LeftPane from '../../components/trips/detail/leftPane/LeftPane';
import React from 'react'
import dynamic from 'next/dynamic'
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'

const EmailPasswordAuthNoSSR = dynamic(
  new Promise((res) =>
    res(EmailPassword.EmailPasswordAuth)
  ),
  { ssr: false }
)

export default function TripDetail() {
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const getTrips = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/trips`)
            const data = await res.json()
            const trip = data.data.find(t => t.id == id)
            console.log(trip.title)
            TripDetail.title = `${trip.title} (${trip.startDate} - ${trip.endDate})`
        };
        if (id) {
            getTrips();
        }
    }, [id]);
 
    return (
        <EmailPasswordAuthNoSSR>
            <div className={styles.tripDetailContainer}>
                <LeftPane id={id} />
                <RightPane />
            </div>
        </EmailPasswordAuthNoSSR>
    )
}
// TripDetail.title = `${data.title} (${data.startDate} - ${data.endDate})`
