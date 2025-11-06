import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Utensils, Dumbbell, Brain, Target, Clock } from "lucide-react";
import Link from "next/link";

export function Features() {
  const features = [
    {
      icon: Camera,
      title: "Avaliação por Foto",
      description: "Nossa IA analisa sua foto e determina seu tipo físico, percentual de gordura e necessidades específicas.",
      gradient: "from-purple-400 to-pink-500",
      link: "/avaliacao"
    },
    {
      icon: Dumbbell,
      title: "Planos de Treino",
      description: "Treinos personalizados baseados no seu nível, objetivos e equipamentos disponíveis.",
      gradient: "from-green-400 to-blue-500",
      link: "/planos/treino"
    },
    {
      icon: Utensils,
      title: "Planos de Alimentação",
      description: "Dietas balanceadas e personalizadas para maximizar seus resultados e saúde.",
      gradient: "from-orange-400 to-red-500",
      link: "/planos/alimentacao"
    },
    {
      icon: Brain,
      title: "IA Inteligente",
      description: "Algoritmos avançados que aprendem com seu progresso e ajustam automaticamente seus planos.",
      gradient: "from-blue-400 to-purple-500",
      link: "/dashboard"
    },
    {
      icon: Target,
      title: "Objetivos Claros",
      description: "Defina metas específicas e acompanhe seu progresso com métricas detalhadas.",
      gradient: "from-green-400 to-teal-500",
      link: "/objetivos"
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Adapte seus treinos e refeições à sua rotina, sem comprometer os resultados.",
      gradient: "from-yellow-400 to-orange-500",
      link: "/configuracoes"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Funcionalidades
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Revolucionárias</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologia de ponta para transformar seu corpo e sua vida de forma inteligente e personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}