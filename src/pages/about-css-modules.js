import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)
const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>

  </div>
)
export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Menganita"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="Soy Menganita. Y me gustan las casitas"
    />
    <User
      username="Fulanito"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="Soy Fulanito. Y me dicen el tontito"
    />
  </Container>

)
