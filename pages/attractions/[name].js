import { useRouter } from 'next/router'
import styles from '../../styles/attractions/Index.module.css'
import Webpage from '../../components/trips/detail/rightPane/Webpage'
import dynamic from 'next/dynamic'
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'
import { Textarea, Image } from "@mantine/core"

const EmailPasswordAuthNoSSR = dynamic(
  // new Promise<typeof EmailPassword.EmailPasswordAuth>((res) =>
  new Promise((res) =>
    res(EmailPassword.EmailPasswordAuth)
  ),
  { ssr: false }
)


export default function AttractionIndex() {
    const router = useRouter()
    const { name } = router.query

    const data = {
        title: 'Viscaya Museum & Gardens',
        images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
        description: "A National Historic Landmark, Vizcaya Museum and Gardens is a 1916 waterfront estate home with 32 decorated rooms and 10 acres of formal gardens.",
        webpages: [
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
    }
 
    return (
        <EmailPasswordAuthNoSSR>
            <div className={styles.container}>
                <h3>{data.title}</h3>
                <div className={styles.imageContentContainer}>
                    <div className={styles.imageContainer}>
                        <Image
                            marginLeft="auto"
                            marginRight="auto"
                            width="100%"
                            src={data.images[0]} />
                    </div>
                    <div className={styles.webpageContent}>
                        <Webpage />
                    </div>
                </div>
                <Textarea label="Personal Notes" value={data.description} />
            </div>
        </EmailPasswordAuthNoSSR>
    )
}
