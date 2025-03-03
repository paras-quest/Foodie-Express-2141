import Hero from '../components/home/Hero';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import PricingSection from '../components/pricing/PricingSection';
import { motion } from 'framer-motion';

const featuredRestaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "30-45",
    deliveryFee: "$2.99",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "40-55",
    deliveryFee: "$3.99",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Featured Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </motion.section>
        <PricingSection />
      </div>
    </div>
  );
}