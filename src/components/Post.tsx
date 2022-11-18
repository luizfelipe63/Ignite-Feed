import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Author{
  name:string,
  role:string,
  avatarUrl:string
}

interface Content{
  type: 'paragraph' | 'link';
  content:string;
}

export interface postProps{
  author: Author,
  publisheAt:Date,
  content: Content[]
}

export function Post({ author, publisheAt, content}:postProps) {
  //Estados
  const [comments, setComments] = useState(['Ola tudo bem'])
  const [newCommentText, setNewCommentText] = useState('')

  //Formatação de data e hora
  const publisheDateTitle = format(
    publisheAt,
    "d 'de' MMM 'às' HH:mm:ss 'h' ",
    {
      locale: ptBR
    }
  )

  const publisheDateRelativeToNow = formatDistanceToNow(publisheAt, {
    locale: ptBR,
    addSuffix: true
  })

  //Functions
  function handleCreatNewComment(event:FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommnetInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete:string) {
    const commentsWhithoutDeleteOne = comments.filter(comment => {
      return comment != commentToDelete
    })

    setComments(commentsWhithoutDeleteOne)
  }

  const isNewCommentEmpit = newCommentText.length == 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfos}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publisheDateTitle}
          dateTime={publisheAt.toISOString()}
          className={styles.time}
        >
          {publisheDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type == 'link') {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreatNewComment} className={styles.comeentForm}>
        <strong>Deixe seu feedebeck</strong>

        <textarea
          onChange={handleCommentChange}
          name="comment"
          value={newCommentText}
          placeholder="Deixe seu comentário"
          required
          onInvalid={handleNewCommnetInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpit}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentBox}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
