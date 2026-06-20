import Logo from '@/assets/logo.png'
import FoodChef from '@/assets/chicken_zilla.jpg'
import Text from '@component/Text/index'

import DrinkRestaurant from '@/assets/drinks_restuarant.jpg'
import HotDogRestaurant from '@/assets/hotdog_restaurant.jpg'

import { mergeClass } from '@/utils/mergeClass'
import ResturantLogo from '@/modules/blog/RestuarantLogo'
import Menu from '@modules/blog/Menus'

const imageRestaurantStyle = 'rounded-tl-md rounded-tr-md'
const imageLogoRestaurantStyle = 'object-contain rounded-lg w-[45px]'
const restaurantTextStyle = 'pt-4 px-[clamp(12px,0.5357vw+10.2857px,24px)] text-[clamp(20px,0.3571vw+18.8571px,28px)]! text-black! truncate'
const resDiv = 'rounded-md shadow-md bg-white'
const subText = 'text-[clamp(14px,0.1786vw+13.4286px,18px)]! text-gray-600! truncate!'
import { useNavigate } from "react-router-dom";
const Blog:React.FC = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='py-[clamp(10px,2vw,30px)]'>
                <img src={Logo} className='object-cover h-[clamp(100px,6.6964vw+78.5714px,250px)] mx-auto'/>
            </div>
            <div className="bg-transparent flex flex-col gap-8">
            <div className="bg-[url('assets/pizza.png')] bg-no-repeat bg-center bg-cover h-[clamp(18.75rem,13.392857142857142rem+26.785714285714285vw,56.25rem)] py-[clamp(2rem,1.5714285714285714rem+2.142857142857143vw,5rem)]">
                <div className='flex flex-col w-[clamp(20rem,13.035714285714286rem+34.82142857142857vw,68.75rem)] gap-[clamp(0.875rem,0.2857142857142857rem+2.946428571428571vw,5rem)] px-[clamp(0.625rem,-0.1785714285714285rem+4.017857142857142vw,6.25rem)]'>
                    <Text as='p' className='text-[clamp(1.875rem,1.3392857142857144rem+2.6785714285714284vw,5.625rem)]! leading-[clamp(1.875rem,1.3392857142857144rem+2.6785714285714284vw,5.625rem)]!'>
                        Order Healthy and Fresh Food Any Times
                    </Text>
                    <Text as='p' className='text-gray-500! text-[clamp(0.875rem,0.625rem+1.25vw,2.625rem)]!'>
                        Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.
                    </Text>
                    <ResturantLogo />
                </div>
            </div>

            <Menu />

            <div className='bg-gray-200 flex flex-col px-4 pt-6 pb-8 gap-10'>
                <Text as='p' className='text-center text-[clamp(28px,1.6518vw+22.7143px,65px)]! text-black! leading-[clamp(28px,1.6518vw+22.7143px,65px)]!'>Restaurants</Text>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-[clamp(8px,8.5714vw-19.4286px,200px)]">
                    <div className={mergeClass(resDiv)} onClick={() => navigate('/store')}>
                        <img src={DrinkRestaurant} className={mergeClass(imageRestaurantStyle)}/>
                        <Text as='p' className={restaurantTextStyle}>Organic Arcadian Food</Text>
                        
                        <div className='flex flex-row px-[clamp(12px,0.5357vw+10.2857px,24px)] py-4 items-center'>
                            <img src={FoodChef} className={imageLogoRestaurantStyle}/>
                            <div className='flex flex-col ml-2'>
                                <Text as='p' className={subText}>12:00AM - 12:00PM</Text>
                                <Text as='p' className={subText}>Link road, Model Town</Text>
                            </div>
                        </div>
                    </div>

                    <div className={mergeClass(resDiv)} onClick={() => navigate('/store')}>
                        <img src={HotDogRestaurant} className={mergeClass(imageRestaurantStyle)}/>
                        <Text as='p' className={restaurantTextStyle}>Food Chef Italian</Text>
                        <div className='p-2 flex flex-row px-[clamp(12px,0.5357vw+10.2857px,24px)] py-4 items-center'>
                            <img src={FoodChef} className={imageLogoRestaurantStyle}/>
                            <div className='flex flex-col ml-2'>
                            <Text as='p' className={subText}>12:00AM - 12:00PM</Text>
                                <Text as='p' className={subText}>Link road, Model Town</Text>
                            </div>
                        </div>
                    </div>

                    <div className={mergeClass(resDiv)} onClick={() => navigate('/store')}>
                        <img src={HotDogRestaurant} className={mergeClass(imageRestaurantStyle)}/>
                        <Text as='p' className={restaurantTextStyle}>Food Chef Italian</Text>
                        <div className='p-2 flex flex-row px-[clamp(12px,0.5357vw+10.2857px,24px)] py-4 items-center'>
                            <img src={FoodChef} className={imageLogoRestaurantStyle}/>
                            <div className='flex flex-col ml-2'>
                            <Text as='p' className={subText}>12:00AM - 12:00PM</Text>
                                <Text as='p' className={subText}>Link road, Model Town</Text>
                            </div>
                        </div>
                    </div>

                    <div className={mergeClass(resDiv)} onClick={() => navigate('/store')}>
                        <img src={HotDogRestaurant} className={mergeClass(imageRestaurantStyle)}/>
                        <Text as='p' className={restaurantTextStyle}>Food Chef Italian</Text>
                        <div className='p-2 flex flex-row px-[clamp(12px,0.5357vw+10.2857px,24px)] py-4 items-center'>
                            <img src={FoodChef} className={imageLogoRestaurantStyle}/>
                            <div className='flex flex-col ml-2'>
                            <Text as='p' className={subText}>12:00AM - 12:00PM</Text>
                                <Text as='p' className={subText}>Link road, Model Town</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='p-10'>
                Footer
            </div>
        </div>
    )
}

export default Blog