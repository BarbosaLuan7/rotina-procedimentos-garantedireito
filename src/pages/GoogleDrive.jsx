import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FolderOpen, FileText, AlertTriangle, CheckCircle2, Lightbulb, ExternalLink, Download } from "lucide-react";

export default function GoogleDrive() {
  const estruturaPastas = [
    { pasta: "01 - Clientes Ativos", descricao: "Processos em andamento" },
    { pasta: "02 - Clientes Finalizados", descricao: "Processos concluídos" },
    { pasta: "03 - Modelos", descricao: "Templates de documentos" },
    { pasta: "04 - Jurisprudência", descricao: "Decisões e precedentes úteis" },
    { pasta: "05 - Materiais de Estudo", descricao: "Atualizações legislativas" }
  ];

  const pastaCliente = [
    "01 - Documentos Pessoais (RG, CPF, comprovante residência)",
    "02 - Documentos Médicos (laudos, atestados, exames)",
    "03 - Documentos Trabalhistas (CNIS, CTPS, carnês)",
    "04 - Requerimento Administrativo",
    "05 - Recursos",
    "06 - Processo Judicial",
    "07 - Comunicações (prints importantes)"
  ];

  const nomenclaturaArquivos = [
    { tipo: "Laudo Médico", exemplo: "LAUDO_DR_FULANO_15-01-2025.pdf" },
    { tipo: "CNIS", exemplo: "CNIS_ATUALIZADO_15-01-2025.pdf" },
    { tipo: "RG", exemplo: "RG_FRENTE_VERSO.pdf" },
    { tipo: "Requerimento", exemplo: "REQ_BPC_NB_123456789_15-01-2025.pdf" },
    { tipo: "Recurso", exemplo: "RECURSO_INSS_15-01-2025.pdf" },
    { tipo: "Sentença", exemplo: "SENTENCA_PROC_0001234_15-01-2025.pdf" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <FolderOpen className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Google Drive</h1>
          <p className="text-muted-foreground">Organização de Arquivos e Documentos</p>
        </div>
      </div>

      {/* Descrição */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <p className="text-sm">
            <strong>Todos os arquivos do cliente devem ser salvos no Drive.</strong> Manter a organização
            padronizada é fundamental para que qualquer membro da equipe encontre rapidamente o que precisa.
          </p>
        </CardContent>
      </Card>

      {/* Acesso Rápido */}
      <Card className="border-green-200">
        <CardHeader className="bg-green-50 rounded-t-lg">
          <CardTitle className="text-green-800">Acesso Rápido</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-3">
          <Button className="w-full justify-start gap-2" variant="outline">
            <ExternalLink className="w-4 h-4" />
            Pasta de Modelos Atualizados
          </Button>
          <Button className="w-full justify-start gap-2" variant="outline">
            <ExternalLink className="w-4 h-4" />
            Pasta de Clientes Ativos
          </Button>
          <p className="text-xs text-muted-foreground">
            * Configure os links no painel de administração
          </p>
        </CardContent>
      </Card>

      {/* Estrutura de Pastas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-primary" />
            Estrutura de Pastas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {estruturaPastas.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted rounded">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">{item.pasta}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.descricao}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pasta do Cliente */}
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="cliente" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Estrutura da Pasta do Cliente
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <p className="text-sm mb-3">
              Cada cliente deve ter sua pasta com as seguintes subpastas:
            </p>
            <div className="space-y-2">
              {pastaCliente.map((subpasta, i) => (
                <div key={i} className="flex items-start gap-2 text-sm p-2 bg-muted rounded">
                  <FolderOpen className="w-4 h-4 text-primary mt-0.5" />
                  <span>{subpasta}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="nomenclatura" className="border rounded-lg px-4">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-500" />
              Nomenclatura de Arquivos
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <p className="text-sm mb-3">
              <strong>Padrão:</strong> TIPO_DESCRICAO_DATA.extensão
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Tipo de Arquivo</th>
                    <th className="text-left py-2">Exemplo</th>
                  </tr>
                </thead>
                <tbody>
                  {nomenclaturaArquivos.map((item, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-2">{item.tipo}</td>
                      <td className="py-2">
                        <code className="text-xs bg-muted px-2 py-1 rounded">{item.exemplo}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Regra de Ouro */}
      <Alert className="border-amber-200 bg-amber-50">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Regra Importante</AlertTitle>
        <AlertDescription className="text-amber-700">
          <strong>NUNCA edite os modelos diretamente!</strong> Sempre faça uma cópia do modelo
          para a pasta do cliente antes de editar. Os modelos originais devem permanecer intactos.
        </AlertDescription>
      </Alert>

      {/* Checklist de Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Checklist ao Salvar Documentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Verificar se o arquivo está na pasta correta do cliente</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Renomear seguindo o padrão de nomenclatura</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Verificar se o arquivo está legível (não cortado, boa resolução)</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Converter para PDF quando necessário</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Registrar no Astrea que o documento foi recebido/salvo</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Tipos de Arquivo */}
      <Card className="border-blue-200">
        <CardHeader className="bg-blue-50 rounded-t-lg">
          <CardTitle className="text-blue-800">Formatos Aceitos</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Badge variant="outline" className="justify-center py-2">PDF</Badge>
            <Badge variant="outline" className="justify-center py-2">JPG/PNG</Badge>
            <Badge variant="outline" className="justify-center py-2">DOC/DOCX</Badge>
            <Badge variant="outline" className="justify-center py-2">XLS/XLSX</Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Preferencialmente, converter todos os documentos para PDF antes de arquivar.
          </p>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Dica</AlertTitle>
        <AlertDescription>
          Use o aplicativo Google Drive no celular para digitalizar documentos diretamente
          para a pasta do cliente. A qualidade é melhor que foto comum.
        </AlertDescription>
      </Alert>

      <Alert className="border-red-200 bg-red-50">
        <Download className="h-4 w-4 text-red-600" />
        <AlertTitle className="text-red-800">Backup</AlertTitle>
        <AlertDescription className="text-red-700">
          O Google Drive faz backup automático, mas documentos críticos (sentenças, alvarás)
          devem também ser salvos no sistema Astrea para redundância.
        </AlertDescription>
      </Alert>
    </div>
  );
}
