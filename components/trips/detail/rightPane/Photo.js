import styles from '../../../../styles/trips/detail/rightPane/Photo.module.css'

export default function Photo() {
    return (
        <div className={styles.photoContainer}>
            {[...Array(6)].map((_, i) => (<img key={i} src='https://picsum.photos/200' />))}
        </div>
    )
}