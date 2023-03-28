import { BathroomIconProps } from "./BathroomIcon.props";
import Bathroom from './bathroom.svg';

export const BathroomIcon = ({ className, width = 24, height = 24, ...props }: BathroomIconProps): JSX.Element => {
    return (
        <div className={className}>
            <Bathroom width={width} height={height} />
        </div>
    )
};
