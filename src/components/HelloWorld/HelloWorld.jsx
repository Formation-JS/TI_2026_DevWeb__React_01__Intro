import style from './HelloWorld.module.css';
// ↑ Import d'un objet JS qui possede comme clef les classnames

export default function HelloWorld({ firstname, lastname }) {
  
  return (
    <>
      <p className={style.text}>
        Bonjour {firstname} <span className={style.lastname}>{lastname}</span> !
      </p>
      <p className={style.example}>Exemple de seconde ligne</p>
    </>
  )
}