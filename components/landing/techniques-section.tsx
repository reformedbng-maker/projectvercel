"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Lock, Eye, Flame, Sparkles, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const techniques = [
  { number: 1, title: "Aquecendo os Motores", teaser: "O início perfeito para preparar o corpo...", icon: Flame },
  { number: 2, title: "Saudação Labial", teaser: "Um beijo especial que desperta os sentidos...", icon: Heart },
  { number: 3, title: "Pincelada do Amor", teaser: "Movimentos suaves como pinceladas artísticas...", icon: Sparkles },
  { number: 4, title: "Selando os Lábios", teaser: "Técnica de pressão suave e envolvente...", icon: Heart },
  { number: 5, title: "Dança dos Lábios", teaser: "Ritmo e movimento em perfeita harmonia...", icon: Star },
  { number: 6, title: "Intensidade Extrema", teaser: "Gemidos vão rolar... prepare-se!", icon: Flame },
  { number: 7, title: "Faça Uma Fogueira", teaser: "Cuidado para não apagar o fogo!", icon: Flame },
  { number: 8, title: "Protegendo a Deusa", teaser: "Um verdadeiro guardião carinhoso...", icon: Heart },
  { number: 9, title: "Asas de Borboleta", teaser: "Faça essas borboletas quererem voar...", icon: Sparkles },
  { number: 10, title: "Passando Pelo Botão do Prazer", teaser: "O primeiro contato estratégico...", icon: Star },
  { number: 11, title: "Leve Pressão no Botão", teaser: "Delicadeza que gera intensidade...", icon: Heart },
  { number: 12, title: "Mergulhando no Prazer", teaser: "Segura, a brincadeira ficará séria!", icon: Flame },
  { number: 13, title: "Meditação do Clitóris", teaser: "Até eu escrevendo empolguei...", icon: Sparkles },
  { number: 14, title: "Um Tapinha de Amor", teaser: "Um tapinha não dói, é carinho!", icon: Heart },
  { number: 15, title: "Bateu, Agora Assopra", teaser: "Contraste térmico sensacional...", icon: Flame },
  { number: 16, title: "Acionando a Campainha", teaser: "Mas não entre... ainda!", icon: Star },
  { number: 17, title: "Mundo da Fantasia", teaser: "Seja caçador e sutil...", icon: Sparkles },
  { number: 18, title: "Contador de Tempo", teaser: "Movimente-se como um relógio...", icon: Star },
  { number: 19, title: "O Famoso Ponto G", teaser: "A técnica mais desejada revelada...", icon: Flame },
  { number: 20, title: "Céu e Terra", teaser: "Conexão entre dois mundos...", icon: Sparkles },
  { number: 21, title: "Céu Noturno", teaser: "Hora de deixar o tempo fechado...", icon: Star },
  { number: 22, title: "Esconde-Esconde", teaser: "O amor no toque misterioso...", icon: Heart },
  { number: 23, title: "O Adeus", teaser: "O final perfeito que ela nunca esquecerá...", icon: Flame },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export function TechniquesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="tecnicas" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Conteudo Exclusivo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            As 23 Manobras Secretas
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada movimento foi cuidadosamente desenvolvido para proporcionar 
            o maximo de prazer. Veja uma previa do que voce vai dominar:
          </p>
        </motion.div>

        {/* Techniques Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {techniques.map((technique, index) => {
            const Icon = technique.icon
            const isHovered = hoveredIndex === index
            
            return (
              <motion.div
                key={technique.number}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-background/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              >
                {/* Number badge */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground text-sm font-bold">{technique.number}</span>
                </div>

                {/* Content */}
                <div className="ml-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h3 className="font-semibold text-card-foreground text-sm line-clamp-1">
                      {technique.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {technique.teaser}
                  </p>

                  {/* Lock icon overlay */}
                  <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm rounded-xl flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-center">
                      <Lock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <span className="text-xs text-muted-foreground">Desbloqueie agora</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bonus techniques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <div className="bg-accent/20 border border-accent/50 rounded-full px-4 py-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">BONUS: Mix de Massagens</span>
          </div>
          <div className="bg-accent/20 border border-accent/50 rounded-full px-4 py-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">BONUS: Movimento com Vibrador</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Eye className="w-5 h-5 mr-2" />
            Quero Desbloquear Todas as Tecnicas
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            Acesso imediato a todas as 23 manobras + bonus exclusivos
          </p>
        </motion.div>
      </div>
    </section>
  )
}
