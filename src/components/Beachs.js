import styles from "../styles/Beachs.module.scss";

import Carousel from "./Carousel";

function Beachs() {
  const images = [
    "https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8WmFuemliYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/09/35415175602_4ce19f8afd_b.jpg",
    "https://images.unsplash.com/photo-1646667642307-e2bf4541284e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fFphbnppYmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <section className={styles.container}>
      <div className={styles.box_container}>
        <div className={styles.text_box}>
          <h4>África Oriental</h4>
          <h1>
            As melhores <span>Praias</span>
          </h1>
          <p>
            As praias da África Ocidental são simplesmente incríveis! Com suas
            areias brancas, águas cristalinas e paisagens deslumbrantes, elas
            são verdadeiros paraísos tropicais. Desde Gâmbia até Cabo Verde, há
            uma variedade de praias deslumbrantes para explorar nessa região
            encantadora.
          </p>
          <h2>
            <span className={styles.outline_span}>900$</span>{" "}
            <span className={styles.money_span}>500$</span> / POR PESSOA
          </h2>
          <input type="submit" value="Comprar Passagem" />
        </div>
        <div className={styles.box_img}>
          <Carousel images={images} />
        </div>
      </div>
    </section>
  );
}

export default Beachs;
