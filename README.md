# Teito’s · Cardápio digital

Projeto React/Vite com busca sem distinção de acentos, categorias, sugestões por dia e preços por formato. Interface responsiva, sem pedidos ou cadastro.

## Executar

```sh
npm install
npm run dev
```

Para produção: `npm run build`. Na Vercel, usar o preset Vite, comando `npm run build` e diretório `dist`. Não houve publicação externa.

## Atualizar conteúdo

Os produtos estão em `src/menu.js`, separados da interface. Cada linha contém nome, preços separados por `/`, descrição opcional e dia opcional, separados por `|`. `?` representa preço não legível ou não informado. As imagens de origem foram preservadas em `referencias/`.

## Pendências para publicação

- Confirmar preços da picanha à mineira, do espeto de contra filé/lombo/linguiça para 3 pessoas e do espeto de filé mignon/frango/lombo/linguiça para 3 pessoas. Os valores encobertos aparecem como Consultar.
- A imagem final de cachaças/whiskies está cortada, assim como a página de refrigerantes. Foram incluídas apenas linhas cujos nomes e preços são legíveis; enviar as páginas completas para complementar.
- Tortas: consultar, conforme fonte.
- Não foi inferido horário de funcionamento a partir da captura “fechada agora”.
- O botão de avaliação usa o link do Google Maps fornecido pelo estabelecimento, configurado em `src/config.js`. Demais links externos, eventos e promoções aguardam informações confirmadas. Há números de telefone diferentes nas capturas; nenhum contato foi adicionado.
- As fotos do cardápio estão identificadas na fonte como ilustrativas. A interface usa apenas a logo, sem apresentar essas imagens como fotos reais dos pratos.
- Confirmar domínio de produção antes de gerar QR Code de alta resolução, com correção de erro alta.

As fontes web têm fallback local em Georgia/sans-serif se a conexão não estiver disponível.
