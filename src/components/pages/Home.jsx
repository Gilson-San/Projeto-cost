import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <div className={styles.leg}>
        <section className={styles.home_conyainer}>
            <h1 className={styles.bt}>Bem-Vindo <span>Cost</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt="Costs"/>

        </section>
        </div>
    )
}

export default Home