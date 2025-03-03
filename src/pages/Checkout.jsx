import CheckoutForm from '../components/checkout/CheckoutForm';
import OrderSummary from '../components/checkout/OrderSummary';

const sampleItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 12.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "California Roll",
    price: 15.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
          <div>
            <OrderSummary items={sampleItems} />
          </div>
        </div>
      </div>
    </div>
  );
}