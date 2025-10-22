
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContentSection } from './components/ContentSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-rolex-dark">
      <Header />
      <main>
        <Hero />
        <ContentSection
          title="NUEVO OYSTER PERPETUAL GMT-MASTER II"
          subtitle="Para viajeros con estilo"
          description="Este reloj, robusto y funcional, se presenta en acero Oystersteel con un disco de bisel Cerachrom graduado 24 horas bicolor en gris y negro. Una combinación de colores que evoca la alternancia del día y la noche."
          imageUrl="https://picsum.photos/1200/800?random=1"
          linkText="El reloj de los cielos abiertos"
          layout="image-right"
        />
        <ContentSection
          title="NUEVO OYSTER PERPETUAL DAY-DATE"
          subtitle="La armonía de los contrastes"
          description="Rolex presenta nuevas versiones del Oyster Perpetual Day-Date, el reloj de prestigio por excelencia. El nácar blanco sombreado o el degradado son algunas de las novedades que adornan las esferas de los nuevos modelos."
          imageUrl="https://picsum.photos/1200/800?random=2"
          linkText="El reloj de los presidentes"
          layout="image-left"
        />
        <ContentSection
          title="NUEVO PERPETUAL 1908"
          subtitle="La elegancia en movimiento"
          description="El 1908 se presenta ahora en platino 950 y luce una esfera azul glacial de grano de arroz. Este guardatiempos, con su diseño refinado y su fondo transparente, es un tributo a la elegancia clásica de Rolex."
          imageUrl="https://picsum.photos/1200/800?random=3"
          linkText="El clásico contemporáneo"
          layout="image-right"
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
