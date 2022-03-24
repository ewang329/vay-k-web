import styles from '../../../styles/trips/detail/BoxContainer.module.css'

export default function BoxContainer({ title, details }) {

    return (
        <div className={styles.boxContainer}>
            <span className={styles.miniCircle}></span>
            <span className={styles.dottedLine}></span>
            <div className={styles.box}>
                <h3>{title}</h3>
                {details.map(d => (<p key={d}>{d}</p>))}
            </div>
        </div>
    )
}