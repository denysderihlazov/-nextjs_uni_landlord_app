import { MenuListProps } from "./MenuList.props";
import styles from "./MenuList.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUserContext } from "../../context/userContext";
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'Rent', href: '/rent' },
  { title: 'Add Post', href: '/addpost' },
];

export const MenuList = ({ children, className, listItems, ...props }: MenuListProps): JSX.Element => {
  const router = useRouter();
  const { user, setUser } = useUserContext();
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const navMenuRef = useRef<HTMLUListElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const navMenu = navMenuRef.current;
    if (hamburger && navMenu) {
      hamburger.addEventListener("click", toggleMobileMenu);
    }
  
    function toggleMobileMenu() {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return () => {
      if (hamburger && navMenu) {
        hamburger.removeEventListener("click", toggleMobileMenu);
      }
    };
  }, [hamburgerRef, navMenuRef, isMobileMenuOpen]);
  
  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setUser({ id: '', name: '', email: '' });
  };

  const { name } = user;
  const menuListClasses = cn(styles['my-ul'], {
    [styles['my-ul-clicked']]: isMobileMenuOpen,
  });

  return (
    <>
      <ul ref={navMenuRef} className={menuListClasses} {...props}>
        {menuItems.map((item, index) => {
          const isActive = item.href === router.pathname;
          const itemClassName = isActive ? styles.active__menu__item : '';

          if (item.title === 'Add Post' && !name) {
            return null;
          }

          return (
            <li key={index} className={itemClassName}>
              <Link href={item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
          {!name && (
            <div className={styles["menu__auth"]}>
              <a className={styles["menu__login"]} href="/login">Login</a>
              <a className={styles["menu__signup"]} href="/signup">Sign up</a>
            </div>
          )}
          {name && (
            <div className={styles["menu__auth"]}>
              <a className={styles["menu__logout"]} onClick={handleLogout}>Log out</a>
            </div>
          )}
      </ul>
      <div ref={hamburgerRef} className={styles["hamburger"]}>
        <span className={styles["bar"]}></span>
        <span className={styles["bar"]}></span>
        <span className={styles["bar"]}></span>
      </div>
    </>
  );
};
