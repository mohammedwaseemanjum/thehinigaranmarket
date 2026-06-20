import PizzaMenu from '@/assets/pizza_menu.png'
import BurgerMenu from '@/assets/burger_menu.png'
import PastaMenu from '@/assets/pasta_menu.png'
import ChickenMenu from '@/assets/chicken_menu.png'
import DessertMenu from '@/assets/dessert_menu.png'

interface Restuarant {
  id: number;
  name: string;
  image: string;
}

const data:Restuarant[] = [
    {
        id: 1,
        name: 'Pizza',
        image: PizzaMenu
    },
    {
        id: 2,
        name: 'Burger',
        image: BurgerMenu
    },
    {
        id: 3,
        name: 'Pasta',
        image: PastaMenu
    },
    {
        id: 4,
        name: 'Chicken',
        image: ChickenMenu
    },
    {
        id: 5,
        name: 'Dessert',
        image: DessertMenu
    }
]

const fetchMenus = async (): Promise<Restuarant[]> => {
   return await new Promise<Restuarant[]>((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 3000);
    });
};

export { fetchMenus };