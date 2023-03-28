import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface MenuListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{
    children: ReactNode;
    listItems: string[];
}