"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  HeartPulse, 
  Video, 
  Clock, 
  ShieldCheck,
  Zap,
  Award
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: HeartPulse,
    title: "Evite Riscos à Saúde",
    description: "Pílulas podem causar infartos e efeitos colaterais graves. Nosso método é 100% natural.",
    highlight: true
  },
  {
    icon: Video,
    title: "Videoaulas Práticas",
    description: "Aprenda com demonstrações visuais detalhadas. Entenda cada movimento com clareza."
  },
  {
    icon: Clock,
    title: "Resultados em Semanas",
    description: "Clientes relatam melhorias significativas nas primeiras semanas de prática."
  },
  {
    icon: ShieldCheck,
    title: "Totalmente Discreto",
    description: "Acesso digital privado. Ninguém precisa saber do seu investimento pessoal."
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    description: "Após a compra, receba instantaneamente o acesso ao conteúdo completo."
  },
  {
    icon: Award,
    title: "Garantia de 7 Dias",
    description: "Se não ficar satisfeito, devolvemos 100% do seu investimento. Sem perguntas."
  }
]

const stats = [
  { value: "2.500+", label: "Homens Transformados" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "23", label: "Técnicas Exclusivas" },
  { value: "7", label: "Dias de Garantia" }
]

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Diferenciais Exclusivos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Por Que Escolher Este Guia?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Muito mais do que um simples livro. É um programa completo de transformação 
            da sua vida íntima com segurança e eficácia comprovadas.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                  feature.highlight
                    ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  feature.highlight ? "bg-primary/20" : "bg-muted"
                }`}>
                  <Icon className={`w-6 h-6 ${feature.highlight ? "text-primary" : "text-foreground"}`} />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 shadow-lg shadow-accent/30"
          >
            <Link href="#comprar">
              Quero Transformar Minha Vida
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
