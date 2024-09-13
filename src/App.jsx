import React from 'react';
import Todo from './components/Todo';
import backgroundImage from './assets/bg.jpg';  // Adjust the filename if necessary

const App = () => {
  return (
    <div
      className='bg-stone-900 grid py-4 min-h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}  // Background image
    >
      <div className="ml-auto mr-10">  {/* Align Todo to the right */}
        <Todo />
      </div>
    </div>
  );
};

export default App;
