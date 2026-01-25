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
import { Clock, FileText, AlertTriangle, CheckCircle2, Lightbulb, Calculator } from "lucide-react";

export default function AposentadoriaTempo() {
  const regrasTransicao = [
    {
      nome: "Sistema de Pontos",
      requisitos2025: {
        mulher: "30 anos contribuição + 91 pontos",
        homem: "35 anos contribuição + 101 pontos"
      },
      calculo: "60% da média + 2% por ano acima de 20 (H) ou 15 (M)"
    },
    {
      nome: "Idade Progressiva",
      requisitos2025: {
        mulher: "30 anos contribuição + 59 anos de idade",
        homem: "35 anos contribuição + 64 anos de idade"
      },
      calculo: "60% da média + 2% por ano acima de 20 (H) ou 15 (M)"
    },
    {
      nome: "Pedágio 50%",
      requisitos2025: {
        mulher: "28 anos de contribuição em nov/2019 + pedágio 50%",
        homem: "33 anos de contribuição em nov/2019 + pedágio 50%"
      },
      calculo: "Média dos 80% maiores COM fator previdenciário"
    },
    {
      nome: "Pedágio 100%",
      requisitos2025: {
        mulher: "30 anos + pedágio 100% + 57 anos de idade",
        homem: "35 anos + pedágio 100% + 60 anos de idade"
      },
      calculo: "100% da média (sem reduções)"
    }
  ];

  const documentos = [
    "CNIS completo e atualizado",
    "Carteira de trabalho (TODAS as páginas)",
    "Contracheques de todos os períodos",
    "Carnês de contribuição (autônomos)",
    "Certidões de tempo de contribuição de outros regimes",
    "Contratos de trabalho",
    "PPP - Perfil Profissiográfico Previdenciário (se atividade especial)",
    "LTCAT - Laudo Técnico das Condições Ambientais"
  ];

  const atividadesEspeciais = [
    "Exposição a ruído acima de 80/85 dB",
    "Trabalho com eletricidade (alta tensão)",
    "Exposição a produtos químicos",
    "Trabalho em minas/subsolo",
    "Exposição a agentes biológicos (hospitais)",
    "Trabalho com radiação",
    "Exposição a calor/frio intensos"
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Clock className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Aposentadoria por Tempo de Contribuição</h1>
          <p className="text-muted-foreground">Regras de Transição</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>O que é:</strong> Aposentadoria concedida ao segurado que contribuiu por um tempo determinado,
            independentemente da idade. A <strong>Reforma da Previdência (13/11/2019) extinguiu</strong> essa
            modalidade para novos segurados, mas quem já estava no sistema pode usar as <strong>regras de transição</strong>.
          </p>
        </CardContent>
      </Card>

      {/* Aviso importante */}
      <Alert className="border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertTitle className="text-red-800">Quem NÃO tem direito</AlertTitle>
        <AlertDescription className="text-red-700">
          Quem começou a contribuir APÓS 13/11/2019 só terá direito à aposentadoria por idade (62/65 anos).
        </AlertDescription>
      </Alert>

      {/* Direito Adquirido */}
      <Card className="border-green-200">
        <CardHeader className="bg-green-50 rounded-t-lg">
          <CardTitle className="text-green-800">Direito Adquirido (até 12/11/2019)</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-bold text-blue-800">Homem</p>
              <p className="text-sm">35 anos de contribuição</p>
              <p className="text-sm text-muted-foreground">NÃO exige idade mínima</p>
            </div>
            <div className="p-3 bg-pink-50 rounded-lg">
              <p className="font-bold text-pink-800">Mulher</p>
              <p className="text-sm">30 anos de contribuição</p>
              <p className="text-sm text-muted-foreground">NÃO exige idade mínima</p>
            </div>
          </div>
          <p className="text-sm mt-4 text-green-700">
            <strong>Regra 85/95:</strong> Se soma idade + tempo = 85 (M) ou 95 (H), aposenta sem fator previdenciário.
          </p>
        </CardContent>
      </Card>

      {/* Regras de Transição */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            4 Regras de Transição (Escolher a mais vantajosa)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regrasTransicao.map((regra, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary">{i + 1}</Badge>
                  <span className="font-bold">{regra.nome}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-medium text-blue-800">Homem (2025)</p>
                    <p>{regra.requisitos2025.homem}</p>
                  </div>
                  <div className="p-2 bg-pink-50 rounded">
                    <p className="font-medium text-pink-800">Mulher (2025)</p>
                    <p>{regra.requisitos2025.mulher}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <strong>Cálculo:</strong> {regra.calculo}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Documentos */}
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="docs" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Documentos Necessários
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {documentos.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="especial" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Atividades Especiais (Multiplicador de Tempo)
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <p className="text-sm mb-3">Tempo especial pode ser convertido com multiplicador 1,4:</p>
            <div className="grid md:grid-cols-2 gap-2">
              {atividadesEspeciais.map((ativ, i) => (
                <div key={i} className="flex items-center gap-2 text-sm p-2 bg-amber-50 rounded">
                  <CheckCircle2 className="w-3 h-3 text-amber-600" />
                  <span>{ativ}</span>
                </div>
              ))}
            </div>
            <Alert className="mt-4">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription className="text-sm">
                Exemplo: 15 anos de atividade especial × 1,4 = 21 anos de tempo comum.
                <strong> FUNDAMENTAL ter PPP de todas as empresas.</strong>
              </AlertDescription>
            </Alert>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Tabela resumo */}
      <Card>
        <CardHeader>
          <CardTitle>Tabela Resumo 2025</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Regra</th>
                  <th className="text-left py-2">Tempo</th>
                  <th className="text-left py-2">Idade/Pontos</th>
                  <th className="text-left py-2">Cálculo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Pontos</td>
                  <td className="py-2">30/35</td>
                  <td className="py-2">91/101 pts</td>
                  <td className="py-2">60% + 2%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Idade Progressiva</td>
                  <td className="py-2">30/35</td>
                  <td className="py-2">59/64 anos</td>
                  <td className="py-2">60% + 2%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Pedágio 50%</td>
                  <td className="py-2">30/35</td>
                  <td className="py-2">Sem mínimo</td>
                  <td className="py-2">Com fator</td>
                </tr>
                <tr>
                  <td className="py-2">Pedágio 100%</td>
                  <td className="py-2">30/35</td>
                  <td className="py-2">57/60 anos</td>
                  <td className="py-2">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Estratégia: Qual regra escolher?</AlertTitle>
        <AlertDescription>
          Faça simulações de TODAS as regras aplicáveis. Compare: aposentar mais cedo com valor menor
          VS esperar mais com valor maior. Nem sempre a que aposenta mais rápido é a que paga mais.
        </AlertDescription>
      </Alert>
    </div>
  );
}
