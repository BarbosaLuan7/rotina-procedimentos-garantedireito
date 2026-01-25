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
import { Calendar, Users, FileText, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

export default function AposentadoriaIdade() {
  const requisitosUrbano = {
    titulo: "Trabalhador Urbano",
    homem: { idade: "65 anos", contribuicao: "15 anos" },
    mulher: { idade: "62 anos", contribuicao: "15 anos" }
  };

  const requisitosRural = {
    titulo: "Trabalhador Rural",
    homem: { idade: "60 anos", contribuicao: "15 anos de atividade rural" },
    mulher: { idade: "55 anos", contribuicao: "15 anos de atividade rural" }
  };

  const documentosGerais = [
    "RG e CPF",
    "Comprovante de residência atualizado",
    "Certidão de nascimento ou casamento",
    "CNIS atualizado",
    "Carteira de trabalho (todas as páginas)",
    "Carnês de contribuição (se contribuinte individual)",
    "Contracheques ou holerites",
    "PPP (se trabalhou exposto a agentes nocivos)"
  ];

  const documentosRural = [
    "Escritura ou contrato de arrendamento/parceria",
    "DAP (Declaração de Aptidão ao PRONAF)",
    "Certificado de cadastro no INCRA",
    "Recibos de ITR em nome do segurado ou família",
    "Notas fiscais de produtor rural",
    "Declaração de sindicato rural",
    "Histórico escolar dos filhos (escolas rurais)",
    "Certidões de casamento/batismo com menção 'lavrador'"
  ];

  const errosComuns = [
    { erro: "Não verificar direito adquirido", descricao: "Se cliente já tinha requisitos em 12/11/2019, pode usar regra antiga" },
    { erro: "Confundir tempo de contribuição com tempo de trabalho", descricao: "Trabalho sem registro na carteira NÃO conta" },
    { erro: "Achar que MEI conta como tempo automático", descricao: "MEI que paga R$ 55-75/mês NÃO tem direito a aposentadoria por tempo" },
    { erro: "Aceitar caso rural sem documentação mínima", descricao: "Sem início de prova material + testemunhas, será negada" },
    { erro: "Não perguntar sobre trabalho com exposição a agentes nocivos", descricao: "Cliente pode ter direito a aposentadoria especial" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Calendar className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Aposentadoria por Idade</h1>
          <p className="text-muted-foreground">Urbana e Rural</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>O que é:</strong> Aposentadoria concedida ao segurado que atingiu uma <strong>idade mínima</strong> e
            contribuiu por um <strong>tempo mínimo</strong> para a Previdência Social. É o benefício mais comum e acessível,
            destinado a garantir renda aos trabalhadores na velhice.
          </p>
        </CardContent>
      </Card>

      {/* Requisitos */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-blue-200">
          <CardHeader className="bg-blue-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Users className="w-5 h-5" />
              Trabalhador Urbano
            </CardTitle>
            <CardDescription className="text-blue-600">Após Reforma (EC 103/2019)</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-bold text-blue-800">Homem</p>
                <p className="text-sm">Idade: <Badge>65 anos</Badge></p>
                <p className="text-sm">Contribuição: <Badge variant="outline">15 anos</Badge></p>
              </div>
              <div className="p-3 bg-pink-50 rounded-lg">
                <p className="font-bold text-pink-800">Mulher</p>
                <p className="text-sm">Idade: <Badge className="bg-pink-500">62 anos</Badge></p>
                <p className="text-sm">Contribuição: <Badge variant="outline">15 anos</Badge></p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader className="bg-green-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Users className="w-5 h-5" />
              Trabalhador Rural
            </CardTitle>
            <CardDescription className="text-green-600">Segurado Especial</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="font-bold text-green-800">Homem</p>
                <p className="text-sm">Idade: <Badge className="bg-green-600">60 anos</Badge></p>
                <p className="text-sm">Atividade Rural: <Badge variant="outline">15 anos</Badge></p>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-800">Mulher</p>
                <p className="text-sm">Idade: <Badge className="bg-amber-500">55 anos</Badge></p>
                <p className="text-sm">Atividade Rural: <Badge variant="outline">15 anos</Badge></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cálculo do valor */}
      <Card>
        <CardHeader>
          <CardTitle>Cálculo do Valor (Pós-Reforma)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-mono text-sm">60% da média + 2% por ano acima de:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>20 anos de contribuição (homem)</li>
              <li>15 anos de contribuição (mulher)</li>
            </ul>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="font-bold text-blue-800">Exemplo (Homem):</p>
            <p className="text-sm">Média dos salários: R$ 3.000 | Tempo: 25 anos</p>
            <p className="text-sm">Cálculo: 60% + (2% × 5 anos acima de 20) = 70%</p>
            <p className="text-sm font-bold">Benefício: R$ 3.000 × 70% = R$ 2.100</p>
          </div>
        </CardContent>
      </Card>

      {/* Documentos */}
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="docs-gerais" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Documentos Gerais (Urbano e Rural)
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {documentosGerais.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="docs-rural" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600" />
              Documentos Específicos (Rural)
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {documentosRural.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
            <Alert className="mt-4 border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-700 text-sm">
                <strong>Regra de Ouro:</strong> É preciso ter início de prova material (documentos) +
                prova testemunhal. Documentos precisam abranger todo o período de carência (15 anos).
              </AlertDescription>
            </Alert>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Erros Comuns */}
      <Card className="border-red-200">
        <CardHeader className="bg-red-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-red-800">
            <AlertTriangle className="w-5 h-5" />
            Erros Comuns no Atendimento
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            {errosComuns.map((item, i) => (
              <div key={i} className="p-3 bg-red-50/50 rounded-lg">
                <p className="font-medium text-red-800 text-sm">{item.erro}</p>
                <p className="text-xs text-red-600 mt-1">{item.descricao}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Tempo Rural + Urbano (Híbrida)</AlertTitle>
        <AlertDescription>
          É possível somar tempo rural com urbano para completar 15 anos de carência.
          Exemplo: 10 anos rural + 5 anos urbano = 15 anos. Para aposentadoria com valor de
          salário mínimo (rural), precisa estar na atividade rural no momento do pedido.
        </AlertDescription>
      </Alert>

      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Aposentadoria Rural</AlertTitle>
        <AlertDescription className="text-amber-700">
          A aposentadoria rural é a mais complexa e que mais gera litígio. INSS é extremamente rigoroso
          na análise documental. Testemunhas precisam ser convincentes e coerentes. Não aceitar caso
          sem início de prova material. Documentos do grupo familiar (pais, cônjuge) CONTAM.
        </AlertDescription>
      </Alert>
    </div>
  );
}
