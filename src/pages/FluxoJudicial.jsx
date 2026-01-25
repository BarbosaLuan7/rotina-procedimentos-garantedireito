import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Scale, CheckCircle2, XCircle, DollarSign, FileCheck, ArrowRight, Lightbulb, AlertTriangle, PartyPopper } from "lucide-react";

export default function FluxoJudicial() {
  const cenarioPositivo = {
    titulo: "Benefício Concedido",
    cor: "green",
    etapas: [
      "Aguardar a implantação do benefício pelo INSS",
      "Comunicar ao cliente os valores e honorários advocatícios",
      "Elaborar a carta de concessão do benefício",
      "Passar para Marina (financeiro) a concessão do benefício",
      "Realizar lançamentos no setor financeiro"
    ]
  };

  const cenarioNegativo = {
    titulo: "Benefício Negado",
    cor: "red",
    etapas: [
      "Analisar o motivo da negativa",
      "Agendar prazo no ASTREA para ajuizamento da ação",
      "Comunicar ao cliente sobre a necessidade de judicialização",
      "Elaborar petição inicial",
      "Protocolar ação judicial"
    ]
  };

  const honorariosAdmin = {
    titulo: "Via Administrativa",
    valor: "3 benefícios",
    descricao: "Pagamento único após concessão",
    cor: "green"
  };

  const honorariosJudicial = {
    titulo: "Via Judicial",
    valor: "30% retroativo + 30% anuidade",
    descricao: "Sobre valores recebidos",
    cor: "blue"
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Scale className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Etapa 6 - Resultado e Judicial</h1>
          <p className="text-muted-foreground">Análise de resultado e ações subsequentes</p>
        </div>
      </div>

      {/* Responsável */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">Responsável:</span>
            <Badge variant="secondary">Luana Maestrelo</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Fluxo de decisão */}
      <Card>
        <CardHeader>
          <CardTitle>Análise do Resultado do INSS</CardTitle>
          <CardDescription>Dois caminhos possíveis após a decisão administrativa</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge className="bg-gray-500 text-white px-4 py-2">Decisão do INSS</Badge>
            <ArrowRight className="w-4 h-4" />
            <div className="flex flex-col gap-2">
              <Badge className="bg-green-500 text-white px-4 py-2">Concedido</Badge>
              <Badge className="bg-red-500 text-white px-4 py-2">Negado</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cenários */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Cenário Positivo */}
        <Card className="border-green-200">
          <CardHeader className="bg-green-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <PartyPopper className="w-5 h-5" />
              {cenarioPositivo.titulo}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ol className="space-y-3">
              {cenarioPositivo.etapas.map((etapa, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Badge className="bg-green-500 text-xs">{i + 1}</Badge>
                  <span className="text-sm">{etapa}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Cenário Negativo */}
        <Card className="border-red-200">
          <CardHeader className="bg-red-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-red-800">
              <XCircle className="w-5 h-5" />
              {cenarioNegativo.titulo}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ol className="space-y-3">
              {cenarioNegativo.etapas.map((etapa, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Badge className="bg-red-500 text-xs">{i + 1}</Badge>
                  <span className="text-sm">{etapa}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Honorários */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Tabela de Honorários
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <h3 className="font-bold text-green-800 mb-2">{honorariosAdmin.titulo}</h3>
              <p className="text-2xl font-bold text-green-600">{honorariosAdmin.valor}</p>
              <p className="text-sm text-green-700">{honorariosAdmin.descricao}</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <h3 className="font-bold text-blue-800 mb-2">{honorariosJudicial.titulo}</h3>
              <p className="text-2xl font-bold text-blue-600">{honorariosJudicial.valor}</p>
              <p className="text-sm text-blue-700">{honorariosJudicial.descricao}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Processo Judicial */}
      <Card className="border-blue-200">
        <CardHeader className="bg-blue-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Scale className="w-5 h-5" />
            Via Judicial - Informações
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm">
              Se o pedido for negado no administrativo, o caso será levado ao judiciário. O cliente passará por outra perícia judicial.
            </p>
          </div>

          <Alert className="border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-800">Pontos Importantes</AlertTitle>
            <AlertDescription className="text-amber-700">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>NÃO há cobrança inicial para entrar com a ação</li>
                <li>O escritório SÓ recebe se o cliente GANHAR o benefício</li>
                <li>Todo valor é depositado primeiro na conta do cliente</li>
                <li>Após receber, o cliente repassa os honorários ao escritório</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Dica</AlertTitle>
        <AlertDescription>
          Consulte o <strong>Script de Ligação</strong> para a explicação completa dos honorários ao cliente, e as <strong>Mensagens Padrões</strong> para comunicação sobre resultados.
        </AlertDescription>
      </Alert>
    </div>
  );
}
