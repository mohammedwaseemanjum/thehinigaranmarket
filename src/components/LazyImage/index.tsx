import React, { useState, type ImgHTMLAttributes } from 'react';
import { mergeClass } from '@/utils/mergeClass';
import Skeleton from '@component/Skeleton';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  fallbackSrc?: string;
  loaderClass: string;
  className: string;
}

interface FallBackImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const FallBackImage:React.FC<FallBackImageProps> = ({ src, ...props }) => (
  <img
    src={src}
    {...props}
  /> 
)

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc,
  loaderClass,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div>
       <Skeleton className={loaderClass} isLoading={!isLoaded}/>
        {
          src ? (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              className={mergeClass(className,'transition duration-75 ease-in-out', isLoaded ? 'opacity-100' : 'opacity-0 w-fit h-fit')}
              {...props}
            />
          ) : (
            <FallBackImage src={'image-fallback.jpg'} className={mergeClass(loaderClass)}/>
          )
        }
    </div>
    );
};

export default LazyImage