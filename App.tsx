import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './i18n/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Context } from './sections/Context';
import { Methodology } from './sections/Methodology';
import { Product } from './sections/Product';
import { Closing } from './sections/Closing';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen dark:bg-bhive-bg light:bg-white dark:text-bhive-text light:text-gray-900 font-sans dark:selection:bg-orange-500/30 light:selection:bg-orange-200 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <Context />
            <Methodology />
            <Product />
            <Closing />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;