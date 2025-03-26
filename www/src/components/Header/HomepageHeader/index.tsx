import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import { ScrollIndicator } from '../../ScrollIndicator';
import { Logo } from '../../../Icons';
import styles from './index.module.css';
import { useMemo } from 'react';

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  /**
   *
   * 타입스크립트 플레이그라운드 링크
   *
   */
  const typescriptPlaygroundLink = useMemo(() => {
    return 'https://www.typescriptlang.org/play/?#code/PQKhCgAIUweDcSP3IHUCmAbAxgewLYsgC5aQCuBAlmgM4YBO5ADgZAApoCGAngOa1YkA7ACYBCSIF4NwAF7UGDMgAVABbkqkFZHaQqDdhnxFIKAB4MU9PAOYB3cgUWQABmUo16TBwBpIczQyxWzADMSNFIKNFtOSAiAI1p2WijArFoFTlMAZTpGAjFxQHJdwApyOTkAMRR0SEDaCsJiYwY0FPx2YUIUKmYANwTyflVnCIIo4dMqADo5AAl2BgYo7CFyAW48wGA9mWBwcHIcP1pmAG9IAEEvAGEvUq8AeS8WLwyvAFVIAF8qvhxIAHJB1xyPwA3NtsAJOhpaKkALyQADaAEYvAAmLwAZi8ABYvABWAC6GlUYM6IPAo3wpUoBDMQhOUMgsJO40paGptAAPOSsIFIbQUQA+IFAA';
  }, []);

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
