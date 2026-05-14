# Checklist do Design System Showroom

## Objetivo

Criar uma aplicacao Next.js funcional e navegavel para apresentar a identidade visual do novo produto usando shadcn/ui como base de componentes.

O showroom deve funcionar como um prototipo de alto nivel para aprovacao gerencial e tambem como fundacao tecnica para o futuro front-end da aplicacao.

## Resultado esperado

Ao navegar pela aplicacao, o gerente deve conseguir perceber:

- A direcao visual do produto.
- A qualidade premium da interface.
- A consistencia entre componentes.
- O funcionamento de light mode e dark mode.
- Os principais fluxos de UI usados em uma aplicacao real.
- A maturidade da stack proposta.

## Stack recomendada

- Next.js com App Router.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.
- Radix UI por meio dos componentes shadcn.
- lucide-react para icones.
- next-themes para alternancia light, dark e system.
- React Hook Form para formularios.
- Zod para validacao e schemas.
- TanStack Table para tabelas avancadas.
- Sonner para toasts.
- Motion para microinteracoes.
- Recharts ou shadcn Charts para visualizacao de dados.

## Principios de UI/UX

- O primeiro contato deve parecer uma aplicacao real, nao uma landing page generica.
- A navegacao deve ser clara, com sidebar, header e conteudo bem organizado.
- Componentes devem ter estados reais: default, hover, focus, disabled, loading, erro e sucesso.
- Light e dark mode devem ser tratados como experiencias equivalentes.
- Formularios devem ter labels, mensagens de erro, ajuda contextual e validacao.
- Tabelas devem ter busca, filtro, ordenacao, paginacao e acoes.
- Modais e overlays devem respeitar foco, teclado e contexto da acao.
- Empty states e loading states devem parecer desenhados, nao improvisados.
- Animacoes devem ser sutis e funcionais.
- O visual deve comunicar produto moderno, confiavel e pronto para escala.

## Arquitetura de navegacao

Rotas sugeridas para o showroom:

- `/` Visao geral do Design System.
- `/brand` Identidade visual, cores, tipografia, logo, icones, radius e sombras.
- `/foundations` Tokens, espacamentos, grid, estados e acessibilidade.
- `/components` Galeria de componentes shadcn.
- `/forms` Inputs, selects, validacao, formulario em modal e formulario longo.
- `/data-display` Tabelas, filtros, paginacao, badges e empty states.
- `/overlays` Dialog, Alert Dialog, Sheet, Drawer, Popover e Tooltip.
- `/navigation` Sidebar, breadcrumbs, tabs, command menu e menus.
- `/feedback` Toasts, alerts, skeletons, loading, erro, vazio e sucesso.
- `/patterns` Telas reais de produto, como dashboard, listagem, detalhes e configuracoes.

## Estrutura inicial sugerida

```txt
app/
  layout.tsx
  page.tsx
  brand/page.tsx
  foundations/page.tsx
  components/page.tsx
  forms/page.tsx
  data-display/page.tsx
  overlays/page.tsx
  navigation/page.tsx
  feedback/page.tsx
  patterns/page.tsx
components/
  ui/
  showroom/
  layout/
  examples/
lib/
  utils.ts
  navigation.ts
  design-tokens.ts
  sample-data.ts
docs/
  checklist-design-system.md
```

## Checklist geral

### Fase 0: Documentacao e alinhamento

- [x] Criar documentacao inicial do showroom.
- [x] Definir objetivo do prototipo.
- [x] Definir stack recomendada.
- [x] Definir mapa de navegacao.
- [x] Definir criterio de aceite do MVP.
- [ ] Validar escopo com gerente ou responsavel tecnico.
- [x] Definir nome temporario da identidade visual.
- [x] Definir publico-alvo principal da aplicacao.
- [x] Definir tom visual desejado: mais executivo, operacional, financeiro, tecnico ou institucional.

### Fase 1: Fundacao tecnica

- [x] Criar aplicacao Next.js com TypeScript.
- [x] Configurar App Router.
- [x] Configurar Tailwind CSS.
- [x] Configurar ESLint.
- [x] Configurar alias de imports.
- [x] Instalar shadcn/ui.
- [x] Configurar `components.json`.
- [x] Configurar estrutura de pastas.
- [x] Instalar lucide-react.
- [x] Instalar next-themes.
- [x] Instalar React Hook Form.
- [x] Instalar Zod.
- [x] Instalar TanStack Table.
- [x] Instalar Sonner.
- [x] Instalar Motion.
- [x] Rodar primeira build local.

### Fase 2: Layout do showroom

- [x] Criar layout raiz da aplicacao.
- [x] Criar sidebar de navegacao.
- [x] Criar header com titulo da secao atual.
- [x] Criar botao de alternancia de tema.
- [x] Criar estrutura responsiva para mobile.
- [x] Criar breadcrumbs.
- [x] Criar area principal de conteudo.
- [x] Criar componente de pagina para secoes do showroom.
- [x] Criar navegacao ativa na sidebar.
- [x] Garantir que todas as rotas principais carregam sem erro.

