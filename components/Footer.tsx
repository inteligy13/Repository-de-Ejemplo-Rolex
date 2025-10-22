
import React from 'react';
import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-rolex-dark text-gray-300 font-sans">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Colecciones de relojes</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Air-King</a></li>
              <li><a href="#" className="hover:text-white">Cosmograph Daytona</a></li>
              <li><a href="#" className="hover:text-white">Datejust</a></li>
              <li><a href="#" className="hover:text-white">Day-Date</a></li>
              <li><a href="#" className="hover:text-white">Explorer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">El mundo de Rolex</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Deportes, Arte y Exploración</a></li>
              <li><a href="#" className="hover:text-white">Perpetual Planet</a></li>
              <li><a href="#" className="hover:text-white">Rolex.org</a></li>
              <li><a href="#" className="hover:text-white">Historia</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Comprar un Rolex</a></li>
              <li><a href="#" className="hover:text-white">Distribuidores Oficiales</a></li>
              <li><a href="#" className="hover:text-white">Cuidado del reloj</a></li>
              <li><a href="#" className="hover:text-white">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Comprar un Rolex</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Noticias</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
              <li><a href="#" className="hover:text-white">Prensa</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-center">
            <div className="mb-4 md:mb-0">
                <span className="text-sm">Siga a Rolex</span>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="hover:text-white"><FacebookIcon /></a>
                    <a href="#" className="hover:text-white"><InstagramIcon /></a>
                    <a href="#" className="hover:text-white"><XIcon /></a>
                    <a href="#" className="hover:text-white"><YouTubeIcon /></a>
                </div>
            </div>
            <p className="text-xs text-gray-400">&copy; Rolex SA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
