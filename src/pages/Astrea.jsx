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
import { FileText, CheckCircle2, AlertTriangle, Lightbulb, Tag, MessageSquare, Clock } from "lucide-react";

export default function Astrea() {
  const etiquetasProcesso = [
    { etiqueta: "Aguardando documentos", cor: "bg-yellow-500", uso: "Cliente precisa enviar documentação" },
    { etiqueta: "Em análise", cor: "bg-blue-500", uso: "Processo sendo analisado internamente" },
    { etiqueta: "Administrativo INSS", cor: "bg-purple-500", uso: "Processo em fase administrativa" },
    { etiqueta: "Judicial", cor: "bg-red-500", uso: "Processo judicializado" },
    { etiqueta: "Perícia agendada", cor: "bg-orange-500", uso: "Aguardando data de perícia" },
    { etiqueta: "Concedido", cor: "bg-green-500", uso: "Benefício concedido" },
    { etiqueta: "Negado - Recurso", cor: "bg-red-600", uso: "Negado, preparando recurso" },
    { etiqueta: "Finalizado", cor: "bg-gray-500", uso: "Processo encerrado" }
  ];

  const prazosImportantes = [
    { prazo: "Recurso Administrativo", dias: "30 dias", obs: "Da data da ciência da decisão" },
    { prazo: "Ação Judicial (prescrição)", dias: "5 anos", obs: "Do indeferimento definitivo" },
    { prazo: "Revisão de Benefício", dias: "10 anos", obs: "Da data de concessão" },
    { prazo: "Recurso ao CRPS", dias: "30 dias", obs: "Da decisão da Junta de Recursos" },
    { prazo: "Pedido de Reconsideração", dias: "30 dias", obs: "Da ciência da decisão" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Astrea</h1>
          <p className="text-muted-foreground">Sistema de Gestão de Processos</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>O Astrea é a coluna vertebral do escritório.</strong> Tudo que for feito ou observado
            no processo deve ser sempre atualizado através de comentários para facilitar o entendimento
            de todos e daqueles que forem, por algum motivo, dar sequência naquele processo.
          </p>
        </CardContent>
      </Card>

      {/* Regra de Ouro */}
      <Alert className="border-green-200 bg-green-50">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-800">Regra de Ouro</AlertTitle>
        <AlertDescription className="text-green-700">
          Com um processo devidamente comentado e atualizado, <strong>evitamos retrabalhos</strong>.
          Sempre comente TODAS as atividades, prazos e movimentações.
        </AlertDescription>
      </Alert>

      {/* Nomenclatura */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-primary" />
            Nomenclatura de Processos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-muted rounded-lg mb-4">
            <p className="text-sm mb-2"><strong>Padrão obrigatório para títulos:</strong></p>
            <code className="bg-white p-2 rounded border block text-sm">
              [BENEFÍCIO] | Nome do Cliente | NB ou NIT
            </code>
          </div>
          <div className="space-y-2">
            <p className="text-sm"><strong>Exemplos:</strong></p>
            <div className="p-3 bg-blue-50 rounded text-sm">
              BPC/LOAS | Maria da Silva | NIT 123.456.789-00
            </div>
            <div className="p-3 bg-blue-50 rounded text-sm">
              AUXÍLIO-DOENÇA | João Santos | NB 42/123.456.789-0
            </div>
            <div className="p-3 bg-blue-50 rounded text-sm">
              APOSENTADORIA | Pedro Oliveira | Análise Inicial
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Etiquetas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-primary" />
            Etiquetas Padrão
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {etiquetasProcesso.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted rounded">
                <div className="flex items-center gap-3">
                  <Badge className={item.cor}>{item.etiqueta}</Badge>
                </div>
                <span className="text-sm text-muted-foreground">{item.uso}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Prazos */}
      <Card className="border-amber-200">
        <CardHeader className="bg-amber-50 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-amber-800">
            <Clock className="w-5 h-5" />
            Prazos Importantes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Tipo</th>
                  <th className="text-left py-2">Prazo</th>
                  <th className="text-left py-2">Observação</th>
                </tr>
              </thead>
              <tbody>
                {prazosImportantes.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">{item.prazo}</td>
                    <td className="py-2">
                      <Badge variant="outline">{item.dias}</Badge>
                    </td>
                    <td className="py-2 text-xs text-muted-foreground">{item.obs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Comentários */}
      <Accordion type="single" collapsible>
        <AccordionItem value="comentarios" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Boas Práticas de Comentários
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>✅ Correto:</strong> "Protocolo NB 42/123.456.789-0 realizado em 15/01/2025.
                  Aguardando análise INSS. Prazo estimado: 45 dias."
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded border border-red-200">
                <p className="text-sm text-red-800">
                  <strong>❌ Incorreto:</strong> "Protocolo feito"
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Sempre inclua: data, números de protocolo/benefício, próximos passos e prazos.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Ao finalizar processo */}
      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Ao Finalizar um Processo</AlertTitle>
        <AlertDescription className="text-amber-700">
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Atualizar etiqueta para "Concedido" ou "Finalizado"</li>
            <li>Registrar resultado final nos comentários</li>
            <li>Incluir valor do benefício (se concedido)</li>
            <li>Arquivar documentação na pasta do cliente</li>
            <li>Desativar alertas de prazo</li>
          </ol>
        </AlertDescription>
      </Alert>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Dica</AlertTitle>
        <AlertDescription>
          Configure alertas automáticos para prazos críticos. Revise semanalmente os processos
          com etiqueta "Aguardando documentos" para cobrar o cliente.
        </AlertDescription>
      </Alert>
    </div>
  );
}
