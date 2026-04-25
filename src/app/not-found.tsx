import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.content}>
        <h1>404</h1>
        <h2>Space Not Found</h2>
        <p>The architectural space you are looking for does not exist or has been moved.</p>
        <Link href="/" className="btn btn-accent">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
