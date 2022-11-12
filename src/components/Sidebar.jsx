import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from  './Sidebar.module.css'




export function Sidebar() {
  return (
   <aside className={styles.Sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="" />

      <div className={styles.profile}>
        <Avatar
        src="https://github.com/luizfelipe63.png" alt="" 
        />

        <strong>Luiz Felipe</strong>
        <span>Frontend developer</span>

      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
      
   </aside>
  )
}