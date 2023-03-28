import { BedIconProps } from "./BedIcon.props";
import Bed from './bed.svg';

export const BedIcon = ({ className, width = 20, height = 20, ...props }: BedIconProps): JSX.Element => {
    return (
        <div className={className}>
            <Bed width={width} height={height} />
        </div>
    )
};
