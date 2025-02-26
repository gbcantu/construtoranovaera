import React, { useEffect, useState } from 'react';
import { Building2, Users, Trophy, Calendar, Truck, HardHat } from 'lucide-react';

const stats = [
  { 
    icon: Building2,
    value: 150,
    label: 'Projetos Concluídos',
    image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Calendar,
    value: 15,
    label: 'Anos de Experiência',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Users,
    value: 500,
    label: 'Clientes Satisfeitos',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Trophy,
    value: 25,
    label: 'Prêmios Recebidos',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: Truck,
    value: 75,
    label: 'Equipamentos Próprios',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  { 
    icon: HardHat,
    value: 850,
    label: 'Profissionais',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <div
      id="stats-section"
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7))'
      }}
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Construction Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <stat.icon className="w-12 h-12 text-yellow-500 mb-4" />
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  {counts[index]}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};