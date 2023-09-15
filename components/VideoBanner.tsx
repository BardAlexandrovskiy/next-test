import Link from 'next/link'
import styles from '@/styles/VideoBanner.module.scss'

export type Video = { embed: string, link: string, text: string }

const VideoBanner = ({ video }: { video: Video }) => {
    const { embed, link, text } = video;

    return <section className={styles.videoBanner}>
        <div className={styles.leftColumn}>
            <h2 className={styles.title}>{`embed ${embed}`}</h2>
            <div className={styles.text}>{text}</div>
            <Link className={styles.link} href={link} target='_blank'>
                {link}
            </Link>
        </div>
        <div className={styles.rightColumn}>
            <iframe src={`https://www.youtube.com/embed/${embed}`}></iframe>
        </div>
    </section>
}

export default VideoBanner;