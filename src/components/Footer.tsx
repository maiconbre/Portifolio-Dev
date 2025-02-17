import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-6 mt-20">
      {/* Container centralizado */}
      <div className="container mx-auto px-4 text-center">
        {/* Redes Sociais */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://linkedin.com/in/maiconbre" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-primary hover:text-white transition-colors" />
          </a>
          <a href="https://github.com/maiconbre" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="w-5 h-5 text-primary hover:text-white transition-colors" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
            <Twitter className="w-5 h-5 text-primary hover:text-white transition-colors" />
          </a>
        </div>
        {/* Informações do Footer */}
        <p className="text-sm text-muted-foreground mb-2">
          Feito com <span className="text-primary">♥</span> por Maicon
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Maicon. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;