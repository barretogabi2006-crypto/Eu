"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, ArrowLeft, CheckCircle, Target, Utensils, Dumbbell, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function AvaliacaoPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("Arquivo muito grande! Máximo 10MB.");
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        toast.success("Foto carregada com sucesso!");
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzePhoto = () => {
    setIsAnalyzing(true);
    toast.loading("Analisando sua foto...", { id: "analysis" });
    
    // Simular análise de IA
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      toast.success("Análise completa!", { id: "analysis" });
      setResults({
        bodyType: "Mesomorfo",
        bodyFat: "15-18%",
        fitnessLevel: "Intermediário",
        recommendations: {
          workout: "Treino de força 4x/semana + cardio 2x/semana",
          nutrition: "Dieta balanceada com 2200 kcal/dia",
          goal: "Definição muscular e perda de gordura"
        }
      });
    }, 3000);
  };

  if (analysisComplete && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 animate-in fade-in duration-500">
        <div className="container mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>

          <div className="text-center mb-12 animate-in slide-in-from-top duration-700">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6 animate-pulse">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Análise <span className="text-green-400">Completa!</span>
            </h1>
            <p className="text-xl text-gray-300">
              Baseado na sua foto, criámos um plano personalizado para si.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-in slide-in-from-bottom duration-700">
            {/* Imagem analisada */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Sua Foto</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={selectedImage!} 
                  alt="Foto analisada" 
                  className="w-full h-64 object-cover rounded-lg transition-transform hover:scale-105"
                />
              </CardContent>
            </Card>

            {/* Resultados da análise */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Análise Corporal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="animate-in slide-in-from-right duration-500 delay-100">
                  <span className="text-gray-400">Tipo Corporal:</span>
                  <span className="text-green-400 font-semibold ml-2">{results.bodyType}</span>
                </div>
                <div className="animate-in slide-in-from-right duration-500 delay-200">
                  <span className="text-gray-400">Percentual de Gordura:</span>
                  <span className="text-blue-400 font-semibold ml-2">{results.bodyFat}</span>
                </div>
                <div className="animate-in slide-in-from-right duration-500 delay-300">
                  <span className="text-gray-400">Nível de Fitness:</span>
                  <span className="text-purple-400 font-semibold ml-2">{results.fitnessLevel}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recomendações */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Dumbbell, title: "Plano de Treino", content: results.recommendations.workout, gradient: "from-green-400 to-blue-500", delay: "delay-100" },
              { icon: Utensils, title: "Plano Alimentar", content: results.recommendations.nutrition, gradient: "from-orange-400 to-red-500", delay: "delay-200" },
              { icon: Target, title: "Objetivo", content: results.recommendations.goal, gradient: "from-purple-400 to-pink-500", delay: "delay-300" }
            ].map((item, index) => (
              <Card key={index} className={`bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 animate-in slide-in-from-bottom ${item.delay}`}>
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg p-3 mb-4 transition-transform hover:scale-110`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-in slide-in-from-bottom duration-700 delay-500">
            <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pronto para Começar?
                </h3>
                <p className="text-gray-300 mb-6">
                  Aceda aos seus planos personalizados e comece a transformação hoje mesmo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      toast.success("Redirecionando para pagamento...");
                      window.open('https://buy.stripe.com/test_00wcN76Mqc0XbvT0rwdby00', '_blank');
                    }}
                  >
                    Subscrever Agora
                  </Button>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Link>

        <div className="text-center mb-12 animate-in slide-in-from-top duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Avaliação por <span className="text-green-400">Foto</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Faça upload de uma foto sua e a nossa IA irá analisar o seu tipo corporal, 
            percentual de gordura e criar planos personalizados para si.
          </p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-700">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl">Upload da Sua Foto</CardTitle>
            <CardDescription className="text-gray-300">
              Escolha uma foto onde o seu corpo esteja bem visível para uma análise mais precisa.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!selectedImage ? (
              <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 text-center hover:border-green-500/50 transition-all duration-300 relative overflow-hidden">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                    <Upload className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-2">Clique para fazer upload</p>
                    <p className="text-gray-400 text-sm">PNG, JPG até 10MB</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
                <div className="relative">
                  <img 
                    src={selectedImage} 
                    alt="Preview" 
                    className="w-full h-64 object-cover rounded-lg transition-transform hover:scale-105"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2 bg-black/50 border-slate-600 hover:bg-black/70 transition-all duration-300"
                    onClick={() => {
                      setSelectedImage(null);
                      toast.info("Foto removida. Selecione uma nova foto.");
                    }}
                  >
                    Alterar Foto
                  </Button>
                </div>

                <Button 
                  onClick={analyzePhoto}
                  disabled={isAnalyzing}
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      Analisando...
                    </>
                  ) : (
                    <>
                      <Camera className="mr-2 h-5 w-5" />
                      Analisar Foto
                    </>
                  )}
                </Button>
              </div>
            )}

            <div className="bg-slate-700/30 rounded-lg p-4 animate-in slide-in-from-bottom duration-700 delay-200">
              <h4 className="text-white font-medium mb-2">Dicas para uma melhor análise:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Use roupa justa ou roupa de ginásio</li>
                <li>• Certifique-se de que há boa iluminação</li>
                <li>• Mantenha uma postura natural e relaxada</li>
                <li>• A foto deve mostrar o corpo todo ou pelo menos o tronco</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}