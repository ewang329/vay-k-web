import { useRouter } from 'next/router'
import styles from '../../styles/trips/detail/TripDetail.module.css'
import RightPane from '../../components/trips/detail/rightPane/RightPane';
import LeftPane from '../../components/trips/detail/leftPane/LeftPane';
import React from 'react'
import dynamic from 'next/dynamic'
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'
import ProtectedPage from "./protectedPage";

const EmailPasswordAuthNoSSR = dynamic(
  new Promise<typeof EmailPassword.EmailPasswordAuth>((res) =>
    res(EmailPassword.EmailPasswordAuth)
  ),
  { ssr: false }
)

const data = {
    id: 1,
    title: 'Spring Break Road Trip',
    startDate: 'Feb 03, 2022',
    endDate: 'Feb 06, 2022'
}

export default function TripDetail() {
    const router = useRouter()
    const { id } = router.query
 
    return (
        <EmailPasswordAuthNoSSR>
            <div className={styles.tripDetailContainer}>
                <LeftPane />
                <RightPane />
            </div>
        </EmailPasswordAuthNoSSR>
    )
}
TripDetail.title = `${data.title} (${data.startDate} - ${data.endDate})`
