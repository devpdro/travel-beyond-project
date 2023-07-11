import React from "react";

import styles from "../../styles/about/AboutPage.module.scss";

function AboutPage() {
  return (
    <section className={styles.container}>
      <div>
        <h3>TravelBeyond</h3>
        <p>
          O TravelBeyond foi construído usando o poderoso React, esta plataforma
          é dedicada a revelar os segredos e tesouros da Africa Ocidental um
          vibrante continente africano. Com uma interface fluida e intuitiva ela
          oferece uma experiência imersiva e envolvente, permitindo que você
          descubra destinos únicos, conheça culturas fascinantes e planeje uma
          jornada inesquecível por essa região encantadora. Prepare-se para
          desbravar a África Ocidental e criar memórias extraordinárias que
          durarão a vida toda!
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
