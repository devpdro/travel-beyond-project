import styles from "../styles/Destinations.module.scss";

import db from "../db.json";

const formatColor = (color) => {
  if (["black", "red", "blue", "green"].includes(color)) {
    return color;
  }

  if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(color)) {
    return color;
  }

  return "#000000";
};

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
        {db.box.map((item) => (
          <div key={item.id} className={styles.images_box}>
            <div
              style={{
                backgroundColor: formatColor(item.backgroundColor),
              }}
            >
              <img
                style={{
                  opacity: item.opacity,
                }}
                key={item.id}
                src={item.image}
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

export default Destinations;
