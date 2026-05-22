import clsx from 'clsx';
import style from './MessageDisplay.module.css';

export default function MessageDisplay({
  message,
  error = null,
  isImportant = false
}) {

  if (error) {
    return (
      <p className={style.error}>
        Erreur : {error.message || 'Une erreur est survenu'}
      </p>
    );
  }

  return (
    // <p className={`${style.msg} ${isImportant ? style.imp : ''}`}>
    <p className={clsx(style.msg, isImportant && style.imp)}>
      Message: {message}
    </p>
  );
}