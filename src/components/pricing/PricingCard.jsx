import { motion } from 'framer-motion';

export default function PricingCard({ plan }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-lg shadow-lg flex flex-col"
    >
      <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
      <div className="text-4xl font-bold mb-6">
        ${plan.amount}
        <span className="text-lg text-gray-500">/month</span>
      </div>
      <div className="flex-grow">
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Full Access
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            24/7 Support
          </li>
        </ul>
      </div>
      <a
        href={plan.paymentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-red-600 text-white py-3 rounded-full text-center font-semibold hover:bg-red-700 transition duration-300"
      >
        Subscribe Now
      </a>
    </motion.div>
  );
}