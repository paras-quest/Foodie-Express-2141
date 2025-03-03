import BrandCanvas from '../components/auth/BrandCanvas';
import LoginContainer from '../components/auth/LoginContainer';

export default function Login() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[1.5fr,1fr]">
      <div className="hidden md:block bg-gradient-to-br from-red-600 to-red-400">
        <BrandCanvas />
      </div>
      
      <div className="flex items-center justify-center p-8 bg-gray-50">
        <LoginContainer />
      </div>
    </div>
  );
}