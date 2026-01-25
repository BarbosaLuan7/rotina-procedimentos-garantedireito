import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Search, CheckCircle2, FileText, Calendar, Key, AlertTriangle, Lightbulb } from "lucide-react";

export default function FluxoAnalise() {
  const atividades = [
    {
      numero: 1,
      titulo: "Verificar Benefício Fechado",
      descricao: "Confirmar se o benefício fechado corresponde efetivamente ao direito do cliente.",
      icon: FileText,
      importante: true
    },
    {
      numero: 2,
      titulo: "Verificar Senha do MEU INSS",
      descricao: "Confirmar se a senha do portal Meu INSS foi solicitada ao cliente.",
      icon: Key,
      importante: false
    },
    {
      numero: 3,
      titulo: "Conferir Documentação",
      descricao: "Verificar se todos os documentos necessários para a elaboração da peça foram devidamente requisitados e recebidos.",
      icon: CheckCircle2,
      importante: true
    },
    {
      numero: 4,
      titulo: "Agendar Prazos",
      descricao: "Agendar os prazos para elaboração e protocolo do processo, seja administrativo ou judicial, conforme o caso.",
      icon: Calendar,
      importante: false
    }
  ];

  const checklistVerificacao = [
    { item: "Benefício identificado está correto para o caso?", categoria: "Benefício" },
    { item: "Cliente tem os requisitos mínimos?", categoria: "Benefício" },
    { item: "Senha do Meu INSS foi solicitada?", categoria: "Acesso" },
    { item: "Cliente já possui senha do Meu INSS?", categoria: "Acesso" },
    { item: "RG/CPF do cliente", categoria: "Documentos" },
    { item: "Comprovante de residência", categoria: "Documentos" },
    { item: "Documentos médicos (laudos, exames)", categoria: "Documentos" },
    { item: "CTPS ou extrato CNIS", categoria: "Documentos" },
    { item: "Procuração assinada", categoria: "Contrato" },
    { item: "Contrato de honorários assinado", categoria: "Contrato" },
    { item: "Declaração de hipossuficiência", categoria: "Contrato" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Search className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Etapa 2 - Análise Inicial</h1>
          <p className="text-muted-foreground">Verificação do caso e documentação</p>
        </div>
      </div>

      {/* Responsável */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">Responsável:</span>
            <Badge variant="secondary">Luana Maestrelo</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Atividades principais */}
      <div className="grid gap-4 md:grid-cols-2">
        {atividades.map((atividade) => (
          <Card key={atividade.numero} className={atividade.importante ? "border-amber-200 bg-amber-50/50" : ""}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {atividade.numero}
                </div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <atividade.icon className="w-4 h-4 text-primary" />
                  {atividade.titulo}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{atividade.descricao}</p>
              {atividade.importante && (
                <Badge className="mt-2 bg-amber-500">Crítico</Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Checklist de verificação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Checklist de Verificação
          </CardTitle>
          <CardDescription>
            Itens a serem verificados antes de prosseguir para elaboração
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {["Benefício", "Acesso", "Documentos", "Contrato"].map((categoria) => (
              <div key={categoria}>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Badge variant="outline">{categoria}</Badge>
                </h4>
                <ul className="space-y-2 ml-4">
                  {checklistVerificacao
                    .filter((item) => item.categoria === categoria)
                    .map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-4 h-4 border rounded flex-shrink-0" />
                        {item.item}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alertas importantes */}
      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Atenção</AlertTitle>
        <AlertDescription className="text-amber-700">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Verificar se o benefício fechado realmente corresponde ao direito do cliente</li>
            <li>Não prosseguir sem senha do Meu INSS ou documentação completa</li>
            <li>Agendar prazos realistas no Astrea</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Próximo Passo</AlertTitle>
        <AlertDescription>
          Após a análise inicial ser concluída e validada, o caso segue para a <strong>Etapa 3 - Processo Administrativo</strong> onde será elaborado e protocolado o requerimento junto ao INSS.
        </AlertDescription>
      </Alert>
    </div>
  );
}
