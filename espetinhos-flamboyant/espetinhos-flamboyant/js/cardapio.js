(function () {
  var base = 'https://sistemaspdv.com.br/mesaespetinhosflamboyant/imagem/';
  var D = [
    ['esp', 'Churrasco Bovino', '', '12,90', '3.png'],
    ['esp', 'Coração', '', '12,90', '6.png'],
    ['esp', 'Kafta', '', '11,90', '7.png'],
    ['esp', 'Linguiça Pura', '', '10,90', '2.png'],
    ['esp', 'Medalhão de Frango', '', '11,90', '4.png'],
    ['esp', 'Mix de Pimenta Gourmet - 100 gramas', 'Leve e moderada - irresistível', '4,99', '96.jpg'],
    ['esp', 'Pão de Alho', '', '9,90', '1.png'],
    ['esp', 'Pão de Peperoni com Requeijão', '', '9,90', '137.png'],
    ['esp', 'Queijo Coalho', '', '10,00', '5.png'],
    ['esp', 'Romeu e Julieta (doce)', 'Queijo, goiabada gourmet e bacon', '12,50', '124.jpeg'],
    ['brasa', 'Bife Ancho Angus - 1 porção', 'Aproximadamente 0,900 gramas', '132,00', '12.png', '139,00'],
    ['brasa', 'Bife Ancho Angus - 1/2 porção', 'Aproximadamente 0,450 gramas', '72,90', '13.png'],
    ['brasa', 'Bife Steak Choriço (Estancia 92) - 1 porção', 'Aproximadamente 0,800 gramas (serve de 02 a 03 pessoas)', '119,00', '163.jpeg', '129,00'],
    ['brasa', 'Bisteca com Filé Angus - 1 porção', 'Aproximadamente 1.400 gramas', '132,00', '10.jpg', '139,00'],
    ['brasa', 'Bisteca com Filé Angus - 1/2 porção', 'Aproximadamente 0,700 gramas', '72,00', '11.jpg', '72,90'],
    ['brasa', 'Costelinha Defumada ao Molho Barbecue com Batata Frita', '0,500 gramas de costelinha defumada + 0,400 de batata frita', '89,00', '130.jpg'],
    ['brasa', 'Pão Baguete (semi italiano)', '', '11,99', '118.jpeg'],
    ['brasa', 'Porção de Carne com Queijo Mussarela Derretido', 'Peso aproximado 0,480 gramas', '69,90', '131.jpg'],
    ['lanche', 'Baguete de Choripan (linguiça) com queijo', 'Baguete semi italiana, mussarela fatiada, linguiça e vinagrete', '37,90', '136.png'],
    ['lanche', 'Hambúrguer-Cheddar na Brasa', 'Hambúrguer artesanal 180 gramas, pão de brioche e cheddar', '29,90', '173.png'],
    ['lanche', 'Lanche Baguete Carne', 'Churrasco 0,220 gramas, vinagrete, queijo e baguete semi italiana', '40,90', '105.png'],
    ['porcao', 'Anéis de Cebola (250 gramas)', '', '22,90', '153.jpg'],
    ['porcao', 'Batata Frita', 'Aproximadamente 400 gramas', '25,90', '21.png'],
    ['porcao', 'Polenta com Calabresa Frita', '', '24,90', '94.png'],
    ['porcao', 'Polenta com Queijo Frita', '', '24,90', '93.png'],
    ['acomp', 'Amendoim Mendorato 24 gr', '', '3,50', '107.png'],
    ['cerveja', 'Heineken Long Neck', '', '12,00', '46.png'],
    ['cerveja', 'Heineken Zero Long Neck', '', '12,00', '47.png'],
    ['cerveja', 'Ice Smirnoff 275 ml', '', '13,00', '76.png'],
    ['cerveja', 'Itaipava Malzbier Long Neck', '', '12,00', '52.png'],
    ['refri', 'Água Tônica Antarctica - lata 350 ml', '', '7,50', '28.png'],
    ['refri', 'Coca-Cola Zero - lata 350 ml', '', '7,50', '15.png'],
    ['refri', 'Coca-Cola lata - 350 ml', '', '7,50', '23.png'],
    ['refri', 'Energético Monster - lata 473 ml', '', '15,00', '31.png'],
    ['refri', 'Fanta Laranja lata - 350 ml', '', '7,50', '24.png'],
    ['refri', 'Fanta Uva lata 350 ml', '', '7,50', '126.png'],
    ['refri', 'Guaraná Antarctica lata - 350 ml', '', '7,50', '26.png'],
    ['refri', 'Guaraná Antarctica lata zero - 350 ml', '', '7,50', '27.png'],
    ['refri', 'H20 Limoneto 500 ml', '', '8,50', '106.png'],
    ['refri', 'H2O Limão - 500 ml', '', '8,50', '38.png'],
    ['refri', 'Schweppes Citrus lata 350 ml', '', '7,99', '103.png'],
    ['refri', 'Sprite lata - 350 ml', '', '7,49', '25.png'],
    ['agua', 'Água com gás', '', '4,50', '42.png'],
    ['agua', 'Água sem gás', '', '3,50', '41.png'],
    ['suco', 'Del Valle - uva', '', '7,50', '44.png'],
    ['suco', 'Kapo - uva', '', '4,50', '45.png'],
    ['suco', 'Kapo morango', '', '4,50', '114.png'],
    ['sobremesa', 'Pudim de Leite Condensado', '', '14,99', '14.png']
  ];
  var g = document.getElementById('grid'), em = document.getElementById('empty'), qi = document.getElementById('q');
  var cat = 'all', q = '';

  D.forEach(function (d) {
    var a = document.createElement('article');
    a.className = 'item';
    a.dataset.c = d[0];
    a.dataset.n = (d[1] + ' ' + d[2]).toLocaleLowerCase('pt-BR');

    var photo = document.createElement('div');
    photo.className = 'product-photo';
    var image = document.createElement('img');
    image.src = base + d[4];
    image.alt = d[1];
    image.loading = 'lazy';
    image.decoding = 'async';
    photo.appendChild(image);
    a.appendChild(photo);

    var title = document.createElement('h3');
    title.textContent = d[1];
    a.appendChild(title);
    if (d[2]) {
      var description = document.createElement('p');
      description.textContent = d[2];
      a.appendChild(description);
    }

    var price = document.createElement('div');
    price.className = 'pr';
    price.appendChild(document.createTextNode('R$ ' + d[3]));
    if (d[5]) {
      var oldPrice = document.createElement('del');
      oldPrice.textContent = 'R$ ' + d[5];
      price.appendChild(oldPrice);
    }
    a.appendChild(price);
    g.appendChild(a);
  });

  function apply() {
    var n = 0;
    document.querySelectorAll('#grid .item').forEach(function (i) {
      var s = (cat === 'all' || i.dataset.c === cat) && i.dataset.n.indexOf(q) > -1;
      i.classList.toggle('hide', !s);
      if (s) {
        i.style.animation = 'none';
        void i.offsetWidth;
        i.style.animation = 'pop .45s ' + (n++ * .04) + 's both';
      }
    });
    em.classList.toggle('hide', n > 0);
  }

  document.getElementById('tabs').addEventListener('click', function (e) {
    var b = e.target.closest('.tab');
    if (!b) return;
    document.querySelectorAll('.tab').forEach(function (x) { x.classList.remove('on'); });
    b.classList.add('on');
    cat = b.dataset.c;
    apply();
  });
  qi.addEventListener('input', function () { q = qi.value.trim().toLocaleLowerCase('pt-BR'); apply(); });
})();
