import styles from './styles/Template.module.css';

export default function Black({ handleClick, active, data, little }){
    return (
        <div className={little ? styles.componentLittle + " " + styles.black : styles.component + " " + styles.black}>
            <img 
                className={styles.bookmark} 
                onClick={handleClick} 
                src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
           />
            <div className={styles.image}>
                <img src={data.image} alt={data.title} />
            </div>
            <div className={styles.content}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className={styles.bottom}>
                    <img className={styles.iconPink} src="/Icons-Clock.svg" alt="time" />
                    <span>{data.time}</span>
                </div>
            </div>
        </div>
    )
    
}