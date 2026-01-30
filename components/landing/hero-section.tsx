"use client"

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { ArrowRight, Play, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface LeadFormData {
  email: string
}

export function HeroSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<LeadFormData>()

  const onSubmit = (data: LeadFormData) => {
    console.log("Lead captured:", data)
    setIsSubmitted(true)
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D1515] to-[#1A1A1A]">
        {/* Animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        />
        {/* Mandala pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              <pattern id="mandala" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FFD700" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="#8B0000" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="#FF4500" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#mandala)"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">100% Seguro e Discreto</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] leading-tight mb-6 text-balance"
          >
            Desperte o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Prazer Verdadeiro
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">23 Movimentos da Massagem Orgástica</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#F5F5F5]/80 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Guia Tântrico para Homens: Melhore Suas Habilidades, Aumente a Confiança e 
            Evite Riscos à Saúde com Técnicas Naturais e Milenares
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {[
              "Livro Digital PDF",
              "Videoaulas Práticas",
              "Acesso Imediato"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[#F5F5F5]/70">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 shadow-lg shadow-accent/30 transition-all hover:scale-105"
            >
              <Link href="#comprar">
                Comprar Agora por R$19,90
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#F5F5F5]/30 text-[#F5F5F5] hover:bg-[#F5F5F5]/10 font-medium px-8 py-6 bg-transparent"
            >
              <Link href="#beneficios">
                <Play className="mr-2 w-5 h-5" />
                Ver Benefícios
              </Link>
            </Button>
          </motion.div>

          {/* Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-md mx-auto"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    {...register("email", {
                      required: "E-mail é obrigatório",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "E-mail inválido"
                      }
                    })}
                    className="bg-[#F5F5F5]/10 border-[#F5F5F5]/20 text-[#F5F5F5] placeholder:text-[#F5F5F5]/50 h-12"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 text-left">{errors.email.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-6"
                >
                  Receber Dicas Grátis
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent/10 border border-accent/30 rounded-lg p-4"
              >
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-[#F5F5F5] font-medium">Obrigado! Verifique seu e-mail.</p>
              </motion.div>
            )}
            <p className="text-[#F5F5F5]/50 text-xs mt-3">
              Receba dicas exclusivas. Sem spam, prometemos.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#F5F5F5]/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
