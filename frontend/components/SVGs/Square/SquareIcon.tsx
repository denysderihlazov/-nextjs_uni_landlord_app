import { SquareIconProps } from "./SquareIcon.props";
import Square from './square.svg';

export const SquareIcon = ({ className, width = 20, height = 20, ...props }: SquareIconProps): JSX.Element => {
    return (
        <div className={className}>
            <Square width={width} height={height} />
        </div>
    )
};
