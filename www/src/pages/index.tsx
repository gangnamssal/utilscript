import '../css/reset.css';
import '../css/normalize.css';
import { useMemo, useRef } from 'react';
import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import { Analytics } from '@vercel/analytics/react';
import styles from './index.module.css';
import { CodeBlock, DescriptionCard, HomepageHeader, List } from '../components';
import { useCallback, useState } from 'react';
import { AnimatePresence, useMotionValueEvent, useScroll } from 'motion/react';
import {
  activeTextMap,
  animatedCodeDescriptionList,
  descriptionList,
  positionMap,
} from '../fixtures';
import {
  BrandedActiveText,
  ActiveTextMap,
  PositionMap,
  BrandedCode,
  BrandedAnimatedCodeDescriptionDescription,
} from '../types';
import { motion } from 'motion/react';

export default function Home(): ReactNode {
  const ref = useRef(null);

  const [code, setCode] = useState<BrandedCode>('' as BrandedCode);
  const [activeText, setActiveText] = useState<BrandedActiveText>('Array' as BrandedActiveText);

  /**
   *
   * motion
   *
   */
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  /**
   *
   * 스크롤 위치에 따라 코드 예제를 업데이트하는 함수
   *
   */
  const updateCodeByScrollPosition = useCallback(
    (currentPercentage: number, positionMap: PositionMap) => {
      Object.entries(positionMap).forEach(([scrollPercentage, { code }]) => {
        if (currentPercentage >= parseInt(scrollPercentage)) setCode(code);
      });
    },
    [setCode],
  );

  /**
   *
   * 스크롤 위치에 따라 활성화된 탭을 업데이트하는 함수
   *
   */
  const updateActiveTextByScrollPosition = useCallback(
    (scrollPercentage: number, activeTextMap: ActiveTextMap) => {
      Object.entries(activeTextMap).forEach(([position, value]) => {
        if (scrollPercentage >= parseInt(position)) return setActiveText(value);
      });
    },
    [setActiveText],
  );

  /**
   *
   * motion scrollYProgress값이 변경될 때 실행되는 함수
   *
   */
  useMotionValueEvent(scrollYProgress, 'change', value => {
    const scrollPercentage = value * 100;

    updateCodeByScrollPosition(scrollPercentage, positionMap);

    updateActiveTextByScrollPosition(scrollPercentage, activeTextMap);
  });

  return (
    <Layout
      title={'타입스크립트 유틸리티 라이브러리'}
      description='유틸스크립트는 TypeScript를 위한 다양한 유틸리티 타입과 함수를 제공하는 라이브러리로, 타입 조작과 유니온, 인터섹션 등 고급 타입 기능을 쉽게 활용할 수 있습니다.'
    >
      <HomepageHeader />

      <main className={styles.main}>
        {/* library description section */}
        <section className={styles.libraryDescriptionSection}>
          <h2 className={styles.libraryDescriptionSectionCardH2}>
            간결하고 강력한 TypeScript 유틸리티 타입을 제공합니다. <br />
            가볍고 직관적인 설계로 더 효율적인 개발을 경험하세요.
          </h2>

          <div className={styles.libraryDescriptionSectionCardWrap}>
            <List
              list={descriptionList}
              render={({ icon, title, description }, index) => (
                <DescriptionCard
                  key={`${title}-${description}-${index}`}
                  icon={icon}
                  title={title}
                  description={description}
                />
              )}
            />
          </div>
        </section>

        {/* code description section */}
        <section className={styles.codeDescriptionSection} ref={ref}>
          <article className={styles.codeDescriptionSectionArticle}>
            <div className={styles.codeDescriptionSectionArticleContents}>
              <div className={styles.codeDescriptionTextBox}>
                <List
                  list={animatedCodeDescriptionList}
                  render={({ title, description }, index) => (
                    <AnimatedCodeDescription
                      key={`${title}-${description}-${index}`}
                      title={title}
                      description={description}
                      currentActivateText={activeText}
                    />
                  )}
                />
              </div>

              <CodeBlock code={code} />
            </div>
          </article>
        </section>
      </main>

      <Analytics />
    </Layout>
  );
}

/**
 *
 * 코드 예제 옆 설명을 추가하는 컴포넌트
 *
 */

function AnimatedCodeDescription({
  title,
  description,
  currentActivateText,
}: {
  title: BrandedActiveText;
  description: BrandedAnimatedCodeDescriptionDescription;
  currentActivateText: BrandedActiveText;
}) {
  /**
   *
   * 탭 활성 여부
   *
   */
  const isActive = useMemo(() => currentActivateText === title, [currentActivateText, title]);

  /**
   *
   * 모션 트랜지션
   *
   */
  const motionTransition = useMemo(
    () => ({ opacity: { duration: 0.5, type: 'spring', stiffness: 300, damping: 30 } }),
    [],
  );

  return (
    <p className={styles.codeDescriptionTextBoxP} data-state={isActive ? 'active' : 'inactive'}>
      <strong>{title}</strong>

      <AnimatePresence mode='popLayout'>
        {isActive && (
          <motion.span
            key='array-text'
            initial={{ opacity: 0, padding: 0 }}
            animate={{ opacity: 1, padding: '0 0 1.6rem' }}
            transition={{
              opacity: { delay: 0.3, ...motionTransition },
              padding: { ...motionTransition },
            }}
          >
            {description}
          </motion.span>
        )}
      </AnimatePresence>
    </p>
  );
}
