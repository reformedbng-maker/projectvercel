"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 600px)
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="text-xs text-muted-foreground">Oferta especial</div>
                <div className="font-bold text-foreground">
                  R$19,90 <span className="text-xs font-normal text-muted-foreground line-through">R$97</span>
                </div>
              </div>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold flex-shrink-0"
              >
                <Link href="#comprar">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Comprar
                </Link>
              </Button>
              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                className="p-2 text-muted-foreground hover:text-foreground"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
