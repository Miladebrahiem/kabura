import React from 'react';
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1>Welcome to Kabura Catering</h1>
        <p className="text-lg">Start prompting to see more elements...</p>
      </main>
    </div>
  );
}

export default App;