import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Instagram, Linkedin, Mail, Film, Palette, Calendar, Sparkles, Clapperboard, Layout, Image, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Forçar scroll para o topo ao carregar/atualizar a página
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollHeight;
      setShowScrollTop(progress > 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="pt-20">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-brown-dark via-brown-dark to-[#D4AF37]/40 py-24">

        {/* Efeito de Ondulação (4 Ondas) com MUITO Brilho */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 2],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 2.5,
              }}
              className="absolute -top-[20%] -right-[20%] rounded-full border-[3px] border-pastel-yellow/50 blur-[1px] shadow-[0_0_30px_rgba(253,253,150,0.3)]"
              style={{
                width: '100vw',
                height: '100vw',
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center z-10 w-full">
          {/* Imagem à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-pastel-yellow/5 rounded-[48px] blur-2xl group-hover:bg-pastel-yellow/10 transition-colors duration-500" />
              <img
                src="/naty-home.jpeg"
                alt="Natielly Liberalino"
                className="relative rounded-[40px] shadow-2xl w-full aspect-[4/5] object-cover ring-1 ring-white/10"
              />
            </div>
          </motion.div>

          {/* Conteúdo à direita */}
          <motion.div
            className="text-center flex flex-col items-center order-1 md:order-2"
          >
            {/* Texto acima: Marketing... (Aparece depois) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-sm uppercase tracking-[0.4em] text-pastel-yellow mb-8 font-medium"
            >
              Marketing   •   Conteúdo   •   Vídeo
            </motion.div>

            {/* Nome com efeito de digitação */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-pastel-yellow mb-12 leading-tight">
              {"Natielly".split("").map((char, i) => (
                <span key={i} className="relative inline-block">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.01 }}
                  >
                    {char}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.08,
                      times: [0, 0.1, 1]
                    }}
                    className="absolute left-full top-[10%] w-[2px] md:w-[4px] h-[80%] bg-pastel-yellow"
                  />
                </span>
              ))}
              <br />
              {"Liberalino".split("").map((char, i) => (
                <span key={i} className="relative inline-block">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (8 + i) * 0.08, duration: 0.01 }}
                  >
                    {char}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      delay: (8 + i) * 0.08,
                      duration: 0.08,
                      times: [0, 0.1, 1]
                    }}
                    className="absolute left-full top-[10%] w-[2px] md:w-[4px] h-[80%] bg-pastel-yellow"
                  />
                </span>
              ))}
            </h1>


            {/* Texto abaixo (Aparece depois) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="space-y-6 mb-12 max-w-xl text-justify"
            >
              <p className="text-lg md:text-xl text-pastel-yellow/90 leading-relaxed font-light">
                Sou estudante de Publicidade e Propaganda com foco em marketing digital e produção de conteúdo. Possuo experiência com produção de conteúdo, edição de vídeos e imagens, planejamento para redes sociais e adaptação de linguagem para diferentes públicos.
              </p>
              <p className="text-lg md:text-xl text-pastel-yellow/90 leading-relaxed font-light">
                Sou idealizadora do projeto Surf Vibes, onde atuo no planejamento, criação de conteúdo e comunicação com o público, desenvolvendo estratégias e fortalecendo a presença digital do projeto.
              </p>
            </motion.div>

            {/* Ícones sociais (Aparece por último) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="flex gap-6 justify-center"
            >
              <a href="https://instagram.com/natyserena" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-pastel-yellow/20 hover:bg-pastel-yellow/10 transition-all hover:scale-110">
                <Instagram className="w-6 h-6 text-pastel-yellow" />
              </a>
              <a href="https://www.linkedin.com/in/natielly-liberalino" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-pastel-yellow/20 hover:bg-pastel-yellow/10 transition-all hover:scale-110">
                <Linkedin className="w-6 h-6 text-pastel-yellow" />
              </a>
              <a href="mailto:natiellyliberalino@hotmail.com" className="p-4 rounded-full border border-pastel-yellow/20 hover:bg-pastel-yellow/10 transition-all hover:scale-110">
                <Mail className="w-6 h-6 text-pastel-yellow" />
              </a>
            </motion.div>
          </motion.div>

        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pastel-blue rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sand rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </section>



      {/* Habilidades Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-brown-dark mb-6">Habilidades</h2>
            <div className="w-24 h-1 bg-brown-dark/20 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "CapCut & InShot", icon: <Film strokeWidth={1.5} className="w-8 h-8" />, desc: "Edição de vídeo profissional" },
              { name: "Lightroom", icon: <Image strokeWidth={1.5} className="w-8 h-8" />, desc: "Tratamento de fotos e cor" },
              { name: "Canva", icon: <Palette strokeWidth={1.5} className="w-8 h-8" />, desc: "Design criativo e ágil" },
              { name: "Planejamento", icon: <Calendar strokeWidth={1.5} className="w-8 h-8" />, desc: "Estratégia e calendários" },
              { name: "Criação de Conteúdo", icon: <Sparkles strokeWidth={1.5} className="w-8 h-8" />, desc: "Conteúdo autêntico e viral" },
              { name: "Social Media", icon: <Clapperboard strokeWidth={1.5} className="w-8 h-8" />, desc: "Vídeos curtos e engajadores" },
              { name: "Storytelling", icon: <Layout strokeWidth={1.5} className="w-8 h-8" />, desc: "Narrativa para marcas" },
              { name: "Públicos", icon: <Users strokeWidth={1.5} className="w-8 h-8" />, desc: "Adaptação para cada nicho" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-pastel-yellow/30 p-8 rounded-[32px] border border-brown-dark/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-brown-dark/40 group-hover:text-brown-dark group-hover:bg-brown-dark group-hover:text-white transition-all duration-500 shadow-sm">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-brown-dark mb-2">{skill.name}</h3>
                <p className="text-sm text-brown-dark/60 font-light">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atuação Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-brown-dark via-brown-dark to-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-pastel-yellow mb-4">Atuação</h2>
            <div className="w-24 h-1 bg-pastel-yellow mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "PLANEJAMENTO DE CONTEÚDO",
                desc: "Desenvolvimento de estratégias editoriais alinhadas aos objetivos da marca, com definição de pautas, formatos e linguagem adequada ao público."
              },
              {
                title: "COPYWRITING INSTITUCIONAL",
                desc: "Elaboração de textos informativos e institucionais, respeitando o tom de voz da marca e diretrizes éticas do segmento."
              },
              {
                title: "EDIÇÃO DE VÍDEO E IMAGEM",
                desc: "Edição de conteúdos visuais utilizando ferramentas como CapCut, Photoshop e Lightroom, priorizando estética limpa e profissional."
              },
              {
                title: "CRIAÇÃO DE CONTEÚDO PARA REDES SOCIAIS",
                desc: "Produção de posts, reels e stories com foco em clareza, consistência visual e fortalecimento do posicionamento digital."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: i * 0.1 }
                  }
                }}
                className="bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-[48px] border border-white/10 shadow-2xl hover:bg-white/15 transition-colors group"
              >
                <h3 className="text-2xl font-bold text-pastel-yellow mb-8 tracking-wide uppercase">
                  {item.title}
                </h3>
                <div className="text-lg text-pastel-yellow/80 leading-relaxed font-light">
                  {item.desc.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { delay: (i * 0.2) + 0.8 + (index * 0.015) }
                        }
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto mb-16 relative">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-brown-dark mb-4">Marcas</h2>
            <div className="w-20 h-1 bg-brown-dark/20 mx-auto rounded-full" />
          </div>
          <Link
            to="/marcas"
            className="hidden md:flex absolute right-0 bottom-1 items-center gap-2 text-brown-dark font-bold uppercase tracking-widest text-xs hover:translate-x-2 transition-transform duration-300"
          >
            Ver Experiências <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="max-w-6xl mx-auto relative group/ticker overflow-hidden rounded-[30px] border border-fendi/10">
          {/* Gradient Masks para suavizar as bordas no container menor */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="relative overflow-hidden py-7">
            <motion.div
              animate={{
                x: [0, -800],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex flex-none gap-12 items-center whitespace-nowrap"
            >
              {[
                "alohi.png", "borana.png", "dress to.png", "john-john.png", "lands.png", "purpose.png", "rhize.png",
                "alohi.png", "borana.png", "dress to.png", "john-john.png", "lands.png", "purpose.png", "rhize.png"
              ].map((logo, index) => (
                <img
                  key={index}
                  src={`/logos/${logo}`}
                  alt="Brand Logo"
                  className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 hover:scale-110"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-brown-dark text-white rounded-full shadow-2xl hover:bg-fendi transition-all duration-300 group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
