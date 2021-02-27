import styles from '../style/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://www.petlove.com.br/images/breeds/192469/profile/original/pug-p.jpg?1532539387"></img>
            <div>
                <strong>Fred</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    Level 1</p>
            </div>
        </div>
    )
}