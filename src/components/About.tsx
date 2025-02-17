import { useEffect } from 'react';
import { Code, Layout, Server } from 'lucide-react';

// Lista de habilidades técnicas
const skills = [
  {
    title: "Front-End",
    icon: <Layout className="h-6 w-6" />,
    items: [
      "React",
      "TypeScript",
      "Angular",
      "CSS/Botstrap",
    ],
  },
  {
    title: "Back-End",
    icon: <Server className="h-6 w-6" />,
    items: [
      "Node.js",
      "SQL",
      "Python",
      "Supabase",
      "SQL Server/SQlite",
    ],
  },
  {
    title: "Ferramentas",
    icon: <Code className="h-6 w-6" />,
    items: [
      "Vs Code",
      "Copilot",
      "Trello/Jira",
      "Git/GitHub",
    ],
  },
];

// Dados para a timeline
const timelineEvents = [
  {
    year: "2019",
    title: "Primeiro Emprego",
    description:
      "Adquiri experiência prática ao trabalhar diretamente com hardware e software, além de ter meu primeiro contato profissional na área de TI.",
  },
  {
    year: "2022",
    title: "BootCamp Full-Stack Resilia/Senac",
    description:
      "Concluí um BootCamp intensivo que fortaleceu minhas habilidades tanto no front quanto no back-end.",
  },
  {
    year: "2023/27",
    title: "Engenharia de Software",
    description:
      "Iniciei a Faculdade em Engenharia de Software na UNOPAR, onde pretendo me aprofundar em desenvolvimento de software e engenharia de sistemas.",
},
  {
    year: "2024",
    title: "DevMedia React Native, Python, Back-end, Banco de Dados",
    description:
      "Estou cursando uma trilha de cursos da DevMedia em Mobile, Back-end, Banco de Dados, Python e React Native.",
  },
  {
    year: "2025",
    title: "Meu primeiro Freelance",
    description:
      "Desenvolvi um site para um cliente, utilizando React e Node.js, e entreguei no prazo estabelecido.",
  },
  ];

const About = () => {
  // Observer que adiciona a classe "in-view" quando o elemento entra na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <span className="text-primary font-medium">SOBRE MIM</span>
            <h2 className="text-3xl font-bold my-10">
              Desenvolvedor Full-Stack Junior apaixonado por tecnologia
            </h2>
            <div className="text-left glass p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-center font-bold mb-4">Resumo</h3>
              <p className="text-muted-foreground mb-4">
                Iniciei minha curiosidade em tecnologia aos 13 anos, montando meu primeiro
                computador.
                <br />
                <br /> Aos 21 trabalhei por 3 anos com assistência técnica, estabelecendo uma
                base em hardware.
                <br />
                Posteriormente, desenvolvi habilidades em Front-end e Back-end e adquiri experiência
                em lógica de programação.
                <br />
                Concluí o curso Full Stack da Resilia e, atualmente, estou cursando uma trilha de
                cursos da DevMedia em Mobile, Back-end, Banco de Dados, Python e React Native.
                <br />
                Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades.
              </p>
              <div className="text-right">
                <h3 className="text-xl font-bold mt-8">Cursando</h3>
                <p className="text-muted-foreground">
                  Bacharel - Engenharia de Software - UNOPAR - 23/27
                </p>
              </div>
            </div>
          </div>

          {/* Cards de Skills com redução de tamanho em telas mobile */}
          <div className="grid grid-cols-3 gap-4 md:grid-cols-3 ">
              {skills.map((skill) => (
              <div
                key={skill.title}
                className="glass p-4 md:p-6 rounded-xl hover:scale-105 transition-transform duration-700 animate-on-scroll slide-from-right futuristic-border neo-brutalism"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                {skill.icon}
                </div>
                <h3 className="text-sm md:text-xl font-semibold mb-2">{skill.title}</h3>
                <hr className="border-t border-white/20 my-2" />
                <ul className="space-y-2 mt-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm md:text-sm text-muted-foreground">
                  {item}
                  </li>
                ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do Tempo com animação slide */}
      <section id="timeline" className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:scale-30">
            <h2 className="text-3xl font-bold mb-4">Minha Jornada</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma linha do tempo apresentando meus trabalhos, estudos e as conquistas ao longo dos
              anos.
            </p>
            </div>

            <div className="relative">
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
              <div key={index} className="relative w-full max-w-md mx-auto px-4 sm:max-w-xl">
                <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                <div className="w-2/3 md:w-1/2 glass p-6 rounded-xl shadow-lg relative">
                  {index % 2 === 0 &&
                  !["2018", "2022"].includes(event.year) && (
                    <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white left-[-28px] md:left-[-14px]"></div>
                  )}
                  {index % 2 !== 0 && (
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white right-[-28px] md:right-[-14px]"></div>
                  )}
                  <span className="text-primary font-medium">{event.year}</span>
                  <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                  <p className="mt-2 text-muted-foreground">{event.description}</p>
                </div>
                </div>
              </div>
              ))}
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;