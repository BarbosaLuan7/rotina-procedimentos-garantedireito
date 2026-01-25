import React from "react";
import { createPageUrl } from "@/utils";
import {
  MessageSquare,
  FileText,
  Type,
  MessagesSquare,
  Headphones,
  FolderOpen,
  ClipboardList,
  Phone,
  ArrowRight,
  Search,
  FileCheck,
  Scale,
  Heart,
  Baby,
  Calendar,
  Clock,
  Users,
  Briefcase,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categoryGroups = [
  {
    group: "📋 Atendimento",
    description: "Ferramentas para o primeiro contato e qualificação de clientes",
    categories: [
      {
        id: "mensagens_padroes",
        title: "Mensagens Padrões",
        icon: MessageSquare,
        description: "Modelos de mensagens para comunicação com clientes",
        url: createPageUrl("MensagensPadroes")
      },
      {
        id: "checklist_perguntas",
        title: "Checklist de Perguntas",
        icon: ClipboardList,
        description: "Perguntas essenciais para qualificação do caso",
        url: createPageUrl("ChecklistPerguntas")
      },
      {
        id: "script_ligacao",
        title: "Script de Ligação",
        icon: Phone,
        description: "Roteiro para ligações de prospecção e acompanhamento",
        url: createPageUrl("ScriptLigacao")
      },
    ]
  },
  {
    group: "⚙️ Ferramentas",
    description: "Sistemas e recursos do escritório",
    categories: [
      {
        id: "astrea",
        title: "Astrea",
        icon: FileText,
        description: "Sistema de gestão de processos e prazos",
        url: createPageUrl("Astrea")
      },
      {
        id: "conversapp",
        title: "Conversapp",
        icon: MessagesSquare,
        description: "Sistema de comunicação via WhatsApp",
        url: createPageUrl("Conversapp")
      },
      {
        id: "google_drive",
        title: "Google Drive",
        icon: FolderOpen,
        description: "Organização de arquivos e documentos",
        url: createPageUrl("GoogleDrive")
      },
      {
        id: "formatacao",
        title: "Formatação",
        icon: Type,
        description: "Padrões de formatação de documentos",
        url: createPageUrl("Formatacao")
      },
    ]
  },
  {
    group: "📊 Fluxo Administrativo",
    description: "Etapas do processo previdenciário",
    categories: [
      {
        id: "captacao",
        title: "1. Captação e Qualificação",
        icon: Search,
        description: "Primeiro contato e análise de viabilidade",
        url: createPageUrl("FluxoCaptacao")
      },
      {
        id: "analise",
        title: "2. Análise do Caso",
        icon: FileCheck,
        description: "Análise documental e estratégia",
        url: createPageUrl("FluxoAnalise")
      },
      {
        id: "administrativo",
        title: "3. Processo INSS",
        icon: Briefcase,
        description: "Requerimento e acompanhamento administrativo",
        url: createPageUrl("FluxoAdministrativo")
      },
      {
        id: "judicial",
        title: "4. Processo Judicial",
        icon: Scale,
        description: "Quando o benefício é negado",
        url: createPageUrl("FluxoJudicial")
      },
    ]
  },
  {
    group: "💼 Benefícios",
    description: "Guias completos de cada benefício previdenciário",
    categories: [
      {
        id: "bpc_loas",
        title: "BPC/LOAS",
        icon: Users,
        description: "Benefício de Prestação Continuada - Idoso e PcD",
        url: createPageUrl("BpcLoas")
      },
      {
        id: "auxilio_incapacidade",
        title: "Auxílio-Incapacidade",
        icon: AlertCircle,
        description: "Incapacidade temporária (antigo auxílio-doença)",
        url: createPageUrl("AuxilioIncapacidade")
      },
      {
        id: "auxilio_acidente",
        title: "Auxílio-Acidente",
        icon: AlertCircle,
        description: "Sequela permanente após acidente",
        url: createPageUrl("AuxilioAcidente")
      },
      {
        id: "aposentadoria_idade",
        title: "Aposentadoria por Idade",
        icon: Calendar,
        description: "Urbana e Rural",
        url: createPageUrl("AposentadoriaIdade")
      },
      {
        id: "aposentadoria_tempo",
        title: "Aposentadoria por Tempo",
        icon: Clock,
        description: "Regras de transição",
        url: createPageUrl("AposentadoriaTempo")
      },
      {
        id: "aposentadoria_invalidez",
        title: "Aposentadoria por Invalidez",
        icon: Heart,
        description: "Incapacidade permanente",
        url: createPageUrl("AposentadoriaInvalidez")
      },
      {
        id: "pensao_morte",
        title: "Pensão por Morte",
        icon: Heart,
        description: "Benefício para dependentes",
        url: createPageUrl("PensaoMorte")
      },
      {
        id: "salario_maternidade",
        title: "Salário-Maternidade",
        icon: Baby,
        description: "Licença remunerada",
        url: createPageUrl("SalarioMaternidade")
      },
    ]
  }
];

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Manual de Rotinas e Procedimentos
        </h1>
        <p className="text-muted-foreground">
          GaranteDireito Previdenciário - Guia completo para a equipe
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-primary">8</p>
            <p className="text-sm text-muted-foreground">Benefícios</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-green-700">4</p>
            <p className="text-sm text-muted-foreground">Etapas do Fluxo</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-blue-700">4</p>
            <p className="text-sm text-muted-foreground">Ferramentas</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-purple-700">3</p>
            <p className="text-sm text-muted-foreground">Recursos Atendimento</p>
          </CardContent>
        </Card>
      </div>

      {/* Categories by Group */}
      {categoryGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">{group.group}</h2>
            <p className="text-sm text-muted-foreground">{group.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {group.categories.map((category) => (
              <a
                key={category.id}
                href={category.url}
                className="block"
              >
                <Card className="h-full hover:shadow-md hover:border-primary/50 transition-all cursor-pointer">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-foreground truncate">
                          {category.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                          {category.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* Footer Info */}
      <Card className="bg-primary/5 border-primary/20 mt-8">
        <CardContent className="pt-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Headphones className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Dúvidas?</h3>
              <p className="text-sm text-muted-foreground">
                Use o menu lateral para navegar entre as seções. Se tiver dúvidas sobre algum
                procedimento, consulte o advogado responsável antes de tomar decisões.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
