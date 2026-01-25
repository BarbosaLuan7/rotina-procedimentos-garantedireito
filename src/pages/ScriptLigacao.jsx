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
import { Phone, MessageCircle, FileText, ClipboardCheck, HelpCircle, Lightbulb, DollarSign, AlertTriangle } from "lucide-react";

export default function ScriptLigacao() {
  const etapas = [
    {
      numero: 1,
      titulo: "Apresentação Inicial",
      icon: Phone,
      conteudo: (
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium mb-2">Confirmar disponibilidade do cliente:</p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Olá, meu nome é André, sou advogado da Garante Direito. Gostaria de confirmar se a senhora está disponível agora para conversarmos sobre o seu caso, conforme o horário agendado. Podemos prosseguir?"
            </blockquote>
          </div>
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Dica</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Seja cordial e profissional</li>
                <li>Confirme o nome do cliente antes de continuar</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      ),
    },
    {
      numero: 2,
      titulo: "Entender o Problema",
      icon: MessageCircle,
      conteudo: (
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium mb-2">Ouvir atentamente o relato do cliente:</p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Para que possamos entender melhor a sua situação, a senhora poderia me contar qual é o problema ou a dificuldade que está enfrentando?"
            </blockquote>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium mb-2">Demonstrar empatia e atenção:</p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Vou ouvir com atenção todos os detalhes que a senhora fornecer para que possamos analisar o seu caso da melhor forma possível. Por favor, sinta-se à vontade para explicar tudo o que achar relevante."
            </blockquote>
          </div>
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Dica</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Use o <strong>Checklist de Perguntas</strong> para guiar a conversa</li>
                <li>Anote todos os detalhes importantes</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      ),
    },
    {
      numero: 3,
      titulo: "Explicação do Benefício",
      icon: FileText,
      conteudo: (
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium mb-2">Identificar o benefício adequado:</p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Com base no que a senhora me relatou, acredito que o benefício mais adequado para o seu caso seja [NOME DO BENEFÍCIO]. Vou explicar como podemos prosseguir para buscar esse direito."
            </blockquote>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium mb-2">Transição para o contrato:</p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Agora, gostaria de esclarecer como funciona o nosso contrato de prestação de serviços. Vamos trabalhar para garantir o seu benefício, e explicarei todos os detalhes, incluindo os passos do processo e nossa política de honorários."
            </blockquote>
          </div>
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Dica</AlertTitle>
            <AlertDescription>
              Consulte as fichas de benefícios no menu lateral para detalhes específicos de cada tipo.
            </AlertDescription>
          </Alert>
        </div>
      ),
    },
    {
      numero: 4,
      titulo: "Explicação do Contrato",
      icon: ClipboardCheck,
      conteudo: (
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg space-y-3">
            <p className="font-medium">Explicar o processo administrativo:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>O processo começa com um pedido administrativo no INSS</li>
              <li>A senhora passará por uma perícia médica</li>
              <li>Se for comprovada a incapacidade e o benefício for concedido:</li>
            </ul>
          </div>

          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Honorários - Via Administrativa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="border-l-4 border-green-600 pl-4 italic">
                "O escritório cobrará honorários equivalentes a TRÊS BENEFÍCIOS. Depois disso, a senhora não deve mais nada para nós."
              </blockquote>
            </CardContent>
          </Card>

          <div className="p-4 bg-muted rounded-lg space-y-3">
            <p className="font-medium">Se for negado - Via Judicial:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Se o pedido for negado no administrativo, o caso será levado ao judiciário</li>
              <li>A senhora passará por outra perícia</li>
              <li>Se o juiz reconhecer o direito ao benefício:</li>
            </ul>
          </div>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                Honorários - Via Judicial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="border-l-4 border-blue-600 pl-4 italic">
                "O escritório cobrará 30% do valor retroativo + 30% de uma anuidade."
              </blockquote>
            </CardContent>
          </Card>

          <Alert className="bg-amber-50 border-amber-200">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-800">Pontos Importantes sobre Pagamento</AlertTitle>
            <AlertDescription className="text-amber-700">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>NÃO há cobrança inicial para entrar com a ação</li>
                <li>O escritório SÓ recebe se a senhora GANHAR o benefício</li>
                <li>Nenhum valor é pago diretamente ao escritório</li>
                <li>Todo o valor do benefício é depositado primeiro na conta da senhora</li>
                <li>Após receber o benefício, a senhora repassa os honorários ao escritório</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      ),
    },
    {
      numero: 5,
      titulo: "Dúvidas e Encerramento",
      icon: HelpCircle,
      conteudo: (
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium mb-2">Abrir espaço para perguntas:</p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "A senhora pode perguntar qualquer dúvida, que será respondida agora."
            </blockquote>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Solicitar documentos necessários (se fechou)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">1</Badge>
                  Senha do gov.br
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">2</Badge>
                  Documentos médicos (laudos, atestados, exames)
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">3</Badge>
                  Contato de emergência (nome e telefone)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Dica</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Consulte as fichas de benefícios para lista completa de documentos por tipo</li>
                <li>Consulte as Mensagens Padrões para follow-up</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Phone className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Script de Ligação</h1>
          <p className="text-muted-foreground">Roteiro completo de atendimento telefônico</p>
        </div>
      </div>

      {/* Timeline das etapas */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
        {etapas.map((etapa, index) => (
          <React.Fragment key={etapa.numero}>
            <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg">
              <Badge className="bg-primary">{etapa.numero}</Badge>
              <span className="text-sm font-medium">{etapa.titulo}</span>
            </div>
            {index < etapas.length - 1 && (
              <div className="w-8 h-0.5 bg-primary/30 hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Accordion com as etapas */}
      <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
        {etapas.map((etapa) => (
          <AccordionItem key={etapa.numero} value={`item-${etapa.numero}`} className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {etapa.numero}
                </div>
                <etapa.icon className="w-5 h-5 text-primary" />
                <span className="font-semibold text-lg">{etapa.titulo}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              {etapa.conteudo}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Resumo dos honorários */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Resumo dos Honorários
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <h3 className="font-bold text-green-800 mb-2">Via Administrativa</h3>
              <p className="text-2xl font-bold text-green-600">3 benefícios</p>
              <p className="text-sm text-green-700">(pagamento único)</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <h3 className="font-bold text-blue-800 mb-2">Via Judicial</h3>
              <p className="text-2xl font-bold text-blue-600">30% retroativo</p>
              <p className="text-sm text-blue-700">+ 30% anuidade</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
