import styles from "../styles/Destinations.module.scss";

function Destinations() {
  return (
    <section className={styles.container}>
      <div className={styles.text_box}>
        <h4>Nossa proposta</h4>
        <h1>
          Nossos <span>destinos</span>
        </h1>
      </div>
      <div className={styles.container_images}>
        <div className={styles.images_box}>
          <img
            className={styles.images}
            src="https://images.unsplash.com/photo-1588384244626-484b69024d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVnYW5kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className={styles.images_box}>
          <img
            className={styles.images}
            src="https://images.unsplash.com/photo-1588384244626-484b69024d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVnYW5kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className={styles.images_box}>
          <img
            className={styles.images}
            src="https://images.unsplash.com/photo-1588384244626-484b69024d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVnYW5kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className={styles.images_box}>
          <img
            className={styles.images}
            src="https://images.unsplash.com/photo-1588384244626-484b69024d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVnYW5kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className={styles.images_box}>
          <img
            className={styles.images}
            src="https://images.unsplash.com/photo-1588384244626-484b69024d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVnYW5kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Destinations;
