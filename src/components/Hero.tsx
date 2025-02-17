import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Prefixo fixo que ficará sempre na tela
const prefix = "Desenvolvedor";
// Lista de sufixos dinâmicos (inclua um espaço inicial para separar do prefixo)
const roles = [" Front-End", " Back-End", " Full-Stack"];

const Hero = () => {
  // Estado para o texto dinâmico (apenas o sufixo)
  const [dynamicText, setDynamicText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // Velocidade de digitação: mais lenta ao escrever, mais rápida ao apagar
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentSuffix = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    // Se não está apagando e o sufixo completo foi escrito
    if (!isDeleting && dynamicText === currentSuffix) {
      // Pausa antes de iniciar a deleção do sufixo
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    // Se está apagando e já apagou todo o sufixo
    } else if (isDeleting && dynamicText === '') {
      // Mantém o prefixo na tela e muda para o próximo sufixo
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Atualiza o texto dinâmico - adiciona ou remove um caractere
      timeout = setTimeout(() => {
        const updatedText = isDeleting
          ? currentSuffix.substring(0, dynamicText.length - 1)
          : currentSuffix.substring(0, dynamicText.length + 1);
        setDynamicText(updatedText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [dynamicText, isDeleting, roleIndex, typingSpeed]);

  // Ajusta a velocidade de digitação dependendo se está apagando ou escrevendo
  useEffect(() => {
    setTypingSpeed(isDeleting ? 75 : 150);
  }, [isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 animate-fade-in">
        <span style={{ boxShadow: "5px 2px 2px rgba(0, 0, 0, 0.8)" }} className="inline-block px-3 py-1 text-xl md:text-2xl font-medium glass text-primary rounded-full">
            {prefix}
            {dynamicText}
            {/* Cursor piscante */}
            <span className="border-r-2 border-white ml-1 animate-blink" />
          </span>
          {/* Texto animado com o prefixo fixo e sufixo dinâmico */}
            <h1
              style={{ textShadow: "5px 2px 2px rgba(0, 0, 0, 0.8)" }}
              className="rounded text-4xl md:text-6xl p-6 font-bold my-8 tracking-tight"
            >
              Transformando ideias em<br />{' '}
              <span className="text-primary">experiências digitais</span>
            </h1>
          
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300"
            >
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            
            <a
              href="https://wa.me/5511999998888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;