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
import { Baby, FileText, AlertTriangle, CheckCircle2, XCircle, Lightbulb, Clock, Users } from "lucide-react";

export default function SalarioMaternidade() {
  const situacoes = [
    { titulo: "Parto", duracao: "120 dias", obs: "+14 dias se prematuro = 134 dias" },
    { titulo: "Aborto Espontâneo/Legal", duracao: "14 dias", obs: "Até 22 semanas de gestação" },
    { titulo: "Adoção", duracao: "120 dias", obs: "Independente da idade da criança" },
    { titulo: "Guarda Judicial", duracao: "120 dias", obs: "Com finalidade de adoção" }
  ];

  const carencia = [
    { tipo: "Empregada CLT", carencia: "SEM carência", quemPaga: "Empresa (depois é ressarcida)" },
    { tipo: "Empregada Doméstica", carencia: "SEM carência", quemPaga: "INSS diretamente" },
    { tipo: "Trabalhadora Avulsa", carencia: "SEM carência", quemPaga: "INSS diretamente" },
    { tipo: "Contribuinte Individual", carencia: "10 meses", quemPaga: "INSS diretamente" },
    { tipo: "Segurada Facultativa", carencia: "10 meses", quemPaga: "INSS diretamente" },
    { tipo: "MEI", carencia: "10 meses", quemPaga: "INSS diretamente" },
    { tipo: "Segurada Especial (Rural)", carencia: "10 meses de atividade rural", quemPaga: "INSS diretamente" }
  ];

  const documentosParto = [
    "RG e CPF",
    "Comprovante de residência",
    "CNIS atualizado",
    "Carteira de trabalho (se empregada)",
    "Certidão de nascimento da criança",
    "OU Atestado médico com data provável do parto"
  ];

  const valores = [
    { tipo: "Empregada CLT", valor: "100% do salário" },
    { tipo: "Empregada Doméstica", valor: "Último salário de contribuição" },
    { tipo: "Trabalhadora Avulsa", valor: "Média dos últimos 6 salários" },
    { tipo: "Contribuinte Individual/MEI", valor: "Média dos últimos 12 salários (mín. 1 SM)" },
    { tipo: "Segurada Especial", valor: "1 salário mínimo" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Baby className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Salário-Maternidade</h1>
          <p className="text-muted-foreground">Licença remunerada por maternidade</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>O que é:</strong> Benefício pago à segurada durante o período de afastamento por motivo de
            <strong> nascimento de filho, aborto, adoção ou guarda judicial</strong>.
            Objetivo: garantir renda durante a licença-maternidade.
          </p>
        </CardContent>
      </Card>

      {/* Situações e duração */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Situações e Duração
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {situacoes.map((sit, i) => (
              <div key={i} className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">{sit.titulo}</span>
                  <Badge className="bg-primary">{sit.duracao}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{sit.obs}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Carência e quem paga */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Carência e Quem Paga
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Tipo de Segurada</th>
                  <th className="text-left py-2">Carência</th>
                  <th className="text-left py-2">Quem Paga</th>
                </tr>
              </thead>
              <tbody>
                {carencia.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">{item.tipo}</td>
                    <td className="py-2">
                      <Badge className={item.carencia.includes("SEM") ? "bg-green-500" : "bg-blue-500"}>
                        {item.carencia}
                      </Badge>
                    </td>
                    <td className="py-2 text-xs">{item.quemPaga}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Valores */}
      <Card className="border-green-200">
        <CardHeader className="bg-green-50 rounded-t-lg">
          <CardTitle className="text-green-800">Valor do Benefício</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-2">
            {valores.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-muted rounded">
                <span className="text-sm">{item.tipo}</span>
                <Badge variant="outline">{item.valor}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Documentos */}
      <Accordion type="single" collapsible>
        <AccordionItem value="docs" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Documentos Necessários (Parto)
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {documentosParto.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
            <Alert className="mt-4 border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-700 text-sm">
                <strong>Parto prematuro (+14 dias):</strong> Apresentar atestado médico
                comprovando prematuridade (menos de 37 semanas).
              </AlertDescription>
            </Alert>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Desempregada */}
      <Card className="border-blue-200">
        <CardHeader className="bg-blue-50 rounded-t-lg">
          <CardTitle className="text-blue-800">Desempregada Pode Receber?</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm mb-3">
            <strong>SIM</strong>, se engravidou enquanto ainda tinha qualidade de segurado (período de graça).
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-muted rounded text-sm">
              <Badge>12 meses</Badge>
              <span>Após última contribuição (regra geral)</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-muted rounded text-sm">
              <Badge>24 meses</Badge>
              <span>Se tiver mais de 120 contribuições</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-muted rounded text-sm">
              <Badge>36 meses</Badge>
              <span>Se desempregada comprovada no MTE</span>
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
          <p><strong>Erro 1:</strong> Confundir quem paga (empresa CLT vs INSS direto)</p>
          <p><strong>Erro 2:</strong> Não verificar carência para autônomas/MEI (10 meses)</p>
          <p><strong>Erro 3:</strong> Achar que só mulher tem direito (homens podem em adoção/morte da mãe)</p>
          <p><strong>Erro 4:</strong> Não orientar sobre parto prematuro (+14 dias)</p>
          <p><strong>Erro 5:</strong> Confundir prazo de duração (parto 120 dias vs aborto 14 dias)</p>
          <p><strong>Erro 6:</strong> Não perguntar sobre natimorto (dá direito a 120 dias completos)</p>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>MEI e Salário-Maternidade</AlertTitle>
        <AlertDescription>
          MEI tem direito desde que tenha 10 meses de contribuição. A contribuição normal de MEI
          (R$ 70-75/mês) JÁ garante direito. Valor: 1 salário mínimo. Requisição direto no INSS.
        </AlertDescription>
      </Alert>

      <Alert className="border-purple-200 bg-purple-50">
        <Baby className="h-4 w-4 text-purple-600" />
        <AlertTitle className="text-purple-800">Natimorto</AlertTitle>
        <AlertDescription className="text-purple-700">
          Nascimento de criança sem vida após 23 semanas gera direito ao salário-maternidade
          <strong> COMPLETO</strong> (120 dias). Documentação: declaração de nascido morto + atestado médico.
        </AlertDescription>
      </Alert>

      <Alert className="border-green-200 bg-green-50">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-800">Estabilidade</AlertTitle>
        <AlertDescription className="text-green-700">
          Empregada CLT tem estabilidade desde confirmação da gravidez até 5 meses após o parto.
          Não pode ser demitida sem justa causa. Se foi demitida grávida (sem saber): tem direito
          à reintegração OU indenização.
        </AlertDescription>
      </Alert>
    </div>
  );
}
