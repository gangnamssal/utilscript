import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Analytics } from '@vercel/analytics/react';
import styles from './index.module.css';
import { LogoSvg } from '../components';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.header}>
      <LogoSvg />

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
          <Link
            className='button'
            to='https://www.typescriptlang.org/play/?#code/PQKhCgAIUweDcSP3IHUCmAbAxgewLYsgC5aQCuBAlmgM4YBO5ADgZAApoCGAngOa1YkA7ACYBCSIF4NwAF7UGDMgAVABbkqkFZHaQqDdhnxFIKAB4MU9PAOYB3cgUWQABmUo16TBwBpIczQyxWzADMSNFIKNFtOSAiAI1p2WijArFoFTlMAZTpGAjFxQHJdwApyOTkAMRR0SEDaCsJiYwY0FPx2YUIUKmYANwTyflVnCIIo4dMqADo5AAl2BgYo7CFyAW48wGA9mWBwcHIcP1pmAG9IAEEvAGEvUq8AeS8WLwyvAFVIAF8qvhxIAHJB1xyPwA3NtsAJOhpaKkALyQADaAEYvAAmLwAZi8ABYvABWAC6GlUYM6IPAo3wpUoBDMQhOUMgsJO40paGptAAPOSsIFIbQUQA+IFAA'
          >
            Try it
          </Link>

          <Link className='button' to='/docs/getting_started'>
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 *
 * Todo List
 *
 * 1. 전체 색상 변경, 기존의 흰색 -> 검정색 계열로 혹은 흰색이면서 투명도 추가
 * 2. 스크롤을 하면서 요소가 멈춰있는 듯한 효과
 * 2-1. 들어갈 요소는 utilscript의 장점을 소개하거나 혹은 특정 기능을 소개하는 것이 좋을 것 같음
 * 3. 애니메이션 추가
 *
 */

export default function Home(): ReactNode {
  return (
    <Layout
      title={'타입스크립트 유틸리티 라이브러리'}
      description='유틸스크립트는 TypeScript를 위한 다양한 유틸리티 타입과 함수를 제공하는 라이브러리로, 타입 조작과 유니온, 인터섹션 등 고급 타입 기능을 쉽게 활용할 수 있습니다.'
    >
      <HomepageHeader />

      {/* <main className={styles.main}>
        <div style={{ height: '2000px', position: 'sticky', top: '60px' }}>
          contents are preparing 1...
        </div>

        <div style={{ height: '2000px', position: 'sticky', top: '60px' }}>
          contents are preparing 2...
        </div>

        <div style={{ height: '2000px', position: 'sticky', top: '60px' }}>
          contents are preparing 3...
        </div>
      </main> */}

      <Analytics />
    </Layout>
  );
}
