import { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

interface CounterProps {
  initialValue?: number;
  maxValue?: number;
}

const Counter = ({ initialValue = 0, maxValue = 10 }: CounterProps) => {
  const [count, setCount] = useState(initialValue);
  const [showMessage, setShowMessage] = useState(false);

  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= maxValue) {
        setShowMessage(true);
      }
      return newCount;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount <= 0) return 0;
      setShowMessage(false);
      return prevCount - 1;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-8 w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Counter App</h2>
      
      <div className="flex items-center justify-center mb-6">
        <button 
          onClick={decrement} 
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          aria-label="Decrease counter"
        >
          <MinusCircle size={48} />
        </button>
        
        <div className="mx-8 w-32 text-center">
          <div 
            className="text-6xl font-bold text-gray-800 transition-all duration-200 transform hover:scale-110"
          >
            {count}
          </div>
        </div>
        
        <button 
          onClick={increment} 
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          aria-label="Increase counter"
        >
          <PlusCircle size={48} />
        </button>
      </div>
      
      {count === 0 && (
        <p className="text-orange-500 font-medium">Counter cannot go below zero!</p>
      )}
      
      {showMessage && (
        <p className="text-red-500 font-medium animate-pulse">
          You've reached the limit of {maxValue}!
        </p>
      )}
    </div>
  );
};

export default Counter;