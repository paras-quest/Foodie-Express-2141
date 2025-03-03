import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLock, FaCreditCard, FaPaypal } from 'react-icons/fa';

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <div className="flex items-center text-green-600">
          <FaLock className="mr-2" />
          <span>Secure Checkout</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows="3"
                required
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-center p-4 border rounded-lg ${
                  paymentMethod === 'card'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300'
                }`}
              >
                <FaCreditCard className="mr-2" />
                Credit Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('paypal')}
                className={`flex items-center justify-center p-4 border rounded-lg ${
                  paymentMethod === 'paypal'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300'
                }`}
              >
                <FaPaypal className="mr-2" />
                PayPal
              </button>
            </div>

            {paymentMethod === 'card' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="grid gap-4"
              >
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full mt-8 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Pay Now
        </motion.button>
      </form>
    </motion.div>
  );
}