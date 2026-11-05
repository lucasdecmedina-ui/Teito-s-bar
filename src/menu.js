// Transcrição das imagens fornecidas. null = preço encoberto ou não informado.
export const sections=[];
function add(id,title,group,labels,rows,note='') { sections.push({id,title,group,labels,note,items:rows.split('\n').filter(Boolean).map((row,i)=>{const [name,prices,description='',day='']=row.split('|');return {id:`${id}-${i}`,name,prices:prices.split('/').map(p=>p==='?'?null:Number(p)),description,day};})}); }
add('pasteis','Pastéis','Para começar',['Unidade'],`Pastel de carne|9
Pastel de queijo|9
Pastel de pizza|9
Pastel de palmito|9
Pastel de camarão|9
Pastel de calabresa com queijo|9
Pastel de frango com catupiry|9
Pastel de carne seca com catupiry|9
Pastel de camarão com catupiry|9
Pastel especial|10|2 recheios
Pastel de Nutella|12
Pastel de Nutella com morango|13
Pastel Laka|11
Pastel Romeu e Julieta|11
Pastel de brigadeiro|11
Pastel de doce de leite|11`);
add('salgados','Salgados','Para começar',['Unidade'],`Bolinho de bacalhau|10
Kibe|10
Maravilha|10
Coxinha de frango / frango com catupiry|10
Coxinha de carne seca com catupiry|10
Croquete de camarão|9
Croquete de carne|9`);
add('artesanais','Lanches artesanais','Lanches',['Lanche'],`X-Bacon|31
X-Bacon egg|33
X-Bacon salada|33
X-Bacon egg salada|35
X-Burger|26
X-Salada|28
X-Egg salada|30`,'Todos os lanches acompanham fritas.');
add('tradicionais','Lanches tradicionais','Lanches',['Lanche'],`Bauru|18
Misto frio|15
Misto quente|16
Queijo|14
Queijo quente|15
X-Churrasco|28
X-Churrasco à vinagrete|30
X-Churrasco bacon egg salada|36
X-Calabresa|24
X-Calabresa com vinagrete|26
X-Calabresa bacon egg salada|32
X-Frango|24
X-Frango à vinagrete|26
X-Frango bacon egg salada|30
X-Mignon|35
X-Mignon à vinagrete|37
X-Mignon bacon egg salada|42
X-Americano no prato com fritas|51|Contra filé, palmito, presunto, queijo, salada, pão e ovo.`,'Todos os lanches acompanham fritas.');
add('sugestoes','Sugestão do dia','Almoço',['Individual','Comercial','Só mistura'],`Virado à Paulista|33/69/18||Terça-feira
Costela com batatas|33/66/25||Terça-feira
Carne assada|33/66/26||Quarta-feira
Feijoada|43/?/30||Quarta-feira
Feijoada média|?/103/?||Quarta-feira
Feijoada grande|?/143/?|3 a 4 pessoas|Quarta-feira
Dobradinha|33/66/22||Quinta-feira
Bife à rolê|33/66/22||Quinta-feira
Filé de peixe (panga)|40/78/26|Ao molho de camarão|Sexta-feira
Filé de peixe (pescada)|42/80/27|Ao molho de camarão|Sexta-feira
Rabada|33/66/23||Sexta-feira
Feijoada|43/?/30||Sábado
Feijoada média|?/103/?||Sábado
Feijoada grande|?/143/?|3 a 4 pessoas|Sábado`,'Confira as sugestões de terça a sábado. Opções sem preço na fonte não são exibidas.');
add('pratos','Pratos do dia','Almoço',['Individual','Comercial','Só mistura'],`Filé mignon à parmegiana|62/120/36
Filé mignon à milanesa|58/113/31
Filé mignon acebolado|58/113/31
Filé mignon grelhado|56/106/30
Filé mignon à cavalo|58/113/31
Picanha grelhada|60/120/33
Picanha acebolada|62/123/34
Contra filé à parmegiana|41/81/25
Contra filé à milanesa|38/76/22
Contra filé acebolado|38/76/22
Contra filé à cavalo|38/76/22
Contra filé grelhado|36/71/20
Filé de frango à parmegiana|36/70/21
Filé de frango à milanesa|30/60/18
Filé de frango grelhado|28/56/17
Filé de frango à cavalo|30/60/18
Filé de frango acebolado|30/60/18
Bisteca|29/58/17
Lombo suíno|29/59/17
Salmão com arroz e legumes|56/110/28
Omelete com arroz e fritas|28/56/19
Filé de peixe (panga) grelhado|35/69/18
Filé de peixe (panga) à milanesa|37/73/20
Filé de peixe (panga) à parmegiana|41/80/24
Filé de peixe (pescada) grelhado|36/72/20
Filé de peixe (pescada) à milanesa|38/75/21
Filé de peixe (pescada) à parmegiana|41/80/25
Calabresa acebolada|29/58/17`,'Acompanham arroz branco, feijão, batata portuguesa, farofa e salada (alface, tomate e cebola), exceto salmão e omelete. Troca por arroz à grega: + R$ 4,00 individual / + R$ 8,00 comercial.');
add('light','Opções light','Almoço',['Individual'],`Filé mignon grelhado com legumes|48
Filé mignon grelhado com salada|40
Filé mignon grelhado com fritas|43
Filé mignon à milanesa com salada|42
Filé mignon à milanesa com legumes|49
Filé mignon à milanesa com fritas|44
Contra filé grelhado com legumes|36
Contra filé grelhado com salada|28
Contra filé grelhado com fritas|31
Contra filé à milanesa com salada|30
Contra filé à milanesa com legumes|38
Contra filé à milanesa com fritas|33
Filé de frango grelhado com legumes|32
Filé de frango grelhado com salada|26
Filé de frango grelhado com fritas|28
Filé de frango à milanesa com salada|28
Filé de frango à milanesa com legumes|34
Filé de frango à milanesa com fritas|30
Peixe grelhado com legumes|37
Peixe grelhado com salada|33
Peixe à milanesa com salada|35
Peixe à milanesa com legumes|39
Salmão grelhado com salada|40
Salmão grelhado com legumes|47
Salmão grelhado com fritas|42
Picanha grelhada com fritas|48
Picanha grelhada com salada|47
Picanha grelhada com legumes|53`);
add('novidades','Especialidades da casa','Para compartilhar',['3 pessoas','5 pessoas'],`Picanha Teito’s Bar|215/285|Arroz à grega, batata portuguesa, farofa, molho de cebola e pão.
Picanha à moda|235/299|Arroz à grega, fritas, farofa e legumes na manteiga, molho de cebola e pão.
Picanha à carreteiro|220/299|Arroz carreteiro, fritas, farofa, molho de cebola e pão.
Picanha à mineira|?/?|Arroz branco, feijão tropeiro e vinagrete.
Contra filé à francesa|160/210|Contra filé grelhado, arroz branco, fritas, presunto, cebola e ervilha na manteiga.
Filé mignon à francesa|185/265|Filé grelhado, arroz branco, fritas, presunto, cebola e ervilha na manteiga.
Contra filé à parmegiana 4 queijos|200/280|Gorgonzola, catupiry, mussarela, parmesão, molho branco, arroz branco e fritas.
Filé mignon à parmegiana 4 queijos|220/310|Gorgonzola, catupiry, mussarela, parmesão, molho branco, arroz branco e fritas.
Contra filé ao molho gorgonzola|195/270|Arroz com brócolis e fritas.
Filé mignon ao molho gorgonzola|210/290|Arroz com brócolis e fritas.`);
add('baiao','Baião de dois','Para compartilhar',['2 pessoas','3 pessoas'],`Baião de dois|140/195|Arroz, feijão fradinho, carne seca, calabresa e bife de carne de sol.`);
add('casquinha','Casquinha de siri','Para começar',['Unidade'],`Casquinha de siri|23`);
add('massas','Massas','Almoço',['Individual','Comercial'],`Macarrão ao alho e óleo|26/44
Macarrão com brócolis ao alho|26/50
Macarrão ao molho de calabresa|33/65
Macarrão à italiana|43/83`);
const carteNote='Troca de fritas por batata portuguesa: + R$ 6,00 para 3 pessoas / + R$ 10,00 para 5 pessoas.';
add('frangos','À la carte · Frangos','Para compartilhar',['3 pessoas','5 pessoas'],`Frango à passarinho|112/150|Arroz e fritas.
Frango à passarinho completo|127/152|Arroz à grega, fritas, farofa e vinagrete.
Filé de frango à parmegiana|135/177|Arroz e fritas.
Filé de frango à francesa|140/180|Frango grelhado, arroz branco, fritas, presunto, cebola e ervilha na manteiga.
Filé de frango à cubana|139/186|Filé de frango à milanesa, arroz à grega, fritas, presunto, cebola, ervilha na manteiga, banana à milanesa e abacaxi.
Frango à diplomata|145/192|Queijo, presunto, arroz à grega, fritas, cebola, palmito e ervilha na manteiga.
Frango à parmegiana 4 queijos|160/212|Gorgonzola, catupiry, mussarela, parmesão, molho branco, arroz branco e fritas.
Filé de frango ao molho gorgonzola|158/200|Arroz com brócolis e fritas.`,carteNote);
add('peixes','À la carte · Peixes','Para compartilhar',['3 pessoas','5 pessoas'],`Filé de peixe grelhado|133/170|Pescada ou panga. Arroz e legumes na manteiga.
Filé de peixe ao molho de camarão|170/210|Pescada ou panga. Arroz e purê.
Filé de peixe à Belle Mauniere|177/217|Pescada ou panga. Filé grelhado, alcaparras, camarão, champignon, arroz e legumes na manteiga.
Filé de salmão grelhado à moda|164/225|Arroz e legumes.
Meca Teito’s Bar|160/215|Arroz à grega, farofa e fritas.
Meca santista|165/245|Risoto de palmito e farofa de banana.
Salmão à Belle Mauniere|190/250|Alcaparras, camarão, champignon, arroz e legumes.`,carteNote);
add('carnes','À la carte · Carnes','Para compartilhar',['3 pessoas','5 pessoas'],`Contra filé|147/190|Arroz e fritas.
Contra filé à cavalo|155/200|Arroz, fritas e farofa.
Contra filé à milanesa|165/205|Arroz à grega e fritas.
Contra filé à cubana|185/235|Filé à milanesa, arroz à grega, fritas, presunto, cebola, ervilha na manteiga, banana à milanesa e abacaxi.
Contra filé à carreteiro|179/225|Arroz à carreteiro, fritas e farofa.
Contra filé à parmegiana|175/222|Arroz e fritas.
Contra filé à diplomata|175/240|Contra filé à milanesa, queijo, presunto, arroz à grega, fritas, cebola, palmito e ervilha na manteiga.
Contra filé Teito’s Bar|183/252|Arroz à grega, fritas, presunto, queijo, ovos e legumes na manteiga.
Escondidinho de carne seca|175/220|Arroz branco.
Pizzaiolo|190/255|Filé mignon grelhado, queijo, tomate, orégano, arroz e fritas.
Picanha grelhada com alho frito|190/255|Arroz à grega e fritas.
Filé mignon à milanesa|180/240|Arroz à grega, fritas e farofa.
Filé mignon à cubana|203/272|Filé à milanesa, arroz à grega, fritas, presunto, cebola, ervilha na manteiga, banana à milanesa e abacaxi.
Filé mignon à carreteiro|199/272|Arroz à carreteiro, fritas e farofa.
Filé mignon à parmegiana|201/277|Arroz e fritas.
Filé mignon à diplomata|210/280|Filé mignon à milanesa, queijo, presunto, arroz à grega, fritas, cebola, palmito e ervilha na manteiga.`,carteNote);
add('espetos','À la carte · Espetos','Para compartilhar',['3 pessoas','5 pessoas'],`Contra filé, lombo e linguiça|?/246|Arroz à grega, fritas, farofa e molho de cebola.
Picanha, filé e linguiça|228/286|Arroz à grega, fritas, farofa e molho de cebola.
Picanha, contra filé e lombo|220/275|Arroz à grega, fritas, farofa e molho de cebola.
Espeto misto|240/305|Picanha, filé, lombo e linguiça. Arroz à grega, fritas, farofa, molho de cebola e legumes na manteiga.
Filé mignon, filé de frango, lombo e linguiça|?/265|Arroz à grega, fritas, farofa e molho de cebola.
Filé mignon à moda|210/287|Arroz à grega, fritas, presunto, queijo, ovos e legumes na manteiga.`,carteNote);
add('porcoes','Porções mistas','Para compartilhar',['Inteira'],`Isca de frango com isca de peixe|125
Lula, camarão à milanesa e isca de peixe|147
Calabresa, contra filé e frango aperitivo|140
Mandioca e fritas|70`);
add('saladas','Saladas','Acompanhamentos',['Média','Grande'],`Salada simples|20/30|Alface, tomate e cebola.
Salada mista|35/50|Alface, tomate, cebola, ervilha, palmito e azeitona.
Salada completa|50/67|Alface, tomate, cebola, ervilha, palmito, azeitona, brócolis e presunto.
Salada de palmito|50/60`);
add('molhos','Molhos','Acompanhamentos',['Porção'],`Molho tártaro|10
Molho de cebola|10
Molho vinagrete|10
Molho rosê|10
Molho verde|10`);
add('guarnicoes','Guarnições','Acompanhamentos',['Meia','Inteira'],`Arroz branco|25/35
Arroz à grega|30/40
Couve|25/35
Farofa|15/25
Feijão|15/25
Legumes na manteiga|30/45`,'Porções à parte.');
add('extras','Extras','Acompanhamentos',['Porção'],`Caldo verde|45
Fritas executiva|15
Arroz executivo|10
Salada (PF)|5
Salada comercial|10
Banana à milanesa|4
Ovo frito|3|Unidade`);
add('sobremesas','Sobremesas','Para adoçar',['Unidade'],`Petit gateau|22
Pudim|12
Tortas|?|Holandesa, limão, maracujá, banoffe ou mousse de chocolate.`);
add('sucos','Sucos','Bebidas',['Suco'],`Laranja natural|14
Limão natural|12
Limonada suíça|14
Acerola|13
Acerola com laranja|13
Abacaxi|13
Abacaxi com hortelã|13
Caju|13
Graviola|13
Goiaba|13
Manga|13
Maracujá|13
Melão|13
Morango|13
Uva|13
Açaí com laranja|22
Frozen de laranja com morango|20
Suco dois sabores|17
Suco com leite|16
Embalagem de suco para viagem|1.5`);
add('bebidas','Refrigerantes & bebidas','Bebidas',['KS','Lata','600 ml','2 L'],`Guaraná|?/7.5/10.5/17
Pepsi|?/7.5/10.5/?
Coca-Cola|5/7.5/10.5/19
H2OH!|?/8.5/?/?
Fanta|?/7.5/?/17
Soda|?/7.5/10.5/?
Citrus|?/7.5/?/?
Guaraviton|?/6/?/?
Ice Tea limão / pêssego|?/7.5/?/?`);
add('latas','Cervejas · Latas','Bebidas',['Lata'],`Heineken|9.5
Skol|7
Brahma|7.5
Brahma sem álcool|7
Império|7.5
Itaipava|6.5`);
add('longneck','Cervejas · Long neck','Bebidas',['Long neck'],`Heineken|11.9
Corona / Corona Zero|11.9
Stella Artois|11
Stella Pure Gold|11
Michelob Ultra|11
Budweiser|10
Malzbier|11
Petra|11
Beats|11
Smirnoff Ice|12`);
add('garrafas','Cervejas · 600 ml','Bebidas',['600 ml'],`Stella Gold|18.9
Corona|18.9
Heineken|17.9
Amstel|13.9
Eisenbahn|15
Spaten|15.9
Original|15.9
Stella Artois|15.9
Serramalte|15.9
Budweiser|13.9
Brahma Duplo Malte|14
Terezópolis|14
Itaipava|10`);
add('drinks','Batidas & caipirinhas','Bebidas',['Drink'],`Caipirinha de pinga com limão|20
Caipirinha de 2 frutas (pinga)|23
Caipirinha de 2 frutas (vodka)|27
Caipirinha de vodka ou Sagatiba|24
Caipirinha de Bacardi|24
Caipirinha de Seleta ou Salinas|25
Caipirinha de vodka Absolut|30
Saquê|18
Brasileirinha|10
Batida de amendoim|12
Batida de maracujá|12
Batida de pinga|18|Feita na hora.
Batida de vodka|20|Feita na hora.
Espanhola|19
Saquê dois sabores|20`,'Acréscimo de frutas: + R$ 2,00.');
add('vinhos','Vinhos','Bebidas',['Porção'],`Taça de vinho|14
Garrafa de vinho seco|65
Garrafa de vinho suave|60`);
add('cachacas','Doses · Cachaças','Bebidas',['Dose'],`Boazinha|13
Chico Mineiro|15
Espírito de Minas|16
Sabor de Minas|16
Sagatiba Prata|13`);
add('whisky','Doses · Whisky','Bebidas',['Dose'],`Ballantines|29
Black Label|32
Red Label|24
Chivas|28
Grant’s|16`);
add('aperitivos','Doses & aperitivos','Bebidas',['Dose'],`Pinga 51|4
51 com limão|4.5
Velho Barreiro|4
Velho Barreiro com limão|4.5
Velho Barreiro com Cinar|6.5
Bacardi|11
Big Apple|13
Campari|13
Catuaba Selvagem|7
Cinzano|11
Cinar|9
Contini|9
Dreher|7
Dreher com mel e limão|9
Domeck|10
Domeck com mel e limão|10
Fernet|8
Genebra|9
Martini|9
Gin|12
Jurubeba|9
Jurupinga|9
Maria Mole|19|Domeck com Martini.
Para Tudo|7
São Francisco|9
São João da Barra|7
São João da Barra com mel e limão|9
Steinhager|10
Tequila Jose Cuervo|17
Underberg|10
Vodka Absolut|20
Vodka Smirnoff|12`);
