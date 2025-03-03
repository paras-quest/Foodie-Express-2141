import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { format, addHours, isAfter, startOfHour } from 'date-fns';

export default function DeliverySchedule({ onScheduleSelect }) {
  const [selectedTime, setSelectedTime] = useState('');

  const getAvailableTimeSlots = () => {
    const now = new Date();
    const currentHour = startOfHour(now);
    const slots = [];
    
    // Generate time slots for the next 24 hours
    for (let i = 1; i <= 24; i++) {
      const timeSlot = addHours(currentHour, i);
      // Only include future times
      if (isAfter(timeSlot, now)) {
        slots.push({
          value: format(timeSlot, "yyyy-MM-dd'T'HH:mm"),
          label: format(timeSlot, 'MMM d, h:mm a')
        });
      }
    }
    
    return slots;
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    onScheduleSelect(time);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex items-center mb-4">
        <FaClock className="text-red-600 mr-2" />
        <h3 className="text-lg font-semibold">Delivery Time</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {getAvailableTimeSlots().map((slot) => (
          <motion.button
            key={slot.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleTimeSelect(slot.value)}
            className={`p-3 rounded-lg border text-sm transition-colors ${
              selectedTime === slot.value
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-300 hover:border-red-300'
            }`}
          >
            {slot.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}