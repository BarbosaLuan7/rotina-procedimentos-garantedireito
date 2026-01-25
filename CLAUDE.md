# Instruções para Claude Code

Este arquivo contém instruções para o Claude Code ao trabalhar neste repositório.

## Sobre o Projeto

**Manual de Rotinas e Procedimentos** para o escritório **GaranteDireito Previdenciário**.

- **Tipo:** Aplicação React (SPA) - 100% frontend
- **Framework:** React 18 + Vite 6 + Tailwind CSS
- **UI:** shadcn/ui (componentes Radix)
- **Hospedagem:** Site estático (sem backend)

## Contexto de Negócio

A **GaranteDireito** é um escritório de advocacia previdenciária de Foz do Iguaçu/PR que atende 100% online em todo o Brasil. Especialidades:

- BPC/LOAS (Benefício de Prestação Continuada)
- Auxílio por Incapacidade (auxílio-doença)
- Auxílio-Acidente
- Aposentadorias (idade, tempo, invalidez)
- Pensão por Morte
- Salário-Maternidade
- Direito Trabalhista

**Empresa relacionada:** Resolvoo (problemas com voos/aéreo) - mesmo grupo, mas área diferente.

## Estrutura do Projeto

```
src/
├── components/ui/     # Componentes shadcn/ui (não modificar diretamente)
├── lib/               # Utilitários, contextos, hooks
├── pages/             # Páginas do manual (uma por benefício/seção)
├── App.jsx            # Componente raiz com rotas
├── Layout.jsx         # Layout com sidebar e navegação
├── pages.config.js    # Configuração de páginas (lazy loading)
└── index.css          # Tailwind + CSS customizado

docs/                  # Documentação adicional
public/                # Assets estáticos
```

## Padrões de Código

### Páginas
- Cada página é um componente funcional React
- Usar lazy loading em `pages.config.js`
- Seguir padrão das páginas existentes

### Componentes UI
- Usar componentes de `@/components/ui/`
- Seguir padrão shadcn/ui
- Ícones: Lucide React

### Estilização
- Tailwind CSS para estilos
- CSS variables em `index.css` para cores do tema
- Classe `cn()` para merge de classes

### Acessibilidade
- Touch targets mínimo 44px
- Contraste WCAG 4.5:1
- ARIA labels em elementos interativos
- Suporte a navegação por teclado

## Comandos Úteis

```bash
npm run dev      # Desenvolvimento (localhost:5173)
npm run build    # Build produção
npm run preview  # Preview do build
npm run lint     # Verificar código
```

## Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| `src/pages.config.js` | Registro de páginas e lazy loading |
| `src/Layout.jsx` | Sidebar, navegação, busca global |
| `src/index.css` | Variáveis CSS do tema |
| `vite.config.js` | Build config + manualChunks |
| `tailwind.config.js` | Configuração Tailwind |

## Otimizações Aplicadas

1. **Lazy loading** - Todas as páginas carregam sob demanda
2. **Code splitting** - 17 chunks separados por vendor
3. **Fonte Inter** - Google Fonts com preconnect
4. **Skeleton loading** - Feedback visual durante carregamento

## Ao Adicionar Novas Páginas

1. Criar arquivo em `src/pages/NomeDaPagina.jsx`
2. Registrar em `src/pages.config.js` com `lazy()`
3. Adicionar na sidebar em `src/Layout.jsx` (se necessário)

## Documentação Relacionada

- `docs/mensagens-conversapp-filtradas.md` - Mensagens do Conversapp para WhatsApp

## Não Fazer

- Não modificar componentes em `components/ui/` diretamente (são do shadcn)
- Não remover lazy loading das páginas
- Não adicionar backend/API (projeto é 100% estático)
- Não misturar conteúdo da Resolvoo (aéreo) com GaranteDireito (previdenciário)
