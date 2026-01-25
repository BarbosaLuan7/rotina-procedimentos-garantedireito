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
import { Home, Users, FileText, AlertTriangle, CheckCircle2, XCircle, Lightbulb, DollarSign } from "lucide-react";

export default function BpcLoas() {
  const requisitosIdoso = [
    "Ter 65 anos ou mais",
    "Renda familiar per capita de até 1/4 do salário mínimo (critério legal)",
    "OU renda per capita de até 1/2 salário mínimo (critério jurisprudencial)",
    "Ser brasileiro nato ou naturalizado",
    "Residir no Brasil",
    "Estar inscrito no CadÚnico"
  ];

  const requisitosDeficiente = [
    "Deficiência de longo prazo (mínimo 2 anos)",
    "Impedimentos de natureza física, mental, intelectual ou sensorial",
    "Qualquer idade (inclusive crianças)",
    "Renda familiar per capita de até 1/4 do salário mínimo (critério legal)",
    "OU renda per capita de até 1/2 salário mínimo (critério jurisprudencial)",
    "Inscrição no CadÚnico obrigatória"
  ];

  const documentosGerais = [
    "RG e CPF",
    "Certidão de nascimento ou casamento",
    "Comprovante de residência atualizado",
    "Número do NIS (obtido no CadÚnico)",
    "RG e CPF de todos os membros da família",
    "Comprovantes de renda de TODOS os membros",
    "Carteira de trabalho de todos (mesmo desempregados)"
  ];

  const documentosDeficiencia = [
    "Laudos médicos detalhados (especialistas)",
    "Exames complementares (ressonância, tomografia, etc.)",
    "Histórico de tratamento e internações",
    "Receitas de medicamentos de uso contínuo",
    "Relatórios de terapias (fisio, fono, psicologia)",
    "Relatórios escolares (se criança/adolescente)"
  ];

  const errosComuns = [
    { erro: "Confundir BPC com aposentadoria", descricao: "BPC não paga 13º, não deixa pensão por morte, não conta como tempo de contribuição" },
    { erro: "Não orientar sobre CadÚnico", descricao: "Sem CadÚnico atualizado, INSS nem analisa o pedido" },
    { erro: "Aceitar caso com renda muito alta", descricao: "Renda per capita acima de 1/2 salário mínimo dificilmente é aprovada" },
    { erro: "Achar que qualquer doença gera BPC", descricao: "Precisa haver deficiência de longo prazo (mínimo 2 anos) que obstrua participação social" },
    { erro: "Não alertar sobre revisão a cada 2 anos", descricao: "BPC é revisado periodicamente; renda pode mudar e benefício ser cessado" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Home className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">BPC/LOAS</h1>
          <p className="text-muted-foreground">Benefício de Prestação Continuada</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>O que é:</strong> Benefício assistencial (não é aposentadoria) no valor de 1 salário mínimo pago a
            <strong> idosos com 65 anos ou mais</strong> e a <strong>pessoas com deficiência</strong> de qualquer idade
            que não tenham condições de se sustentar. <strong>NÃO exige contribuições ao INSS</strong>.
          </p>
        </CardContent>
      </Card>

      {/* Duas modalidades */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-blue-200">
          <CardHeader className="bg-blue-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Users className="w-5 h-5" />
              BPC Idoso
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              {requisitosIdoso.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="bg-purple-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Users className="w-5 h-5" />
              BPC Deficiente
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              {requisitosDeficiente.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Critério de Renda */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Critério de Renda (Miserabilidade)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">Critério Legal (1/4)</h4>
              <p className="text-sm text-green-700">Renda per capita até 1/4 do salário mínimo</p>
              <p className="text-lg font-bold text-green-600 mt-2">~R$ 353/pessoa</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">Critério Jurisprudencial (1/2)</h4>
              <p className="text-sm text-blue-700">Renda per capita até 1/2 do salário mínimo</p>
              <p className="text-lg font-bold text-blue-600 mt-2">~R$ 706/pessoa</p>
            </div>
          </div>

          <Alert className="border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-800">Importante</AlertTitle>
            <AlertDescription className="text-amber-700">
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li>Outro BPC na família NÃO conta no cálculo</li>
                <li>Bolsa Família NÃO conta no cálculo</li>
                <li>Renda até 1/4: requerer administrativamente</li>
                <li>Renda entre 1/4 e 1/2: preparar ação judicial</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Documentos */}
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="docs-gerais" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Documentos Gerais (Todos os Casos)
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {documentosGerais.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Badge variant="outline" className="text-xs">{i + 1}</Badge>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="docs-deficiencia" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              Documentos para BPC Deficiente
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {documentosDeficiencia.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Badge variant="outline" className="text-xs">{i + 1}</Badge>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Erros Comuns */}
      <Card className="border-red-200">
        <CardHeader className="bg-red-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-red-800">
            <XCircle className="w-5 h-5" />
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

      {/* Diferenças importantes */}
      <Card>
        <CardHeader>
          <CardTitle>BPC vs Aposentadoria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Característica</th>
                  <th className="text-left py-2">BPC/LOAS</th>
                  <th className="text-left py-2">Aposentadoria</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Contribuição</td>
                  <td className="py-2"><Badge className="bg-green-500">Não exige</Badge></td>
                  <td className="py-2"><Badge className="bg-blue-500">Exige</Badge></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Critério de renda</td>
                  <td className="py-2"><Badge className="bg-red-500">Exige baixa renda</Badge></td>
                  <td className="py-2"><Badge className="bg-green-500">Sem critério</Badge></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">13º salário</td>
                  <td className="py-2"><Badge variant="destructive">NÃO paga</Badge></td>
                  <td className="py-2"><Badge className="bg-green-500">Paga</Badge></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Pensão por morte</td>
                  <td className="py-2"><Badge variant="destructive">NÃO deixa</Badge></td>
                  <td className="py-2"><Badge className="bg-green-500">Deixa</Badge></td>
                </tr>
                <tr>
                  <td className="py-2">Revisão</td>
                  <td className="py-2"><Badge className="bg-amber-500">A cada 2 anos</Badge></td>
                  <td className="py-2"><Badge className="bg-gray-500">Não tem</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>CadÚnico é OBRIGATÓRIO</AlertTitle>
        <AlertDescription>
          Sem CadÚnico atualizado (máximo 24 meses), o INSS nem analisa o pedido.
          Orientar cliente a procurar o CRAS do município. Documentos: RG, CPF, comprovante de
          residência e documentos de todos os membros da família.
        </AlertDescription>
      </Alert>
    </div>
  );
}
