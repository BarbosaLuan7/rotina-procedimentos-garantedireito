import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ClipboardList, User, Calendar, Briefcase, Heart, AlertTriangle, Home } from "lucide-react";

export default function ChecklistPerguntas() {
  const dadosBasicos = [
    { pergunta: "Qual a idade?", referencia: "H: 65 (urb) / 60 (rural) | M: 62 (urb) / 55 (rural)" },
    { pergunta: "Está trabalhando de carteira assinada?", referencia: "Define se pode pedir auxílio-doença" },
    { pergunta: "Quando parou de trabalhar/contribuir?", referencia: "Qualidade de segurado: até 2 anos" },
    { pergunta: "Quanto tempo de carteira assinada teve?", referencia: "Mínimo 15 anos para aposentadoria" },
    { pergunta: "Já contribuiu como autônomo (individual)?", referencia: "Soma ao tempo de contribuição" },
  ];

  const aposentadoria = [
    { pergunta: "Já tem 15 anos de contribuição?", referencia: "Requisito mínimo para aposentadoria" },
    { pergunta: "Trabalhou na área rural?", referencia: "Pode usar para aposentadoria híbrida" },
    { pergunta: "Pai/mãe/irmão aposentou com rural?", referencia: "Podemos usar documentação deles!" },
    { pergunta: "Trabalhou em ambiente insalubre?", referencia: "Pode converter tempo especial" },
  ];

  const doencaIncapacidade = [
    { pergunta: "Qual o problema de saúde? (sintomas)", referencia: "Descrever em detalhes" },
    { pergunta: "Tem sequelas permanentes?", referencia: "Auxílio-acidente exige sequela permanente" },
    { pergunta: "Desde quando está com esse problema?", referencia: "BPC exige mínimo 2 anos" },
    { pergunta: "Faz acompanhamento médico?", referencia: "Necessário para laudos" },
    { pergunta: "Consegue trabalhar atualmente?", referencia: "Laudo deve indicar incapacidade" },
    { pergunta: "Tem laudos, atestados, exames?", referencia: "Antigos E recentes são úteis" },
    { pergunta: "Os laudos têm CID?", referencia: "Obrigatório ter código CID" },
  ];

  const acidente = [
    { pergunta: "Como aconteceu o acidente?", referencia: "Descrever circunstâncias" },
    { pergunta: "Desde quando?", referencia: "Data do acidente" },
    { pergunta: "Foi acidente de trabalho?", referencia: "Precisa de CAT" },
    { pergunta: "Fez B.O. (Boletim de Ocorrência)?", referencia: "Se trânsito ou violência" },
    { pergunta: "Ficou com sequela permanente?", referencia: "Requisito para auxílio-acidente" },
  ];

  const bpcLoas = [
    { pergunta: "Tem mais de 65 anos? (BPC Idoso)", referencia: "Não precisa de laudo médico" },
    { pergunta: "Doença/deficiência há mais de 2 anos?", referencia: "Requisito obrigatório BPC" },
    { pergunta: "Quantas pessoas moram na casa?", referencia: "Para calcular renda per capita" },
    { pergunta: "Qual a renda total da família?", referencia: "Deve ser < 1/4 salário mín. per capita" },
    { pergunta: "Tem CadÚnico atualizado?", referencia: "OBRIGATÓRIO (máx. 2 anos)" },
    { pergunta: "Sabe onde fica o CRAS?", referencia: "Onde faz/atualiza CadÚnico" },
  ];

  const tabelaReferencia = [
    { beneficio: "Aposent. Urbana (H)", idade: "65 anos", contribuicao: "15 anos OU 35 anos (s/ idade)" },
    { beneficio: "Aposent. Urbana (M)", idade: "62 anos", contribuicao: "15 anos OU 30 anos (s/ idade)" },
    { beneficio: "Aposent. Híbrida (H)", idade: "60 anos", contribuicao: "15 anos" },
    { beneficio: "Aposent. Híbrida (M)", idade: "55 anos", contribuicao: "15 anos" },
    { beneficio: "Aposent. Rural (H)", idade: "60 anos", contribuicao: "Só idade" },
    { beneficio: "Aposent. Rural (M)", idade: "55 anos", contribuicao: "Só idade" },
    { beneficio: "Auxílio-Doença", idade: "-", contribuicao: "Qualidade de segurado" },
    { beneficio: "Auxílio-Acidente", idade: "-", contribuicao: "Qualidade + sequela" },
    { beneficio: "BPC Idoso", idade: "65 anos", contribuicao: "Nenhuma (baixa renda)" },
    { beneficio: "BPC Deficiente", idade: "-", contribuicao: "Nenhuma (baixa renda + 2 anos)" },
  ];

  const ChecklistSection = ({ title, icon: Icon, items, color }) => (
    <Card className="border-l-4" style={{ borderLeftColor: color }}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className="w-5 h-5" style={{ color }} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <Checkbox id={`${title}-${index}`} className="mt-1" />
              <div className="flex-1">
                <label htmlFor={`${title}-${index}`} className="font-medium cursor-pointer block">
                  {item.pergunta}
                </label>
                <span className="text-sm text-muted-foreground">{item.referencia}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <ClipboardList className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Checklist de Perguntas</h1>
          <p className="text-muted-foreground">Qualificação do cliente para identificar o benefício correto</p>
        </div>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>Objetivo:</strong> Coletar informações para identificar qual benefício se encaixa no caso do cliente e quais documentos solicitar.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <ChecklistSection
          title="Dados Básicos"
          icon={User}
          items={dadosBasicos}
          color="#42AB34"
        />
        <ChecklistSection
          title="Aposentadoria"
          icon={Calendar}
          items={aposentadoria}
          color="#0E5D2C"
        />
      </div>

      <ChecklistSection
        title="Doença / Incapacidade"
        icon={Heart}
        items={doencaIncapacidade}
        color="#dc2626"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ChecklistSection
          title="Acidente (se aplicável)"
          icon={AlertTriangle}
          items={acidente}
          color="#f59e0b"
        />
        <ChecklistSection
          title="BPC/LOAS (se aplicável)"
          icon={Home}
          items={bpcLoas}
          color="#8b5cf6"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            Tabela de Referência Rápida
          </CardTitle>
          <CardDescription>
            Requisitos resumidos por tipo de benefício
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Benefício</TableHead>
                  <TableHead className="font-semibold">Idade Mínima</TableHead>
                  <TableHead className="font-semibold">Contribuição</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tabelaReferencia.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.beneficio}</TableCell>
                    <TableCell>
                      <Badge variant={row.idade === "-" ? "secondary" : "default"}>
                        {row.idade}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{row.contribuicao}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
