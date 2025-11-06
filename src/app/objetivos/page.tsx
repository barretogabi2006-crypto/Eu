"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Target, Trophy, Calendar, TrendingUp, Plus, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ObjetivosPage() {
  const [newGoal, setNewGoal] = useState({ title: "", target: "", deadline: "" });

  const currentGoals = [
    {
      id: 1,
      title: "Perder 5kg",
      current: 3.2,
      target: 5,
      unit: "kg",
      deadline: "2024-03-15",
      status: "active",
      progress: 64
    },
    {
      id: 2,
      title: "Reduzir Gordura Corporal",
      current: 2.8,
      target: 4,
      unit: "%",
      deadline: "2024-04-01",
      status: "active",
      progress: 70
    },
    {
      id: 3,
      title: "Ganhar Massa Muscular",
      current: 1.5,
      target: 3,
      unit: "kg",
      deadline: "2024-05-01",
      status: "active",
      progress: 50
    },
    {
      id: 4,
      title: "Correr 5km",
      current: 5,
      target: 5,
      unit: "km",
      deadline: "2024-02-01",
      status: "completed",
      progress: 100
    }
  ];

  const achievements = [
    {
      title: "Primeira Semana Completa",
      description: "Completou todos os treinos da primeira semana",
      date: "2024-01-15",
      icon: "🏆"
    },
    {
      title: "Meta de Proteína",
      description: "Atingiu a meta de proteína por 7 dias consecutivos",
      date: "2024-01-22",
      icon: "💪"
    },
    {
      title: "Perda de Peso",
      description: "Perdeu os primeiros 2kg",
      date: "2024-01-28",
      icon: "⚖️"
    },
    {
      title: "Consistência",
      description: "30 dias seguidos de treino",
      date: "2024-02-05",
      icon: "🔥"
    }
  ];

  const weeklyTargets = [
    { day: "Segunda", workout: true, nutrition: true, completed: true },
    { day: "Terça", workout: true, nutrition: true, completed: true },
    { day: "Quarta", workout: false, nutrition: true, completed: true },
    { day: "Quinta", workout: true, nutrition: true, completed: true },
    { day: "Sexta", workout: true, nutrition: false, completed: false },
    { day: "Sábado", workout: false, nutrition: true, completed: false },
    { day: "Domingo", workout: false, nutrition: true, completed: false }
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
            Objetivos <span className="text-green-400">Claros</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Defina metas específicas, acompanhe seu progresso e celebre suas conquistas.
          </p>
        </div>

        {/* Objetivos Principais */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Target className="h-6 w-6 text-green-400 mr-2" />
              Seus Objetivos
            </h2>
            <Button className="bg-green-500 hover:bg-green-600">
              <Plus className="h-4 w-4 mr-2" />
              Novo Objetivo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentGoals.map((goal) => (
              <Card key={goal.id} className={`bg-slate-800/50 border-slate-700 ${
                goal.status === 'completed' ? 'border-green-500/50' : 'hover:border-green-500/50'
              } transition-colors`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center">
                      {goal.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-400 mr-2" />}
                      {goal.title}
                    </CardTitle>
                    <Badge className={goal.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'}>
                      {goal.status === 'completed' ? 'Concluído' : 'Ativo'}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    Meta: {goal.target}{goal.unit} até {new Date(goal.deadline).toLocaleDateString('pt-PT')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Progresso</span>
                      <span className="text-white font-semibold">
                        {goal.current}/{goal.target}{goal.unit}
                      </span>
                    </div>
                    <Progress value={goal.progress} className="h-3" />
                    <div className="text-center">
                      <span className="text-green-400 font-bold text-lg">{goal.progress}%</span>
                      <span className="text-gray-400 text-sm ml-2">completo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Metas Semanais */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Calendar className="h-6 w-6 text-blue-400 mr-2" />
            Metas Semanais
          </h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Esta Semana</CardTitle>
              <CardDescription className="text-gray-300">
                Acompanhe suas metas diárias de treino e nutrição
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {weeklyTargets.map((day, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    day.completed ? 'bg-green-500/10 border-green-500/30' : 'bg-slate-700/50 border-slate-600'
                  }`}>
                    <h4 className="text-white font-semibold text-center mb-3">{day.day}</h4>
                    <div className="space-y-2">
                      <div className={`flex items-center justify-center p-2 rounded ${
                        day.workout ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        <span className="text-xs">Treino</span>
                      </div>
                      <div className={`flex items-center justify-center p-2 rounded ${
                        day.nutrition ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        <span className="text-xs">Nutrição</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conquistas */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Trophy className="h-6 w-6 text-yellow-400 mr-2" />
            Conquistas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    {new Date(achievement.date).toLocaleDateString('pt-PT')}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Adicionar Novo Objetivo */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Plus className="h-6 w-6 text-green-400 mr-2" />
              Definir Novo Objetivo
            </CardTitle>
            <CardDescription className="text-gray-300">
              Crie um objetivo específico, mensurável e com prazo definido
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="title" className="text-white">Objetivo</Label>
                <Input
                  id="title"
                  placeholder="Ex: Perder 3kg"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="target" className="text-white">Meta</Label>
                <Input
                  id="target"
                  placeholder="Ex: 3kg, 15%, 10km"
                  value={newGoal.target}
                  onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="deadline" className="text-white">Prazo</Label>
                <Input
                  id="deadline"
                  type="date"
                  value={newGoal.deadline}
                  onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button className="bg-green-500 hover:bg-green-600">
                Criar Objetivo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Mantenha o Foco
              </h3>
              <p className="text-gray-300 mb-6">
                Objetivos claros levam a resultados extraordinários. Continue acompanhando seu progresso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                    Ver Dashboard
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