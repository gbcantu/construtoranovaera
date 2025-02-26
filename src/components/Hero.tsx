import React from 'react';
import { ChevronDown, Phone } from 'lucide-react';

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511987654321', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@construtoranovaera.com.br';
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Content Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Construtora Nova Era
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-slide-up">
            Transformando projetos em realidade com tecnologia e inovação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Solicite Orçamento via WhatsApp
            </button>
            <button
              onClick={handleEmailClick}
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg hover:bg-yellow-600 transition-all transform hover:scale-105 font-semibold shadow-lg"
            >
              Solicite Orçamento via Email
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Heavy Construction Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-900 w-8 h-8" />
      </div>
    </div>
  );
};