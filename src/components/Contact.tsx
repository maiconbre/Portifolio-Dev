import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = () => {
    const phoneNumber = "5521997760398";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl text-primary font-bold mt-2">Vamos Conversar?</h2>
          <p className="text-muted-foreground mt-4">
            Estou sempre aberto a novas oportunidades e parcerias. <br/>Envie sua mensagem e
            vamos conversar !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass rounded-xl p-8">
            <div className="space-y-6">
              <textarea
                id="whatsapp-message"
                rows={8}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escreva sua mensagem aqui..."
                className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
              <button
                onClick={handleSendWhatsApp}
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Enviar uma Mensagem
              </button>
            </div>
          </div>

            <div className="flex flex-col justify-center space-y-8">
            <a
              href="mailto:maiconbre277@gmail.com"
              className="flex items-center space-x-4 hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Mail className="h-6 w-6 " />
              </div>
              <div>
              <h3 className="font-medium ">Email</h3>
              <p className="text-muted-foreground">maiconbre277@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/maiconbre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Github className="h-6 w-6" />
              </div>
              <div>
              <h3 className="font-medium">GitHub</h3>
              <p className="text-muted-foreground">github.com/maiconbre</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/maiconbre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Linkedin className="h-6 w-6" />
              </div>
              <div>
              <h3 className="font-medium">LinkedIn</h3>
              <p className="text-muted-foreground">linkedin.com/in/maiconbre</p>
              </div>
            </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;