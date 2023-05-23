import { useRouter } from 'next/router';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import styles from './MenuItem.module.scss';

export default function MenuItem({ displayName, href }) {
  const router = useRouter();
  return (
    <Link href={href} passHref legacyBehavior>
      <Nav.Link
        className={`${styles.navLink} ${
          router.pathname === href ? styles.active : ''
        }`}
      >
        {displayName}
      </Nav.Link>
    </Link>
  );
}
