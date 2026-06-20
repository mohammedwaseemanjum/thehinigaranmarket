import type React from "react";
import { mergeClass } from "@/utils/mergeClass";

interface SkeletonProps {
    className: string;
    isLoading: boolean;
}

const Skeleton:React.FC<SkeletonProps> = ({ className, isLoading }) => {
    return (
        <>
        { isLoading && <div className="flex animate-pulse">
            <div className={mergeClass(className, "bg-gray-200 shrink-0")}></div>
        </div> }
        </>
    )
}

export default Skeleton