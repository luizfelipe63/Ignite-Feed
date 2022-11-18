import styles from './Avatar.module.css'

interface avatarProps{
  src: string,
  alt?: string,
  noBorder?:boolean 
}

export function Avatar({noBorder = false,src,alt}:avatarProps){
  return(
    <img 
    className={
      noBorder ? 
      styles.noBorderAvatar:
      styles.yesBorderAvatar }
      src={src}
      alt={alt}
      />
  )
}