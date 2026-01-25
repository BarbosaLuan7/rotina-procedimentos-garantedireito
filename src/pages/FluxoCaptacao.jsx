import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Users, MessageSquare, FileCheck, Send, CheckCircle2, ArrowRight, Lightbulb } from "lucide-react";

export default function FluxoCaptacao() {
  const responsaveis = ["Anna Luiza", "Lunny Fernanda", "André Nobre"];

  const etapas = [
    {
      numero: 1,
      titulo: "Triagem de Leads",
      icon: MessageSquare,
      descricao: "Após o cliente chegar por meio das campanhas, é realizada uma breve conversa via WhatsApp para identificar se ele possui direito ao benefício.",
      acoes: [
        "Conversa inicial via WhatsApp",
        "Identificar perfil do cliente",
        "Verificar se possui direito ao benefício",
        "Se apto, agendar reunião por telefone"
      ]
    },
    {
      numero: 2,
      titulo: "Fechamento de Contrato",
      icon: FileCheck,
      descricao: "Durante a reunião telefônica, são esclarecidas as dúvidas do cliente e, se houver viabilidade, procede-se ao fechamento do contrato.",
      acoes: [
        "Realizar ligação no horário agendado",
        "Esclarecer dúvidas do cliente",
        "Explicar o benefício adequado",
        "Apresentar contrato e honorários",
        "Fechar contrato se viável"
      ]
    },
    {
      numero: 3,
      titulo: "Coleta de Documentação",
      icon: Send,
      descricao: "Após o fechamento, a comunicação retorna ao WhatsApp para envio dos documentos necessários ao cliente.",
      acoes: [
        "Enviar documentos: procuração, contrato de honorários, declaração de hipossuficiência, termo de renúncia",
        "Aguardar retorno com assinaturas",
        "Solicitar documentos adicionais do cliente"
      ]
    }
  ];

  const documentosSolicitados = [
    "Documentos médicos que tiver (caso ainda não tenha enviado)",
    "Nome e número de telefone de contato de emergência",
    "Senha do portal Meu INSS"
  ];

  const procedimentosAposDocumentos = [
    "Criar a pasta do cliente com toda a documentação",
    "Registrar o contrato fechado na planilha de controle",
    "Elaborar o relatório no Astrea e abrir prazo para análise",
    "Transferir o contato para o GD Prev"
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Etapa 1 - Captação e Triagem</h1>
          <p className="text-muted-foreground">Primeiro contato até o fechamento do contrato</p>
        </div>
      </div>

      {/* Responsáveis */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium">Responsáveis:</span>
            {responsaveis.map((resp, index) => (
              <Badge key={index} variant="secondary">{resp}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline das etapas */}
      <div className="space-y-4">
        {etapas.map((etapa, index) => (
          <Card key={etapa.numero} className="relative">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {etapa.numero}
                </div>
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    <etapa.icon className="w-5 h-5 text-primary" />
                    {etapa.titulo}
                  </CardTitle>
                  <CardDescription>{etapa.descricao}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {etapa.acoes.map((acao, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{acao}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            {index < etapas.length - 1 && (
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Mensagem padrão */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            Mensagem Padrão ao Cliente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white p-4 rounded-lg border">
            <p className="whitespace-pre-line text-sm">
              Vou precisar que me envie:
              {"\n\n"}
              {documentosSolicitados.map((doc, i) => `• ${doc}`).join("\n")}
              {"\n\n"}
              Fico no aguardo do envio do solicitado. Qualquer dúvida, permaneço à disposição.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Procedimentos após documentos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-primary" />
            Procedimentos Após Receber Documentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            {procedimentosAposDocumentos.map((proc, i) => (
              <li key={i} className="flex items-start gap-3">
                <Badge className="bg-primary">{i + 1}</Badge>
                <span>{proc}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Dica</AlertTitle>
        <AlertDescription>
          Use o <strong>Checklist de Perguntas</strong> durante a triagem e o <strong>Script de Ligação</strong> durante o fechamento para garantir que todas as informações sejam coletadas.
        </AlertDescription>
      </Alert>
    </div>
  );
}
