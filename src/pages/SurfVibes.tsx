import { motion } from 'motion/react';
import { Waves, Flower2, Paintbrush, Anchor, Target, Users, Camera, Share2, Palette, TrendingUp, Instagram, Eye } from 'lucide-react';

const activities = [
  { icon: <Waves className="w-8 h-8" />, name: 'Surf', desc: 'Atividade central do evento, voltada à prática esportiva e conexão com o ambiente.' },
  { icon: <Flower2 className="w-8 h-8" />, name: 'Yoga', desc: 'Momento dedicado ao bem-estar e equilíbrio físico e mental.' },
  { icon: <Paintbrush className="w-8 h-8" />, name: 'Pintura', desc: 'Atividade criativa integrada à proposta do evento.' },
  { icon: <Anchor className="w-8 h-8" />, name: 'Canoagem', desc: 'Experiência em grupo com foco em integração e colaboração.' },
];

export default function SurfVibes() {
  return (
    <div className="pt-32 pb-20 px-6 bg-sand/30">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[60vh] rounded-[60px] overflow-hidden mb-20">
          <img
            src="/surf-capa.jpeg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-7xl md:text-9xl font-sans italic mb-4">
                SURF VIBES
              </h1>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          <div className="lg:col-span-2">
            <h2 className="text-5xl font-sans text-brown-dark mb-4 italic">O Conceito</h2>
            <div className="w-20 h-1.5 bg-brown-dark/20 rounded-full mb-8" />
            <div className="text-xl text-brown-dark/80 leading-relaxed mb-6">
              {"O Surf Vibes é um projeto autoral voltado à criação de experiências na praia, integrando atividades como surf, yoga e momentos de conexão entre os participantes.".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.01 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="text-xl text-brown-dark/80 leading-relaxed mb-12">
              {"O projeto também é voltado para a criação de conteúdo e parcerias com marcas, unindo experiência presencial com estratégia digital.".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 + (index * 0.01) }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="rounded-[48px] overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <img src="/yoga-naty-2.jpeg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Yoga na praia" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
                className="rounded-[48px] overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <img src="/pintura-2.jpeg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Pintura ao ar livre" />
              </motion.div>
            </div>
          </div>

          <div className="bg-white px-8 py-14 md:px-10 rounded-[60px] border border-fendi/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden h-full flex flex-col">
            {/* Elementos Decorativos (Barrinhas Brown-Dark) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-4 bg-brown-dark/20 rounded-b-[20px]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-4 bg-brown-dark/20 rounded-t-[20px]" />

            <h3 className="text-xl md:text-2xl font-sans mb-12 text-brown-dark/60 text-center md:text-left">Atividades</h3>

            <div className="flex-1 flex flex-col justify-between py-4 space-y-10 md:space-y-0">
              {activities.map((act, i) => (
                <div key={i} className="flex items-start gap-5 group/item">
                  <div className="shrink-0 p-3 bg-pastel-blue/30 rounded-[20px] text-brown-dark/70 shadow-inner group-hover/item:scale-110 transition-transform duration-500 cursor-default mt-1">
                    <div className="w-5 h-5 flex items-center justify-center">
                      {act.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-dark uppercase tracking-[0.2em] text-sm mb-2">{act.name}</h4>
                    <p className="text-brown-dark/50 text-sm leading-relaxed font-light">
                      {act.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl font-sans italic text-brown-dark/80">
            Integra experiência presencial com produção de conteúdo digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-white/60 backdrop-blur-sm p-10 md:p-16 rounded-[48px] border border-fendi/10 shadow-sm"
          >
            {/* Barrinha Superior Decorativa */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-4 bg-brown-dark/20 rounded-b-[20px]" />

            <h2 className="text-5xl font-sans text-brown-dark mb-10 italic">Atuação</h2>
            <ul className="text-xl text-brown-dark/70 space-y-6 font-light">
              <li className="flex items-center gap-4">
                <Target className="w-6 h-6 text-fendi cursor-default" />
                Planejamento do projeto
              </li>
              <li className="flex items-center gap-4">
                <Users className="w-6 h-6 text-fendi cursor-default" />
                Organização dos eventos
              </li>
              <li className="flex items-center gap-4">
                <Camera className="w-6 h-6 text-fendi cursor-default" />
                Criação de conteúdo
              </li>
              <li className="flex items-center gap-4">
                <Share2 className="w-6 h-6 text-fendi cursor-default" />
                Divulgação e comunicação
              </li>
              <li className="flex items-center gap-4">
                <Palette className="w-6 h-6 text-fendi cursor-default" />
                Desenvolvimento da identidade visual
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-white/60 backdrop-blur-sm p-10 md:p-16 rounded-[48px] border border-fendi/10 shadow-sm"
          >
            {/* Barrinha Superior Decorativa */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-4 bg-brown-dark/20 rounded-b-[20px]" />

            <h2 className="text-5xl font-sans text-brown-dark mb-10 italic">Resultados</h2>
            <ul className="text-xl text-brown-dark/70 space-y-6 font-light">
              <li className="flex items-center gap-4">
                <TrendingUp className="w-6 h-6 text-fendi cursor-default" />
                Conteúdos com até 15 mil visualizações
              </li>
              <li className="flex items-center gap-4">
                <Instagram className="w-6 h-6 text-fendi cursor-default" />
                Reels com média de até 9 mil visualizações
              </li>
              <li className="flex items-center gap-4">
                <Eye className="w-6 h-6 text-fendi cursor-default" />
                Vídeos com alcance entre 2 mil e 9 mil visualizações
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Seção de Conteúdos */}
        <div className="mb-32">
          <h2 className="text-5xl font-sans text-brown-dark mb-4 italic">Conteúdos</h2>
          <div className="w-20 h-1.5 bg-brown-dark/20 rounded-full mb-12" />

          {/* Galeria de Fotos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              '/surf-pratica.jpeg',
              '/surf-pratica-2.jpeg',
              '/surf-treino.jpeg',
              '/yoga.jpeg',
              '/yoga2.jpeg',
              '/pintura.jpeg',
              '/canoagem-pratica.jpeg',
              '/canoagem-pratica-2.jpeg'
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-[32px] md:rounded-[40px] overflow-hidden shadow-lg border border-fendi/10"
              >
                <img
                  src={src}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt={`Conteúdo ${i + 1}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Galeria de Vídeos (Formato Celular) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {[
              '/surf-vibes-chamada.mov',
              '/surf-vibes-entrevistas.mov'
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative aspect-[9/16] rounded-[50px] overflow-hidden shadow-2xl border-8 border-brown-dark/5 bg-brown-light"
              >
                <video
                  src={src}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
