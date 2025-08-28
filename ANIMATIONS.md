# Sistema de Animações - Portfolio Leonardo Schwedler

## Visão Geral

Este documento descreve o sistema de animações implementado no portfolio, que utiliza **Framer Motion** para criar uma experiência de usuário moderna e profissional.

## Tecnologias Utilizadas

- **Framer Motion**: Biblioteca principal para animações React
- **React Intersection Observer**: Para animações de scroll reveal
- **Tailwind CSS**: Para animações CSS complementares
- **TypeScript**: Para tipagem das animações

## Componentes de Animação

### 1. Hooks Personalizados

#### `useScrollAnimation`

```typescript
const { ref, controls, inView } = useScrollAnimation(threshold, triggerOnce);
```

- Gerencia animações baseadas em scroll
- Configurável com threshold e triggerOnce

#### `useStaggerAnimation`

```typescript
const { ref, controls, inView, containerVariants, itemVariants } =
  useStaggerAnimation(items, staggerDelay);
```

- Cria animações em sequência (stagger)
- Ideal para listas e grids

### 2. Componentes de Animação

#### `FadeIn`

- Animação de entrada com fade e movimento vertical
- Configurado para trigger no viewport

#### `SlideInLeft/SlideInRight`

- Animações de entrada lateral
- Útil para layouts em duas colunas

#### `ScaleIn`

- Animação de entrada com escala
- Perfeito para cards e imagens

#### `StaggerContainer/StaggerItem`

- Sistema de animação em sequência
- Ideal para listas de itens

#### `HoverCard/HoverButton`

- Efeitos de hover com escala e movimento
- Feedback visual para interações

## Implementações por Seção

### HeroSection

- **Animação de entrada**: Stagger com fade-in sequencial
- **Elementos decorativos**: Animações contínuas de escala e opacidade
- **Botões**: Efeitos de hover com escala e sombra
- **Ícones sociais**: Hover com escala e rotação
- **Indicador de scroll**: Animação contínua de movimento

### AboutSection

- **Texto**: Animação sequencial de parágrafos
- **Cards de timeline**: Hover com escala e movimento
- **Badges de tecnologia**: Hover com escala e movimento
- **Citação**: Hover sutil com escala

### SkillsSection

- **Cards de habilidade**: Hover com escala e movimento
- **Barras de progresso**: Animação de preenchimento
- **Ícones**: Hover com rotação e escala
- **Certificações**: Hover com escala

### ProjectsSection

- **Cards de projeto**: Hover com escala e movimento
- **Imagens**: Hover com escala
- **Badges de tecnologia**: Animação sequencial
- **Botões**: Hover com escala

### ContactSection

- **Card do WhatsApp**: Hover com escala e movimento
- **Informações de contato**: Hover com escala
- **Redes sociais**: Hover com escala e movimento
- **Indicador de disponibilidade**: Animação contínua de pulso

### BottomNav

- **Entrada**: Slide-up com delay sequencial
- **Itens**: Hover com escala e movimento
- **Ícones**: Hover com rotação
- **Labels**: Hover com escala

## Configurações de Animação

### Variantes de Container

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
```

### Variantes de Item

```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
```

### Configurações de Viewport

```typescript
viewport={{ once: true, margin: '-100px' }}
```

- `once: true`: Animação executa apenas uma vez
- `margin: '-100px'`: Trigger antes do elemento entrar na tela

## Animações CSS Complementares

### Novas Animações Tailwind

- `slide-in-left`: Entrada lateral esquerda
- `slide-in-right`: Entrada lateral direita
- `bounce-in`: Entrada com bounce
- `float`: Movimento flutuante contínuo
- `glow-pulse`: Pulsação de brilho

### Uso

```html
<div className="animate-slide-in-left">
  <div className="animate-float">
    <div className="animate-glow-pulse"></div>
  </div>
</div>
```

## Performance e Boas Práticas

### 1. Otimizações

- Uso de `transform` e `opacity` para animações suaves
- `will-change` automático via Framer Motion
- Animações hardware-accelerated

### 2. Acessibilidade

- Animações respeitam preferências de usuário
- `prefers-reduced-motion` considerado
- Transições suaves para navegação

### 3. Responsividade

- Animações adaptadas para dispositivos móveis
- Performance otimizada para diferentes dispositivos
- Fallbacks para navegadores antigos

## Personalização

### Ajustando Velocidades

```typescript
transition={{ duration: 0.6, ease: "easeOut" }}
```

### Modificando Delays

```typescript
transition={{ delay: 0.2 }}
```

### Alterando Easing

```typescript
transition={{ ease: "easeInOut" }}
```

## Troubleshooting

### Animação não executa

1. Verificar se o elemento está no viewport
2. Confirmar se `whileInView` está configurado
3. Verificar se `viewport` está configurado corretamente

### Performance ruim

1. Reduzir complexidade das animações
2. Usar `transform` em vez de propriedades que causam reflow
3. Considerar `will-change` para elementos complexos

### Animações travando

1. Verificar se há conflitos de CSS
2. Confirmar se não há loops infinitos
3. Verificar se as dependências estão atualizadas

## Próximos Passos

### Melhorias Futuras

- Animações baseadas em scroll mais complexas
- Transições de página entre rotas
- Animações de micro-interações
- Suporte a gestos touch para mobile

### Manutenção

- Atualizar Framer Motion regularmente
- Monitorar performance das animações
- Testar em diferentes dispositivos e navegadores
- Coletar feedback dos usuários

## Conclusão

O sistema de animações implementado transforma a experiência do usuário, tornando o portfolio mais profissional e envolvente. As animações são suaves, performáticas e acessíveis, seguindo as melhores práticas da indústria.
