import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  BookOpen,
  MessageSquare,
  FileText,
  Type,
  MessagesSquare,
  Headphones,
  FolderOpen,
  Menu,
  Search,
  ChevronRight,
  Users,
  ClipboardList,
  Phone,
  Workflow,
  FileSearch,
  Scale,
  Gavel,
  Heart,
  Clock,
  AlertTriangle,
  UserCheck,
  Baby,
  Briefcase,
  Settings
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import GlobalSearch from "./components/manual/GlobalSearch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const categoryGroups = [
  {
    id: "atendimento",
    title: "📋 Atendimento",
    items: [
      { id: "mensagens_padroes", title: "Mensagens Padrões", icon: MessageSquare, url: createPageUrl("MensagensPadroes") },
      { id: "checklist_perguntas", title: "Checklist de Perguntas", icon: ClipboardList, url: createPageUrl("ChecklistPerguntas") },
      { id: "script_ligacao", title: "Script de Ligação", icon: Phone, url: createPageUrl("ScriptLigacao") },
    ]
  },
  {
    id: "ferramentas",
    title: "⚙️ Ferramentas",
    items: [
      { id: "astrea", title: "Astrea", icon: FileText, url: createPageUrl("Astrea") },
      { id: "conversapp", title: "Conversapp", icon: MessagesSquare, url: createPageUrl("Conversapp") },
      { id: "google_drive", title: "Google Drive", icon: FolderOpen, url: createPageUrl("GoogleDrive") },
      { id: "formatacao", title: "Formatação", icon: Type, url: createPageUrl("Formatacao") },
    ]
  },
  {
    id: "fluxo",
    title: "📊 Fluxo Administrativo",
    items: [
      { id: "fluxo_captacao", title: "1. Captação e Triagem", icon: Users, url: createPageUrl("FluxoCaptacao") },
      { id: "fluxo_analise", title: "2. Análise do Caso", icon: FileSearch, url: createPageUrl("FluxoAnalise") },
      { id: "fluxo_administrativo", title: "3. Processo Administrativo", icon: Workflow, url: createPageUrl("FluxoAdministrativo") },
      { id: "fluxo_judicial", title: "4. Processo Judicial", icon: Gavel, url: createPageUrl("FluxoJudicial") },
    ]
  },
  {
    id: "beneficios",
    title: "💼 Benefícios",
    items: [
      { id: "bpc_loas", title: "BPC/LOAS", icon: Heart, url: createPageUrl("BpcLoas") },
      { id: "auxilio_incapacidade", title: "Auxílio Incapacidade", icon: Clock, url: createPageUrl("AuxilioIncapacidade") },
      { id: "auxilio_acidente", title: "Auxílio-Acidente", icon: AlertTriangle, url: createPageUrl("AuxilioAcidente") },
      { id: "aposentadoria_idade", title: "Aposent. por Idade", icon: UserCheck, url: createPageUrl("AposentadoriaIdade") },
      { id: "aposentadoria_tempo", title: "Aposent. por Tempo", icon: Briefcase, url: createPageUrl("AposentadoriaTempo") },
      { id: "aposentadoria_invalidez", title: "Aposent. por Invalidez", icon: Scale, url: createPageUrl("AposentadoriaInvalidez") },
      { id: "pensao_morte", title: "Pensão por Morte", icon: Heart, url: createPageUrl("PensaoMorte") },
      { id: "salario_maternidade", title: "Salário Maternidade", icon: Baby, url: createPageUrl("SalarioMaternidade") },
    ]
  }
];

