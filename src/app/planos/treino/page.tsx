"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Target, Dumbbell, Play, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PlanoTreinoPage() {
  const [selectedDay, setSelectedDay] = useState("segunda");

  const workoutPlan = {
    segunda: {
      title: "Peito e Tríceps",
      duration: "60 min",
      exercises: [
        { name: "Supino Reto", sets: "4x8-10", rest: "90s", difficulty: "Intermediário" },
        { name: "Supino Inclinado", sets: "3x10-12", rest: "75s", difficulty: "Intermediário" },
        { name: "Crucifixo", sets: "3x12-15", rest: "60s", difficulty: "Fácil" },
        { name: "Paralelas", sets: "3x8-12", rest: "90s", difficulty: "Avançado" },
        { name: "Tríceps Testa", sets: "4x10-12", rest: "60s", difficulty: "Intermediário" },
        { name: "Tríceps Corda", sets: "3x12-15", rest: "45s", difficulty: "Fácil" }
      ]
    },
    terca: {
      title: "Costas e Bíceps",
      duration: "65 min",
      exercises: [
        { name: "Puxada Frontal", sets: "4x8-10", rest: "90s", difficulty: "Intermediário" },
        { name: "Remada Curvada", sets: "4x8-10", rest: "90s", difficulty: "Avançado" },
        { name: "Remada Sentado", sets: "3x10-12", rest: "75s", difficulty: "Intermediário" },
        { name: "Pullover", sets: "3x12-15", rest: "60s", difficulty: "Fácil" },
        { name: "Rosca Direta", sets: "4x10-12", rest: "60s", difficulty: "Intermediário" },
        { name: "Rosca Martelo", sets: "3x12-15", rest: "45s", difficulty: "Fácil" }
      ]
    },
    quarta: {
      title: "Descanso Ativo",
      duration: "30 min",
      exercises: [
        { name: "Caminhada", sets: "30 min", rest: "-", difficulty: "Fácil" },
        { name: "Alongamento", sets: "15 min", rest: "-", difficulty: "Fácil" },
        { name: "Yoga", sets: "20 min", rest: "-", difficulty: "Fácil" }
      ]
    },
    quinta: {
      title: "Pernas",
      duration: "70 min",
      exercises: [
        { name: "Agachamento", sets: "4x8-10", rest: "2 min", difficulty: "Avançado" },
        { name: "Leg Press", sets: "4x12-15", rest: "90s", difficulty: "Intermediário" },
        { name: "Extensão", sets: "3x12-15", rest: "60s", difficulty: "Fácil" },
        { name: "Flexão", sets: "3x12-15", rest: "60s", difficulty: "Fácil" },
        { name: "Panturrilha", sets: "4x15-20", rest: "45s", difficulty: "Fácil" },
        { name: "Afundo", sets: "3x10 cada", rest: "60s", difficulty: "Intermediário" }
      ]
    },
    sexta: {
      title: "Ombros e Abdômen",
      duration: "55 min",
      exercises: [
        { name: "Desenvolvimento", sets: "4x8-10", rest: "90s", difficulty: "Intermediário" },
        { name: "Elevação Lateral", sets: "4x12-15", rest: "60s", difficulty: "Fácil" },
        { name: "Elevação Posterior", sets: "3x12-15", rest: "60s", difficulty: "Fácil" },
        { name: "Encolhimento", sets: "3x12-15", rest: "60s", difficulty: "Fácil" },
        { name: "Prancha", sets: "3x45s", rest: "60s", difficulty: "Intermediário" },
        { name: "Abdominal", sets: "3x20", rest: "45s", difficulty: "Fácil" }
      ]
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "bg-green-500";
      case "Intermediário": return "bg-yellow-500";
      case "Avançado": return "bg-red-500";
      default: return "bg-gray-500";
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
            Seu Plano de <span className="text-green-400">Treino</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plano personalizado baseado na sua avaliação. Treinos otimizados para seus objetivos específicos.
          </p>
        </div>

        {/* Resumo do Plano */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Objetivo</h3>
              <p className="text-gray-300 text-sm">Definição Muscular</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Duração</h3>
              <p className="text-gray-300 text-sm">5 dias/semana</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 text-center">
              <Dumbbell className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Nível</h3>
              <p className="text-gray-300 text-sm">Intermediário</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Progresso</h3>
              <p className="text-gray-300 text-sm">Semana 1/12</p>
            </CardContent>
          </Card>
        </div>

        {/* Plano Semanal */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Plano Semanal</CardTitle>
            <CardDescription className="text-gray-300">
              Selecione um dia para ver os exercícios detalhados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedDay} onValueChange={setSelectedDay}>
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="segunda">Segunda</TabsTrigger>
                <TabsTrigger value="terca">Terça</TabsTrigger>
                <TabsTrigger value="quarta">Quarta</TabsTrigger>
                <TabsTrigger value="quinta">Quinta</TabsTrigger>
                <TabsTrigger value="sexta">Sexta</TabsTrigger>
              </TabsList>

              {Object.entries(workoutPlan).map(([day, workout]) => (
                <TabsContent key={day} value={day}>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">{workout.title}</h3>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2" />
                        {workout.duration}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {workout.exercises.map((exercise, index) => (
                        <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-green-500/50 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="text-white font-semibold text-lg">{exercise.name}</h4>
                                <div className="flex items-center gap-4 mt-2">
                                  <span className="text-gray-300">{exercise.sets}</span>
                                  <span className="text-gray-400">Descanso: {exercise.rest}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Badge className={`${getDifficultyColor(exercise.difficulty)} text-white`}>
                                  {exercise.difficulty}
                                </Badge>
                                <Button size="sm" variant="outline" className="border-green-400 text-green-400">
                                  <Play className="h-4 w-4 mr-1" />
                                  Ver
                                </Button>
                              </div>
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para Começar?
              </h3>
              <p className="text-gray-300 mb-6">
                Acesse vídeos explicativos, acompanhe seu progresso e ajuste automaticamente seu plano.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/planos/alimentacao">
                  <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                    Ver Plano Alimentar
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                    Acessar Dashboard
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