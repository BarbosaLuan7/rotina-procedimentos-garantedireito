import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, UserCheck, Edit3, Zap, AlertTriangle, Lightbulb, Phone, Clock } from "lucide-react";

export default function Conversapp() {
  const mensagensRapidas = [
    { comando: "/boasvindas", descricao: "Mensagem inicial de boas-vindas ao novo cliente" },
    { comando: "/documentos", descricao: "Lista de documentos necessários para análise" },
    { comando: "/prazo", descricao: "Informar prazo de análise do INSS" },
    { comando: "/pericia", descricao: "Orientações para dia da perícia" },
    { comando: "/concedido", descricao: "Comunicar concessão do benefício" },
    { comando: "/negado", descricao: "Comunicar negativa e próximos passos" },
    { comando: "/recurso", descricao: "Explicar processo de recurso" },
    { comando: "/atualizacao", descricao: "Atualização de status do processo" }
  ];

  const regrasIdentificacao = [
    "Sempre iniciar com: 'Olá, aqui é [seu nome] da equipe GaranteDireito'",
    "Identificar-se em TODA nova conversa",
    "Não usar apelidos ou abreviações do escritório",
    "Manter tom profissional e acolhedor"
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <MessageSquare className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Conversapp</h1>
          <p className="text-muted-foreground">Sistema de Comunicação com Clientes</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            O Conversapp é nossa ferramenta de comunicação com clientes via WhatsApp.
            <strong> Toda comunicação deve ser profissional, clara e documentada.</strong>
          </p>
        </CardContent>
      </Card>

      {/* Obrigatório identificar-se */}
      <Card className="border-red-200">
        <CardHeader className="bg-red-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-red-800">
            <UserCheck className="w-5 h-5" />
            Obrigatório: Identificar-se
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm mb-4">
            É <strong className="text-red-700">OBRIGATÓRIO</strong> se identificar ao enviar mensagem para o cliente.
          </p>
          <ul className="space-y-2">
            {regrasIdentificacao.map((regra, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Badge variant="outline" className="text-xs mt-0.5">{i + 1}</Badge>
                <span>{regra}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Exemplo correto:</strong> "Olá, Dona Maria! Aqui é o João da equipe GaranteDireito.
              Estou entrando em contato para informar sobre o andamento do seu processo..."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Editar nome do contato */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-primary" />
            Sempre Editar o Nome do Contato
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            Facilite a identificação por toda a equipe editando o nome do contato.
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 rounded border border-red-200">
              <p className="text-sm"><strong>❌ Antes:</strong> +55 11 99999-9999</p>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-2xl">⬇️</span>
            </div>
            <div className="p-3 bg-green-50 rounded border border-green-200">
              <p className="text-sm"><strong>✅ Depois:</strong> Maria Silva - BPC/LOAS</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Inclua o nome do cliente e o tipo de benefício para fácil identificação.
          </p>
        </CardContent>
      </Card>

      {/* Mensagens Rápidas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Mensagens Rápidas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            Digite <code className="bg-muted px-2 py-1 rounded">/</code> no campo de mensagem para acessar os atalhos:
          </p>
          <div className="space-y-2">
            {mensagensRapidas.map((msg, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-muted rounded">
                <code className="text-sm text-primary font-mono">{msg.comando}</code>
                <span className="text-sm text-muted-foreground">{msg.descricao}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Horários de Atendimento */}
      <Card className="border-blue-200">
        <CardHeader className="bg-blue-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Clock className="w-5 h-5" />
            Horários de Atendimento
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 bg-muted rounded">
              <p className="font-bold text-sm">Segunda a Sexta</p>
              <p className="text-sm">08:00 às 18:00</p>
            </div>
            <div className="p-3 bg-muted rounded">
              <p className="font-bold text-sm">Sábado</p>
              <p className="text-sm">08:00 às 12:00</p>
            </div>
          </div>
          <Alert className="mt-4 border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-700 text-sm">
              <strong>Fora do horário:</strong> Não responder mensagens. O cliente receberá
              resposta automática informando o horário de atendimento.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Boas Práticas */}
      <Accordion type="single" collapsible>
        <AccordionItem value="praticas" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Boas Práticas de Comunicação
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-3">
            <div className="p-3 bg-green-50 rounded text-sm">
              <strong className="text-green-800">✅ Faça:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-green-700">
                <li>Responder em até 2 horas úteis</li>
                <li>Usar linguagem clara e acessível</li>
                <li>Confirmar recebimento de documentos</li>
                <li>Explicar termos técnicos</li>
                <li>Registrar conversas importantes no Astrea</li>
              </ul>
            </div>
            <div className="p-3 bg-red-50 rounded text-sm">
              <strong className="text-red-800">❌ Evite:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-red-700">
                <li>Prometer resultados ou prazos específicos</li>
                <li>Discutir valores de honorários por mensagem</li>
                <li>Enviar áudios longos (prefira texto)</li>
                <li>Responder de forma seca ou ríspida</li>
                <li>Deixar cliente sem resposta por mais de 24h</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Situações Especiais */}
      <Card className="border-purple-200">
        <CardHeader className="bg-purple-50 rounded-t-lg">
          <CardTitle className="text-purple-800">Situações Especiais</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-3">
          <div className="p-3 bg-muted rounded">
            <p className="font-bold text-sm mb-1">Cliente ansioso/nervoso</p>
            <p className="text-xs text-muted-foreground">
              Seja empático, explique os prazos normais do INSS, ofereça atualização semanal.
            </p>
          </div>
          <div className="p-3 bg-muted rounded">
            <p className="font-bold text-sm mb-1">Reclamação</p>
            <p className="text-xs text-muted-foreground">
              Não discuta. Registre a reclamação e encaminhe para o advogado responsável.
            </p>
          </div>
          <div className="p-3 bg-muted rounded">
            <p className="font-bold text-sm mb-1">Dúvida técnica complexa</p>
            <p className="text-xs text-muted-foreground">
              Informe que vai verificar e retornar. Não invente respostas.
            </p>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <Phone className="h-4 w-4" />
        <AlertTitle>Ligações</AlertTitle>
        <AlertDescription>
          Para assuntos complexos ou clientes idosos, prefira ligação telefônica.
          Sempre registre no Astrea o resumo da conversa após a ligação.
        </AlertDescription>
      </Alert>
    </div>
  );
}
