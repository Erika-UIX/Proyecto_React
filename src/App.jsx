import React from 'react';
import Header from './assets/components/Header.jsx';
import BannerPrincipal from './assets/components/BannerPrincipal.jsx';
import JuegosDestacados from './assets/components/JuegosDestacados.jsx';
import Footer from './assets/components/Footer.jsx';


function App() {
  return (
    <>
      <Header />
      <main>
        <BannerPrincipal />
        <JuegosDestacados />
      </main>
      <Footer />
    </>
  );
}

export default App;