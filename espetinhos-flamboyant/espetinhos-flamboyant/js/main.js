(function () {
  var WHATS = '5500900000000'; // troque pelo número real (DDI + DDD + número)
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return document.querySelectorAll(s); };

  // brasas subindo no hero
  var em = $('#em');
  if (em) for (var i = 0; i < 22; i++) {
    var e = document.createElement('span');
    e.className = 'ember';
    e.style.left = Math.random() * 100 + '%';
    e.style.animationDuration = 4 + Math.random() * 5 + 's';
    e.style.animationDelay = Math.random() * 6 + 's';
    em.appendChild(e);
  }

  // faixa em movimento
  var mq = $('#mqi');
  if (mq) {
    var names = ['Churrasco bovino', 'Coração', 'Kafta', 'Linguiça pura', 'Medalhão de frango', 'Queijo coalho', 'Pão de alho', 'Costelinha barbecue'], h = '';
    names.forEach(function (x) { h += x + '<span>✦</span>'; });
    mq.innerHTML = h + h + h + h;
  }

  // aberto / fechado
  var st = $('#st');
  if (st) {
    var d = new Date(), w = d.getDay(), hr = d.getHours() + d.getMinutes() / 60;
    var H = { 0: [12, 22], 2: [17, 23], 3: [17, 23], 4: [17, 23], 5: [17, 25], 6: [17, 25] };
    var t = H[w], p = H[(w + 6) % 7];
    var open = (t && hr >= t[0] && hr < t[1]) || (p && p[1] > 24 && hr < p[1] - 24);
    st.className = 'pill ' + (open ? 'o' : 'c');
    st.textContent = open ? 'Aberto agora: a brasa está acesa' : 'Fechado agora: veja os horários no rodapé';
  }

  // contadores
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target, n = +el.dataset.n, c = 0, s = Math.max(1, Math.ceil(n / 60));
      var iv = setInterval(function () {
        c = Math.min(n, c + s);
        el.textContent = c.toLocaleString('pt-BR');
        if (c >= n) clearInterval(iv);
      }, 25);
      io.unobserve(el);
    });
  }, { threshold: .5 });
  $$('[data-n]').forEach(function (x) { io.observe(x); });

  // depoimentos
  var qs = $$('.quote'), ds = $$('#dots button'), ci = 0, tm;
  function show(i) {
    ci = i;
    qs.forEach(function (q, j) { q.classList.toggle('on', j === i); });
    ds.forEach(function (b, j) { b.classList.toggle('on', j === i); });
  }
  function auto() { clearInterval(tm); tm = setInterval(function () { show((ci + 1) % qs.length); }, 6000); }
  if (qs.length) {
    ds.forEach(function (b, i) { b.onclick = function () { show(i); auto(); }; });
    auto();
  }

  // menu mobile
  var mn = $('#menu');
  $('#bg').onclick = function () { mn.classList.toggle('open'); };
  mn.addEventListener('click', function (e) { if (e.target.tagName === 'A') mn.classList.remove('open'); });

  // rolagem: progresso, voltar ao topo e seção ativa
  var spy = [], hd = $('#hd'), top = $('#top');
  $$('#menu a').forEach(function (l) {
    var hf = l.getAttribute('href');
    if (hf && hf.charAt(0) === '#' && $(hf)) spy.push([l, $(hf)]);
  });
  function sc() {
    var y = window.scrollY, H2 = document.documentElement.scrollHeight - window.innerHeight;
    hd.style.setProperty('--p', (H2 > 0 ? y / H2 * 100 : 0) + '%');
    top.classList.toggle('v', y > 500);
    if (!spy.length) return;
    var cur = 0;
    spy.forEach(function (s, i) { if (s[1].offsetTop - 120 <= y) cur = i; });
    spy.forEach(function (s, i) { s[0].classList.toggle('on', i === cur); });
  }
  window.addEventListener('scroll', sc, { passive: true });
  sc();
  top.onclick = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  // formulário envia o pedido para o WhatsApp
  var f = $('#f');
  if (f) f.onsubmit = function (e) {
    e.preventDefault();
    var v = f.querySelectorAll('input,select,textarea');
    var m = 'Olá! Sou ' + v[0].value + ' (' + v[1].value + '). Tipo: ' + v[2].value + '. Pedido: ' + v[3].value;
    window.open('https://wa.me/' + WHATS + '?text=' + encodeURIComponent(m), '_blank');
    $('#ok').style.display = 'block';
    f.reset();
  };
})();
