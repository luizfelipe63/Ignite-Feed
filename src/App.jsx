import { Header } from './components/Header'
import {Post} from './components/Post' 
import styles from './app.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'



const Posts = [
  {
    id:1,
    author:{
      name:'Diego Fernandes',
      role:'CTO Rocketseat',
      avatarUrl:'https://github.com/diego3g.png',
    },
    content:[
      {type:'paragraph', content:'Fala Pessoal 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
    ],
    publisheAt: new Date('2022-11-14 9:00:00')
  },

  {
    id:2,
    author:{
      name:'Mayk brito',
      role:'Educator Rocketseat',
      avatarUrl:'https://github.com/maykbrito.png',
    },
    content:[
      {type:'paragraph', content:'Fala galera'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
    ],
    publisheAt: new Date('2022-11-12 12:00:00')
  }
]




export function App() {
  return (
    <div>

     <Header/>    

      <div className={styles.wapper}>
      
        <Sidebar/>
        <main>
         {Posts.map(post => {
          return(
            <Post
           author={post.author}
           content={post.content}
           publisheAt={post.publisheAt}
          />
          ) 
          })}
       </main>
      </div>

     
   
    </div>
  )
}
