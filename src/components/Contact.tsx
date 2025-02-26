import React from 'react';
import { Mail, Phone, MapPin, Truck, HardHat, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" id="contato">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Construction Site"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Entre em Contato
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6 bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white/20"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white/20"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white/20"
                  placeholder="Descreva seu projeto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition-all font-semibold"
              >
                Enviar Mensagem
              </button>
            </form>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <Truck className="w-8 h-8 text-yellow-500 mb-2" />
                <span className="text-white/80 text-sm">Frota Própria</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <HardHat className="w-8 h-8 text-yellow-500 mb-2" />
                <span className="text-white/80 text-sm">Equipe Especializada</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <Clock className="w-8 h-8 text-yellow-500 mb-2" />
                <span className="text-white/80 text-sm">Atendimento 24h</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-yellow-500" />
              <div>
                <h3 className="text-white font-semibold">Endereço</h3>
                <p className="text-gray-300">
                  Avenida das Indústrias, 512, Sala 305<br />
                  Bairro Industrial, Campinas, SP<br />
                  CEP: 13045-300
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-yellow-500" />
              <div>
                <h3 className="text-white font-semibold">Telefone</h3>
                <p className="text-gray-300">(19) 3302-4789</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-yellow-500" />
              <div>
                <h3 className="text-white font-semibold">E-mail</h3>
                <p className="text-gray-300">contato@construtoranovaera.com.br</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4">CNPJ</h3>
              <p className="text-gray-300">87.654.321/0001-99</p>
            </div>

            <div className="mt-8 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
              <h3 className="text-yellow-500 font-semibold mb-2">Horário de Atendimento</h3>
              <p className="text-gray-300">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h<br />
                Plantão 24h para emergências
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};