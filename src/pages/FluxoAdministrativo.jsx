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
import { FileText, Send, Calendar, Bell, CheckCircle2, MessageSquare, ArrowRight, Lightbulb, Clock } from "lucide-react";

export default function FluxoAdministrativo() {
  const faseElaboracao = {
    responsavel: "Eduardo Guiven",
    atividades: [
      "Elaborar a peça administrativa e organizar toda a documentação",
      "Caso o cliente não possua senha do Meu INSS, solicitá-la",
      "Se faltar documentos, contatar o cliente para providenciá-los",
      "Encaminhar requerimento à Luana Maestrelo para revisão"
    ]
  };

  const faseRevisao = {
    responsavel: "Luana Maestrelo",
    atividades: [
      "Revisar o requerimento administrativo",
      "Realizar correções necessárias",
      "Devolver prazo ao estagiário para protocolo"
    ]
  };

  const faseProtocolo = {
    responsavel: "Eduardo Guiven",
    atividades: [
      "Realizar o protocolo administrativo no INSS",
      "Agendar perícia médica e/ou avaliação social",
      "Registrar informações no Astrea",
      "Comunicar datas ao cliente",
      "Se INSS não liberar datas, criar prazo de acompanhamento",
      "3 dias antes: lembrar cliente da perícia",
      "Agendar PREVEDOC quando necessário"
    ]
  };

  const mensagemProtocolo = `Sra. [Nome], protocolamos seu pedido junto ao INSS e as perícias foram agendadas para as seguintes datas:

Perícia de Avaliação Social:
Data: [Data] às [Hora]
Local: [Endereço completo]

Perícia de Avaliação Médica:
Data: [Data] às [Hora]
Local: [Endereço completo]

Lembrando que a advogada responsável entrará em contato com a senhora um dia antes de cada perícia para repassar as orientações necessárias.`;

  const mensagemLembrete = `Bom dia, Sr. [Nome]!

Esperamos que esteja tudo bem! Sou o [Nome do responsável], do escritório Garante Direito.

Lembrando que foi designada perícia no seu processo para o dia [Data] às [Hora].

Local: [Endereço completo]

A advogada responsável entrará em contato no dia [Data da ligação de orientação] para repassar todas as orientações pertinentes.

Importante: leve todos os documentos médicos no dia da perícia.

Favor confirmar o recebimento desta mensagem.

Dúvidas, estamos à disposição.
Equipe Garante Direito.`;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Etapa 3 - Processo Administrativo</h1>
          <p className="text-muted-foreground">Elaboração e protocolo do pedido no INSS</p>
        </div>
      </div>

      {/* Fluxo Visual */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
        <Badge className="bg-blue-500 text-white px-4 py-2">Elaboração</Badge>
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
        <Badge className="bg-purple-500 text-white px-4 py-2">Revisão</Badge>
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
        <Badge className="bg-green-500 text-white px-4 py-2">Protocolo</Badge>
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
        <Badge className="bg-amber-500 text-white px-4 py-2">Acompanhamento</Badge>
      </div>

      <Accordion type="single" collapsible defaultValue="elaboracao" className="space-y-4">
        {/* Fase 1: Elaboração */}
        <AccordionItem value="elaboracao" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="text-left">
                <span className="font-semibold text-lg">Elaboração da Peça</span>
                <p className="text-sm text-muted-foreground font-normal">Responsável: {faseElaboracao.responsavel}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {faseElaboracao.atividades.map((atividade, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{atividade}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Fase 2: Revisão */}
        <AccordionItem value="revisao" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="text-left">
                <span className="font-semibold text-lg">Revisão e Validação</span>
                <p className="text-sm text-muted-foreground font-normal">Responsável: {faseRevisao.responsavel}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {faseRevisao.atividades.map((atividade, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{atividade}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Fase 3: Protocolo */}
        <AccordionItem value="protocolo" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="text-left">
                <span className="font-semibold text-lg">Protocolo e Agendamento</span>
                <p className="text-sm text-muted-foreground font-normal">Responsável: {faseProtocolo.responsavel}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-2">
              {faseProtocolo.atividades.map((atividade, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{atividade}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Mensagens Padrão */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Send className="w-5 h-5 text-green-600" />
              Após Protocolo
            </CardTitle>
            <CardDescription>Comunicar agendamento das perícias</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap text-xs bg-white p-3 rounded-lg border max-h-48 overflow-y-auto">
              {mensagemProtocolo}
            </pre>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5 text-amber-600" />
              Lembrete de Perícia
            </CardTitle>
            <CardDescription>3 dias antes da perícia</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap text-xs bg-white p-3 rounded-lg border max-h-48 overflow-y-auto">
              {mensagemLembrete}
            </pre>
          </CardContent>
        </Card>
      </div>

      {/* Acompanhamento */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Etapa 5 - Acompanhamento
          </CardTitle>
          <CardDescription>Responsáveis: Eduardo Guiven e Luana Maestrelo</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">Atualização de informações ao cliente via WhatsApp sobre seu pedido</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">Orientações sobre perícias e avaliações sociais</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Próximo Passo</AlertTitle>
        <AlertDescription>
          Após o resultado do INSS, se <strong>positivo</strong>: comunicar ao cliente e elaborar carta de concessão.
          Se <strong>negativo</strong>: agendar prazo no Astrea para ajuizamento de ação judicial.
        </AlertDescription>
      </Alert>
    </div>
  );
}
