"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Eye, Lock, Database } from "lucide-react";
import Link from "next/link";

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Política de <span className="text-green-400">Privacidade</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sua privacidade é fundamental para nós. Saiba como protegemos e utilizamos seus dados.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="h-6 w-6 text-green-400 mr-2" />
                Compromisso com a Privacidade
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                O PrimeForm está comprometido em proteger sua privacidade e dados pessoais. 
                Esta política explica como coletamos, usamos e protegemos suas informações.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Database className="h-6 w-6 text-blue-400 mr-2" />
                Dados Coletados
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p><strong>Informações Pessoais:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nome, email e informações de contato</li>
                <li>Dados de pagamento (processados via Stripe)</li>
                <li>Fotos para análise corporal (temporárias)</li>
                <li>Métricas de progresso e objetivos</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Eye className="h-6 w-6 text-purple-400 mr-2" />
                Como Usamos Seus Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Personalizar planos de treino e alimentação</li>
                <li>Analisar progresso e ajustar recomendações</li>
                <li>Fornecer suporte ao cliente</li>
                <li>Melhorar nossos algoritmos de IA</li>
                <li>Enviar atualizações sobre seu progresso</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Lock className="h-6 w-6 text-red-400 mr-2" />
                Proteção de Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Criptografia SSL/TLS para todas as transmissões</li>
                <li>Fotos são processadas e excluídas imediatamente</li>
                <li>Dados armazenados em servidores seguros</li>
                <li>Acesso restrito apenas a pessoal autorizado</li>
                <li>Conformidade com RGPD e leis de proteção de dados</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Dúvidas sobre Privacidade?
              </h3>
              <p className="text-gray-300 mb-6">
                Entre em contato conosco para esclarecer qualquer questão sobre seus dados.
              </p>
              <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                Contactar Suporte
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}