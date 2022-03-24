import styles from '../../../../styles/trips/detail/leftPane/LeftPane.module.css'
import StopContainer from './StopContainer';
import BoxContainer from './BoxContainer';
import CityContainer from './CityContainer';

export default function LeftPane() {
    return (
        <div className={styles.leftPane}>
            <span>day</span>
            <div className={styles.timelineContainerWrapper}>
            <div className={styles.line}></div>
                <div className={styles.timelineContainer}>
                    <span className={styles.circle}>1</span>
                    <div className={styles.dayContentContainer}>
                        <CityContainer city='Nashville' state='TN' />
                        <BoxContainer title='Some Attraction' details={['Expected duration: 2 hours']} />
                        <StopContainer />
                        <BoxContainer title='Some Restaurant' details={['Expected duration: 2 hours']} />
                        <StopContainer />
                        <BoxContainer title='Nashville Airport' details={['Flight: XX001', 'Expected time: 3:30pm - 7:15pm']} />
                        <CityContainer city='Atlanta' state='GA' />
                        <StopContainer />
                    </div>
                    <span className={styles.circle}>2</span>
                    <div className={`${styles.circle} ${styles.addIconWrapper}`}>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}