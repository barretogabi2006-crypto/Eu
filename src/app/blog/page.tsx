"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const featuredPost = {
    title: "O Guia Completo para Transformação Corporal com IA",
    excerpt: "Descubra como a inteligência artificial está revolucionando o fitness e como você pode aproveitar essa tecnologia para alcançar seus objetivos mais rapidamente.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    author: "Dr. Carlos Mendes",
    date: "15 de Janeiro, 2024",
    readTime: "8 min",
    category: "Tecnologia"
  };

  const blogPosts = [
    {
      title: "5 Mitos Sobre Perda de Peso Que Você Precisa Parar de Acreditar",
      excerpt: "Desmistificamos as crenças mais comuns que podem estar sabotando seus resultados.",
      image: "https://images.unsplash.com/photo-1506629905607-d9c8e3b8e0e4?w=400&h=250&fit=crop",
      author: "Nutricionista Ana Silva",
      date: "12 de Janeiro, 2024",
      readTime: "5 min",
      category: "Nutrição"
    },
    {
      title: "Treino em Casa vs Academia: Qual é Melhor?",
      excerpt: "Analisamos os prós e contras de cada modalidade para ajudar você a decidir.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      author: "Personal Trainer João Costa",
      date: "10 de Janeiro, 2024",
      readTime: "6 min",
      category: "Treino"
    },
    {
      title: "Como a IA Personaliza Seu Plano de Treino",
      excerpt: "Entenda os algoritmos por trás da personalização inteligente de exercícios.",
      image: "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?w=400&h=250&fit=crop",
      author: "Eng. Sofia Rodrigues",
      date: "8 de Janeiro, 2024",
      readTime: "7 min",
      category: "Tecnologia"
    },
    {
      title: "Alimentação Pré e Pós-Treino: O Que Comer e Quando",
      excerpt: "Maximize seus resultados com as estratégias nutricionais certas.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
      author: "Nutricionista Maria Santos",
      date: "5 de Janeiro, 2024",
      readTime: "4 min",
      category: "Nutrição"
    },
    {
      title: "Motivação: Como Manter a Consistência nos Treinos",
      excerpt: "Estratégias psicológicas para criar hábitos duradouros de exercício.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop",
      author: "Psicóloga Rita Oliveira",
      date: "3 de Janeiro, 2024",
      readTime: "6 min",
      category: "Motivação"
    },
    {
      title: "Suplementação Inteligente: O Que Realmente Funciona",
      excerpt: "Baseado em evidências científicas, descubra quais suplementos valem o investimento.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      author: "Dr. Pedro Almeida",
      date: "1 de Janeiro, 2024",
      readTime: "9 min",
      category: "Suplementação"
    }
  ];

  const categories = ["Todos", "Tecnologia", "Nutrição", "Treino", "Motivação", "Suplementação"];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Tecnologia": "bg-blue-500",
      "Nutrição": "bg-green-500",
      "Treino": "bg-purple-500",
      "Motivação": "bg-yellow-500",
      "Suplementação": "bg-red-500"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Link>

        <div className="text-center mb-12 animate-in slide-in-from-top duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog <span className="text-green-400">PrimeForm</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Artigos, dicas e insights sobre fitness, nutrição e tecnologia para maximizar seus resultados.
          </p>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in slide-in-from-top duration-700 delay-200">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category === "Todos" ? "default" : "outline"}
              className={category === "Todos" 
                ? "bg-green-500 hover:bg-green-600" 
                : "border-slate-600 text-gray-300 hover:border-green-500 hover:text-green-400"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Artigo em Destaque */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12 overflow-hidden animate-in slide-in-from-bottom duration-700">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <Badge className={`${getCategoryColor(featuredPost.category)} text-white mb-4`}>
                {featuredPost.category}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-gray-400 text-sm mb-6 space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300">
                Ler Artigo Completo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 group cursor-pointer animate-in slide-in-from-bottom" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className={`${getCategoryColor(post.category)} text-white absolute top-4 left-4`}>
                  {post.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-white group-hover:text-green-400 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-300 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-400 text-sm space-x-4 mb-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-0">
                    Ler mais →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter */}
        <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30 animate-in slide-in-from-bottom duration-700 delay-500">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Não Perca Nenhum Artigo
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Receba os melhores conteúdos sobre fitness, nutrição e tecnologia diretamente no seu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
              />
              <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 px-8">
                Subscrever
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}