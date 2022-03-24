import styles from '../../../styles/trips/detail/CityContainer.module.css'

export default function CityContainer({ state, city }) {

    return (
        <div className={styles.cityContainer}>
            <span className={styles.dottedLine}></span>
            <span className={styles.location}>{city}, {state}</span>
        </div>
    )
}