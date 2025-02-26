import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './components/Logo';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="hover:text-yellow-600 transition-colors text-gray-900">
                Início
              </a>
              <a href="#servicos" className="hover:text-yellow-600 transition-colors text-gray-900">
                Serviços
              </a>
              <a href="#projetos" className="hover:text-yellow-600 transition-colors text-gray-900">
                Projetos
              </a>
              <a href="#contato" className="hover:text-yellow-600 transition-colors text-gray-900">
                Contato
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#inicio"
                className="block hover:text-yellow-600 transition-colors text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#servicos"
                className="block hover:text-yellow-600 transition-colors text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#projetos"
                className="block hover:text-yellow-600 transition-colors text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </a>
              <a
                href="#contato"
                className="block hover:text-yellow-600 transition-colors text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <section id="inicio">
          <Hero />
        </section>

        <Stats />

        <section id="servicos">
          <Services />
        </section>

        <section id="projetos">
          <Projects />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo />
              <p className="text-gray-400 mt-4">
                Transformando projetos em realidade desde 2010.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-gray-400 hover:text-white">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="text-gray-400 hover:text-white">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-gray-400">
                Avenida das Indústrias, 512<br />
                Sala 305, Bairro Industrial<br />
                Campinas, SP - CEP: 13045-300
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Construtora Nova Era Ltda. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App