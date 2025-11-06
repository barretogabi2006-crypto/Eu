"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Quote, TrendingDown, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

export default function TestemunhosPage() {
  const testimonials = [
    {
      name: "Maria Silva",
      age: 32,
      location: "Lisboa",
      plan: "Prime",
      duration: "3 meses",
      results: {
        weight: -8,
        bodyFat: -6,
        muscle: +2
      },
      rating: 5,
      text: "Incrível! Nunca pensei que conseguiria resultados tão rápidos. A IA realmente entende o meu corpo e adapta os treinos perfeitamente. Perdi 8kg e ganhei muita confiança!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "João Santos",
      age: 28,
      location: "Porto",
      plan: "Elite",
      duration: "6 meses",
      results: {
        weight: +5,
        bodyFat: -10,
        muscle: +8
      },
      rating: 5,
      text: "Como personal trainer, estava cético sobre IA fitness. Mas o PrimeForm superou todas as expectativas! A personalização é impressionante e os resultados falam por si.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      age: 45,
      location: "Braga",
      plan: "Prime",
      duration: "4 meses",
      results: {
        weight: -12,
        bodyFat: -8,
        muscle: +1
      },
      rating: 5,
      text: "Depois dos 40, pensava que seria impossível voltar à forma. O PrimeForm provou que estava errada! Sinto-me melhor do que aos 30 anos.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Pedro Oliveira",
      age: 35,
      location: "Coimbra",
      plan: "Starter",
      duration: "2 meses",
      results: {
        weight: -6,
        bodyFat: -4,
        muscle: +1
      },
      rating: 4,
      text: "Excelente para quem está começando! Os treinos são desafiadores mas não impossíveis. O suporte é fantástico e os resultados aparecem rapidamente.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sofia Ferreira",
      age: 26,
      location: "Aveiro",
      plan: "Elite",
      duration: "5 meses",
      results: {
        weight: -4,
        bodyFat: -7,
        muscle: +3
      },
      rating: 5,
      text: "A flexibilidade do sistema é incrível! Viajo muito por trabalho e o PrimeForm adapta-se sempre à minha agenda e aos ginásios disponíveis.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ricardo Mendes",
      age: 42,
      location: "Faro",
      plan: "Prime",
      duration: "8 meses",
      results: {
        weight: -15,
        bodyFat: -12,
        muscle: +4
      },
      rating: 5,
      text: "Transformação completa! Não é só o físico, é a mentalidade. O PrimeForm ensinou-me a ter uma relação saudável com o exercício e a alimentação.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { label: "Clientes Satisfeitos", value: "10,000+", icon: Award },
    { label: "Taxa de Sucesso", value: "95%", icon: TrendingUp },
    { label: "Peso Perdido Total", value: "50,000kg", icon: TrendingDown },
    { label: "Avaliação Média", value: "4.9/5", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Link>

        <div className="text-center mb-12 animate-in slide-in-from-top duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Histórias de <span className="text-green-400">Sucesso</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra como o PrimeForm transformou a vida de milhares de pessoas em todo o país.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 text-center animate-in slide-in-from-bottom duration-700" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testemunhos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 animate-in slide-in-from-bottom" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.age} anos, {testimonial.location}</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white">{testimonial.plan}</Badge>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4">
                  <Quote className="h-6 w-6 text-green-400 absolute -top-2 -left-1" />
                  <p className="text-gray-300 italic pl-6">{testimonial.text}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-4 p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-center">
                    <div className={`text-lg font-bold ${testimonial.results.weight < 0 ? 'text-green-400' : 'text-blue-400'}`}>
                      {testimonial.results.weight > 0 ? '+' : ''}{testimonial.results.weight}kg
                    </div>
                    <div className="text-gray-400 text-xs">Peso</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-400">
                      {testimonial.results.bodyFat}%
                    </div>
                    <div className="text-gray-400 text-xs">Gordura</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">
                      +{testimonial.results.muscle}kg
                    </div>
                    <div className="text-gray-400 text-xs">Músculo</div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    {testimonial.duration} de transformação
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-in slide-in-from-bottom duration-700 delay-500">
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30 max-w-4xl mx-auto">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Pronto para Sua Transformação?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de pessoas que já transformaram suas vidas com o PrimeForm. 
                Sua história de sucesso pode ser a próxima!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/avaliacao">
                  <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                    Começar Minha Transformação
                  </Button>
                </Link>
                <Link href="/#pricing">
                  <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300">
                    Ver Planos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}