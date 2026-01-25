import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Type, FileText, AlertTriangle, CheckCircle2, Lightbulb, ExternalLink, Download } from "lucide-react";

export default function Formatacao() {
  const padraoFormatacao = [
    { item: "Fonte", valor: "Nunito ou Arial" },
    { item: "Tamanho do texto", valor: "12pt" },
    { item: "Tamanho dos títulos", valor: "14pt (negrito)" },
    { item: "Espaçamento entre linhas", valor: "1,5" },
    { item: "Margens", valor: "3cm (superior/esquerda), 2cm (inferior/direita)" },
    { item: "Alinhamento", valor: "Justificado" },
    { item: "Recuo de parágrafo", valor: "1,25cm" }
  ];

  const estruturaPeticao = [
    { secao: "Cabeçalho", descricao: "Órgão destinatário, número do processo (se houver)" },
    { secao: "Qualificação", descricao: "Dados completos do requerente/autor" },
    { secao: "Fatos", descricao: "Narrativa clara e cronológica dos acontecimentos" },
    { secao: "Direito", descricao: "Fundamentação legal e jurisprudencial" },
    { secao: "Pedidos", descricao: "Requerimentos específicos e claros" },
    { secao: "Fechamento", descricao: "Termos em que pede deferimento, data, assinatura" }
  ];

  const dicasRedacao = [
    "Use frases curtas e diretas",
    "Evite palavras rebuscadas desnecessárias",
    "Separe os assuntos em parágrafos distintos",
    "Numere os fatos e pedidos para facilitar referência",
    "Cite artigos de lei e jurisprudência com precisão",
    "Revise ortografia e gramática antes de protocolar"
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Type className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Formatação</h1>
          <p className="text-muted-foreground">Padrões de Documentos do Escritório</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            Todos os documentos do escritório devem seguir o padrão de formatação estabelecido.
            <strong> A uniformidade transmite profissionalismo e facilita a leitura.</strong>
          </p>
        </CardContent>
      </Card>

      {/* Recursos */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-blue-200">
          <CardHeader className="bg-blue-50 rounded-t-lg py-3">
            <CardTitle className="text-blue-800 text-base flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Modelos Atualizados
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <Button className="w-full gap-2" variant="outline">
              <ExternalLink className="w-4 h-4" />
              Acessar Pasta de Modelos
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Sempre use os modelos mais recentes da pasta compartilhada.
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="bg-purple-50 rounded-t-lg py-3">
            <CardTitle className="text-purple-800 text-base flex items-center gap-2">
              <Download className="w-4 h-4" />
              Fonte Nunito
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <Button className="w-full gap-2" variant="outline">
              <ExternalLink className="w-4 h-4" />
              Baixar Fonte Nunito
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Instale a fonte em seu computador para manter o padrão.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Alerta */}
      <Alert className="border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertTitle className="text-red-800">Atenção</AlertTitle>
        <AlertDescription className="text-red-700">
          <strong>NÃO ALTERE OS MODELOS ORIGINAIS!</strong> Sempre faça uma cópia para a pasta
          do cliente antes de editar. Os modelos devem ser baixados e alterados apenas em seu computador.
        </AlertDescription>
      </Alert>

      {/* Padrão de Formatação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="w-5 h-5 text-primary" />
            Padrão de Formatação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Item</th>
                  <th className="text-left py-2">Padrão</th>
                </tr>
              </thead>
              <tbody>
                {padraoFormatacao.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2 font-medium">{item.item}</td>
                    <td className="py-2">
                      <Badge variant="outline">{item.valor}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Estrutura de Petição */}
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="estrutura" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Estrutura de Petição
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-2">
              {estruturaPeticao.map((item, i) => (
                <div key={i} className="p-3 bg-muted rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-primary">{i + 1}</Badge>
                    <span className="font-bold text-sm">{item.secao}</span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-8">{item.descricao}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dicas" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Dicas de Redação
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {dicasRedacao.map((dica, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>{dica}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Especificidades INSS */}
      <Card className="border-green-200">
        <CardHeader className="bg-green-50 rounded-t-lg">
          <CardTitle className="text-green-800">Especificidades - Documentos INSS</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-3">
          <div className="p-3 bg-muted rounded">
            <p className="font-bold text-sm mb-1">Requerimento Administrativo</p>
            <p className="text-xs text-muted-foreground">
              Usar linguagem mais simples. Destinatário: "Ilmo. Sr. Gerente da Agência da
              Previdência Social de [cidade]"
            </p>
          </div>
          <div className="p-3 bg-muted rounded">
            <p className="font-bold text-sm mb-1">Recurso ao CRPS</p>
            <p className="text-xs text-muted-foreground">
              Fundamentar com IN/77 e Decreto 3.048/99. Anexar cópia da decisão recorrida.
            </p>
          </div>
          <div className="p-3 bg-muted rounded">
            <p className="font-bold text-sm mb-1">Petição Judicial</p>
            <p className="text-xs text-muted-foreground">
              Incluir valor da causa. Juizados Especiais: até 60 salários mínimos.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Checklist antes de protocolar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Checklist Antes de Protocolar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Formatação correta (fonte, tamanho, margens)</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Dados do cliente corretos (nome, CPF, NIT)</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Número do benefício/processo correto</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Documentos anexos listados e organizados</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Assinatura digital ou física</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Revisão ortográfica e gramatical</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>PDF gerado corretamente (sem cortes)</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Dica de Produtividade</AlertTitle>
        <AlertDescription>
          Configure os estilos padrão no Word/Google Docs para não precisar formatar manualmente
          cada documento. Crie atalhos de teclado para os estilos mais usados.
        </AlertDescription>
      </Alert>
    </div>
  );
}
