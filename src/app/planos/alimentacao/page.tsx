"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Utensils, Apple, Zap, Droplets } from "lucide-react";
import Link from "next/link";

export default function PlanoAlimentacaoPage() {
  const [selectedDay, setSelectedDay] = useState("dia1");

  const nutritionPlan = {
    dia1: {
      title: "Segunda-feira",
      totalCalories: 2200,
      macros: { protein: 165, carbs: 220, fat: 73 },
      meals: [
        {
          time: "07:00",
          name: "Pequeno-almoço",
          calories: 450,
          foods: [
            "3 ovos mexidos",
            "2 fatias de pão integral",
            "1 banana",
            "1 copo de leite desnatado"
          ]
        },
        {
          time: "10:00",
          name: "Lanche da manhã",
          calories: 200,
          foods: [
            "1 iogurte grego",
            "30g de granola",
            "1 punhado de amêndoas"
          ]
        },
        {
          time: "13:00",
          name: "Almoço",
          calories: 650,
          foods: [
            "150g de frango grelhado",
            "200g de arroz integral",
            "Salada mista",
            "1 colher de azeite"
          ]
        },
        {
          time: "16:00",
          name: "Lanche da tarde",
          calories: 300,
          foods: [
            "1 batido de proteína",
            "1 maçã",
            "20g de amendoim"
          ]
        },
        {
          time: "19:30",
          name: "Jantar",
          calories: 500,
          foods: [
            "150g de salmão",
            "200g de batata doce",
            "Brócolos cozidos",
            "Salada verde"
          ]
        },
        {
          time: "22:00",
          name: "Ceia",
          calories: 100,
          foods: [
            "1 iogurte natural",
            "1 colher de mel"
          ]
        }
      ]
    },
    dia2: {
      title: "Terça-feira",
      totalCalories: 2180,
      macros: { protein: 160, carbs: 215, fat: 75 },
      meals: [
        {
          time: "07:00",
          name: "Pequeno-almoço",
          calories: 420,
          foods: [
            "Aveia com frutas",
            "1 scoop de proteína",
            "1 copo de leite de amêndoa"
          ]
        },
        {
          time: "10:00",
          name: "Lanche da manhã",
          calories: 180,
          foods: [
            "1 banana",
            "2 colheres de manteiga de amendoim"
          ]
        },
        {
          time: "13:00",
          name: "Almoço",
          calories: 680,
          foods: [
            "150g de carne magra",
            "200g de quinoa",
            "Legumes grelhados",
            "Abacate"
          ]
        },
        {
          time: "16:00",
          name: "Lanche da tarde",
          calories: 250,
          foods: [
            "Smoothie de frutas",
            "30g de aveia"
          ]
        },
        {
          time: "19:30",
          name: "Jantar",
          calories: 550,
          foods: [
            "150g de peixe branco",
            "Arroz de couve-flor",
            "Aspargos",
            "Azeite extra virgem"
          ]
        },
        {
          time: "22:00",
          name: "Ceia",
          calories: 100,
          foods: [
            "Chá de camomila",
            "5 nozes"
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seu Plano <span className="text-green-400">Alimentar</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nutrição personalizada para maximizar seus resultados. Refeições balanceadas e saborosas.
          </p>
        </div>

        {/* Resumo Nutricional */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 text-center">
              <Zap className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Calorias</h3>
              <p className="text-gray-300 text-sm">2200 kcal/dia</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 text-center">
              <Apple className="h-8 w-8 text-red-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Proteína</h3>
              <p className="text-gray-300 text-sm">165g (30%)</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 text-center">
              <Utensils className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Carboidratos</h3>
              <p className="text-gray-300 text-sm">220g (40%)</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 text-center">
              <Droplets className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Gorduras</h3>
              <p className="text-gray-300 text-sm">73g (30%)</p>
            </CardContent>
          </Card>
        </div>

        {/* Plano Diário */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Plano Semanal</CardTitle>
            <CardDescription className="text-gray-300">
              Refeições balanceadas para cada dia da semana
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedDay} onValueChange={setSelectedDay}>
              <TabsList className="grid w-full grid-cols-7 mb-8">
                <TabsTrigger value="dia1">Seg</TabsTrigger>
                <TabsTrigger value="dia2">Ter</TabsTrigger>
                <TabsTrigger value="dia3">Qua</TabsTrigger>
                <TabsTrigger value="dia4">Qui</TabsTrigger>
                <TabsTrigger value="dia5">Sex</TabsTrigger>
                <TabsTrigger value="dia6">Sáb</TabsTrigger>
                <TabsTrigger value="dia7">Dom</TabsTrigger>
              </TabsList>

              {Object.entries(nutritionPlan).map(([day, plan]) => (
                <TabsContent key={day} value={day}>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-orange-500 text-white">
                          {plan.totalCalories} kcal
                        </Badge>
                        <div className="text-gray-300 text-sm">
                          P: {plan.macros.protein}g | C: {plan.macros.carbs}g | G: {plan.macros.fat}g
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {plan.meals.map((meal, index) => (
                        <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-green-500/50 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                  <Clock className="h-4 w-4 text-green-400" />
                                  <span className="text-green-400 font-semibold">{meal.time}</span>
                                  <h4 className="text-white font-semibold text-lg">{meal.name}</h4>
                                </div>
                                <ul className="space-y-1">
                                  {meal.foods.map((food, foodIndex) => (
                                    <li key={foodIndex} className="text-gray-300 flex items-center">
                                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                      {food}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <Badge className="bg-blue-500 text-white ml-4">
                                {meal.calories} kcal
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Dicas Nutricionais */}
        <Card className="bg-slate-800/50 border-slate-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white">Dicas Importantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-green-400 font-semibold mb-2">Hidratação</h4>
                <p className="text-gray-300 text-sm">Beba pelo menos 2.5L de água por dia, especialmente antes e após os treinos.</p>
              </div>
              <div>
                <h4 className="text-green-400 font-semibold mb-2">Timing</h4>
                <p className="text-gray-300 text-sm">Consuma proteína dentro de 30 min após o treino para melhor recuperação.</p>
              </div>
              <div>
                <h4 className="text-green-400 font-semibold mb-2">Flexibilidade</h4>
                <p className="text-gray-300 text-sm">Pode trocar alimentos similares mantendo as calorias e macros.</p>
              </div>
              <div>
                <h4 className="text-green-400 font-semibold mb-2">Suplementação</h4>
                <p className="text-gray-300 text-sm">Whey protein, creatina e multivitamínico podem otimizar resultados.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Acompanhe Seu Progresso
              </h3>
              <p className="text-gray-300 mb-6">
                Use nossa IA para ajustar automaticamente seu plano conforme seus resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                    Ver Dashboard IA
                  </Button>
                </Link>
                <Link href="/objetivos">
                  <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                    Definir Objetivos
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