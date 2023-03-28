import { DivProps } from "./Div.props";
import styles from "./Div.module.css";
import cn from 'classnames';


export const Div = ({ children, centeredContent, className, ...props }: DivProps): JSX.Element => {
    return (
        <div
            className={cn(styles.div, className, {
                [styles.centered]: centeredContent == 'yes'
            })}
            {...props}
        >
            {children}
        </div>
    )
};