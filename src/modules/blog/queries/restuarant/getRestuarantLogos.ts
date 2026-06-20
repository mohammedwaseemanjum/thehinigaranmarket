interface Restuarant {
  id: number;
  name: string;
  image: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

const fetchRestaurantLogos = async (): Promise<Restuarant[]> => {
    const response = await fetch(apiUrl + '/api/restaurants')
    return response.json();
};

export { fetchRestaurantLogos };