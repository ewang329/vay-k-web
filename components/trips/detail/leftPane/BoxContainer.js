import styles from '../../../../styles/trips/detail/leftPane/BoxContainer.module.css'

export default function BoxContainer({ title, notes }) {
    return (
        <a href={'/attractions/' + title.replace(/ /g, '-').toLowerCase()} className={styles.boxContainer}>
            <span className={styles.miniCircle}></span>
            <span className={styles.dottedLine}></span>
            <div className={`${styles.box} dropzone`}>
                <h3>{title}</h3>
                {notes && notes.length > 1 ? (
                    <div className={styles.flightDetails}>
                        <p>Flight #: {notes[0]}</p>
                        <p>Flight time: {notes[1]}</p>
                    </div>
                ) : <p>{notes && notes[0]}</p>
                }
            </div>
        </a>
    )
}