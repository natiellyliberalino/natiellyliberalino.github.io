import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const brands = [
  { name: 'purpose', displayName: 'Purpose' },
  { name: 'rhize', displayName: 'Rhize' },
  { name: 'lands', displayName: 'Lands' },
  { name: 'john-john', displayName: 'John John' },
  { name: 'alohi', displayName: 'Alohi' },
  { name: 'borana', displayName: 'Borana' },
  { name: 'dress to', displayName: 'Dress To' },
];

const videos = [
  { id: 1, title: 'Editorial Dress To', brand: 'Dress To', src: '/dress-to.mp4' },
  { id: 2, title: 'Rhize Lifestyle', brand: 'Rhize', src: '/rhize.mp4' },
];

const introText = "Experiência na produção de conteúdo para marcas, atuando na criação de vídeos e fotos para redes sociais, com foco na apresentação de produtos e comunicação com o público.";

export default function Marcas() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
          {/* Coluna Esquerda: Conteúdo */}
          <div className="order-2 lg:order-1">
            <header className="mb-10">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-6xl md:text-8xl font-bold text-brown-dark mb-6"
              >
                Marcas
              </motion.h1>
              <div className="w-24 h-1 bg-fendi rounded-full" />
            </header>

            <div className="space-y-12">
              <div className="text-xl md:text-2xl text-brown-dark/80 font-light leading-relaxed">
                {introText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.015) }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-wrap gap-8 items-center border-t border-fendi/10 pt-12">
                {brands.map((brand, i) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + (0.1 * i) }}
                    className="h-8 md:h-12 w-auto"
                  >
                    <img
                      src={`/logos/${brand.name}.png`}
                      alt={brand.displayName}
                      className="h-full w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Direita: Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-fendi/5 rounded-[60px] blur-2xl" />
              <img
                src="/naty-mako.jpeg"
                alt="Natielly Liberalino"
                className="relative w-full rounded-[48px] shadow-2xl aspect-[4/5] object-cover ring-1 ring-fendi/10"
              />
            </div>
          </motion.div>
        </div>

        {/* Galeria de Conteúdos */}
        <section className="mt-32 border-t border-fendi/10 pt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brown-dark mb-16"
          >
            Conteúdos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { src: "/alohi.jpeg", brand: "Alohi" },
              { src: "/john john.jpeg", brand: "John John" },
              { src: "/purpose-pratas.jpeg", brand: "Purpose Pratas" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group relative aspect-[3/4] rounded-[48px] overflow-hidden shadow-xl"
              >
                <img
                  src={item.src}
                  alt={item.brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white text-xl font-bold tracking-wider uppercase">{item.brand}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (3 + i) * 0.1 }}
                className="group relative w-full max-w-[340px] aspect-[9/16] rounded-[56px] overflow-hidden bg-brown-dark cursor-pointer shadow-2xl ring-12 ring-black/[0.03] border border-white/10"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-1000"
                  loop
                  muted
                  playsInline
                  onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseLeave={(e) => {
                    const v = e.target as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                />

                {/* Overlay Informativo */}
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs uppercase tracking-[0.3em] font-medium text-white">{video.brand}</p>
                </div>

                {/* Ícone de Play (sutil) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Play className="w-6 h-6 fill-white text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
