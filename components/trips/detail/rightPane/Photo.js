import styles from '../../../../styles/trips/detail/rightPane/Photo.module.css'
import Draggable from 'react-draggable';

const images = ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200']

export default function Photo() {

    const handleDrop = (e, data) => {
        let elements = document.elementsFromPoint(e.screenX, e.screenY)
        console.log(elements)
        elements.forEach(el => {
            console.log(el.classList)
            if (el.classList && el.classList[1] === 'stop-container') {
                console.log('@@@@@@@@@@@@@@@@@@@@@@@@')
            }
        })
    }

    const handleStop = (e, data) => {
        debugger;
    }

    return (
        <div className={styles.photoContainer}>
            {images.map((_, i) => (
                <Draggable
                    key={i}
                    offsetParent={document.body}
                    onDrag={handleDrop}
                    onStop={handleStop}
                >
                    <img src='https://picsum.photos/200' draggable="false" />
                </Draggable>
            ))}
        </div>
    )
}