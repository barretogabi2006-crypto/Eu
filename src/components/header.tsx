"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-green-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              PrimeForm
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-white hover:text-green-400 transition-colors">
              Funcionalidades
            </a>
            <a href="/#pricing" className="text-white hover:text-green-400 transition-colors">
              Planos
            </a>
            <Link href="/avaliacao">
              <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                Começar Agora
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-green-500/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="/#features" className="text-white hover:text-green-400 transition-colors">
                Funcionalidades
              </a>
              <a href="/#pricing" className="text-white hover:text-green-400 transition-colors">
                Planos
              </a>
              <Link href="/avaliacao">
                <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 w-full">
                  Começar Agora
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}