import styles from './index.module.css';
import { Fragment, useCallback, useRef, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodeBlock({ code }: { code: string }) {
  const prevCode = useRef('');

  const splitCode = code.split('\n');

  /**
   *
   * 글자 들여쓰기 개수를 카운트하는 함수
   *
   */
  const countIndentation = useCallback((line: string) => line.match(/^\s*/)?.[0]?.length || 0, []);

  /**
   *
   * 이전 코드에 포함되어 있는 문자열을 찾는 함수
   *
   */
  const isIncluded = useCallback((char: string) => prevCode.current.includes(char), []);

  /**
   *
   * 이전 코드를 저장
   *
   */
  useLayoutEffect(() => {
    prevCode.current = code;
  }, [code]);

  return (
    <div className={styles.codeBlockWrapper}>
      <AnimatePresence mode='wait'>
        <motion.div
          className={styles.codeBlock}
          layout='size'
          style={{ minHeight: '100px' }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {splitCode.map((code, firstIndex) => (
            <div
              key={`${firstIndex}-${code}`}
              style={{ marginLeft: `${countIndentation(code)}ch` }}
            >
              {code.split(' ').map((char, secondIndex) => (
                <Fragment key={`${firstIndex}-${secondIndex}-${char}`}>
                  <motion.span
                    style={{ color: 'white', display: 'inline-block' }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      delay: isIncluded(char) ? 0 : 0.03 * firstIndex + 0.03 * secondIndex + 0.3,
                    }}
                  >
                    <SyntaxHighlighter
                      language='typescript'
                      style={vscDarkPlus}
                      wrapLines={true}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent' }}
                      codeTagProps={{ style: { fontSize: '16px' } }}
                      lineProps={{ style: { whiteSpace: 'pre-wrap' } }}
                    >
                      {char}
                    </SyntaxHighlighter>
                  </motion.span>{' '}
                </Fragment>
              ))}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className={styles.buttonGroup}>
        <button className={styles.button} data-type='close' />
        <button className={styles.button} data-type='minimize' />
        <button className={styles.button} data-type='maximize' />
      </div>
    </div>
  );
}
