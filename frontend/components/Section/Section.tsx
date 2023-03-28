import { SectionProps } from "./Section.props";
import styles from "./Section.module.css";
import cn from 'classnames';


export const Section = ({ children, bgColor, centeredContent, className, ...props }: SectionProps): JSX.Element => {
    return (
        <div
            className={cn(styles.section, className, {
                [styles.centered]: centeredContent == 'yes',
                [styles.dark_blue]: bgColor == 'dark_blue',
                [styles.gray]: bgColor == 'gray',
                [styles.white]: bgColor == 'white'
            })}
            {...props}
        >
            {children}
        </div>
    )
};