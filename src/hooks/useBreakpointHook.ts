import { useMediaQuery } from 'react-responsive'

type BreakPoints = 
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"

export const useBreakpoint = () => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 640 })
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 768 })
    const isDesktop = useMediaQuery({ minWidth: 769, maxWidth: 1024 })
    const isLaptop = useMediaQuery({ minWidth: 1025, maxWidth: 1280 })
    const isLargerScreen = useMediaQuery({ minWidth: 1281 })

    const deviceSize: Record<
        breakPoints,
        string | null
    > = {
        "sm": isMobile ? 'sm' : null,
        "md": isTablet ? 'md' : null,
        "lg": isDesktop ? 'lg' : null,
        "xl": isLaptop ? 'xl' : null,
        "2xl": isLargerScreen ? '2xl' : null
    }

    return Object.values(deviceSize).find(deviceSize => deviceSize) as BreakPoints
}