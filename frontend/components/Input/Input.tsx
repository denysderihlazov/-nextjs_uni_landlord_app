
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from 'classnames'
import { Button } from "../Button/Button";



export const Input = ({ className, alignment, ...props }: InputProps): JSX.Element => {
    return (
        <div className={cn(className, styles.custom, {
            [styles.centered]: alignment == 'centered',
            [styles.left]: alignment == 'left',
            [styles.right]: alignment == 'right',
        })}>
            <input placeholder="Enter Name" className={cn(className, styles.input)} {...props} ></input>
        </div>
    );
};
