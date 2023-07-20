// components/Header.js
import styles from './Header.module.css'; // Import your CSS module

export default function Header(){
  return (
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">JobSite</Link>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/job-listings">Job Listings</Link>
            </li>
            <li>
              <Link href="/saved-jobs">Saved Jobs</Link>
            </li>
            <li>
              <Link href="/applications">Applications</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

