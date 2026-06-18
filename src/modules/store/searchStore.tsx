interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
    
}

const RadioButton: React.FC<CheckboxProps> = ({ ...rest }) => {
    return (
        <div className="relative flex items-center">
            <input 
                type="checkbox"
                className="
                    peer h-7 w-7 cursor-pointer appearance-none 
                    rounded-full border border-slate-300 checked:bg-blue-600 checked:border-blue-600 
                    focus:outline-none transition-all
                "
                {...rest}
            />
        </div>
    )
}

const ListOfMenus = [
    {
        name: 'Desert',
        value: 'desert',
        count: 10,
    },
    {
        name: 'Chicken',
        value: 'chicken',
        count: 20,
    },
    {
        name: 'Beverages',
        value: 'beverage',
        count: 30,
    },
    {
        name: 'Salad',
        value: 'salad',
        count: 40,
    }
]

import Text from '@component/Text/index'
import FoodChef from '@/assets/chicken_zilla.jpg'
import DrinkRestaurant from '@/assets/drinks_restuarant.jpg'
import HotDogRestaurant from '@/assets/hotdog_restaurant.jpg'
import { mergeClass } from '@/utils/mergeClass'
import { useNavigate } from 'react-router-dom'

const imageRestaurantStyle = 'rounded-tl-md rounded-tr-md'
const imageLogoRestaurantStyle = 'object-contain rounded-lg w-[45px]'
const restaurantTextStyle = 'pt-4 px-[clamp(12px,0.5357vw+10.2857px,24px)] text-[clamp(20px,0.3571vw+18.8571px,28px)]! text-black! truncate'
const resDiv = 'rounded-md shadow-md bg-white'
const subText = 'text-[clamp(14px,0.1786vw+13.4286px,18px)]! text-gray-600! truncate!'

const SearchStore: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="grid grid-cols-1 px-4 pt-4 bg-gray-200 gap-4">
            <div className="bg-white md:col-end-1 md:w-[200px] p-4">
                <Text as='p' className='text-black! text-[20px]! mb-4'>
                    Search By Food
                </Text>
                {
                    ListOfMenus.map(menu => (
                        <div className='flex flex-row items-center justify-start gap-2 mb-4'>
                            <RadioButton value={'Desert'} onClick={(e) => console.log(e.currentTarget.value)}/>
                            <span className="mr-auto">{ menu.name }</span>
                            <span>{ menu.count }</span>
                        </div>
                    ))
                }
            </div>
            <div className='bg-white flex flex-col px-4 pt-6 pb-8 gap-10'>
                <Text as='p' className='text-center text-[clamp(28px,1.6518vw+22.7143px,65px)]! text-black! leading-[clamp(28px,1.6518vw+22.7143px,65px)]!'>Restaurants</Text>
                
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
    )
}

export default SearchStore