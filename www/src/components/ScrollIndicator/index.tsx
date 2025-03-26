import styles from './index.module.css';

export function ScrollIndicator() {
  return (
    <p className={styles.scrollIndicator}>
      <span>{'>'}</span>
      <span>{'>'}</span>
      <span>{'>'}</span>
    </p>
  );
}
