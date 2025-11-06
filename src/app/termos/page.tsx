"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Users, CreditCard, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Termos de <span className="text-green-400">Serviço</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Condições de uso dos serviços PrimeForm. Leia atentamente antes de usar nossa plataforma.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="h-6 w-6 text-green-400 mr-2" />
                Aceitação dos Termos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Ao usar o PrimeForm, você concorda com estes termos de serviço. 
                Se não concordar, não use nossos serviços.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="h-6 w-6 text-blue-400 mr-2" />
                Responsabilidades do Usuário
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Fornecer informações precisas e atualizadas</li>
                <li>Usar os serviços de forma responsável</li>
                <li>Não compartilhar credenciais de acesso</li>
                <li>Seguir as recomendações com orientação médica</li>
                <li>Respeitar direitos autorais e propriedade intelectual</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CreditCard className="h-6 w-6 text-purple-400 mr-2" />
                Pagamentos e Cancelamentos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Pagamentos processados via Stripe de forma segura</li>
                <li>Cancelamento pode ser feito a qualquer momento</li>
                <li>Reembolsos conforme política de 30 dias</li>
                <li>Preços podem ser alterados com aviso prévio</li>
                <li>Sem taxas de cancelamento</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-400 mr-2" />
                Limitações e Isenções
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Serviços fornecidos "como estão"</li>
                <li>Não substituem orientação médica profissional</li>
                <li>Resultados podem variar entre usuários</li>
                <li>Não nos responsabilizamos por lesões</li>
                <li>Consulte médico antes de iniciar exercícios</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Dúvidas sobre os Termos?
              </h3>
              <p className="text-gray-300 mb-6">
                Nossa equipe está disponível para esclarecer qualquer questão.
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