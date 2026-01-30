"use client"

import Link from "next/link"
import { Flame, Mail, Instagram, Youtube, Heart } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#comprar", label: "Comprar" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-primary" />
              <span className="font-serif text-xl font-bold text-[#F5F5F5]">
                23 Movimentos
              </span>
            </Link>
            <p className="text-[#F5F5F5]/60 text-sm leading-relaxed max-w-xs">
              Guia completo de massagem tântrica para homens que desejam 
              transformar sua vida íntima com técnicas naturais e seguras.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[#F5F5F5] mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#F5F5F5]/60 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#F5F5F5] mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:contato@23movimentos.com.br"
                className="flex items-center gap-2 text-[#F5F5F5]/60 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contato@23movimentos.com.br
              </a>
              <div className="flex gap-4 mt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#F5F5F5]/10 rounded-full flex items-center justify-center text-[#F5F5F5]/60 hover:bg-accent hover:text-accent-foreground transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F5F5F5]/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#F5F5F5]/40 text-sm text-center md:text-left">
              © 2026 23 Movimentos da Massagem Orgástica. Todos os direitos reservados.
            </p>
            <p className="text-[#F5F5F5]/40 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> para transformar vidas
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#F5F5F5]/5">
          <p className="text-[#F5F5F5]/30 text-xs text-center max-w-3xl mx-auto leading-relaxed">
            Este produto é destinado a adultos maiores de 18 anos. Os resultados podem variar de pessoa para pessoa. 
            Este conteúdo tem caráter educacional e não substitui orientação médica profissional. 
            Consulte um especialista em caso de dúvidas sobre sua saúde.
          </p>
        </div>
      </div>
    </footer>
  )
}
