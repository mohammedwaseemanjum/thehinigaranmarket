import Logo from '@/assets/pizza.png'
import Text from '@component/Text/index'

import DrinkRestaurant from '@/assets/drinks_restuarant.jpg'

import PizzaMenu from '@/assets/pizza_menu.png'
import { Tab, TabList, TabListContent } from '@component/Tab'

interface CatgoriesT {
    id: number;
    name: string
}

const categories:Array<CatgoriesT> = [
    {
        id: 1,
        name: 'Pizza'
    },
    {
        id: 2,
        name: 'Sauce'
    },
    {
        id: 3,
        name: 'Bugers'
    },
    {
        id: 4,
        name: 'Candies'
    },
    {
        id: 5,
        name: 'Dounuts'
    },
    {
        id: 1,
        name: 'Pizza1'
    },
    {
        id: 21,
        name: 'Sauce1'
    },
    {
        id: 31,
        name: 'Bugers1'
    },
    {
        id: 41,
        name: 'Candies1'
    },
    {
        id: 51,
        name: 'Dounuts1'
    }
]

const Store: React.FC = () => {
    return (
        <div>
            <div className='bg-gray-200!'>
                <div>
                    <img src={Logo} className='object-cover w-full'/>
                </div>
                
                <div className='bg-white flex flex-col items-center gap-4 shadow rounded-md border border-gray-200 sm:flex-row sm:justify-center md:justify-start md:px-20 xl:px-50'>
                    <div className='-mt-[62px] rounded-tl-[90px] rounded-tr-[90px] overflow-hidden bg-white p-2 hidden sm:block'>
                        <img src={DrinkRestaurant} className='rounded-tl-[90px] rounded-tr-[90px] object-contains w-[clamp(150px,8.9286vw+121.4286px,350px)] h-[clamp(150px,8.9286vw+121.4286px,350px)]'/>
                    </div>

                    <div className='flex flex-col gap-2 w-[clamp(300px,8.9286vw+271.4286px,500px)]'>
                        <Text as='p' className='text-black! text-[clamp(24px,1.4286vw+19.4286px,40px)]! text-center sm:text-left'>
                            Tasty Food Pizza
                        </Text>
                        <Text as='p' className='text-black! text-[clamp(16px,0.5357vw+14.2857px,28px)]! font-light! text-center sm:text-left'>
                            47 W 13th St, New York, NY 10011, NY 10011, United States (US)
                        </Text>
                    </div>
                </div>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] py-4 px-4 gap-4 md:grid-cols-2 xl:flex xl:flex-row xl:justify-center xl:gap-6 xl:px-10'>
                    <div className='shadow-md rounded-md border border-gray-200 h-[clamp(120px,3.5714vw+108.5714px,200px)] bg-white xl:w-100'>
                        <Text as='p' className='text-black! text-[clamp(20px,0.4464vw+18.5714px,30px)]! text-center py-2'>
                            All Detail
                        </Text>
                        <Tab defaultActiveIndex={0} containerClass='flex flex-col'>
                            {Array.from(['Menu', 'Restaurant Detail']).map((tab, index) => (
                                <TabList index={index} activeClass='bg-gray-200' className='py-2'>
                                    <Text as='p' className='text-black! text-[clamp(16px,0.625vw+14px,30px)]! font-light!'>
                                        { tab }
                                    </Text>
                                </TabList>
                            ))}
                        </Tab>
                    </div>

                    <div className='shadow-md rounded-md border border-gray-200 p-4 bg-white lg:h-[clamp(280px,53.125vw+110px,1470px)] overflow-hidden xl:w-[clamp(400px,26.0417vw+133.3333px,800px)]'>
                        <TabListContent index={0}>
                            <div>
                                <Text as='p' className='text-black! text-[clamp(20px,0.4464vw+18.5714px,30px)]! text-center'>
                                    Categorys
                                </Text>
                                <div className='mt-4 rounded-md overflow-scroll no-scrollbar'>
                                    <div className='flex flex-row gap-2'>
                                        { categories.map(category => (
                                            <div className='bg-gray-300 px-4 py-1 rounded-md'>
                                                <Text as='p' className='text-black! text-[clamp(14px,0.625vw+12px,28px)]! text-center'>
                                                    {category.name}
                                                </Text>
                                            </div>
                                        )) }
                                    </div>
                                </div>
                                <div className='mt-6 flex flex-col gap-4 overflow-auto h-[clamp(280px,43.3036vw+141.4286px,1250px)] no-scrollbar'>
                                    {
                                        Array.from([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]).map(_ => (
                                            <div className='flex flex-row gap-6 border-0 border-gray-300 border-b-2 last:border-b-0 py-2.5'>
                                                <div className='shrink-0'>
                                                    <img src={PizzaMenu} className='w-[clamp(100px,2.2321vw+92.8571px,150px)]'/>
                                                </div>
                                                <div className='flex flex-col items-start justify-center gap-2 lg:gap-4'>
                                                    <Text as='p' className='text-black! text-[clamp(14px,0.625vw+12px,28px)]! text-center'>
                                                        Cauliflower Pizza
                                                    </Text>
                                                    <Text as='p' className='text-black! text-[clamp(12px,0.5357vw+10.2857px,24px)]! text-left font-normal!'>
                                                        Special Cauliflower Pizza, Add your favourite toppings..
                                                    </Text>
                                                    <Text as='p' className='text-black! text-[clamp(12px,0.5357vw+10.2857px,24px)]! text-center'>
                                                        £1,200.00
                                                    </Text>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </TabListContent>
                        <TabListContent index={1}>
                            <span>Restaurant Details</span>
                        </TabListContent>
                    </div>

                    <div className='shadow-md rounded-md border border-gray-200 bg-white flex flex-col p-4 gap-4 overflow-hidden lg:h-[clamp(280px,53.125vw+110px,1470px)] lg:w-[clamp(400px,6.5104vw+333.3333px,500px)]'>
                        <Text as='p' className='text-black! text-[clamp(20px,0.4464vw+18.5714px,30px)]! text-center'>
                            Best Selling Products
                        </Text>

                        <div className='flex flex-row overflow-auto gap-2 w-full md:flex-col no-scrollbar'>
                            {
                                Array.from([1,2,3,4,5,6]).map(_ => (
                                    <div className='border-2 border-gray-300 flex flex-col shrink-0 p-4 gap-4'>
                                        <div>
                                            <img src={PizzaMenu} className='w-[clamp(150px,24.5536vw+71.4286px,700px)]'/>
                                        </div>
                                        <div className='flex flex-col items-start gap-2'>
                                            <Text as='p' className='text-black! text-[clamp(14px,0.625vw+12px,28px)]! text-center'>
                                                Cauliflower Pizza
                                            </Text>
                                            <Text as='p' className='text-black! text-[clamp(12px,0.5357vw+10.2857px,24px)]! text-center'>
                                                £1,200.00
                                            </Text>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store