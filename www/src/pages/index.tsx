import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Analytics } from '@vercel/analytics/react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <Heading as='h1' className='hero__title'>
          {siteConfig.title}
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--secondary button--lg' to='/docs/getting_started'>
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={'utility library for TypeScript'}
      description='타입스크립트를 위한 다양한 유틸리티 타입과 함수를 제공하는 라이브러리'
    >
      <HomepageHeader />

      <main className={styles.main}>
        <span className='text-2xl font-bold'>contents are preparing...</span>
      </main>

      <Analytics />
    </Layout>
  );
}
