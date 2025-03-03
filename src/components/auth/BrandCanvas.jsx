import { motion } from 'framer-motion';

export default function BrandCanvas() {
  return (
    <div className="relative h-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white z-20"
      >
        <img 
          src="/logo.svg" 
          alt="FoodieExpress" 
          className="w-32 h-32 mb-8"
        />
        <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
        <p className="text-xl opacity-90 max-w-md text-center">
          Order delicious food from your favorite restaurants
        </p>
      </motion.div>

      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 to-red-400/90" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      </div>
    </div>
  );
}