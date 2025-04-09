import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import { ScrollIndicator } from '../../ScrollIndicator';
import { Logo } from '@site/src/Icons';
import styles from './index.module.css';
import { typescriptPlaygroundLink } from '@site/src/fixtures';

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.header}>
      <Logo />

      <div className={styles.headerContainer}>
        <div className={styles.titleWrapper}>
          <Heading as='h1' className={styles.title}>
            {siteConfig.title}
          </Heading>

          <p className={styles.subtitle}>
            A modern utility library for TypeScript, <br /> providing a variety of utility types.
          </p>
        </div>

        <div className={styles.buttons}>
          <Link className='button' to={typescriptPlaygroundLink}>
            Try it
          </Link>

          <Link className='button' to='/docs/getting_started'>
            Getting Started
          </Link>
        </div>
      </div>

      <div className={styles.scrollIndicatorWrapper}>
        <ScrollIndicator />
      </div>
    </header>
  );
}
