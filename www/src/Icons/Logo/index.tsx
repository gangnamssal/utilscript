import styles from './index.module.css';

export function Logo() {
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.svg}
        viewBox='0 0 83 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          className={styles.TLine}
          d='M28 3H41.5M55 3H41.5M41.5 3V33'
          stroke='#3B82F6'
          strokeWidth='5'
        />
        <path className={styles.leftArrow} stroke='#1E40AF' strokeWidth='5' />
        <path className={styles.rightArrow} stroke='#1E40AF' strokeWidth='5' />
      </svg>

      <div className={styles.cursorWrapper}>
        <div className={styles.cursor} />
      </div>
    </div>
  );
}
