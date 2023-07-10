import styles from "../styles/Weekend.module.scss";

function Weekend() {
  return (
    <section className={styles.container}>
      <div>
        <h1>
          Suas Próximas <span>Férias.</span>
        </h1>
        <input type="submit" value="Ver Destinos" />
      </div>
    </section>
  );
}

export default Weekend;
