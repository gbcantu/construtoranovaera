import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Edifício Comercial Aurora',
    description: 'Torre comercial de 20 andares com certificação LEED',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    testimonial: {
      name: 'Carlos Silva',
      role: 'Diretor Executivo',
      content: 'A Nova Era superou todas as nossas expectativas. Entrega pontual e qualidade excepcional.',
    },
    equipment: ['Gruas Torre', 'Escavadeiras', 'Guindastes'],
  },
  {
    id: 2,
    title: 'Residencial Villa Verde',
    description: 'Condomínio sustentável com 120 unidades',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    testimonial: {
      name: 'Ana Costa',
      role: 'Síndica',
      content: 'Projeto executado com maestria, respeitando prazos e orçamentos.',
    },
    equipment: ['Betoneiras', 'Retroescavadeiras', 'Compactadores'],
  },
  {
    id: 3,
    title: 'Centro Logístico Industrial',
    description: 'Complexo industrial com 85.000m² de área construída',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    equipment: ['Empilhadeiras', 'Tratores', 'Caminhões'],
  },
  {
    id: 4,
    title: 'Shopping Center Plaza',
    description: 'Centro comercial com 45.000m² de área construída',
    imageUrl: 'https://images.unsplash.com/photo-1557444562-0b3a71fc1c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    equipment: ['Guindastes', 'Plataformas Elevatórias', 'Escavadeiras'],
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Nossos Projetos
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="relative h-[600px]">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                      <div className="absolute bottom-0 w-full p-8">
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 mb-6">{project.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-yellow-500 font-semibold mb-2">Equipamentos Utilizados:</h4>
                          <div className="flex gap-3">
                            {project.equipment.map((item, index) => (
                              <span
                                key={index}
                                className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {project.testimonial && (
                          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                            <p className="text-gray-200 italic mb-4">
                              "{project.testimonial.content}"
                            </p>
                            <div>
                              <p className="text-white font-semibold">
                                {project.testimonial.name}
                              </p>
                              <p className="text-yellow-500">
                                {project.testimonial.role}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-3 rounded-full hover:bg-yellow-400 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-3 rounded-full hover:bg-yellow-400 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};