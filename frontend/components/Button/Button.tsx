import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({appearance, arrow = 'none', alignment, children, className, ...props}:  ButtonProps): JSX.Element => {
    return (
        <button 
             className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'violet',
                [styles.centered]: alignment == 'centered',
                [styles.left]: alignment == 'left',
                [styles.right]: alignment == 'right',
             })}
             {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon />
            </span>}
        </button>
    );
};