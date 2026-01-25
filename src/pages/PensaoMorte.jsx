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
import { Users, FileText, AlertTriangle, CheckCircle2, XCircle, Lightbulb, Heart } from "lucide-react";

export default function PensaoMorte() {
  const classesDependentes = [
    {
      classe: "1",
      titulo: "Classe 1 (Preferencial)",
      membros: ["Cônjuge", "Companheiro(a)", "Filho menor de 21 anos", "Filho inválido/deficiente (qualquer idade)"],
      dependencia: "PRESUMIDA (não precisa provar)",
      cor: "green"
    },
    {
      classe: "2",
      titulo: "Classe 2",
      membros: ["Pais do segurado"],
      dependencia: "Deve ser COMPROVADA documentalmente",
      cor: "blue"
    },
    {
      classe: "3",
      titulo: "Classe 3",
      membros: ["Irmão menor de 21 anos", "Irmão inválido/deficiente"],
      dependencia: "Deve ser COMPROVADA documentalmente",
      cor: "purple"
    }
  ];

  const duracaoPensao = [
    { idade: "Menos de 22 anos", duracao: "3 anos" },
    { idade: "22 a 27 anos", duracao: "6 anos" },
    { idade: "28 a 30 anos", duracao: "10 anos" },
    { idade: "31 a 41 anos", duracao: "15 anos" },
    { idade: "42 a 44 anos", duracao: "20 anos" },
    { idade: "45 anos ou mais", duracao: "Vitalícia" }
  ];

  const documentosUniaoEstavel = [
    "Conta bancária conjunta (com movimentações há anos)",
    "Escritura de imóvel em conjunto",
    "Filho em comum (certidão de nascimento)",
    "Declaração de união estável em cartório (ANTES do óbito)",
    "Plano de saúde (um como dependente do outro)",
    "Declaração de IR (um como dependente)",
    "Contrato de aluguel em nome de ambos",
    "Fotos do casal em eventos familiares",
    "Testemunhas (vizinhos, amigos, familiares)"
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Heart className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pensão por Morte</h1>
          <p className="text-muted-foreground">Benefício para dependentes</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>O que é:</strong> Benefício pago aos <strong>dependentes do segurado</strong> do INSS que faleceu.
            Serve para garantir o sustento da família que dependia economicamente do falecido.
            <strong> NÃO há carência</strong> - pode ser concedido mesmo com apenas 1 contribuição.
          </p>
        </CardContent>
      </Card>

      {/* Valor */}
      <Card>
        <CardHeader>
          <CardTitle>Cálculo do Valor (Após Reforma)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-mono text-sm mb-2">50% (cota familiar) + 10% por dependente = até 100%</p>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="font-bold text-blue-800 text-sm">Exemplo:</p>
            <p className="text-sm">Falecido: R$ 3.000 | Esposa + 2 filhos = 3 dependentes</p>
            <p className="text-sm">Cálculo: 50% + (10% × 3) = 80%</p>
            <p className="text-sm font-bold">Pensão: R$ 3.000 × 80% = R$ 2.400</p>
            <p className="text-xs text-muted-foreground mt-1">Cada dependente: R$ 800</p>
          </div>
        </CardContent>
      </Card>

      {/* Classes de dependentes */}
      <div className="space-y-4">
        {classesDependentes.map((classe) => (
          <Card key={classe.classe} className={`border-${classe.cor}-200`}>
            <CardHeader className={`bg-${classe.cor}-50 rounded-t-lg`}>
              <CardTitle className={`text-${classe.cor}-800 text-lg`}>
                {classe.titulo}
              </CardTitle>
              <CardDescription className={`text-${classe.cor}-600`}>
                Dependência: {classe.dependencia}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-wrap gap-2">
                {classe.membros.map((membro, i) => (
                  <Badge key={i} variant="outline">{membro}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Regra de Exclusão</AlertTitle>
        <AlertDescription className="text-amber-700">
          A existência de dependentes da Classe 1 <strong>EXCLUI</strong> as demais classes.
          Pais só têm direito se não houver cônjuge/companheiro/filhos.
        </AlertDescription>
      </Alert>

      {/* Duração para cônjuge */}
      <Card>
        <CardHeader>
          <CardTitle>Duração da Pensão (Cônjuge/Companheiro)</CardTitle>
          <CardDescription>Conforme idade na data do óbito</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Idade do Dependente</th>
                  <th className="text-left py-2">Duração</th>
                </tr>
              </thead>
              <tbody>
                {duracaoPensao.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">{item.idade}</td>
                    <td className="py-2">
                      <Badge className={item.duracao === "Vitalícia" ? "bg-green-500" : "bg-blue-500"}>
                        {item.duracao}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Se casamento/união tinha menos de 2 anos E falecido tinha menos de 18 contribuições:
            pensão dura apenas 4 meses (salvo morte acidental).
          </p>
        </CardContent>
      </Card>

      {/* União Estável */}
      <Accordion type="single" collapsible>
        <AccordionItem value="uniao" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Documentos para União Estável (Mais Complexo)
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <p className="text-sm mb-3 text-amber-700">
              <strong>INSS é muito rigoroso.</strong> Quanto mais documentos de períodos diferentes ao longo
              do relacionamento, melhor.
            </p>
            <ul className="space-y-2">
              {documentosUniaoEstavel.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Erros comuns */}
      <Card className="border-red-200">
        <CardHeader className="bg-red-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-red-800">
            <XCircle className="w-5 h-5" />
            Erros Comuns
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-2 text-sm">
          <p><strong>Erro 1:</strong> Não verificar a classe de dependentes</p>
          <p><strong>Erro 2:</strong> Aceitar união estável sem documentação mínima</p>
          <p><strong>Erro 3:</strong> Não alertar sobre pensão de curta duração (4 meses)</p>
          <p><strong>Erro 4:</strong> Não perguntar sobre outros dependentes (pensão é dividida)</p>
          <p><strong>Erro 5:</strong> Aceitar caso de pais/irmãos sem prova de dependência econômica</p>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Novo Casamento</AlertTitle>
        <AlertDescription>
          Após a Lei 13.135/2015, cônjuge/companheiro que casa novamente <strong>NÃO perde mais</strong> o
          direito à pensão. Mudança importante em relação à regra anterior.
        </AlertDescription>
      </Alert>

      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Quando Dependente Sai</AlertTitle>
        <AlertDescription className="text-amber-700">
          Quando um dependente perde o direito (filho completa 21 anos, por exemplo), a cota dele é
          <strong> EXTINTA</strong> (não é redistribuída). A pensão total é recalculada para menos.
        </AlertDescription>
      </Alert>
    </div>
  );
}
