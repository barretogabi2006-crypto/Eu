"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

export function Pricing() {
  const handlePayment = () => {
    window.open('https://buy.stripe.com/test_00wcN76Mqc0XbvT0rwdby00', '_blank');
  };

  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfeito para começar sua jornada",
      features: [
        "Avaliação por foto básica",
        "1 plano de treino",
        "1 plano alimentar",
        "Suporte por email",
        "Acesso por 30 dias"
      ],
      popular: false
    },
    {
      name: "Prime",
      price: "59",
      description: "O mais popular para resultados sérios",
      features: [
        "Avaliação por foto avançada",
        "3 planos de treino personalizados",
        "3 planos alimentares",
        "Suporte prioritário 24/7",
        "Acompanhamento de progresso",
        "Ajustes automáticos mensais",
        "Acesso por 90 dias"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "99",
      description: "Transformação completa e premium",
      features: [
        "Avaliação por foto premium",
        "Planos ilimitados e personalizados",
        "Nutricionista dedicado",
        "Personal trainer virtual",
        "Suporte VIP 24/7",
        "Ajustes semanais",
        "Relatórios detalhados",
        "Acesso vitalício"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Escolha Seu
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Plano</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Investimento inteligente na sua saúde e bem-estar. Resultados garantidos ou seu dinheiro de volta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">€{plan.price}</span>
                  <span className="text-gray-400">/mês</span>
                </div>
                <CardDescription className="text-gray-300 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={handlePayment}
                  className={`w-full py-3 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600' 
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  {plan.popular && <Zap className="mr-2 h-5 w-5" />}
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            💳 Pagamento seguro via Stripe • 🔒 Garantia de 30 dias • 🎯 Resultados comprovados
          </p>
        </div>
      </div>
    </section>
  );
}