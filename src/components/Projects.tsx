
// Componente da seção de projetos
const Projects = () => {
  const projects = [
    {
      title: "Loja Virtual Hypertech",
      description: "Uma plataforma de e-commerce com interface moderna e escalabilidade garantida",
      tags: ["React", "Firebase", "Tailwind"],
      image: "/placeholder.svg"
    },
    {
      title: "Painel de Controle Sigma",
      description: "Dashboard intuitivo para monitoramento e análise de dados corporativos",
      tags: ["Next.js", "TypeScript", "Chart.js"],
      image: "/placeholder.svg"
    },
    {
      title: "Aplicativo Beta Finance",
      description: "Aplicativo móvel para gerenciamento financeiro com segurança avançada",
      tags: ["React Native", "Node.js", "Express"],
      image: "/placeholder.svg"
    },
    {
      title: "Sistema Omega Connect",
      description: "Solução completa para comunicação interna com integrações inteligentes",
      tags: ["Vue", "Django", "Docker"],
      image: "/placeholder.svg"
    },
    {
      title: "Gerenciador Delta Tasks",
      description: "Ferramenta de produtividade para gerenciamento de tarefas e projetos",
      tags: ["Angular", "RxJS", "Sass"],
      image: "/placeholder.svg"
    },
    {
      title: "Portal Zeta News",
      description: "Website dinâmico para publicação de notícias com atualização em tempo real",
      tags: ["Gatsby", "GraphQL", "Styled-components"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-sm sm:text-base font-medium">Portfólio</span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">Projetos em Destaque</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
          {projects.map((project, index) => (
        <div
          key={project.title}
          className="group glass rounded-xl overflow-hidden hover:scale-105 transition-transform"
        >
          <div className="aspect-video overflow-hidden">
            <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          
          <div className="p-4 sm:p-6">
            <h3 className="sm:text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
          {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
            </div>
          </div>
        </div>
          ))}
        </div>
      </div>
        </section>
  );
};

export default Projects;