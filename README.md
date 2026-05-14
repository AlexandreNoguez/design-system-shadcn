# Shadcn Design System Showroom

Projeto de prototipo navegavel para apresentar uma identidade visual moderna usando Next.js, shadcn/ui e boas praticas de UI/UX.

O objetivo e criar um showroom funcional que permita demonstrar para lideranca:

- A base visual da aplicacao em light e dark mode.
- Os componentes mais comuns de produto.
- Padroes de telas reais, como dashboard, listagem, formulario e detalhes.
- Consistencia visual por meio de tokens, temas e componentes reutilizaveis.
- Viabilidade tecnica da stack proposta para o novo front-end.

## Stack atual

- Next.js 16 com App Router.
- React 19.
- TypeScript.
- Tailwind CSS 4.
- shadcn/ui com preset `radix-nova`.
- next-themes.
- React Hook Form e Zod.
- TanStack Table.
- Sonner.
- Motion.
- Recharts.

## Documentacao principal

Use o checklist como guia de execucao do projeto:

- [Checklist do Design System](./docs/checklist-design-system.md)
- [Visao original do showroom](./docs/showroom-overview.md)

## Como rodar

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Como vamos trabalhar

1. Consultar o checklist antes de cada etapa.
2. Implementar uma fase por vez.
3. Marcar os itens concluidos no documento.
4. Validar navegacao, responsividade, dark mode e qualidade visual antes de avancar.
5. Manter o showroom sempre apresentavel para demonstracoes.

## Estado atual

- [x] Planejamento documentado.
- [x] Aplicacao Next.js criada.
- [x] shadcn/ui configurado.
- [x] Rotas placeholder do showroom criadas.
- [x] Layout navegavel do showroom implementado.
- [x] Identidade visual aplicada.

## Proxima fase

Construir a galeria de componentes base com estados, variacoes e exemplos de uso.
