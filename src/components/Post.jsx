import {  format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR/'
import { useState } from 'react'


import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post({author, publisheAt, content}) {

  //Estados
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')


  //Formatação de data e hora
  const publisheDateTitle = format(publisheAt,"d 'de' MMM 'às' HH:mm:ss 'h' ",{
    locale: ptBR
  });

  const publisheDateRelativeToNow = formatDistanceToNow(publisheAt,{
    locale: ptBR ,
    addSuffix:true   
  } )


  //Functions
  function handleCreatNewComment(){
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleCommentChange(){
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfos}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publisheDateTitle} dateTime={publisheAt.toISOString()} className={styles.time} >
          {publisheDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph'){
            return <p>{line.content}</p>
          }else if(line.type == 'link'){
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreatNewComment}  className={styles.comeentForm}>

          <strong>Deixe seu feedebeck</strong>

          <textarea
            onChange={handleCommentChange}
            name='comment'
            value={newCommentText}
            placeholder='Deixe seu comentário'
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
      </form>

      <div className={styles.commentBox}>
        {comments.map(comment => {
          return <Comment content={comment}/>
        })}
      </div>
    </article>
  )
}
