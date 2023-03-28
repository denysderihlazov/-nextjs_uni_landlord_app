import { PProps } from "./P.props";
import styles from "./P.module.css";
import cn from 'classnames';


export const P = ({ size = 'm', color, children, className, ...props }: PProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.l]: size == 'l',
                [styles.xl]: size == 'xl',
                [styles.xxl]: size == 'xxl',
                [styles.black]: color == 'black',
                [styles.white]: color == 'white',
                [styles.dark_blue]: color == 'dark_blue',
                [styles.violet]: color == 'violet',
                [styles.gray]: color == 'gray',
            })}
            {...props}
        >
            {children}
        </p>
    )
};