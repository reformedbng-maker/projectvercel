"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

const testimonials = [
  {
    name: "Ricardo M.",
    age: 38,
    location: "Sao Paulo, SP",
    rating: 5,
    text: "Nunca imaginei que tecnicas tao simples pudessem fazer tanta diferenca. Minha esposa esta impressionada com as mudancas. Nosso relacionamento melhorou muito!",
    highlight: "Relacionamento transformado",
    image: "/images/user1.jpg"
  },
  {
    name: "Carlos A.",
    age: 45,
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Depois de 20 anos de casamento, achei que ja sabia tudo. Estava muito enganado. O guia abriu meus olhos para um novo mundo de possibilidades.",
    highlight: "Novo mundo de possibilidades",
    image: "/images/user2.jpg"
  },
  {
    name: "Fernando S.",
    age: 32,
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Estava prestes a tomar remedios para melhorar minha performance. Gracas a esse guia, descobri que nao preciso arriscar minha saude. Metodos naturais funcionam!",
    highlight: "Sem remedios perigosos",
    image: "/images/user3.jpg"
  },
  {
    name: "Andre L.",
    age: 41,
    location: "Curitiba, PR",
    rating: 5,
    text: "As videoaulas sao excepcionais. Muito didaticas e praticas. Consegui aplicar as tecnicas ja na primeira semana e os resultados foram imediatos.",
    highlight: "Resultados imediatos",
    image: "/images/user4.jpg"
  }
]

function TestimonialSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-5 h-5 rounded" />
        ))}
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="flex items-center gap-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Histórias de Sucesso
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Milhares de homens já transformaram suas vidas íntimas. 
            Veja alguns depoimentos reais de quem aplicou nossas técnicas.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {isLoading ? (
            <>
              <TestimonialSkeleton />
              <TestimonialSkeleton />
              <TestimonialSkeleton />
              <TestimonialSkeleton />
            </>
          ) : (
            testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300 group"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-accent/20 group-hover:text-accent/30 transition-colors">
                  <Quote className="w-10 h-10" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {testimonial.highlight}
                </div>

                {/* Text */}
                <p className="text-card-foreground leading-relaxed mb-6 italic">
                  {'"'}{testimonial.text}{'"'}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Foto de ${testimonial.name}`}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent/30"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}, {testimonial.age} anos
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
