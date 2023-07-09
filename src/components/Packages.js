import styles from "../styles/Packages.module.scss";

import db from "../db.json";

function Packages() {
  return (
    <section className={styles.container}>
      <div className={styles.text_box}>
        <h4>Nossa proposta</h4>
        <h1>
          Nossos <span>destinos</span>
        </h1>
      </div>
      <div className={styles.container_images}>
        {db.sectionPackages.map((item) => (
          <div key={item.id} className={styles.images_box}>
            <div>
              <img
                key={item.id}
                src={item.img}
                alt="Imagens mostrando os destinos"
              />
              <h3>{item.cardHeading}</h3>
              <p>{item.packages}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;