function NavItem({ item, level = 0 }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isActive = location.pathname === item.url || (item.hasSubmenu && item.submenu.some(subItem => location.pathname === subItem.url));

  const isSpecificActive = item.hasSubmenu
    ? item.submenu.some(subItem => location.pathname + location.search === subItem.url)
    : location.pathname === item.url;


  if (item.hasSubmenu && item.submenu) {
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className={`hover:bg-primary/10 rounded-lg transition-all ${isSpecificActive ? 'bg-primary text-primary-foreground' : ''}`}>
            <item.icon className="w-4 h-4" />
            <span className="text-sm flex-1">{item.title}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${open ? 'rotate-90' : ''}`} />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="ml-4 mt-1 space-y-1">
          {item.submenu.map((subItem) => (
            <SidebarMenuItem key={subItem.id}>
              <SidebarMenuButton asChild className={`hover:bg-primary/10 rounded-lg transition-all ${location.pathname + location.search === subItem.url ? 'bg-primary text-primary-foreground' : ''}`}>
                <Link to={subItem.url} className="flex items-center gap-3 px-3 py-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {subItem.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuButton asChild className={`hover:bg-primary/10 rounded-lg transition-all min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isActive ? 'bg-primary text-primary-foreground' : ''}`}>
      <Link to={item.url} className="flex items-center gap-3 px-3 py-3">
        <item.icon className="w-5 h-5" />
        <span className="text-sm font-medium">{item.title}</span>
      </Link>
    </SidebarMenuButton>
  );
}

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <SidebarProvider>
      {/* Skip link para acessibilidade */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none"
      >
        Pular para conteúdo principal
      </a>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-gray-50">
        <Sidebar className="border-r border-border bg-white shadow-lg">
          <SidebarHeader className="border-b border-green-800/20 p-6 bg-sidebar">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-white text-lg leading-tight">Garante</h1>
                <h1 className="font-bold text-primary text-lg leading-tight">Direito</h1>
              </div>
            </div>
            <div className="mt-3">
              <h2 className="font-semibold text-white/90 text-sm">Manual de Rotinas</h2>
              <p className="text-white/60 text-xs">Direito Previdenciário</p>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-3">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
                Navegação
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={`hover:bg-primary/10 rounded-lg transition-all ${
                        location.pathname === createPageUrl("Home") ? 'bg-primary text-primary-foreground' : ''
                      }`}
                    >
                      <Link to={createPageUrl("Home")} className="flex items-center gap-3 px-3 py-3 min-h-[44px]">
                        <BookOpen className="w-5 h-5" />
                        <span className="font-medium">Início</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <button
                      onClick={() => setSearchOpen(true)}
                      aria-label="Abrir busca global"
                      aria-expanded={searchOpen}
                      aria-controls="global-search-dialog"
                      aria-keyshortcuts="Meta+K"
                      className="w-full flex items-center gap-3 px-3 py-3 min-h-[44px] hover:bg-primary/10 rounded-lg transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <Search className="w-5 h-5" aria-hidden="true" />
                      <span className="font-medium">Buscar</span>
                      <kbd aria-hidden="true" className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-primary/30 bg-primary/10 px-1.5 font-mono text-[10px] font-medium text-primary">
                        <span className="text-xs">⌘</span>K
                      </kbd>
                    </button>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {categoryGroups.map((group) => (
              <SidebarGroup key={group.id}>
                <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2 mt-4">
                  {group.title}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-1">
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <NavItem item={item} />
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white/80 backdrop-blur-sm border-b border-border px-6 py-4 sticky top-0 z-10 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden hover:bg-primary/10 p-2 rounded-lg transition-all" />
                <h1 className="text-lg font-semibold text-secondary">Manual GaranteDireito</h1>
              </div>

              <Button
                variant="outline"
                onClick={() => setSearchOpen(true)}
                aria-label="Abrir busca global"
                aria-expanded={searchOpen}
                aria-keyshortcuts="Meta+K"
                className="hidden md:flex items-center gap-2 min-w-[300px] justify-start text-muted-foreground hover:text-foreground border-border hover:border-primary hover:bg-primary/5"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
                <span>Buscar no manual...</span>
                <kbd aria-hidden="true" className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-primary/30 bg-primary/10 px-1.5 font-mono text-[10px] font-medium text-primary">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setSearchOpen(true)}
                aria-label="Abrir busca"
                className="md:hidden border-border hover:border-primary hover:bg-primary/5"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </header>

          <div id="main-content" className="flex-1 overflow-auto" tabIndex="-1">
            {children}
          </div>
        </main>

        <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
      </div>
    </SidebarProvider>
  );
}
