import FoodChef from '@/assets/chicken_zilla.jpg'
import Chicken from '@/assets/food_chef.jpg'
import ChefGanteng from '@/assets/chef_ganteng.png'
import MasterChef from '@/assets/master_chef.jpg'
import Organic from '@/assets/organic.jpg'


interface Restuarant {
  id: number;
  name: string;
  image: string;
}

const data:Restuarant[] = [
    {
        id: 1,
        name: 'FoodChef',
        image: FoodChef
    },
    {
        id: 2,
        name: 'Chicken',
        image: Chicken
    },
    {
        id: 3,
        name: 'ChefGanTeng',
        image: ChefGanteng
    },
    {
        id: 4,
        name: 'MasterChef',
        image: MasterChef
    },
    {
        id: 5,
        name: 'Organic',
        image: Organic
    }
]

const fetchRestaurantLogos = async (): Promise<Restuarant[]> => {
   return await new Promise<Restuarant[]>((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 3000);
    });
};

export { fetchRestaurantLogos };