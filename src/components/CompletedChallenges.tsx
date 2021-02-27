import styles from '../style/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    return(
        <div className={styles.CompletedChallengesContainer}>
           <span>Desafios Completos</span> 
           <span>0</span>
        </div>
    )
}