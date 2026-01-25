import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle2, XCircle, Lightbulb, FileText, Activity } from "lucide-react";

export default function AuxilioAcidente() {
  const requisitos = [
    "Sequela permanente comprovada por perícia médica",
    "Nexo causal com acidente de qualquer natureza OU doença ocupacional",
    "Qualidade de segurado no momento do acidente/doença",
    "Consolidação das lesões (alta médica)",
    "NÃO há carência (independe de contribuições)"
  ];

  const quemTemDireito = [
    "Empregados com carteira assinada",
    "Trabalhadores avulsos",
    "Segurados especiais"
  ];

  const semDireito = [
    "Contribuintes individuais (acidentes após 18/06/2019)",
    "Segurados facultativos (acidentes após 18/06/2019)"
  ];

  const sequelasExemplos = [
    "Perda parcial de movimento (redução de amplitude)",
    "Dor crônica que exige maior esforço",
    "Perda de dedos, mãos, pés (amputações)",
    "Limitação de força muscular",
    "Déficit neurológico",
    "Perda auditiva ou visual parcial",
    "LER/DORT consolidadas",
    "Hérnias de disco operadas com sequela",
    "Fraturas mal consolidadas"
  ];

  const documentos = [
    "Laudos médicos atestando a sequela permanente",
    "Exames que comprovem a lesão definitiva",
    "Relatórios de tratamento e cirurgias realizadas",
    "Atestado de consolidação das lesões (alta médica)",
    "CAT (se acidente de trabalho) - FUNDAMENTAL",
    "Boletim de ocorrência (se acidente de trânsito)",
    "Histórico do auxílio-doença anterior (se houve)"
  ];

  const podeAcumularCom = [
    "Salário (continua trabalhando)",
    "Aposentadoria por idade",
    "Aposentadoria por tempo de contribuição",
    "Aposentadoria especial"
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Activity className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Auxílio-Acidente</h1>
          <p className="text-muted-foreground">Indenização por sequela permanente</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>O que é:</strong> Indenização mensal paga ao segurado que, após se recuperar de um acidente ou doença,
            fica com uma <strong>sequela permanente</strong> que reduz sua capacidade para o trabalho.
            O segurado <strong>volta a trabalhar</strong>, mas o INSS reconhece que ele ficou com uma limitação permanente.
          </p>
        </CardContent>
      </Card>

      {/* Valor */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-green-600">Valor do Benefício</Badge>
            <span className="font-bold text-green-800">50% do salário de benefício</span>
          </div>
          <p className="text-sm text-green-700 mt-2">É vitalício enquanto mantiver qualidade de segurado</p>
        </CardContent>
      </Card>

      {/* Quem tem direito */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-green-200">
          <CardHeader className="bg-green-50 rounded-t-lg">
            <CardTitle className="text-green-800 text-lg">Quem TEM direito</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              {quemTemDireito.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader className="bg-red-50 rounded-t-lg">
            <CardTitle className="text-red-800 text-lg">Quem NÃO tem direito</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              {semDireito.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-3">Lei 13.847/2019</p>
          </CardContent>
        </Card>
      </div>

      {/* Requisitos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Requisitos Principais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {requisitos.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Badge variant="outline" className="text-xs">{i + 1}</Badge>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Sequelas */}
      <Card>
        <CardHeader>
          <CardTitle>Sequelas que Geram Direito (Exemplos)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-2">
            {sequelasExemplos.map((seq, i) => (
              <div key={i} className="flex items-center gap-2 text-sm p-2 bg-muted rounded">
                <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                <span>{seq}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Documentos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Documentos Necessários
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {documentos.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Badge variant="outline" className="text-xs">{i + 1}</Badge>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Acumulação */}
      <Card className="border-blue-200">
        <CardHeader className="bg-blue-50 rounded-t-lg">
          <CardTitle className="text-blue-800">Pode Acumular Com</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid md:grid-cols-2 gap-2">
            {podeAcumularCom.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm p-2 bg-green-50 rounded">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Alert className="mt-4 border-red-200 bg-red-50">
            <XCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-700">
              <strong>NÃO pode acumular</strong> com Aposentadoria por Invalidez
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Diferença crítica */}
      <Card className="border-amber-200">
        <CardHeader className="bg-amber-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-amber-800">
            <AlertTriangle className="w-5 h-5" />
            Diferença Crítica
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-2 text-sm">
            <p><strong>Auxílio-doença:</strong> pessoa NÃO pode trabalhar (temporário)</p>
            <p><strong>Auxílio-acidente:</strong> pessoa PODE trabalhar, mas com limitação (permanente)</p>
            <p><strong>Aposentadoria por invalidez:</strong> pessoa NÃO pode trabalhar (permanente)</p>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>LER/DORT</AlertTitle>
        <AlertDescription>
          Súmula 37 do TNU: Lesão por Esforço Repetitivo (LER) e Distúrbio Osteomuscular Relacionado ao
          Trabalho (DORT) podem embasar a concessão de auxílio-acidente. São grandes geradores deste benefício.
        </AlertDescription>
      </Alert>

      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Atenção</AlertTitle>
        <AlertDescription className="text-amber-700">
          Muitos segurados têm direito mas não sabem. Após cessação do auxílio-doença,
          SEMPRE pergunte sobre sequelas. O INSS raramente converte automaticamente ou
          informa sobre essa possibilidade.
        </AlertDescription>
      </Alert>
    </div>
  );
}
