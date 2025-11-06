"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Settings, Clock, Utensils, Dumbbell, Bell, User } from "lucide-react";
import Link from "next/link";

export default function ConfiguracoesPage() {
  const [preferences, setPreferences] = useState({
    workoutTime: "morning",
    workoutDuration: "60",
    workoutDays: ["monday", "tuesday", "thursday", "friday"],
    dietType: "balanced",
    allergies: [],
    notifications: true,
    autoAdjust: true
  });

  const workoutTimes = [
    { value: "morning", label: "Manhã (6h-10h)" },
    { value: "afternoon", label: "Tarde (12h-16h)" },
    { value: "evening", label: "Noite (18h-22h)" }
  ];

  const dietTypes = [
    { value: "balanced", label: "Balanceada" },
    { value: "lowcarb", label: "Low Carb" },
    { value: "vegetarian", label: "Vegetariana" },
    { value: "vegan", label: "Vegana" },
    { value: "keto", label: "Cetogénica" }
  ];

  const commonAllergies = [
    "Glúten", "Lactose", "Nozes", "Amendoim", "Ovos", "Peixe", "Marisco", "Soja"
  ];

  const weekDays = [
    { value: "monday", label: "Segunda" },
    { value: "tuesday", label: "Terça" },
    { value: "wednesday", label: "Quarta" },
    { value: "thursday", label: "Quinta" },
    { value: "friday", label: "Sexta" },
    { value: "saturday", label: "Sábado" },
    { value: "sunday", label: "Domingo" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flexibilidade <span className="text-green-400">Total</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Personalize completamente seus planos para se adaptarem à sua rotina e preferências.
          </p>
        </div>

        <Tabs defaultValue="workout" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="workout">Treinos</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrição</TabsTrigger>
            <TabsTrigger value="schedule">Horários</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
          </TabsList>

          {/* Configurações de Treino */}
          <TabsContent value="workout">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Dumbbell className="h-6 w-6 text-green-400 mr-2" />
                  Preferências de Treino
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Adapte seus treinos à sua rotina e objetivos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Duração do Treino */}
                <div>
                  <Label className="text-white text-lg mb-4 block">Duração Preferida</Label>
                  <Select value={preferences.workoutDuration} onValueChange={(value) => 
                    setPreferences({...preferences, workoutDuration: value})
                  }>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutos</SelectItem>
                      <SelectItem value="45">45 minutos</SelectItem>
                      <SelectItem value="60">60 minutos</SelectItem>
                      <SelectItem value="90">90 minutos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dias da Semana */}
                <div>
                  <Label className="text-white text-lg mb-4 block">Dias de Treino</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {weekDays.map((day) => (
                      <div key={day.value} className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        preferences.workoutDays.includes(day.value) 
                          ? 'bg-green-500/20 border-green-500 text-green-400' 
                          : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:border-green-500/50'
                      }`}>
                        <span className="text-sm font-medium">{day.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipamentos Disponíveis */}
                <div>
                  <Label className="text-white text-lg mb-4 block">Equipamentos Disponíveis</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Halteres", "Barras", "Máquinas", "Elásticos", "Peso Corporal", "Kettlebells"].map((equipment) => (
                      <div key={equipment} className="flex items-center space-x-2 p-3 bg-slate-700/50 rounded-lg">
                        <Switch />
                        <span className="text-gray-300 text-sm">{equipment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações de Nutrição */}
          <TabsContent value="nutrition">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Utensils className="h-6 w-6 text-orange-400 mr-2" />
                  Preferências Alimentares
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Personalize sua alimentação conforme suas necessidades
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Tipo de Dieta */}
                <div>
                  <Label className="text-white text-lg mb-4 block">Tipo de Dieta</Label>
                  <Select value={preferences.dietType} onValueChange={(value) => 
                    setPreferences({...preferences, dietType: value})
                  }>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {dietTypes.map((diet) => (
                        <SelectItem key={diet.value} value={diet.value}>{diet.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Alergias e Restrições */}
                <div>
                  <Label className="text-white text-lg mb-4 block">Alergias e Restrições</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {commonAllergies.map((allergy) => (
                      <div key={allergy} className="flex items-center space-x-2 p-3 bg-slate-700/50 rounded-lg">
                        <Switch />
                        <span className="text-gray-300 text-sm">{allergy}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preferências de Refeição */}
                <div>
                  <Label className="text-white text-lg mb-4 block">Número de Refeições</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {["3 refeições", "5 refeições", "6 refeições"].map((option, index) => (
                      <div key={index} className="p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-center cursor-pointer hover:border-green-500/50 transition-colors">
                        <span className="text-gray-300">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações de Horário */}
          <TabsContent value="schedule">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Clock className="h-6 w-6 text-blue-400 mr-2" />
                  Horários Personalizados
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Defina quando prefere treinar e fazer suas refeições
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Horário de Treino */}
                <div>
                  <Label className="text-white text-lg mb-4 block">Horário Preferido para Treino</Label>
                  <Select value={preferences.workoutTime} onValueChange={(value) => 
                    setPreferences({...preferences, workoutTime: value})
                  }>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {workoutTimes.map((time) => (
                        <SelectItem key={time.value} value={time.value}>{time.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Horários das Refeições */}
                <div>
                  <Label className="text-white text-lg mb-4 block">Horários das Refeições</Label>
                  <div className="space-y-4">
                    {[
                      { meal: "Pequeno-almoço", time: "07:00" },
                      { meal: "Lanche manhã", time: "10:00" },
                      { meal: "Almoço", time: "13:00" },
                      { meal: "Lanche tarde", time: "16:00" },
                      { meal: "Jantar", time: "19:30" },
                      { meal: "Ceia", time: "22:00" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                        <span className="text-gray-300">{item.meal}</span>
                        <input 
                          type="time" 
                          defaultValue={item.time}
                          className="bg-slate-600 border border-slate-500 rounded px-3 py-1 text-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações de Notificações */}
          <TabsContent value="notifications">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bell className="h-6 w-6 text-purple-400 mr-2" />
                  Notificações e Lembretes
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Configure como e quando quer ser lembrado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { title: "Lembrete de Treino", description: "30 min antes do treino programado" },
                  { title: "Lembrete de Refeição", description: "Notificações para horários das refeições" },
                  { title: "Progresso Semanal", description: "Resumo do progresso toda segunda-feira" },
                  { title: "Ajustes da IA", description: "Quando a IA sugerir mudanças nos planos" },
                  { title: "Conquistas", description: "Quando atingir objetivos e marcos" },
                  { title: "Motivação Diária", description: "Mensagem motivacional diária" }
                ].map((notification, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <div>
                      <h4 className="text-white font-semibold">{notification.title}</h4>
                      <p className="text-gray-400 text-sm">{notification.description}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Ajustes Automáticos */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Settings className="h-6 w-6 text-green-400 mr-2" />
              Ajustes Automáticos
            </CardTitle>
            <CardDescription className="text-gray-300">
              Permita que a IA otimize automaticamente seus planos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Ajuste Automático de Intensidade", description: "Aumentar cargas e dificuldade conforme progresso" },
                { title: "Otimização Calórica", description: "Ajustar calorias baseado nos resultados" },
                { title: "Variação de Exercícios", description: "Trocar exercícios para evitar platôs" },
                { title: "Adaptação de Horários", description: "Sugerir mudanças baseadas na sua aderência" }
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div>
                    <h4 className="text-white font-semibold">{setting.title}</h4>
                    <p className="text-gray-400 text-sm">{setting.description}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Salvar Configurações */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Configurações Personalizadas
              </h3>
              <p className="text-gray-300 mb-6">
                Suas preferências foram salvas. Os planos serão atualizados automaticamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                  Salvar Configurações
                </Button>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                    Ver Dashboard
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