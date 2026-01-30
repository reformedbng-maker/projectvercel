"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Check, 
  ShieldCheck, 
  CreditCard, 
  Lock,
  Zap,
  Gift
} from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
  "Livro Digital PDF Completo",
  "23 Técnicas de Massagem Detalhadas",
  "Videoaulas Práticas em HD",
  "Bônus: Guia de Comunicação Íntima",
  "Acesso Vitalício ao Conteúdo",
  "Atualizações Futuras Gratuitas",
  "Suporte por E-mail"
]

export function PurchaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="comprar" className="py-20 md:py-32 bg-gradient-to-b from-card to-[#1A1A1A]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Oferta Especial por Tempo Limitado
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Transforme Sua Vida Íntima Hoje
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Invista em você mesmo e no seu relacionamento. 
            Por menos de um jantar, você terá acesso a conhecimentos que mudarão sua vida.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-card border-2 border-accent rounded-3xl overflow-hidden shadow-2xl shadow-accent/20">
            {/* Ribbon */}
            <div className="absolute top-4 -right-8 bg-secondary text-secondary-foreground text-xs font-bold px-10 py-1 rotate-45">
              MAIS VENDIDO
            </div>

            <div className="p-8 md:p-10">
              {/* Product Name */}
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-card-foreground mb-2">
                  23 Movimentos da Massagem Orgástica
                </h3>
                <p className="text-muted-foreground">
                  Guia Digital Completo + Videoaulas
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-muted-foreground text-lg line-through mb-1">
                  De R$97,00
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-muted-foreground text-2xl">Por apenas</span>
                </div>
                <div className="font-serif text-6xl md:text-7xl font-bold text-accent mt-2">
                  R$19<span className="text-4xl">,90</span>
                </div>
                <div className="text-muted-foreground mt-2">
                  Pagamento único • Acesso vitalício
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-card-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-xl py-7 shadow-lg shadow-accent/30 transition-all hover:scale-[1.02]"
                onClick={() => window.open('https://pay.lowify.com.br/checkout.php?product_id=vgfphs', '_blank')}
              >
                <Zap className="w-6 h-6 mr-2" />
                COMPRAR AGORA
              </Button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 mt-6 text-muted-foreground">
                <div className="flex items-center gap-2 text-sm">
                  <Lock className="w-4 h-4" />
                  <span>Compra Segura</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão ou PIX</span>
                </div>
              </div>
            </div>

            {/* Guarantee Banner */}
            <div className="bg-primary/10 border-t border-primary/20 p-6">
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">
                    Garantia Incondicional de 7 Dias
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/30 rounded-xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Gift className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  Bônus Exclusivo: Guia de Comunicação Íntima
                </div>
                <div className="text-sm text-muted-foreground">
                  Aprenda a conversar sobre desejos e fantasias com sua parceira. Valor: R$47 - Grátis!
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
