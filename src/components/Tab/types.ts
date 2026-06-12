import type { ReactNode } from "react";

interface TabInterface {
    children: ReactNode;
    defaultActiveIndex: number;
    containerClass?: string;
}

interface TabListInterface {
    children: ReactNode;
    index: number;
    activeClass?: string;
    className?:string;
}

interface TabListContentInterface {
    children: ReactNode;
    index: number;
    activeClass?: string;
}

interface TabStateInterface {
  activeIndex: number
  setActiveIndex: (index: number) => void;
}

export {
    type TabInterface,
    type TabListInterface,
    type TabListContentInterface,
    type TabStateInterface
}