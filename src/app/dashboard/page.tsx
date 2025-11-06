"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Brain, TrendingUp, Target, Calendar, Zap, Award } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [currentWeek, setCurrentWeek] = useState(1);

  const aiInsights = [
    {
      type: "success",
      title: "Excelente Progresso!",
      message: "Você completou 85% dos treinos esta semana. Continue assim!",
      action: "Ver Plano de Treino"
    },
    {
      type: "warning",
      title: "Ajuste Nutricional",
      message: "Detectamos baixa ingestão de proteína. Sugerimos aumentar para 180g/dia.",
      action: "Ajustar Plano"
    },
    {
      type: "info",
      title: "Nova Recomendação",
      message: "Com base no seu progresso, podemos aumentar a intensidade dos treinos.",
      action: "Ver Sugestões"
    }
  ];

  const weeklyStats = {
    workoutsCompleted: 4,
    totalWorkouts: 5,
    caloriesConsumed: 15400,
    targetCalories: 15400,
    weightChange: -0.8,
    bodyFatChange: -1.2
  };

  const progressData = [
    { week: 1, weight: 78.5, bodyFat: 18.2, muscle: 65.2 },
    { week: 2, weight: 78.1, bodyFat: 17.8, muscle: 65.4 },
    { week: 3, weight: 77.7, bodyFat: 17.1, muscle: 65.8 },
    { week: 4, weight: 77.2, bodyFat: 16.5, muscle: 66.1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dashboard <span className="text-green-400">IA</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Inteligência artificial analisando seu progresso e otimizando seus resultados automaticamente.
          </p>
        </div>

        {/* Insights da IA */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Brain className="h-6 w-6 text-green-400 mr-2" />
            Insights da IA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiInsights.map((insight, index) => (
              <Card key={index} className={`bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-colors ${
                insight.type === 'success' ? 'border-l-4 border-l-green-500' :
                insight.type === 'warning' ? 'border-l-4 border-l-yellow-500' :
                'border-l-4 border-l-blue-500'
              }`}>
                <CardHeader>
                  <CardTitle className="text-white text-lg">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{insight.message}</p>
                  <Button size="sm" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                    {insight.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Estatísticas da Semana */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Calendar className="h-6 w-6 text-blue-400 mr-2" />
            Esta Semana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Target className="h-8 w-8 text-green-400" />
                  <Badge className="bg-green-500 text-white">
                    {Math.round((weeklyStats.workoutsCompleted / weeklyStats.totalWorkouts) * 100)}%
                  </Badge>
                </div>
                <h3 className="text-white font-semibold mb-2">Treinos</h3>
                <p className="text-gray-300 text-sm mb-2">
                  {weeklyStats.workoutsCompleted}/{weeklyStats.totalWorkouts} completados
                </p>
                <Progress value={(weeklyStats.workoutsCompleted / weeklyStats.totalWorkouts) * 100} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="h-8 w-8 text-orange-400" />
                  <Badge className="bg-orange-500 text-white">100%</Badge>
                </div>
                <h3 className="text-white font-semibold mb-2">Calorias</h3>
                <p className="text-gray-300 text-sm mb-2">
                  {weeklyStats.caloriesConsumed.toLocaleString()} kcal
                </p>
                <Progress value={100} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-400" />
                  <Badge className="bg-blue-500 text-white">-0.8kg</Badge>
                </div>
                <h3 className="text-white font-semibold mb-2">Peso</h3>
                <p className="text-gray-300 text-sm">
                  {weeklyStats.weightChange > 0 ? '+' : ''}{weeklyStats.weightChange}kg esta semana
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Award className="h-8 w-8 text-purple-400" />
                  <Badge className="bg-purple-500 text-white">-1.2%</Badge>
                </div>
                <h3 className="text-white font-semibold mb-2">Gordura</h3>
                <p className="text-gray-300 text-sm">
                  {weeklyStats.bodyFatChange}% de gordura corporal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Progresso Mensal */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 text-green-400 mr-2" />
            Progresso Mensal
          </h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Evolução Corporal</CardTitle>
              <CardDescription className="text-gray-300">
                Acompanhe suas mudanças ao longo das semanas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {progressData.map((data, index) => (
                  <div key={index} className="text-center">
                    <h4 className="text-white font-semibold mb-4">Semana {data.week}</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-400 text-sm">Peso</span>
                        <p className="text-white font-bold text-xl">{data.weight}kg</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Gordura</span>
                        <p className="text-red-400 font-bold text-lg">{data.bodyFat}%</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Músculo</span>
                        <p className="text-green-400 font-bold text-lg">{data.muscle}kg</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ajustes Automáticos */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Brain className="h-6 w-6 text-green-400 mr-2" />
              Ajustes Automáticos da IA
            </CardTitle>
            <CardDescription className="text-gray-300">
              Modificações sugeridas baseadas no seu progresso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">Aumento de Intensidade</h4>
                  <p className="text-gray-300 text-sm">Adicionar 5kg nos exercícios principais</p>
                </div>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  Aplicar
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">Ajuste Calórico</h4>
                  <p className="text-gray-300 text-sm">Reduzir 100 kcal/dia para acelerar perda de gordura</p>
                </div>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  Aplicar
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div>
                  <h4 className="text-white font-semibold">Novo Exercício</h4>
                  <p className="text-gray-300 text-sm">Adicionar exercício para posterior de ombro</p>
                </div>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  Aplicar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Continue Evoluindo
              </h3>
              <p className="text-gray-300 mb-6">
                Nossa IA está sempre aprendendo e otimizando seus planos para máximos resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/objetivos">
                  <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                    Definir Novos Objetivos
                  </Button>
                </Link>
                <Link href="/configuracoes">
                  <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                    Personalizar Planos
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