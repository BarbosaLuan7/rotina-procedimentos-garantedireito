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
import { Heart, FileText, AlertTriangle, CheckCircle2, XCircle, Lightbulb, Clock } from "lucide-react";

export default function AuxilioIncapacidade() {
  const requisitos = [
    { titulo: "Carência", descricao: "12 meses de contribuição (regra geral)", isencao: "Acidentes e doenças graves: ISENÇÃO" },
    { titulo: "Qualidade de segurado", descricao: "Em dia com contribuições OU dentro do período de graça" },
    { titulo: "Incapacidade", descricao: "Comprovada por perícia médica, temporária, para atividade habitual por mais de 15 dias" },
    { titulo: "Afastamento", descricao: "Empregado: empresa paga 15 dias, INSS a partir do 16º. Demais: INSS desde o início" }
  ];

  const documentosMedicos = [
    "Atestados médicos detalhados (com CID, descrição da doença, tempo de afastamento)",
    "Exames complementares (raio-X, ressonância, tomografia, laudos laboratoriais)",
    "Relatórios médicos que comprovem a incapacidade",
    "Receitas médicas",
    "Histórico de tratamento"
  ];

  const doencasIsencaoCarencia = [
    "Tuberculose ativa",
    "Hanseníase",
    "Alienação mental",
    "Neoplasia maligna (câncer)",
    "Cegueira",
    "Paralisia irreversível e incapacitante",
    "Cardiopatia grave",
    "Doença de Parkinson",
    "HIV/AIDS",
    "Hepatopatia grave"
  ];

  const periodoGraca = [
    { tempo: "12 meses", condicao: "Após última contribuição (regra geral)" },
    { tempo: "24 meses", condicao: "Se tiver mais de 120 contribuições" },
    { tempo: "36 meses", condicao: "Se desempregado e comprovado no Ministério do Trabalho" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Heart className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Auxílio por Incapacidade Temporária</h1>
          <p className="text-muted-foreground">Antigo Auxílio-Doença</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>O que é:</strong> Benefício pago mensalmente ao segurado que fica <strong>temporariamente incapaz</strong> de
            trabalhar por motivo de doença ou acidente. O pagamento dura enquanto a pessoa não puder exercer sua atividade habitual,
            até que se recupere ou, se não houver recuperação, pode ser convertido em aposentadoria por invalidez.
          </p>
        </CardContent>
      </Card>

      {/* Valor */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-green-600">Valor do Benefício</Badge>
            <span className="font-bold text-green-800">91% do salário de benefício</span>
          </div>
          <p className="text-sm text-green-700 mt-2">(Após Reforma da Previdência - EC 103/2019)</p>
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
          <div className="space-y-4">
            {requisitos.map((req, i) => (
              <div key={i} className="p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Badge>{req.titulo}</Badge>
                </div>
                <p className="text-sm mt-2">{req.descricao}</p>
                {req.isencao && (
                  <p className="text-sm text-green-600 mt-1 font-medium">{req.isencao}</p>
                )}
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
            Documentos Médicos (FUNDAMENTAIS)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {documentosMedicos.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Badge variant="outline" className="text-xs">{i + 1}</Badge>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
          <Alert className="mt-4 border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-700 text-sm">
              Se acidente de trabalho: incluir CAT (Comunicação de Acidente de Trabalho) e relatório do acidente.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Doenças com isenção */}
      <Accordion type="single" collapsible>
        <AccordionItem value="doencas" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Doenças com Isenção de Carência
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 gap-2">
              {doencasIsencaoCarencia.map((doenca, i) => (
                <div key={i} className="flex items-center gap-2 text-sm p-2 bg-red-50 rounded">
                  <CheckCircle2 className="w-3 h-3 text-red-600 flex-shrink-0" />
                  <span>{doenca}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Período de Graça */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Período de Graça
          </CardTitle>
          <CardDescription>Mesmo quem parou de contribuir pode ter direito</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {periodoGraca.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Badge className="bg-primary">{item.tempo}</Badge>
                <span className="text-sm">{item.condicao}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Diferenças críticas */}
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
              <p className="text-sm text-blue-600">TEMPORÁRIO</p>
              <p className="text-xs text-muted-foreground">Vai melhorar</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <p className="font-bold text-red-800">Aposent. Invalidez</p>
              <p className="text-sm text-red-600">PERMANENTE</p>
              <p className="text-xs text-muted-foreground">Não vai melhorar</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="font-bold text-green-800">Auxílio-Acidente</p>
              <p className="text-sm text-green-600">SEQUELA</p>
              <p className="text-xs text-muted-foreground">Pode trabalhar</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Erros comuns */}
      <Card className="border-red-200">
        <CardHeader className="bg-red-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-red-800">
            <XCircle className="w-5 h-5" />
            Erros Comuns
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-2 text-sm">
          <p><strong>Erro 1:</strong> Confundir auxílio-doença com aposentadoria por invalidez</p>
          <p><strong>Erro 2:</strong> Não verificar se há isenção de carência</p>
          <p><strong>Erro 3:</strong> Aceitar caso sem documentação médica robusta</p>
          <p><strong>Erro 4:</strong> Confundir os 15 primeiros dias (empresa vs INSS)</p>
          <p><strong>Erro 5:</strong> Não questionar sobre tentativa administrativa prévia</p>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Conversão para Aposentadoria</AlertTitle>
        <AlertDescription>
          Se durante o recebimento do auxílio a perícia concluir que a incapacidade é permanente,
          o benefício é convertido em aposentadoria por invalidez (sem necessidade de novo requerimento).
        </AlertDescription>
      </Alert>
    </div>
  );
}
