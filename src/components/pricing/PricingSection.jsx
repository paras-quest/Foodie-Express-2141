import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    name: "Base",
    amount: 10,
    priceId: "price_1QvulqARxrUXtpoI1uRSKxqA",
    paymentLink: "https://buy.stripe.com/test_bIYcQP7SP9xpdTWeWJ",
    currency: "usd"
  },
  {
    name: "Premium",
    amount: 100,
    priceId: "price_1QvulqARxrUXtpoIZTyvW6nt",
    paymentLink: "https://buy.stripe.com/test_4gw7wvehd8tl8zCbKy",
    currency: "usd"
  }
];

export default function PricingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.priceId} plan={plan} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}