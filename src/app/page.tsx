import Navbar from "@/components/navbar";
import ServiceCard from "@/components/service-card";

export default function Home() {
  const servicos = [
    { titulo: "Gestão de negócios", desc: "Se você está começando a empreender ou busca enxergar com mais clareza a sua ideia de negócio, essas soluções foram pensadas para ajudar você a dar os primeiros passos com foco, estratégia e segurança." },
    { titulo: "Otimização de processos", desc: "Atendemos desde pequenas até grandes empresas que desejam organizar suas operações e maximizar o uso dos recursos disponíveis de forma personalizada e eficiente." },
    { titulo: "Planejamento financeiro", desc: "Fundamental para tomar decisões mais seguras e estratégicas sobre o retorno do seu investimento ao explorar novos mercados ou negócios." }
  ];

  return (
    <>
      <Navbar />
      
      {/* PARTE INICIAL */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl tracking-tighter">
              Estratégia, inteligência e <span className="text-meta-highlight">Propósito</span>
            </h1>
            <p className="opacity-80 font-light text-2xl leading-relaxed">
              A Meta Consultoria oferece soluções em consultoria empresarial com foco em Engenharia e Gestão de Negócios, impulsionando o crescimento e a eficiência de empresas para quem quer liderar o próprio futuro.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-meta-gradient py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: "600+", t: "Projetos realizados" },
            { n: "30+", t: "Anos de experiência" },
            { n: "95%", t: "Satisfação" }
          ].map((s, i) => (
            <div key={i} className="text-center text-white">
              <h2 className="text-6xl font-black">{s.n}</h2>
              <div className="text-lg uppercase tracking-widest font-bold opacity-70">{s.t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES: Grid nativa do Shadcn */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-2xl text-center mb-12 tracking-widest">Nossas Soluções</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {servicos.map((s, idx) => (
            <ServiceCard key={idx} titulo={s.titulo} descricao={s.desc} />
          ))}
        </div>
      </section>

      <footer className="py-10 border-t text-center text-[10px] uppercase tracking-[0.3em] text-primary-foreground bg-primary">
        © 2026 Meta Consultoria
      </footer>
    </>
  );
}