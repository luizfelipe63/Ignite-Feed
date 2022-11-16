import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likeCommnent, setLikeComment] = useState(0)

  function handleDeleteCommente() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeComment(likeCommnent + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar noBorder src="https://github.com/luizfelipe63.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Luiz Felipe </strong>
              <time title="11-11-2022 ás 10:49" className={styles.time}>
                Cerca de 1 hora atrás
              </time>
            </div>
            <button
              onClick={handleDeleteCommente}
              className={styles.buttonTrash}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button className={styles.buttonThumbsUp}>
            <ThumbsUp onClick={handleLikeComment} size={20} />
            Aplaudir
            <span>{likeCommnent}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
