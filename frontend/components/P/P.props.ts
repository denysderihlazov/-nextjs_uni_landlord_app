import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
    color?: 'black' | 'white' | 'dark_blue' | 'violet' | 'gray';
    children: ReactNode;
}