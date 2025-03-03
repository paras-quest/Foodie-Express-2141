import { Link } from 'react-router-dom';
import { FaStar, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function RestaurantCard({ restaurant }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link to={`/restaurant/${restaurant.id}`}>
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
          <div className="flex items-center mb-2">
            <FaStar className="text-yellow-400 mr-1" />
            <span>{restaurant.rating}</span>
            <span className="mx-2">•</span>
            <span className="text-gray-600">{restaurant.cuisine}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaClock className="mr-1" />
            <span>{restaurant.deliveryTime} min</span>
            <span className="mx-2">•</span>
            <span>{restaurant.deliveryFee}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}