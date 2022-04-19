import styles from '../../../../styles/trips/detail/leftPane/StopContainer.module.css'
import useStore from '../../../../store/store';
import { useState } from 'react'

export default function stopContainer({ index }) {
    const [isClicked, setClicked] = useState(false)
    const [type, setType] = useState('attraction')
    const addTripPlace = useStore(state => state.addTripPlace);

    const onFormSubmit = (e) => {
        e.preventDefault();
        // POST call to add a stop

        let place = {
            'attraction': {
                name: e.target.querySelector('#location').value,
                details: type === 'airport' ? [
                    e.target.querySelector('#flightNum').value,
                    e.target.querySelector('#flightTime').value
                ] : []
            }
        }
        addTripPlace(place, 1, index)
        setClicked(false)
    }

    return (
        <div className={`${styles.stopContainer}`} data-index={index} onClick={() => !isClicked ? setClicked(true) : null}>
        {isClicked ? ( 
            <form id='form' className={styles.form} onSubmit={onFormSubmit}>
                <div>
                    <label>Location: </label>
                    <input id='location' type='text' required />
                </div>
                <div>
                    <label>Type: </label>
                    <select onChange={(e) => setType(e.target.options[e.target.selectedIndex].value)} required>
                        <option value='attraction'>Attraction</option>
                        <option value='airport'>Airport</option>
                        <option value='hotel'>Hotel</option>
                    </select>
                </div>
                {type === 'airport' ?
                    <div>
                        <div className={styles.formText}>
                            <label>Flight #: </label>
                            <input id='flightNum' type='text' required />
                        </div>
                        <div className={styles.formText}>
                            <label>Expected time: </label>
                            <input id='flightTime' type='text' required />
                        </div>
                    </div>
                : null}
                <input type='submit' value='Submit' className={styles.submit} />
            </form>
        ) : (
            <div>
                <div className={styles.plusIconContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                        <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
                    </svg>
                </div>
                <span>Stop</span>
            </div>
        )}
        </div>
    )
}