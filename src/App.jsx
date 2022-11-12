import { Header } from './components/Header'
import {Post} from './components/Post' 
import styles from './app.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'



export function App() {
  return (
    <div>

    <Header/>    

    <div className={styles.wapper}>
      
      <Sidebar/>
      <main>
      <Post
        author="Luiz Felipe"
        content=
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quis architecto sapiente fugiat quibusdam, qui quo voluptates."
       />
       <Post
        author="Felipe"
        content=
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quis architecto sapiente fugiat quibusdam, qui quo voluptates."
       />

       
      </main>
    </div>

     
   
    </div>
  )
}
