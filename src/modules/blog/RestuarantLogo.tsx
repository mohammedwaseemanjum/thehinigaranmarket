import { useQuery } from '@tanstack/react-query'
import Text from '@component/Text/index'
import LazyImage from '@/components/LazyImage';
import Skeleton from '@/components/Skeleton';
import { restuarantQueries } from '@modules/blog/queries/restuarant/queries';

const ResturantLogo = () => {
    const { data, isLoading } = useQuery({
        ...restuarantQueries.restuarantLogos()
    });

    return (
        <div>
            <Text as='p' className='text-[clamp(1rem,0.6964285714285714rem+1.5178571428571428vw,3.125rem)]!'>Popular Restuarants</Text>
            <div className='flex flex-row gap-2 mt-2'>
                {
                    [1,2,3,4,5].map((_,index) => (
                        <Skeleton className={'h-18.25 w-[clamp(3.125rem,2.6785714285714284rem+2.232142857142857vw,6.25rem)] rounded-lg'} isLoading={isLoading} key={index}/>
                    ))
                }
                {
                    data?.map(restuarant => (
                        <div className='w-[clamp(3.125rem,2.6785714285714284rem+2.232142857142857vw,6.25rem)]' key={restuarant.id}>
                            <LazyImage
                                key={restuarant.id}
                                src={restuarant.image}
                                alt={restuarant.name}
                                className='object-contain rounded-lg'
                                loaderClass='h-18.25 w-[clamp(3.125rem,2.6785714285714284rem+2.232142857142857vw,6.25rem)] rounded-lg'
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ResturantLogo