### Fase 3: Identidade visual

- [x] Definir paleta light.
- [x] Definir paleta dark.
- [x] Definir tokens semanticos de cor.
- [x] Definir `background` e `foreground`.
- [x] Definir `primary` e `primary-foreground`.
- [x] Definir `secondary` e `secondary-foreground`.
- [x] Definir `muted` e `muted-foreground`.
- [x] Definir `accent` e `accent-foreground`.
- [x] Definir `destructive`.
- [x] Definir `border`, `input` e `ring`.
- [x] Definir tokens de sidebar.
- [x] Definir tokens de chart.
- [x] Definir escala de radius.
- [x] Definir sombras e elevacao.
- [x] Definir familia tipografica.
- [x] Definir escala tipografica.
- [x] Criar pagina `/brand`.
- [x] Criar blocos de preview de cores.
- [x] Criar bloco de tipografia.
- [x] Criar bloco de radius.
- [x] Criar bloco de icones.
- [x] Criar bloco de sombras.

### Fase 4: Componentes base

- [x] Button com variants.
- [x] Button com sizes.
- [x] Button com loading.
- [x] Icon Button com tooltip.
- [x] Badge.
- [x] Card.
- [x] Input.
- [x] Textarea.
- [x] Select.
- [x] Native Select.
- [x] Checkbox.
- [x] Radio Group.
- [x] Switch.
- [x] Slider.
- [x] Tabs.
- [x] Accordion.
- [x] Tooltip.
- [x] Dropdown Menu.
- [x] Command Menu.
- [x] Breadcrumb.
- [x] Pagination.
- [x] Avatar.
- [x] Progress.
- [x] Skeleton.
- [x] Alert.
- [x] Separator.
- [x] Empty state.
- [x] Spinner.
- [x] Toast com Sonner.
- [x] Criar pagina `/components`.
- [x] Exibir estados comuns de cada componente.

### Fase 5: Overlays e interacoes

- [x] Dialog simples.
- [x] Dialog com formulario.
- [x] Alert Dialog de confirmacao.
- [x] Alert Dialog destrutivo.
- [x] Sheet lateral.
- [x] Drawer para mobile.
- [x] Popover com conteudo curto.
- [x] Popover com acoes.
- [x] Dropdown Menu com grupos.
- [x] Context Menu.
- [x] Tooltip em botoes de icone.
- [x] Validar fechamento por teclado.
- [x] Validar foco inicial em modais.
- [x] Criar pagina `/overlays`.

### Fase 6: Formularios

- [x] Criar pagina `/forms`.
- [x] Formulario simples com React Hook Form.
- [x] Schema de validacao com Zod.
- [x] Mensagens de erro padronizadas.
- [x] Campos obrigatorios e opcionais.
- [x] Input com ajuda contextual.
- [x] Select com validacao.
- [x] Checkbox com validacao.
- [x] Radio Group com validacao.
- [x] Switch em formulario.
- [x] Formulario em modal.
- [x] Formulario longo em layout de pagina.
- [x] Estado de envio.
- [x] Estado de sucesso.
- [x] Estado de erro.
- [x] Exemplo de confirmacao antes de descartar alteracoes.

### Fase 7: Tabelas e dados

- [x] Criar pagina `/data-display`.
- [x] Tabela basica.
- [x] Tabela com ordenacao.
- [x] Tabela com busca.
- [x] Tabela com filtros.
- [x] Tabela com paginacao.
- [x] Tabela com selecao de linhas.
- [x] Tabela com acoes por linha.
- [x] Tabela com visibilidade de colunas.
- [x] Badges de status.
- [x] Empty state.
- [x] Loading state.
- [x] Error state.
- [x] Dados mockados realistas.
- [x] Layout responsivo para tabela em telas menores.

### Fase 8: Navegacao

- [x] Criar pagina `/navigation`.
- [x] Sidebar com secoes.
- [x] Breadcrumb.
- [x] Tabs horizontais.
- [x] Tabs internas de contexto.
- [x] Navigation Menu.
- [x] Menubar.
- [x] Command Menu para busca rapida.
- [x] Dropdown de usuario.
- [x] Menu mobile.
- [x] Estado ativo consistente.

### Fase 9: Feedback e estados

- [ ] Criar pagina `/feedback`.
- [ ] Toast de sucesso.
- [ ] Toast de erro.
- [ ] Toast de aviso.
- [ ] Toast com acao.
- [ ] Alert informativo.
- [ ] Alert de erro.
- [ ] Alert destrutivo.
- [ ] Skeleton de card.
- [ ] Skeleton de tabela.
- [ ] Spinner em botao.
- [ ] Empty state operacional.
- [ ] Empty state com acao primaria.
- [ ] Error state com acao de tentar novamente.

### Fase 10: Padroes de telas reais

- [ ] Criar pagina `/patterns`.
- [ ] Dashboard com metricas.
- [ ] Dashboard com grafico.
- [ ] Listagem administrativa.
- [ ] Tela de detalhes.
- [ ] Tela de criacao.
- [ ] Tela de edicao.
- [ ] Tela de configuracoes.
- [ ] Tela com tabs internas.
- [ ] Tela com filtros avancados.
- [ ] Fluxo de confirmacao destrutiva.
- [ ] Fluxo de criacao com sucesso.

