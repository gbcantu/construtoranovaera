import React from 'react';
import { Building, Home, Wrench, HardHat, Truck, Factory, TreePine, Shield } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: 'Construção Comercial',
    description: 'Desenvolvimento de empreendimentos comerciais com foco em qualidade e inovação.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Home,
    title: 'Projetos Residenciais',
    description: 'Construção de residências exclusivas adaptadas às necessidades do cliente.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Factory,
    title: 'Construção Industrial',
    description: 'Galpões e fábricas com alta tecnologia e eficiência energética.',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Truck,
    title: 'Equipamentos Pesados',
    description: 'Frota própria de equipamentos e maquinário de última geração.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Wrench,
    title: 'Reformas',
    description: 'Serviços especializados de reforma e renovação para todos os tipos de edificações.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: HardHat,
    title: 'Infraestrutura',
    description: 'Execução de obras de infraestrutura com tecnologia de ponta.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: TreePine,
    title: 'Construção Sustentável',
    description: 'Projetos com certificação ambiental e uso de materiais ecológicos.',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Shield,
    title: 'Manutenção Predial',
    description: 'Serviços contínuos de manutenção e conservação de edificações.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <service.icon className="w-12 h-12 text-yellow-500 group-hover:text-white mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 group-hover:text-white/90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};