import styles from "../styles/Packages.module.scss";

import db from "../db.json";

function BoxPackages() {
  return (
    <section className={styles.container}>
      <div className={styles.container_images}>
        {db.sectionPackages.map((item) => (
          <div key={item.id} className={styles.images_box}>
            <div>
              <img
                src={item.img}
                alt="Imagens mostrando os lugares dos pacotes de viagens"
              />
              <h3>{item.state}</h3>
              <p>{item.country}</p>
              <h4>
                {item.type}
                <span>{item.price}</span>
              </h4>
              <p>{item.paragraph}</p>
              <input
                style={{
                  backgroundColor: item.bg,
                  color: item.textColor,
                }}
                className={styles.btn_details}
                type="submit"
                value={item.text}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BoxPackages;
