import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, FileText, AlertTriangle, CheckCircle2, XCircle, Lightbulb, Plus } from "lucide-react";

export default function AposentadoriaInvalidez() {
  const requisitos = [
    "Incapacidade permanente comprovada por perícia médica",
    "Total e definitiva para QUALQUER atividade laborativa",
    "Sem possibilidade de reabilitação profissional",
    "Carência: 12 meses (regra geral) - ISENÇÃO para acidentes e doenças graves",
    "Qualidade de segurado OU dentro do período de graça"
  ];

  const documentosMedicos = [
    "Relatórios médicos detalhados atestando incapacidade permanente",
    "Laudos de especialistas (neurologia, ortopedia, psiquiatria, oncologia)",
    "Exames complementares (ressonância, tomografia, biópsias)",
    "Histórico médico completo (evolução da doença/lesão)",
    "Atestados de incapacidade de médicos assistentes",
    "Prontuários médicos (se disponíveis)",
    "Receitas médicas (tratamento contínuo)",
    "Relatórios de internação"
  ];

  const situacoesComuns = [
    "Câncer em estágio avançado sem resposta a tratamento",
    "Doenças neurológicas degenerativas graves (ELA, Alzheimer, Parkinson severo)",
    "Sequelas graves de AVC com perda total de funções",
    "Paraplegia / Tetraplegia",
    "Cegueira total",
    "Insuficiência renal crônica avançada",
    "Doenças psiquiátricas graves incapacitantes",
    "Amputações múltiplas",
    "Cardiopatias graves sem possibilidade cirúrgica"
  ];

  const doencasIsencao = [
    "Tuberculose ativa",
    "Hanseníase",
    "Neoplasia maligna (câncer)",
    "Cegueira",
    "Paralisia irreversível",
    "Cardiopatia grave",
    "Doença de Parkinson",
    "HIV/AIDS",
    "Hepatopatia grave"
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Heart className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Aposentadoria por Invalidez</h1>
          <p className="text-muted-foreground">Incapacidade Permanente</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>O que é:</strong> Benefício concedido ao segurado que fica <strong>permanentemente incapaz</strong> de
            trabalhar em qualquer atividade que lhe garanta o sustento, sem possibilidade de reabilitação.
            Diferente do auxílio-doença, aqui a incapacidade é <strong>definitiva</strong>.
          </p>
        </CardContent>
      </Card>

      {/* Valores */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-4">
            <p className="font-bold text-blue-800">Valor Pós-Reforma</p>
            <p className="text-sm">60% da média + 2% por ano acima de 20 (H) ou 15 (M)</p>
            <p className="text-xs text-blue-600 mt-2">Para 100%: homem 40 anos, mulher 35 anos</p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-4">
            <p className="font-bold text-green-800">Acidente/Doença Grave</p>
            <p className="text-sm">100% do salário de benefício</p>
            <p className="text-xs text-green-600 mt-2">Mesmo após a Reforma</p>
          </CardContent>
        </Card>
      </div>

      {/* Grande Invalidez */}
      <Card className="border-purple-200">
        <CardHeader className="bg-purple-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Plus className="w-5 h-5" />
            Grande Invalidez (+25%)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm mb-3">
            Segurado que precisa de <strong>assistência permanente de outra pessoa</strong> para atividades básicas
            (comer, banhar-se, vestir-se, locomover-se) tem direito a acréscimo de 25%.
          </p>
          <div className="grid md:grid-cols-3 gap-2">
            <Badge className="bg-purple-500 justify-center py-2">Cegueira total</Badge>
            <Badge className="bg-purple-500 justify-center py-2">Paraplegia/Tetraplegia</Badge>
            <Badge className="bg-purple-500 justify-center py-2">Amputações múltiplas</Badge>
            <Badge className="bg-purple-500 justify-center py-2">Demência avançada</Badge>
            <Badge className="bg-purple-500 justify-center py-2">Sequelas graves AVC</Badge>
            <Badge className="bg-purple-500 justify-center py-2">Doenças degenerativas</Badge>
          </div>
        </CardContent>
      </Card>

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

      {/* Documentos */}
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="docs" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Documentos Médicos (FUNDAMENTAIS)
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {documentosMedicos.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
            <Alert className="mt-4 border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-700 text-sm">
                <strong>CRÍTICO:</strong> A qualidade e quantidade da documentação médica são DECISIVAS
                para o sucesso do pedido. Relatórios devem destacar: "paciente sem condições de exercer
                qualquer atividade laborativa".
              </AlertDescription>
            </Alert>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="doencas" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Doenças com Isenção de Carência
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid md:grid-cols-3 gap-2">
              {doencasIsencao.map((doenca, i) => (
                <div key={i} className="flex items-center gap-2 text-sm p-2 bg-red-50 rounded">
                  <CheckCircle2 className="w-3 h-3 text-red-600 flex-shrink-0" />
                  <span>{doenca}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Situações que geram direito */}
      <Card>
        <CardHeader>
          <CardTitle>Situações que Geralmente Geram Direito</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-2">
            {situacoesComuns.map((sit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm p-2 bg-muted rounded">
                <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                <span>{sit}</span>
              </div>
            ))}
          </div>
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
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-bold text-blue-800">Auxílio-Doença</p>
              <p className="text-sm text-blue-600">TEMPORÁRIA</p>
              <p className="text-xs">Vai melhorar</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border-2 border-red-300">
              <p className="font-bold text-red-800">Aposent. Invalidez</p>
              <p className="text-sm text-red-600">PERMANENTE</p>
              <p className="text-xs">Não vai melhorar</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="font-bold text-green-800">Auxílio-Acidente</p>
              <p className="text-sm text-green-600">SEQUELA</p>
              <p className="text-xs">Pode trabalhar</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-red-200 bg-red-50">
        <XCircle className="h-4 w-4 text-red-600" />
        <AlertTitle className="text-red-800">Proibido Trabalhar</AlertTitle>
        <AlertDescription className="text-red-700">
          Se segurado volta a trabalhar durante a aposentadoria por invalidez, o benefício é CESSADO.
          Exceção: trabalho em programa de reabilitação profissional do INSS.
        </AlertDescription>
      </Alert>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Revisão Periódica</AlertTitle>
        <AlertDescription>
          Aposentado por invalidez deve passar por perícia a cada 2 anos. Maiores de 60 anos são isentos
          de reavaliação. Se perícia constatar melhora, benefício pode ser cessado (segurado tem direito a recurso).
        </AlertDescription>
      </Alert>
    </div>
  );
}
