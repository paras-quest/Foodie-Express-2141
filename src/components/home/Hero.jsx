import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-red-600 to-red-400">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-6">
            Delicious Food Delivered to Your Door
          </h1>
          <p className="text-xl mb-8">
            Order from your favorite restaurants with just a few clicks
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-100 transition duration-300">
            Order Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}