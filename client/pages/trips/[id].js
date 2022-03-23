import { useRouter } from 'next/router'
import styles from '../../styles/TripDetail.module.css'

const data = {
    id: 1,
    title: 'Spring Break Road Trip',
}

export default function TripDetail() {
    const router = useRouter()
    const { id } = router.query
     
    return (
        <div className={styles.tripDetailContainer}>
            <div className={styles.leftPane}>
                Left
            </div>
            <div className={styles.rightPane}>
                right
            </div>
        </div>
    )
}
TripDetail.title = data.title