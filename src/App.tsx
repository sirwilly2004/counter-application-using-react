import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Counter initialValue={0} maxValue={10} />
    </div>
  );
}

export default App;