import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Loader2, FileText, TrendingUp } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const categoryMap = {
  audiencias: { title: "Audiências", url: createPageUrl("Audiencias"), weight: 1.2 },
  mensagens: { title: "Mensagens", url: createPageUrl("Mensagens"), weight: 1.2 },
  sentencas: { title: "Sentenças", url: createPageUrl("Sentencas"), weight: 1.1 },
  correspondentes: { title: "Correspondentes", url: createPageUrl("Correspondentes"), weight: 1.1 },
  formatacao: { title: "Formatação", url: createPageUrl("Formatacao"), weight: 1.1 },
  fluxo_predefinidas: { title: "Fluxo de Pré-definidas", url: createPageUrl("FluxoPredefinidas"), weight: 1.0 },
  funcionamento_ia: { title: "Funcionamento IA", url: createPageUrl("FuncionamentoIA"), weight: 1.0 },
  conversapp: { title: "Conversapp", url: createPageUrl("Conversapp"), weight: 1.2 },
  atendimento_cliente: { title: "Atendimento ao Cliente", url: createPageUrl("AtendimentoCliente"), weight: 1.1 },
  financeiro: { title: "Financeiro", url: createPageUrl("Financeiro"), weight: 1.3 },
  google_drive: { title: "Google Drive", url: createPageUrl("GoogleDrive"), weight: 1.0 },
  sistemas_processuais: { title: "Sistemas Processuais", url: createPageUrl("SistemasProcessuais"), weight: 1.0 },
  precedentes: { title: "Precedentes", url: createPageUrl("Precedentes"), weight: 1.2 },
  banco_teses: { title: "Banco de Teses", url: createPageUrl("BancoTeses"), weight: 1.2 },
  banco_juris: { title: "Banco de Júris", url: createPageUrl("BancoJuris"), weight: 1.2 },
};

// Páginas estáticas também podem ser buscadas
const staticPages = [
  { 
    title: "E-mails Especializados", 
    url: createPageUrl("EmailsEspecializados"),
    keywords: ["email", "e-mail", "acordo", "audiencia", "atendimento", "contato"],
    category: "Comunicação",
    weight: 1.1
  },
];

