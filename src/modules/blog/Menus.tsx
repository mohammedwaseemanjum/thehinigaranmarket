import type React from "react";
import { useQuery } from '@tanstack/react-query'
import Text from '@component/Text/index'
import LazyImage from '@/components/LazyImage';
import Skeleton from '@/components/Skeleton';
import { menuQueries } from '@modules/blog/queries/menu/queries';
import { useNavigate } from "react-router-dom";

const menuStyle = 'w-[clamp(12.5rem,9.821428571428571rem+13.392857142857142vw,31.25rem)] flex flex-col items-center'
const imageMenuStyle = 'px-[clamp(0.5rem,0.35714285714285715rem+0.7142857142857143vw,1.5rem)] h-[clamp(150px,4.4643vw+135.7143px,250px)] w-[clamp(200px,8.9286vw+171.4286px,400px)] object-contains'
const menuTextStyle = 'text-[clamp(1.125rem,0.8839285714285714rem+1.2053571428571428vw,2.8125rem)]! text-black!'

const Menu: React.FC = () => {
    const navigate = useNavigate()

    const { data, isLoading } = useQuery({
        ...menuQueries.restuarantLogos()
    });

    return (
        <div className='flex flex-col gap-10'>
            <Text as='p' className='text-center text-[clamp(28px,1.6518vw+22.7143px,65px)]! text-black!'>Restaurant Menu</Text>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 px-[clamp(8px,5vw-8px,120px)]'> 
                {
                    [1,2,3,4,5].map((_,index) => (
                        <Skeleton className={'h-[clamp(150px,4.4643vw+135.7143px,250px)] w-[clamp(200px,8.9286vw+171.4286px,400px)] rounded-lg'} isLoading={isLoading} key={index}/>
                    ))
                }
                {
                    data?.map(menu => (
                        <div className={menuStyle} onClick={() => navigate('/search')} key={menu.id}>
                            <LazyImage
                                key={menu.id}
                                src={menu.image}
                                alt={menu.name}
                                className={imageMenuStyle}
                                loaderClass={imageMenuStyle}
                            />
                            <div className='flex flex-col items-center'>
                                <Text as='p' className={menuTextStyle}>{ menu.name }</Text>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu