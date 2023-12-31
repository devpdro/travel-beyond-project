import styles from "../../styles/layout/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.img_container}>
      <div className={styles.box_container}>
        <div className={styles.box_send}>
          <div>
            <p>Mantenha Contato</p>
            <h4>Viaje Conosco</h4>
          </div>
          <div className={styles.box_input}>
            <form>
              <input className={styles.text} type="text" name="" id="" required minLength={3} />
              <input className={styles.submit} type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className={styles.box_text}>
          <div className={styles.box_text_one}>
            <h1>Faça já a sua viagem</h1>
            <p>
              Descubra o mundo com facilidade em nosso site de viagens. Encontre
              as melhores ofertas em voos, hotéis e pacotes turísticos. Navegue
              por destinos exóticos, explore culturas diferentes e crie memórias
              incríveis. Reserve agora e comece a sua aventura!
            </p>
          </div>
          <div className={styles.box_text_two}>
            <h1>Nossa Agência</h1>
            <ul>
              <li>{">"}Serviços</li>
              <li>{">"}Seguro</li>
              <li>{">"}Turismo</li>
              <li>{">"}Pagamento</li>
            </ul>
          </div>
          <div className={styles.box_text_three}>
            <h1>Parceiros</h1>
            <ul>
              <li>{">"}Reserva</li>
              <li>{">"}Carros Alugados</li>
              <li>{">"}Aluguel de Hotel</li>
              <li>{">"}Guia de Viagem</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
