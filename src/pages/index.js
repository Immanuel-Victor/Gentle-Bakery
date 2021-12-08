import React from "react"
import * as styles from "../styles/introduction.module.css"
import * as cardstyle from "../styles/productCard.module.css"
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
    <section>

      <div className={styles.coreImg}>
      </div>

      <div className={styles.topSection}>
        <h1>Gentle's Bakery</h1>
        <p>Gentle's Bakery has 30 years of history. Always providing you with the best of deserts that USA can provide. We've always tried to give you our all and the best recepies we could come up with, all of them with the most amount of love and caring we could've possibly put in our food. So we're continuing with this tradition and we welcome every single person to come into our store to feel free and buy some deserts and have a blast. Enjoy the best cakes, pies and a handfull of other tiny deserts that will make you happy.</p>
        <h3> Visit us and buy a gentle desert at Gentle's Bakery</h3>
      </div>

      <div id="products" className={cardstyle.products}>
      <h1> Most Famous Products </h1>

      <div className={cardstyle.productDiv}>
        <div className={cardstyle.card}>
          <img className={cardstyle.cardImage}src="/cupcake.jpg" alt="cupcake product"></img>
          <p>Strawberry Cupcake</p>
        </div>
        <div className={cardstyle.card}>
        <img className={cardstyle.cardImage}src="/cupcake.jpg" alt="cupcake product"></img>
          <p>Strawberry Cupcake</p>
        </div>
        <div className={cardstyle.card}>
        <img className={cardstyle.cardImage}src="/cupcake.jpg" alt="cupcake product"></img>
          <p>Strawberry Cupcake</p>
        </div>
          
      </div>
      </div>
    </section>
    </Layout>
  )
}
