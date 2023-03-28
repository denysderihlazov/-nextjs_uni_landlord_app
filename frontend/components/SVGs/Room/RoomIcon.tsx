import { RoomIconProps } from "./RoomIcon.props";
import Room from './room.svg';

export const RoomIcon = ({ className, width = 30, height = 30, ...props }: RoomIconProps): JSX.Element => {
    return (
        <div className={className}>
            <Room width={width} height={height} />
        </div>
    )
};
