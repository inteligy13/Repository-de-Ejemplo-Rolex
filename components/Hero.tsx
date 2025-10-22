
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=0')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="font-serif text-5xl md:text-8xl font-bold uppercase tracking-widest">
          The Daytona
        </h1>
        <p className="mt-4 font-sans text-xl md:text-2xl font-light tracking-wider">
          EL CRONÓGRAFO DEFINITIVO
        </p>
        <a href="#" className="mt-8 inline-block border-2 border-white text-white font-semibold py-3 px-8 hover:bg-white hover:text-black transition-colors duration-300 text-sm tracking-widest">
          Descubra más
        </a>
      </div>
    </section>
  );
};
