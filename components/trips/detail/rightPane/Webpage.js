import styles from '../../../../styles/trips/detail/rightPane/Webpage.module.css'

export default function Webpage() {
    
    const data = [
            {
                title: "Wikipedia",
                description: "The Vizcaya Museum and Gardens, previously known as Villa Vizcaya, is the former villa and estate of businessman James Deering, of the Deering McCormick-International Harvester fortune, on Biscayne Bay in the present day Coconut Grove neighborhood of Miami, Florida"
            },
            {
                title: "Garden Visit",
                description: "The garden was made during the First World War using many features, including steps, balustrades, fountians and finials, purchased in Italy or copied from ..."
            },
            {
                title: "Abby Meister",
                description: "Vizcaya Museum & Gardens is a must-visit in Miami, FL. The historic, gorgeous house and gardens were inspired by the Italian and French..."
            },
        ]


    return (
        <div>
            {data.map((d, i) => (
                <div className={styles.contentContainer} key={i}>
                    <h3>{d.title}</h3>
                    <p>{d.description}</p>
                </div>
            ))}
        </div>
    )
}
