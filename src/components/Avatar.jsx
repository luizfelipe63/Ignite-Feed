import styles from './Avatar.module.css'

export function Avatar({noBorder = false,src}){
  return(
    <img 
    className={
      noBorder ? 
      styles.noBorderAvatar:
      styles.yesBorderAvatar }
     src={src}  />
  )
}