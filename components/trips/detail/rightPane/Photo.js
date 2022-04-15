import { useEffect } from "react"
import useStore from '../../../../store/store';
import styles from '../../../../styles/trips/detail/rightPane/Photo.module.css'
import stopContainerStyles from '../../../../styles/trips/detail/leftPane/StopContainer.module.css'

const images = ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200']

export default function Photo() {
    const addTripPlace = useStore(state => state.addTripPlace);

    useEffect(() => {
        let dragged

        /* events fired on the draggable target */
        document.addEventListener("drag", function( event ) {

        }, false)

        document.addEventListener("dragstart", function( event ) {
            dragged = event.target;
            event.target.style.opacity = 0;
        }, false)

        document.addEventListener("dragend", function( event ) {
            event.target.style.opacity = "";
        }, false)

        document.addEventListener("dragover", function( event ) {
            event.preventDefault()
        }, false)

        document.addEventListener("dragenter", function( event ) {
            if (event.target.classList && event.target.classList.contains('dropzone')) {
                event.target.classList.add(stopContainerStyles.magnified)
            }
        }, false)

        document.addEventListener("dragleave", function( event ) {
            if (event.target.classList && event.target.classList.contains('dropzone')) {
                event.target.classList.remove(stopContainerStyles.magnified)
            }
        }, false)

        document.addEventListener("drop", function( event ) {
            event.preventDefault()

            if (event.target.classList && event.target.classList.contains('dropzone')) {
                event.target.classList.remove(stopContainerStyles.magnified)
                let stopIconHTML = event.target.innerHTML
                dragged.parentNode.removeChild(dragged)
                event.target.innerHTML = `
                    <form id='form' style='left: 0;margin-left: -90px;'>
                        <div style='margin-bottom: 8px;'>
                            <label>Location</label>
                            <input type='text' required />
                        </div>
                        <div>
                            <label>Type</label>
                            <select required>
                                <option value='attraction'>Attraction</option>
                                <option value='airport'>Airport</option>
                            </select>
                        </div>
                        <input type='submit' value='Submit' style="margin-top: 8px;" />
                    </form>
                `
                event.target.firstElementChild.addEventListener('submit', e => {
                    e.preventDefault();
                    // POST call to add a stop

                    let place = {
                        [e.target.querySelector('select').value]: {
                            name: e.target.querySelector('input').value,
                            details: []
                        }
                    }
                    addTripPlace(place, 1, event.target.dataset.index)
                    event.target.innerHTML = stopIconHTML
                })
            }
            
        }, false)
    })

    return (
        <div className={styles.photoContainer}>
            {images.map((_, i) => (
                <img key={i} draggable="true" src='https://picsum.photos/200' />
            ))}
        </div>
    )
}