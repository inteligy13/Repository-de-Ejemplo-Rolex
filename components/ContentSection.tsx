
import React from 'react';

interface ContentSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  linkText: string;
  layout: 'image-left' | 'image-right';
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  linkText,
  layout
}) => {
  const isImageLeft = layout === 'image-left';

  return (
    <section className="bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className={`flex items-center justify-center ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className={`flex flex-col justify-center p-12 md:p-24 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <h2 className="font-serif text-3xl md:text-4xl text-rolex-green tracking-wide">{title}</h2>
          <h3 className="font-sans text-xl md:text-2xl mt-2 font-light">{subtitle}</h3>
          <p className="mt-6 text-base font-sans text-gray-700 leading-relaxed">
            {description}
          </p>
          <a href="#" className="mt-8 text-rolex-green font-bold text-sm uppercase tracking-widest hover:underline">
            {linkText}
          </a>
        </div>
      </div>
    </section>
  );
};