export default function GlobalSearch({ open, onOpenChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { data: allSections, isLoading } = useQuery({
    queryKey: ['all-manual-sections'],
    queryFn: () => base44.entities.ManualSection.list(),
    initialData: [],
  });

  // Função para calcular a relevância de um resultado
  const calculateRelevance = (section, query) => {
    const lowerQuery = query.toLowerCase().trim();
    const queryWords = lowerQuery.split(/\s+/);
    
    let score = 0;
    const title = section.title.toLowerCase();
    const content = section.content.toLowerCase();
    const categoryInfo = categoryMap[section.category];
    const categoryTitle = categoryInfo?.title.toLowerCase() || "";
    
    // Pontuação por correspondência exata no título (peso alto)
    if (title === lowerQuery) {
      score += 100;
    } else if (title.includes(lowerQuery)) {
      score += 50;
    }
    
    // Pontuação por palavras individuais no título
    queryWords.forEach(word => {
      if (word.length > 2) { // Ignora palavras muito curtas
        if (title.includes(word)) {
          score += 20;
        }
      }
    });
    
    // Pontuação por correspondência na categoria
    if (categoryTitle.includes(lowerQuery)) {
      score += 15;
    }
    
    // Pontuação por correspondência no conteúdo
    const contentMatches = (content.match(new RegExp(lowerQuery, 'gi')) || []).length;
    score += Math.min(contentMatches * 3, 30); // Máximo 30 pontos
    
    // Pontuação por palavras no conteúdo
    queryWords.forEach(word => {
      if (word.length > 2) {
        const wordMatches = (content.match(new RegExp(word, 'gi')) || []).length;
        score += Math.min(wordMatches * 2, 10);
      }
    });
    
    // Multiplicador por peso da categoria
    const categoryWeight = categoryInfo?.weight || 1.0;
    score *= categoryWeight;
    
    // Bônus se o termo aparece no início do título ou conteúdo
    if (title.startsWith(lowerQuery)) {
      score += 25;
    }
    if (content.startsWith(lowerQuery)) {
      score += 10;
    }
    
    return score;
  };

  const filteredResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase().trim();
    const queryWords = query.split(/\s+/);
    
    // Busca em seções dinâmicas
    const sectionResults = allSections
      .map(section => ({
        ...section,
        type: 'section',
        relevance: calculateRelevance(section, query)
      }))
      .filter(section => section.relevance > 0);
    
    // Busca em páginas estáticas
    const pageResults = staticPages
      .filter(page => {
        const titleMatch = page.title.toLowerCase().includes(query);
        const keywordMatch = page.keywords?.some(kw => kw.includes(query));
        const categoryMatch = page.category?.toLowerCase().includes(query);
        return titleMatch || keywordMatch || categoryMatch;
      })
      .map(page => ({
        ...page,
        type: 'page',
        relevance: 
          (page.title.toLowerCase() === query ? 100 : 
           page.title.toLowerCase().includes(query) ? 50 : 
           page.keywords?.some(kw => kw === query) ? 40 : 20) * (page.weight || 1.0)
      }));
    
    // Combina e ordena por relevância
    const allResults = [...sectionResults, ...pageResults]
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 12);
    
    return allResults;
  }, [searchQuery, allSections]);

  const handleSelectResult = (result) => {
    if (result.type === 'page') {
      navigate(result.url);
    } else {
      const categoryInfo = categoryMap[result.category];
      if (categoryInfo) {
        navigate(categoryInfo.url);
      }
    }
    onOpenChange(false);
    setSearchQuery("");
  };

  const highlightText = (text, query) => {
    if (!query || !text) return text;
    
    const queryWords = query.toLowerCase().trim().split(/\s+/).filter(w => w.length > 2);
    
    // Criar regex que captura todas as palavras de busca
    const pattern = queryWords.length > 0 
      ? new RegExp(`(${queryWords.join('|')})`, 'gi')
      : new RegExp(`(${query})`, 'gi');
    
    const parts = text.split(pattern);
    
    return (
      <>
        {parts.map((part, i) => {
          const isMatch = queryWords.some(word => 
            part.toLowerCase() === word.toLowerCase()
          ) || part.toLowerCase() === query.toLowerCase();
          
          return isMatch ? (
            <mark key={i} className="bg-yellow-300 text-gray-900 font-semibold rounded px-0.5">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </>
    );
  };

  const getContentSnippet = (content, query) => {
    if (!content) return '';
    
    const lowerContent = content.toLowerCase();
    const lowerQuery = query.toLowerCase().trim();
    const queryWords = lowerQuery.split(/\s+/).filter(w => w.length > 2);
    
    // Tenta encontrar a primeira ocorrência de qualquer palavra-chave
    let bestIndex = -1;
    let bestWord = lowerQuery;
    
    // Procura primeiro pela frase completa
    bestIndex = lowerContent.indexOf(lowerQuery);
    
    // Se não encontrar, procura pela primeira palavra
    if (bestIndex === -1 && queryWords.length > 0) {
      for (const word of queryWords) {
        const idx = lowerContent.indexOf(word);
        if (idx !== -1) {
          bestIndex = idx;
          bestWord = word;
          break;
        }
      }
    }
    
    if (bestIndex === -1) {
      return content.substring(0, 120) + '...';
    }
    
    // Extrai snippet com contexto ao redor do termo encontrado
    const start = Math.max(0, bestIndex - 40);
    const end = Math.min(content.length, bestIndex + bestWord.length + 80);
    let snippet = content.substring(start, end);
    
    // Remove caracteres markdown
    snippet = snippet.replace(/[#*_~`]/g, '');
    
    return (start > 0 ? '...' : '') + snippet + (end < content.length ? '...' : '');
  };

  const getRelevanceBadge = (relevance) => {
    if (relevance > 80) {
      return <Badge className="bg-green-600 text-white text-xs">Alta relevância</Badge>;
    } else if (relevance > 40) {
      return <Badge className="bg-blue-600 text-white text-xs">Relevante</Badge>;
    }
    return null;
  };

  useEffect(() => {
    if (!open) {
      setSearchQuery("");
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] p-0">
        <DialogHeader className="p-6 pb-4 border-b border-gray-100">
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Search className="w-5 h-5 text-blue-600" />
            Buscar no Manual
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Digite para buscar páginas, seções, conteúdos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-base pl-10 bg-white"
              autoFocus
            />
          </div>
          {searchQuery && filteredResults.length > 0 && (
            <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {filteredResults.length} resultado{filteredResults.length !== 1 ? 's' : ''} encontrado{filteredResults.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        <ScrollArea className="max-h-[55vh]">
          <div className="px-6 py-4">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
              </div>
            ) : filteredResults.length === 0 && searchQuery ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600 font-medium">Nenhum resultado encontrado</p>
                <p className="text-gray-400 text-sm mt-1">Tente usar palavras-chave diferentes</p>
              </div>
            ) : filteredResults.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-gray-600 font-medium">Digite para começar a buscar</p>
                <p className="text-gray-400 text-sm mt-1">Busque por páginas, seções ou palavras-chave</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredResults.map((result, index) => (
                  <button
                    key={result.type === 'page' ? `page-${index}` : result.id}
                    onClick={() => handleSelectResult(result)}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all group hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div className="font-semibold text-gray-900 flex-1">
                            {highlightText(result.title, searchQuery)}
                          </div>
                          {getRelevanceBadge(result.relevance)}
                        </div>
                        <div className="text-xs text-blue-600 font-medium mb-2">
                          {result.type === 'page' 
                            ? result.category 
                            : categoryMap[result.category]?.title}
                        </div>
                        {result.content && (
                          <div className="text-sm text-gray-600 leading-relaxed">
                            {highlightText(getContentSnippet(result.content, searchQuery), searchQuery)}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}