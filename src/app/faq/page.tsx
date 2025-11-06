"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, HelpCircle, MessageCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Avaliação por Foto",
      questions: [
        {
          question: "Como funciona a análise por foto?",
          answer: "Nossa IA utiliza algoritmos avançados de visão computacional para analisar sua composição corporal, tipo físico e percentual de gordura através da sua foto. O processo é rápido, preciso e completamente automatizado."
        },
        {
          question: "Que tipo de foto devo enviar?",
          answer: "Para melhores resultados, envie uma foto onde seu corpo esteja bem visível, com boa iluminação, usando roupa justa ou roupa de ginásio. Evite fotos muito escuras ou com roupas largas."
        },
        {
          question: "A análise é precisa?",
          answer: "Nossa IA tem uma precisão de 95% baseada em milhares de análises. Os resultados são comparáveis a avaliações feitas por profissionais, mas sempre recomendamos acompanhamento médico para casos específicos."
        },
        {
          question: "Minha foto fica segura?",
          answer: "Sim! Todas as fotos são processadas de forma segura e criptografada. Não armazenamos suas imagens após a análise e seguimos rigorosamente as normas de proteção de dados."
        }
      ]
    },
    {
      title: "Planos de Treino",
      questions: [
        {
          question: "Os treinos são personalizados?",
          answer: "Sim! Cada plano é criado especificamente para você baseado na sua avaliação, objetivos, nível de experiência e equipamentos disponíveis."
        },
        {
          question: "Posso treinar em casa?",
          answer: "Absolutamente! Oferecemos planos para academia e para casa. Você pode especificar quais equipamentos tem disponível e adaptamos o treino accordingly."
        },
        {
          question: "Com que frequência os planos são atualizados?",
          answer: "Nossa IA monitora seu progresso e ajusta automaticamente os planos a cada 2-4 semanas, ou quando detecta que você está pronto para o próximo nível."
        },
        {
          question: "E se eu for iniciante?",
          answer: "Perfeito! Temos planos específicos para iniciantes com progressão gradual, explicações detalhadas e foco na técnica correta antes de aumentar a intensidade."
        }
      ]
    },
    {
      title: "Planos Alimentares",
      questions: [
        {
          question: "As dietas consideram restrições alimentares?",
          answer: "Sim! Você pode especificar alergias, intolerâncias e preferências alimentares (vegetariano, vegano, etc.) e criamos um plano adequado para você."
        },
        {
          question: "Preciso contar calorias?",
          answer: "Não necessariamente. Fornecemos as informações calóricas e de macronutrientes, mas também oferecemos opções mais simples com porções e substituições práticas."
        },
        {
          question: "Posso trocar alimentos?",
          answer: "Claro! Oferecemos listas de substituições equivalentes para cada alimento, mantendo o equilíbrio nutricional do seu plano."
        },
        {
          question: "Os planos incluem suplementação?",
          answer: "Sim, quando apropriado. Sugerimos suplementos básicos como whey protein, creatina e multivitamínicos, sempre com base nas suas necessidades específicas."
        }
      ]
    },
    {
      title: "Pagamentos e Planos",
      questions: [
        {
          question: "Posso cancelar a qualquer momento?",
          answer: "Sim! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento através da sua área de cliente ou entrando em contato conosco."
        },
        {
          question: "Há garantia de resultados?",
          answer: "Oferecemos garantia de 30 dias. Se não estiver satisfeito com os resultados, devolvemos 100% do valor pago, sem perguntas."
        },
        {
          question: "Quais formas de pagamento aceitam?",
          answer: "Aceitamos cartões de crédito/débito (Visa, Mastercard), PayPal, MB Way e transferência bancária. Todos os pagamentos são processados de forma segura."
        },
        {
          question: "Posso mudar de plano?",
          answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. A diferença será calculada proporcionalmente."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Link>

        <div className="text-center mb-12 animate-in slide-in-from-top duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perguntas <span className="text-green-400">Frequentes</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o PrimeForm e nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* FAQ Content */}
          <div className="lg:col-span-2 space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-slate-800/50 border-slate-700 animate-in slide-in-from-left duration-700" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <HelpCircle className="h-6 w-6 text-green-400 mr-2" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border-slate-600">
                        <AccordionTrigger className="text-white hover:text-green-400 transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contacto Rápido */}
            <Card className="bg-slate-800/50 border-slate-700 animate-in slide-in-from-right duration-700">
              <CardHeader>
                <CardTitle className="text-white">Precisa de Ajuda?</CardTitle>
                <CardDescription className="text-gray-300">
                  Nossa equipe está aqui para ajudar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-green-500 hover:bg-green-600 transition-colors">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat ao Vivo
                </Button>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-sm">suporte@primeform.pt</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-sm">+351 123 456 789</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Links Úteis */}
            <Card className="bg-slate-800/50 border-slate-700 animate-in slide-in-from-right duration-700 delay-100">
              <CardHeader>
                <CardTitle className="text-white">Links Úteis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/testemunhos" className="block text-gray-300 hover:text-green-400 transition-colors">
                  → Testemunhos de Clientes
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-green-400 transition-colors">
                  → Blog e Artigos
                </Link>
                <Link href="/privacidade" className="block text-gray-300 hover:text-green-400 transition-colors">
                  → Política de Privacidade
                </Link>
                <Link href="/termos" className="block text-gray-300 hover:text-green-400 transition-colors">
                  → Termos de Serviço
                </Link>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30 animate-in slide-in-from-right duration-700 delay-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-white font-semibold mb-2">Ainda com dúvidas?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Experimente nossa avaliação gratuita!
                </p>
                <Link href="/avaliacao">
                  <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300">
                    Começar Agora
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}