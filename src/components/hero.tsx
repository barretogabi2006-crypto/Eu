import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Transformação Personalizada com IA
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Alcance a Sua
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent block">
              Forma Prime
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Planos de treino e alimentação personalizados através de análise inteligente. 
            Uma foto é tudo o que precisamos para começar a sua jornada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/avaliacao">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold group"
              >
                Começar Avaliação
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Ver Como Funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
              <div className="text-gray-400">Transformações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-400">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}