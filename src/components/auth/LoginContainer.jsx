import { QuestLogin } from '@questlabs/react-sdk';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '@questlabs/react-sdk/dist/style.css';

export default function LoginContainer() {
  const navigate = useNavigate();

  const handleLogin = ({ userId, token, newUser }) => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    
    if (newUser) {
      navigate('/onboarding');
    } else {
      navigate('/');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl"
    >
      <QuestLogin 
        onSubmit={handleLogin}
        email={true}
        google={true}
        accent="#DC2626"
      />
    </motion.div>
  );
}