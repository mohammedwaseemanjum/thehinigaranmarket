import { mergeClass } from '@/utils/mergeClass'
import type { HTMLProps } from "react";

type TextVariant = 
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"

interface TextI<T extends React.ElementType = "span"> {
    children: React.ReactNode,
    as?: T,
    className?: HTMLProps<HTMLElement>["className"],
    variant?: TextVariant
}

const variants: Record<
    TextVariant,
    string
> = {
    "sm": 'text-white text-sm font-bold',
    "md": 'text-white text-md font-bold',
    "lg": 'text-white text-lg font-bold',
    "xl" : 'text-white text-xl font-bold',
    "2xl": 'text-white text-2xl font-bold'
}

type TextT<T extends React.ElementType> = TextI<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextI<T>>;

const Text = <T extends React.ElementType = "span"> ({ children, className, as, variant, ...rest }: TextT<T>) => {
    const Component = as ? as : 'span'
    const variantMap = variant ? variants[variant] : variants['sm']

    return (
        <Component 
            { ...rest } 
            className={ 
                mergeClass(
                    className, 
                    variantMap,
                    'font-brand'
                )
            }
        >
            { children }
        </Component>
    )
}

export default Text