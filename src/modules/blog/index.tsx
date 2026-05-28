import Logo from '@/assets/logo.png'
import FoodChef from '@/assets/chicken_zilla.jpg'
import Chicken from '@/assets/food_chef.jpg'
import ChefGanteng from '@/assets/chef_ganteng.png'
import MasterChef from '@/assets/master_chef.jpg'
import Organic from '@/assets/organic.jpg'
import Text from '@component/Text/index'

import PizzaMenu from '@/assets/pizza_menu.png'
import BurgerMenu from '@/assets/burger_menu.png'
import PastaMenu from '@/assets/pasta_menu.png'
import ChickenMenu from '@/assets/chicken_menu.png'
import DessertMenu from '@/assets/dessert_menu.png'
import SandwichMenu from '@/assets/sandwich_menu.png'
import ChickenRoastMenu from '@/assets/chicken_roast_menu.png'

import DrinkRestaurant from '@/assets/drinks_restuarant.jpg'
import HotDogRestaurant from '@/assets/hotdog_restaurant.jpg'
import LightRestaurant from '@/assets/light_restuarant.jpg'

import { mergeClass } from '@/utils/mergeClass'

const menuStyle = 'min-w-[clamp(150px,10vw,600px)] flex flex-col items-center p-4 md:p-6'
const imageMenuStyle = 'h-[clamp(100px,10vw,200px)] w-[clamp(150px,15vw,400px)]'
const menuTextStyle = 'text-[clamp(12px,4vw,36px)]! text-black!'

const imageRestaurantStyle = 'rounded-tl-md rounded-tr-md'
const imageLogoRestaurantStyle = 'object-contain rounded-md w-[clamp(40px,10vw,100px)]'
const restaurantTextStyle = 'px-2 text-[clamp(1rem,4.048vw,3.125rem)]! text-black! py-4 truncate'

const Blog: React.FC = () => {
    return (
        <div className="bg-transparent flex flex-col">
            <div className='m-auto py-[clamp(10px,2vw,30px)]'>
                <img src={Logo} className='object-cover h-[clamp(80px,20vw,150px)]'/>
            </div>
            <div className="bg-[url('assets/pizza.png')] bg-no-repeat bg-right bg-cover min-h-[clamp(200px,40vw,650px)] py-[clamp(5px,5vw,30px)]">
                <div className='flex flex-col w-[clamp(300px,20vw,500px)] px-[clamp(1rem,10vw,10rem)] gap-[clamp(5px,5vw,90px)]'>
                    <Text as='p' className='text-[clamp(12px,5vw,80px)]! w-[clamp(180px,50vw,800px)] leading-[clamp(16px,6vw,80px)]!'>
                        Order Healthy and Fresh Food Any Time
                    </Text>
                    <Text as='p' className='text-gray-500! text-[clamp(12px,2.5vw,30px)]! w-[clamp(150px,50vw,800px)]'>
                        Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.
                    </Text>

                    <div className='w-[clamp(180px,50vw,800px)]'>
                        <Text as='p' className='text-[clamp(12px,3vw,36px)]!'>Popular Restuarants</Text>
                        <div className='flex flex-row gap-2.5 mt-2.5'>
                            <div className='w-[clamp(20px,5vw,200px)]'>
                                <img src={FoodChef} className='object-contain rounded-lg'/>
                            </div>
                            <div className='w-[clamp(20px,5vw,200px)]'>
                                <img src={Chicken} className='object-contain rounded-lg'/>
                            </div>
                            <div className='w-[clamp(20px,5vw,200px)]'>
                                <img src={ChefGanteng} className='object-contain rounded-lg'/>
                            </div>
                            <div className='w-[clamp(20px,5vw,200px)]'>
                                <img src={MasterChef} className='object-contain rounded-lg'/>
                            </div>
                            <div className='w-[clamp(20px,5vw,200px)]'>
                                <img src={Organic} className='object-contain rounded-lg'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Text as='p' className='text-center text-[clamp(25px,5vw,78px)]! text-black! py-5'>Restaurant Menu</Text>
            
                <div className='grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] md:grid-cols-4 px-4 gap-10'>
                    <div className={mergeClass(menuStyle)}>
                        <img src={PizzaMenu} className={mergeClass(imageMenuStyle)}/>
                        <div className='flex flex-col items-center'>
                            <Text as='p' className={mergeClass(menuTextStyle)}>Pizza</Text>
                        </div>
                    </div>
                    <div className={mergeClass(menuStyle)}>
                        <img src={BurgerMenu} className={mergeClass(imageMenuStyle)}/>
                        <div className='flex flex-col items-center'>
                            <Text as='p' className={mergeClass(menuTextStyle)}>Burger</Text>
                        </div>
                    </div>
                    <div className={mergeClass(menuStyle)}>
                        <img src={PastaMenu} className={mergeClass(imageMenuStyle)}/>
                        <div className='flex flex-col items-center'>
                            <Text as='p' className={mergeClass(menuTextStyle)}>Pasta</Text>
                        </div>
                    </div>
                    <div className={mergeClass(menuStyle)}>
                        <img src={ChickenMenu} className={mergeClass(imageMenuStyle)}/>
                        <div className='flex flex-col items-center'>
                            <Text as='p' className={mergeClass(menuTextStyle)}>Chicken</Text>
                        </div>
                    </div>

                    <div className={mergeClass(menuStyle)}>
                        <img src={DessertMenu} className={mergeClass(imageMenuStyle)}/>
                        <div className='flex flex-col items-center'>
                            <Text as='p' className={mergeClass(menuTextStyle)}>Dessert</Text>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <Text as='p' className='text-[clamp(25px,5vw,78px)]! text-black! py-5'>Restaurants</Text>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] px-4 gap-4'>
                    <div className='rounded-md shadow-md'>
                        <img src={DrinkRestaurant} className={mergeClass(imageRestaurantStyle)}/>
                        <Text as='p' className={restaurantTextStyle}>Organic Arcadian Food</Text>
                        <div className='p-2 flex flex-row'>
                            <img src={FoodChef} className={imageLogoRestaurantStyle}/>
                            <div className='flex flex-col ml-2 md:ml-4'>
                                <Text as='p' className='text-[clamp(0.75rem,3vw,2rem)]! text-gray-600! truncate!'>12:00AM - 12:00PM</Text>
                                <Text as='p' className='text-[clamp(0.75rem,3vw,2rem)]! text-gray-600! truncate!'>Link road, Model Town</Text>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-md shadow-md'>
                        <img src={HotDogRestaurant} className={mergeClass(imageRestaurantStyle)}/>
                        <Text as='p' className={restaurantTextStyle}>Food Chef Italian</Text>
                        <div className='p-2 flex flex-row'>
                            <img src={FoodChef} className={imageLogoRestaurantStyle}/>
                            <div className='flex flex-col ml-2 md:ml-4'>
                                <Text as='p' className='text-[clamp(0.75rem,3vw,2rem)]! text-gray-600! truncate'>12:00AM - 12:00PM</Text>
                                <Text as='p' className='text-[clamp(0.75rem,3vw,2rem)]! text-gray-600! truncate'>Link road, Model Town</Text>
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