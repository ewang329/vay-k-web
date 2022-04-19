import styles from '../../../../styles/trips/detail/leftPane/BoxContainer.module.css'

export default function BoxContainer({ title, details }) {
    return (
        <a href={'/attractions/' + title.replace(/ /g, '-').toLowerCase()} className={styles.boxContainer}>
            <span className={styles.miniCircle}></span>
            <span className={styles.dottedLine}></span>
            <div className={`${styles.box} dropzone`}>
                <h3>{title}</h3>
                {details.length > 1 ? (
                    <div className={styles.flightDetails}>
                        <p>Flight #: {details[0]}</p>
                        <p>Flight time: {details[1]}</p>
                    </div>
                ) : <p>{details[0]}</p>
                }
            </div>
        </a>
    )
}