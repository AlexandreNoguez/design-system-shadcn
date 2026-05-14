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
- [ ] Definir nome temporario da identidade visual.
- [ ] Definir publico-alvo principal da aplicacao.
- [ ] Definir tom visual desejado: mais executivo, operacional, financeiro, tecnico ou institucional.

### Fase 1: Fundacao tecnica

- [ ] Criar aplicacao Next.js com TypeScript.
- [ ] Configurar App Router.
- [ ] Configurar Tailwind CSS.
- [ ] Configurar ESLint.
- [ ] Configurar alias de imports.
- [ ] Instalar shadcn/ui.
- [ ] Configurar `components.json`.
- [ ] Configurar estrutura de pastas.
- [ ] Instalar lucide-react.
- [ ] Instalar next-themes.
- [ ] Instalar React Hook Form.
- [ ] Instalar Zod.
- [ ] Instalar TanStack Table.
- [ ] Instalar Sonner.
- [ ] Instalar Motion.
- [ ] Rodar primeira build local.

### Fase 2: Layout do showroom

- [ ] Criar layout raiz da aplicacao.
- [ ] Criar sidebar de navegacao.
- [ ] Criar header com titulo da secao atual.
- [ ] Criar botao de alternancia de tema.
- [ ] Criar estrutura responsiva para mobile.
- [ ] Criar breadcrumbs.
- [ ] Criar area principal de conteudo.
- [ ] Criar componente de pagina para secoes do showroom.
- [ ] Criar navegacao ativa na sidebar.
- [ ] Garantir que todas as rotas principais carregam sem erro.

### Fase 3: Identidade visual

- [ ] Definir paleta light.
- [ ] Definir paleta dark.
- [ ] Definir tokens semanticos de cor.
- [ ] Definir `background` e `foreground`.
- [ ] Definir `primary` e `primary-foreground`.
- [ ] Definir `secondary` e `secondary-foreground`.
- [ ] Definir `muted` e `muted-foreground`.
- [ ] Definir `accent` e `accent-foreground`.
- [ ] Definir `destructive`.
- [ ] Definir `border`, `input` e `ring`.
- [ ] Definir tokens de sidebar.
- [ ] Definir tokens de chart.
- [ ] Definir escala de radius.
- [ ] Definir sombras e elevacao.
- [ ] Definir familia tipografica.
- [ ] Definir escala tipografica.
- [ ] Criar pagina `/brand`.
- [ ] Criar blocos de preview de cores.
- [ ] Criar bloco de tipografia.
- [ ] Criar bloco de radius.
- [ ] Criar bloco de icones.
- [ ] Criar bloco de sombras.

### Fase 4: Componentes base

- [ ] Button com variants.
- [ ] Button com sizes.
- [ ] Button com loading.
- [ ] Icon Button com tooltip.
- [ ] Badge.
- [ ] Card.
- [ ] Input.
- [ ] Textarea.
- [ ] Select.
- [ ] Native Select.
- [ ] Checkbox.
- [ ] Radio Group.
- [ ] Switch.
- [ ] Slider.
- [ ] Tabs.
- [ ] Accordion.
- [ ] Tooltip.
- [ ] Dropdown Menu.
- [ ] Command Menu.
- [ ] Breadcrumb.
- [ ] Pagination.
- [ ] Avatar.
- [ ] Progress.
- [ ] Skeleton.
- [ ] Alert.
- [ ] Separator.
- [ ] Empty state.
- [ ] Spinner.
- [ ] Toast com Sonner.
- [ ] Criar pagina `/components`.
- [ ] Exibir estados comuns de cada componente.

### Fase 5: Overlays e interacoes

- [ ] Dialog simples.
- [ ] Dialog com formulario.
- [ ] Alert Dialog de confirmacao.
- [ ] Alert Dialog destrutivo.
- [ ] Sheet lateral.
- [ ] Drawer para mobile.
- [ ] Popover com conteudo curto.
- [ ] Popover com acoes.
- [ ] Dropdown Menu com grupos.
- [ ] Context Menu.
- [ ] Tooltip em botoes de icone.
- [ ] Validar fechamento por teclado.
- [ ] Validar foco inicial em modais.
- [ ] Criar pagina `/overlays`.

### Fase 6: Formularios

- [ ] Criar pagina `/forms`.
- [ ] Formulario simples com React Hook Form.
- [ ] Schema de validacao com Zod.
- [ ] Mensagens de erro padronizadas.
- [ ] Campos obrigatorios e opcionais.
- [ ] Input com ajuda contextual.
- [ ] Select com validacao.
- [ ] Checkbox com validacao.
- [ ] Radio Group com validacao.
- [ ] Switch em formulario.
- [ ] Formulario em modal.
- [ ] Formulario longo em layout de pagina.
- [ ] Estado de envio.
- [ ] Estado de sucesso.
- [ ] Estado de erro.
- [ ] Exemplo de confirmacao antes de descartar alteracoes.

### Fase 7: Tabelas e dados

- [ ] Criar pagina `/data-display`.
- [ ] Tabela basica.
- [ ] Tabela com ordenacao.
- [ ] Tabela com busca.
- [ ] Tabela com filtros.
- [ ] Tabela com paginacao.
- [ ] Tabela com selecao de linhas.
- [ ] Tabela com acoes por linha.
- [ ] Tabela com visibilidade de colunas.
- [ ] Badges de status.
- [ ] Empty state.
- [ ] Loading state.
- [ ] Error state.
- [ ] Dados mockados realistas.
- [ ] Layout responsivo para tabela em telas menores.

### Fase 8: Navegacao

- [ ] Criar pagina `/navigation`.
- [ ] Sidebar com secoes.
- [ ] Breadcrumb.
- [ ] Tabs horizontais.
- [ ] Tabs internas de contexto.
- [ ] Navigation Menu.
- [ ] Menubar.
- [ ] Command Menu para busca rapida.
- [ ] Dropdown de usuario.
- [ ] Menu mobile.
- [ ] Estado ativo consistente.

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

