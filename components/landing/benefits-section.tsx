"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { 
  Flame, 
  Heart, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Play
} from "lucide-react"
import Image from "next/image"

const highlights = [
  "23 técnicas exclusivas de massagem orgástica",
  "Movimentos que levam ao êxtase em minutos",
  "Segredos que 99% dos homens desconhecem",
  "Resultados desde a primeira aplicação"
]

export function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              {/* Main GIF - using unoptimized Next Image for animated GIF support */}
              <Image
                src="/images/massage-demo.gif"
                alt="Demonstracao de tecnica de massagem tantrica"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                unoptimized
                priority
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Flame className="w-4 h-4" />
                Conteudo Exclusivo
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-4 bg-card border border-border rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" fill="currentColor" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">+2.500</p>
                  <p className="text-sm text-muted-foreground">Casais Transformados</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Domine a Arte do Prazer
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              Ela Nunca Mais Vai{" "}
              <span className="text-primary">Esquecer</span>{" "}
              Suas Mãos
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Imagine o olhar de surpresa e desejo quando você aplicar movimentos que ela 
              <strong className="text-foreground"> nunca experimentou antes</strong>. Técnicas guardadas 
              a sete chaves por terapeutas tântricos agora reveladas para você.
            </p>

            {/* Highlights */}
            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all group"
              >
                <a href="#comprar">
                  Quero Aprender Agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-6 rounded-xl transition-all bg-transparent"
              >
                <a href="#tecnicas">
                  Ver as 23 Tecnicas
                </a>
              </Button>
            </div>

            {/* Urgency text */}
            <p className="text-sm text-muted-foreground mt-6 flex items-center gap-2">
              <Flame className="w-4 h-4 text-secondary" />
              <span>
                <strong className="text-secondary">Oferta por tempo limitado:</strong> De R$97 por apenas R$19,90
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
