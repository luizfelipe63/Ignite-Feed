import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/maykbrito.png"/>
          <div className={styles.authorInfos}>
            <strong>Luiz Felipe</strong>
            <span>Frontend developer</span>
          </div>
        </div>
        <time title='11-11-2022 ás 10:49'className={styles.time} >
            Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p> 👉 <a href="">jane.design/doctorcare</a></p>
        <p><a href=""> #novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.comeentForm}>

          <strong>Deixe seu feedebeck</strong>
          <textarea placeholder='Deixe seu comentário'/>

          <footer>
            <button type="submit">Publicar</button>
          </footer>
      </form>

      <div className={styles.commentBox}>
          <Comment/>
          <Comment/>
          <Comment/>
      </div>
    </article>
  )
}
