import React from "react";
import PageContainer from './components/PageContainer';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <React.StrictMode>
      <div>
        <PageContainer />
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;
