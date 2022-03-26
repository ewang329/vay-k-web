import styles from '../../../../styles/trips/detail/rightPane/Map.module.css'
import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';

export default function Map() {
    const googlemap = useRef(null);
    useEffect(() => {
      const loader = new Loader({
        apiKey: 'AIzaSyAb5IvEm-ve-d4TBp8s6LXwjg-gvBppI6w',
        version: 'weekly',
      })

      const coord = { lat: 33.7756, lng: -84.3963 }
      let map, marker
      loader.load().then(() => {
        map = new google.maps.Map(googlemap.current, {
            center: coord,
            zoom: 16,
        })
        marker = new google.maps.Marker({
            position: coord,
            map: map,
        })
      })
    })
  
    return (
        <div>
            <div id={styles.map} ref={googlemap} />
        </div>
    )
}