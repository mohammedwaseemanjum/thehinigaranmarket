import { type JSX, useEffect } from 'react';
import { mergeClass } from '@/utils/mergeClass'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer';
import { useShallow } from 'zustand/shallow'
import { type TabListInterface, type TabListContentInterface ,type TabStateInterface, type TabInterface } from '@component/Tab/types'

const useTabStore = create<TabStateInterface>()(
    immer((set) => ({
        activeIndex: 0,
        setActiveIndex: (index: number) => {
            set((state) => {
                state.activeIndex = index
            })
        }
    }))
)

const Tab = ({ children, defaultActiveIndex, containerClass }: TabInterface): JSX.Element => {
    const { setActiveIndex } = useTabStore(
        useShallow((state) => ({
            setActiveIndex: state.setActiveIndex,
        }))
    )

    useEffect(() => {
        setActiveIndex(defaultActiveIndex)
    }, [])

    return (
        <div className={containerClass}>
            { children }
        </div>
    )
}

const TabList = ({ children, index, activeClass, className }: TabListInterface): JSX.Element => {
    const { activeIndex, setActiveIndex } = useTabStore(
        useShallow((state) => ({
            setActiveIndex: state.setActiveIndex,
            activeIndex: state.activeIndex
        }))
      )

    const handleTabClick = () => {
        setActiveIndex(index)
    }

    return (
        <div onClick={handleTabClick} className={mergeClass(activeIndex === index ? activeClass : '', className)}>
            { children }
        </div>
    )
}

const TabListContent = ({ children, index, activeClass }: TabListContentInterface): JSX.Element => {
    const { activeIndex } = useTabStore(
        useShallow((state) => ({
            activeIndex: state.activeIndex
        }))
      )

    return (
        <div className={mergeClass(activeIndex === index ? `${activeClass} block` : 'hidden', activeClass)}>
            { children }
        </div>
    )
}

export {
    Tab,
    TabList,
    TabListContent
}