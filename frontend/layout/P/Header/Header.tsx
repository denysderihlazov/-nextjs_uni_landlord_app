import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import { NavBar, MenuList } from "../../../components";
import cn from 'classnames';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            <NavBar className={styles.navbar}>
                <MenuList></MenuList>
            </NavBar>
        </div>
    )
};