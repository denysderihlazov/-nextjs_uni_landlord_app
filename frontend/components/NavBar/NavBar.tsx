import { NavBarProps } from "./NavBar.props";
import styles from "./NavBar.module.css";
import cn from 'classnames';

export const NavBar = ({ children, className, ...props }: NavBarProps): JSX.Element => {
  return (
    <div className={cn(styles.navbar, className)} {...props}>
      {children}
    </div>
  );
};
