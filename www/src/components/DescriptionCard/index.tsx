import styles from './index.module.css';
import { motion } from 'motion/react';

type DescriptionCardProps = { title: string; description: string; icon: React.ReactNode };

export function DescriptionCard({ title, description, icon }: DescriptionCardProps) {
  return (
    <motion.article className={styles.descriptionCard}>
      <div>
        {icon}
        <h3>{title}</h3>
      </div>

      <p>{description}</p>
    </motion.article>
  );
}
