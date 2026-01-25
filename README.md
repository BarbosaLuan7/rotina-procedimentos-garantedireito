# Manual de Rotinas e Procedimentos - GaranteDireito

Sistema interno de consulta para a equipe do escritório **GaranteDireito Previdenciário**, contendo rotinas, procedimentos, scripts e guias para atendimento de clientes em processos previdenciários e trabalhistas.

## Sobre o Projeto

Este é um manual digital desenvolvido em React para padronizar e facilitar o acesso às informações necessárias no dia a dia da equipe. O sistema é 100% frontend, sem backend, e pode ser hospedado como site estático.

### Empresa

- **Nome:** GaranteDireito Previdenciário
- **Sede:** Foz do Iguaçu - PR
- **Atuação:** 100% online, atendimento em todo o Brasil
- **Especialidade:** BPC/LOAS, Auxílios, Aposentadorias, Pensões, Direito Trabalhista
- **Processos:** +4.000 protocolados

---

## Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 18.2 | Framework principal |
| Vite | 6.1 | Build tool |
| Tailwind CSS | 3.4 | Estilização |
| shadcn/ui (Radix) | - | Componentes UI |
| React Router | 7.2 | Navegação SPA |
| TanStack Query | 5.84 | Cache e estado |
| Lucide React | 0.475 | Ícones |

---

## Estrutura de Páginas

### Home
Página inicial com acesso rápido a todas as seções.

### Atendimento
| Página | Descrição |
|--------|-----------|
| `MensagensPadroes` | Modelos de mensagens para WhatsApp |
| `ChecklistPerguntas` | Perguntas essenciais por tipo de benefício |
| `ScriptLigacao` | Roteiro para ligações com clientes |

### Ferramentas
| Página | Descrição |
|--------|-----------|
| `Astrea` | Guia do sistema Astrea (gestão processual) |
| `Conversapp` | Guia do Conversapp (atendimento WhatsApp) |
| `GoogleDrive` | Organização de pastas e documentos |
| `Formatacao` | Padrões de formatação de documentos |

### Fluxos de Trabalho
| Página | Descrição |
|--------|-----------|
| `FluxoCaptacao` | Processo de captação de leads |
| `FluxoAnalise` | Análise inicial do caso |
| `FluxoAdministrativo` | Processo administrativo no INSS |
| `FluxoJudicial` | Processo judicial |

### Benefícios (Guias Detalhados)
| Página | Benefício |
|--------|-----------|
| `BpcLoas` | BPC/LOAS - Benefício de Prestação Continuada |
| `AuxilioIncapacidade` | Auxílio por Incapacidade Temporária (antigo auxílio-doença) |
| `AuxilioAcidente` | Auxílio-Acidente |
| `AposentadoriaIdade` | Aposentadoria por Idade |
| `AposentadoriaTempo` | Aposentadoria por Tempo de Contribuição |
| `AposentadoriaInvalidez` | Aposentadoria por Invalidez |
| `PensaoMorte` | Pensão por Morte |
| `SalarioMaternidade` | Salário-Maternidade |

---

## Instalação e Desenvolvimento

### Requisitos
- Node.js 18+
- npm ou yarn

### Setup
```bash
# Clonar repositório
git clone https://github.com/BarbosaLuan7/rotina-procedimentos-garantedireito.git
cd rotina-procedimentos-garantedireito

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Scripts Disponíveis
| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento (localhost:5173) |
| `npm run build` | Gera build de produção em `/dist` |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Verifica erros de código |

---

## Estrutura de Arquivos

```
src/
├── components/
│   └── ui/           # Componentes shadcn/ui
├── lib/              # Utilitários e contextos
├── pages/            # Páginas do manual
├── App.jsx           # Componente principal
├── Layout.jsx        # Layout com sidebar
├── pages.config.js   # Configuração de rotas (lazy loading)
└── index.css         # Estilos globais + Tailwind

docs/
└── mensagens-conversapp-filtradas.md  # Mensagens do Conversapp

public/
└── favicon.png
```

---

## Performance

O projeto foi otimizado para carregamento rápido:

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| Bundle inicial | 669 kB | 159 kB | -76% |
| Lazy loading | Não | Sim | - |
| Code splitting | 1 chunk | 17 chunks | - |

### Otimizações Aplicadas
- **Lazy loading** de todas as páginas
- **Code splitting** com `manualChunks` no Vite
- **Fonte Inter** via Google Fonts (preconnect)
- **Touch targets** de 44px para acessibilidade
- **Contraste WCAG** 4.5:1 mínimo

---

## Documentação Adicional

- [`docs/mensagens-conversapp-filtradas.md`](docs/mensagens-conversapp-filtradas.md) - Modelos de mensagens do Conversapp filtrados para GaranteDireito

---

## Contribuição

Este é um projeto interno do escritório GaranteDireito. Para sugestões ou correções, entre em contato com a equipe de desenvolvimento.

---

## Licença

Projeto privado - Uso interno GaranteDireito.

---

*Desenvolvido com React + Vite + Tailwind CSS*
*Última atualização: Janeiro/2026*