### Fase 11: Qualidade premium

- [ ] Revisar consistencia visual em light mode.
- [ ] Revisar consistencia visual em dark mode.
- [ ] Revisar responsividade em mobile.
- [ ] Revisar responsividade em tablet.
- [ ] Revisar responsividade em desktop.
- [ ] Revisar contraste basico.
- [ ] Revisar foco visivel.
- [ ] Revisar navegacao por teclado.
- [ ] Revisar textos e labels.
- [ ] Revisar alinhamentos e espacamentos.
- [ ] Revisar excesso de decoracao visual.
- [ ] Adicionar microinteracoes sutis.
- [ ] Garantir que textos nao estouram containers.
- [ ] Garantir que componentes nao alteram layout ao mudar estado.
- [ ] Rodar lint.
- [ ] Rodar build.

### Fase 12: Apresentacao para aprovacao

- [ ] Criar roteiro de demonstracao.
- [ ] Preparar narrativa da decisao tecnica.
- [ ] Mostrar light e dark mode.
- [ ] Mostrar identidade visual.
- [ ] Mostrar componentes base.
- [ ] Mostrar formularios.
- [ ] Mostrar tabelas.
- [ ] Mostrar modais e confirmacoes.
- [ ] Mostrar telas reais.
- [ ] Registrar feedback do gerente.
- [ ] Ajustar identidade conforme feedback.
- [ ] Definir se o showroom vira base do projeto real.

## Componentes minimos para o MVP

O MVP deve conter pelo menos:

- Layout navegavel com sidebar e header.
- Tema light, dark e system.
- Pagina de identidade visual.
- Buttons, inputs, selects, checkboxes, radios, switches e tabs.
- Modal de confirmacao.
- Modal com formulario.
- Tabela com busca, filtro e paginacao.
- Toasts de feedback.
- Empty, loading e error states.
- Uma tela de dashboard.
- Uma tela de listagem.
- Uma tela de formulario.
- Uma tela de detalhes ou configuracoes.

## Criterio de aceite do MVP

- [ ] A aplicacao roda localmente.
- [ ] Todas as rotas principais sao navegaveis.
- [ ] O tema light funciona corretamente.
- [ ] O tema dark funciona corretamente.
- [ ] A identidade visual esta aplicada aos componentes.
- [ ] Os componentes comuns estao demonstrados.
- [ ] Formularios possuem validacao.
- [ ] Tabelas possuem interacao real.
- [ ] Modais possuem comportamento funcional.
- [ ] Estados de loading, vazio e erro estao representados.
- [ ] O layout e responsivo.
- [ ] A experiencia parece uma aplicacao real de alto nivel.
- [ ] A demonstracao pode ser feita sem explicar detalhes tecnicos demais.

## Roteiro de demonstracao para gerente

1. Abrir a visao geral e explicar o objetivo do showroom.
2. Alternar entre light e dark mode.
3. Mostrar a pagina de identidade visual.
4. Mostrar componentes base e seus estados.
5. Mostrar formulario com validacao.
6. Mostrar modal de confirmacao e modal com formulario.
7. Mostrar tabela com busca, filtros e paginacao.
8. Mostrar dashboard e telas reais.
9. Explicar como os tokens permitem padronizar o futuro produto.
10. Encerrar com os proximos passos de evolucao para o projeto oficial.

## Decisoes tecnicas iniciais

- Usar shadcn/ui porque os componentes sao copiados para o projeto e podem ser customizados sem ficar preso a um pacote fechado.
- Usar tokens semanticos com CSS variables para manter consistencia entre light e dark mode.
- Usar Radix UI como base de acessibilidade para overlays e componentes interativos.
- Usar TanStack Table para evitar uma tabela limitada quando o produto crescer.
- Usar React Hook Form e Zod para formularios previsiveis, tipados e validaveis.
- Usar Motion somente onde a animacao melhora percepcao de qualidade, sem exagero.

## Referencias

- Next.js App Router: https://nextjs.org/docs/app
- shadcn/ui Theming: https://ui.shadcn.com/docs/theming
- shadcn/ui Components: https://ui.shadcn.com/docs/components
- Tailwind CSS Dark Mode: https://tailwindcss.com/docs/dark-mode
- Radix UI Primitives: https://www.radix-ui.com/primitives/docs/overview/introduction
- TanStack Table: https://tanstack.com/table/v8/docs/overview
- Zod: https://zod.dev
- Motion for React: https://motion.dev/docs/react

## Como atualizar este checklist

- Marcar `[x]` somente quando o item estiver implementado e validado.
- Adicionar novos itens quando uma decisao gerar trabalho adicional.
- Evitar remover itens sem registrar o motivo.
- Ao final de cada fase, revisar se o showroom continua navegavel.
- Antes de apresentar, conferir o criterio de aceite do MVP.
