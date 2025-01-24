import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap/';

import { menuItems } from '@/lib/SiteVariables';
import MenuItem from './MenuItem';

import styles from './Header.module.scss';

export default function Header({ email, phone }) {
  const router = useRouter();
  console.log(menuItems);
  return (
    <header>
      <Navbar fixed="top" expand="md" bg="light" className={`${styles.navbar}`}>
        <Container fluid className={`${styles.bar}`}>
          <Container className={`${styles.barContent}`}>
            <Link href={`mailto:${email}`}>{email}</Link>
            <Link href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</Link>
          </Container>
        </Container>
        <Container>
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand
              className={`${styles.navbarBrand} ${
                router.pathname === '/' ? 'active' : ''
              }`}
            >
              <Image
                className={styles.logo}
                src="/images/logoAmMed.svg"
                height={50}
                width={300}
                alt="Logo AM-MED"
              ></Image>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {menuItems.map((link, index) => (
                  <MenuItem
                    key={index}
                    href={link.href}
                    displayName={link.displayName}
                  />
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
