/* Fora de Jogo · landing page
   JavaScript simples, sem dependências. Funciona aberto diretamente no browser (file://).
   Regras do relatório (secção 7.3): o assistente só informa e encaminha, nunca avalia,
   nunca diagnostica, nunca aconselha tratamento e não guarda o texto das conversas.
   A triagem é anónima e o resultado nunca é guardado nem ligado ao e-mail. */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ------------------------------------------------------------------
     Cliques nos contactos de ajuda
     Ponto de ligação para um contador agregado (relatório, secções 4.1 e 6.1).
     Nesta versão não é enviado nada: sem cookies e sem analytics.
     ------------------------------------------------------------------ */
  function registarCliqueAjuda(origem) {
    // LIGAÇÃO FUTURA: enviar apenas { origem } para um contador agregado,
    // sem identificadores, sem cookies e sem dados pessoais.
    void origem;
  }

  document.addEventListener("click", function (evento) {
    var alvo = evento.target.closest ? evento.target.closest("[data-ajuda]") : null;
    if (alvo) registarCliqueAjuda(alvo.getAttribute("data-ajuda"));
  });

  /* ------------------------------------------------------------------
     Utilitários
     ------------------------------------------------------------------ */
  // Cada funcionalidade corre isolada: um erro numa não desliga as outras.
  function executar(nome, funcao) {
    try {
      funcao();
    } catch (e) {
      if (window.console) console.error("Fora de Jogo: erro em " + nome, e);
    }
  }
  function el(tag, classe, texto) {
    var no = document.createElement(tag);
    if (classe) no.className = classe;
    if (texto) no.textContent = texto;
    return no;
  }

  function mostrarErro(campo, elErro, mensagem) {
    elErro.textContent = "Erro: " + mensagem;
    elErro.hidden = false;
    if (campo) campo.setAttribute("aria-invalid", "true");
  }

  function limparErro(campo, elErro) {
    elErro.textContent = "";
    elErro.hidden = true;
    if (campo) campo.removeAttribute("aria-invalid");
  }

  /* ------------------------------------------------------------------
     Triagem: uma pergunta de cada vez, resultado em três níveis
     ------------------------------------------------------------------ */
  executar("triagem", function () {
    var form = document.getElementById("form-triagem");
    if (!form) return;

    var perguntas = Array.prototype.slice.call(form.querySelectorAll(".pergunta"));
    var botaoAnterior = document.getElementById("triagem-anterior");
    var botaoSeguinte = document.getElementById("triagem-seguinte");
    var botaoVer = document.getElementById("triagem-ver");
    var erro = document.getElementById("triagem-erro");
    var resultado = document.getElementById("triagem-resultado");
    var resultadoTitulo = document.getElementById("resultado-titulo");
    var resultadoTexto = document.getElementById("resultado-texto");
    var botaoRecomecar = document.getElementById("triagem-recomecar");
    var atual = 0;

    // [A CONFIRMAR] Limites dos três níveis definidos pela equipa, a rever com o ICAD ou a Dianova.
    var NIVEIS = [
      {
        maximo: 0,
        titulo: "Nestas perguntas não apareceram sinais",
        texto: "Ainda bem. Se alguma coisa mudar, ou se te preocupas com alguém, a linha 1414 também está lá para isso."
      },
      {
        maximo: 2,
        titulo: "Apareceram alguns sinais",
        texto: "Vale a pena prestares atenção. Falar com alguém agora pode ajudar-te a perceber o que se passa. A linha 1414 é confidencial."
      },
      {
        maximo: 5,
        titulo: "Apareceram vários sinais",
        texto: "Não estás sozinho, e isto não é falta de força de vontade. A perturbação do jogo tem tratamento. O primeiro passo é falar: liga 1414."
      }
    ];

    function respostaDe(indice) {
      var marcada = perguntas[indice].querySelector("input:checked");
      return marcada ? marcada.value : null;
    }

    function primeiroRadio(indice) {
      return perguntas[indice].querySelector("input");
    }

    function mostrarPergunta(indice, darFoco) {
      atual = indice;
      perguntas.forEach(function (fs, i) {
        fs.classList.toggle("ativa", i === indice);
      });
      botaoAnterior.hidden = indice === 0;
      var ultima = indice === perguntas.length - 1;
      botaoSeguinte.hidden = ultima;
      botaoVer.hidden = !ultima;
      limparErroTriagem();
      if (darFoco) {
        var marcada = perguntas[indice].querySelector("input:checked");
        (marcada || primeiroRadio(indice)).focus();
      }
    }

    function limparErroTriagem() {
      limparErro(null, erro);
      perguntas.forEach(function (fs) { fs.removeAttribute("aria-describedby"); });
    }

    function pedirResposta(indice) {
      perguntas[indice].setAttribute("aria-describedby", "triagem-erro");
      mostrarErro(null, erro, "Escolhe Sim ou Não para continuar.");
      primeiroRadio(indice).focus();
    }

    botaoSeguinte.addEventListener("click", avancar);

    botaoAnterior.addEventListener("click", function () {
      mostrarPergunta(atual - 1, true);
    });

    form.addEventListener("change", function () {
      if (respostaDe(atual)) limparErroTriagem();
    });

    function avancar() {
      if (!respostaDe(atual)) { pedirResposta(atual); return; }
      mostrarPergunta(atual + 1, true);
    }

    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      // Enter numa opção antes da última pergunta funciona como "Pergunta seguinte".
      if (atual < perguntas.length - 1) { avancar(); return; }
      for (var i = 0; i < perguntas.length; i++) {
        if (!respostaDe(i)) { mostrarPergunta(i, false); pedirResposta(i); return; }
      }
      var sins = 0;
      for (var j = 0; j < perguntas.length; j++) {
        if (respostaDe(j) === "sim") sins++;
      }
      var nivel = NIVEIS.filter(function (n) { return sins <= n.maximo; })[0];
      resultadoTitulo.textContent = nivel.titulo;
      resultadoTexto.textContent = nivel.texto;
      form.hidden = true;
      resultado.hidden = false;
      resultadoTitulo.focus();
    });

    botaoRecomecar.addEventListener("click", function () {
      form.reset();
      resultado.hidden = true;
      resultadoTitulo.textContent = "";
      resultadoTexto.textContent = "";
      form.hidden = false;
      mostrarPergunta(0, true);
    });

    mostrarPergunta(0, false);
  });

  /* ------------------------------------------------------------------
     Assistente de orientação
     ------------------------------------------------------------------ */
  executar("assistente", function () {
    var registo = document.getElementById("chat-registo");
    var form = document.getElementById("chat-form");
    var campo = document.getElementById("chat-mensagem");
    var erro = document.getElementById("chat-erro");
    var rapidas = document.getElementById("chat-rapidas");
    var botaoRecomecar = document.getElementById("chat-recomecar");
    var botaoAmigo = document.getElementById("abrir-amigo");
    var seccao = document.getElementById("assistente");
    if (!registo || !form) return;

    var interrompida = false;
    var ocupado = false;   // evita pedidos sobrepostos quando houver uma API
    var conversa = 0;      // muda ao recomeçar: respostas antigas são ignoradas

    var CONTACTOS_RISCO = [
      { texto: "112, emergência", href: "tel:112" },
      { texto: "SNS 24: 808 24 24 24", href: "tel:808242424" },
      { texto: "Linha 1414 do ICAD", href: "tel:1414" }
    ];
    var LIGAR_1414 = { texto: "Ligar 1414", href: "tel:1414" };

    // Texto normalizado: minúsculas e sem acentos, para comparar palavras-chave.
    function normalizar(texto) {
      return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Cada chave tem de começar uma palavra ("amig" apanha "amiga", mas "oi" não apanha "foi").
    // Uma chave terminada em "$" tem de ser a palavra inteira ("pai$" não apanha "país").
    function contem(texto, chaves) {
      return chaves.some(function (c) {
        var inteira = c.charAt(c.length - 1) === "$";
        var base = (inteira ? c.slice(0, -1) : c).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp("(^|[^a-z0-9])" + base + (inteira ? "(?![a-z0-9])" : "")).test(texto);
      });
    }

    // Protocolo de risco (relatório, secção 7.3). Corre sempre localmente,
    // antes de qualquer outra resposta, mesmo quando houver uma API ligada.
    var CHAVES_RISCO = [
      "suicid", "matar-me", "matar me", "me matar", "quero morrer", "vou morrer", "morrer",
      "acabar com tudo", "acabar com a minha vida", "tirar a vida", "tirar a minha vida",
      "nao aguento mais", "fazer-me mal", "fazer me mal", "magoar-me", "magoar me",
      "autolesao", "automutil", "em perigo", "desaparecer para sempre", "sem saida",
      "nao quero viver", "nao quero estar aqui", "nao vale a pena viver", "desistir de viver",
      "acabar com isto", "por fim a vida", "por fim a minha vida", "por termo a vida",
      "tirar-me a vida", "tirar me a vida", "nao aguento", "melhor sem mim", "overdose", "enforc"
    ];

    function haRisco(texto) {
      return contem(normalizar(texto), CHAVES_RISCO);
    }

    var RESPOSTA_RISCO = {
      risco: true,
      paragrafos: [
        "Obrigado por teres escrito. Não estás sozinho.",
        "Se estás em perigo agora, liga 112. Podes falar com alguém já na linha SNS 24 ou no 1414.",
        "Esta conversa fica por aqui, para que fales com uma pessoa."
      ],
      ligacoes: CONTACTOS_RISCO
    };

    // Respostas fechadas (relatório, secção 7.3). [A CONFIRMAR] Conteúdo a rever por
    // profissionais de saúde (ICAD ou Dianova) e testado com pelo menos 50 cenários.
    var RESPOSTA_AJUDA = {
      paragrafos: [
        "Obrigado por escreveres. Pedir ajuda é a jogada certa, e não estás sozinho.",
        "A linha 1414 do ICAD é gratuita e confidencial, nos dias úteis das 10h às 18h. Do outro lado está uma pessoa que te pode ouvir e orientar. Fora desse horário, liga para o SNS 24."
      ],
      ligacoes: [LIGAR_1414, { texto: "Ligar SNS 24", href: "tel:808242424" }, { texto: "Fazer a triagem anónima", href: "#triagem" }]
    };

    // A ordem conta: a primeira regra que corresponder dá a resposta.
    var REGRAS = [
      {
        // Primeira pessoa a descrever o próprio problema: vem antes de "amigo" e de "palpites".
        chaves: ["nao consigo parar", "nao consigo deixar", "aposto$", "eu aposto", "apostei", "perdi", "divida", "devo dinheiro", "sou viciad", "estou viciad", "ganhar de volta", "recuperar o que perdi"],
        resposta: RESPOSTA_AJUDA
      },
      {
        chaves: ["amig", "namorad", "irma", "irmao", "pai$", "mae$", "pais$", "filho$", "filha$", "filhos$", "familia", "familiar", "colega", "companheir", "alguem que conheco", "conheco alguem"],
        resposta: {
          paragrafos: [
            "Ainda bem que te preocupas. Não precisas de ter as respostas, só de estar lá. Três passos que podem ajudar:"
          ],
          lista: [
            "Escolhe um momento calmo, longe do jogo e sem pressa.",
            "Diz o que notaste, sem acusar.",
            "Oferece-te para ir com a pessoa pedir ajuda. Podem ligar juntos para o 1414."
          ],
          ligacoes: [LIGAR_1414]
        }
      },
      {
        chaves: ["medicament", "comprimid", "terapia", "tratamento", "psicolog", "psiquiatr", "medico", "diagnost", "cura"],
        resposta: {
          paragrafos: [
            "Não posso fazer diagnósticos nem dar conselhos médicos. Sou uma ferramenta automática.",
            "Quem te pode ajudar a perceber o que se passa e que caminho seguir é um profissional. A linha 1414 é confidencial e pode orientar-te. Também podes ligar para o SNS 24 ou falar com o teu médico de família."
          ],
          ligacoes: [LIGAR_1414, { texto: "Ligar SNS 24", href: "tel:808242424" }]
        }
      },
      {
        chaves: ["o que e a perturb", "o que e o vicio", "o que e isso", "perturbacao", "doenca", "vicio", "e grave", "e normal"],
        resposta: {
          paragrafos: [
            "A perturbação do jogo é uma condição de saúde reconhecida. Não é uma falha de carácter nem falta de força de vontade, e tem tratamento.",
            "Alguns sinais: esconder as apostas, apostar para recuperar o que se perdeu ou pedir dinheiro emprestado. Se te revês nisto, fala com alguém."
          ],
          ligacoes: [{ texto: "Fazer a triagem anónima", href: "#triagem" }, LIGAR_1414]
        }
      },
      {
        chaves: ["triagem", "teste", "questionario", "perguntas"],
        resposta: {
          paragrafos: [
            "A triagem tem cinco perguntas de sim ou não e é anónima. Não é um diagnóstico e não substitui uma avaliação profissional, mas pode ajudar-te a pensar no assunto."
          ],
          ligacoes: [{ texto: "Ir para a triagem", href: "#triagem" }]
        }
      },
      {
        chaves: ["anonim", "dados", "privacidade", "guarda", "registo", "email", "e-mail"],
        resposta: {
          paragrafos: [
            "Esta conversa não fica guardada e não te peço dados pessoais. A triagem também é anónima.",
            "Se deixares o e-mail no formulário, é usado só para as comunicações da campanha e nunca é ligado à triagem."
          ]
        }
      },
      {
        chaves: ["autoexclus", "auto exclus", "auto-exclus", "srij", "bloquear", "proibir"],
        resposta: {
          paragrafos: [
            "O SRIJ permite pedir a autoexclusão, para deixares de ter acesso aos sites de jogo legais em Portugal. O pedido é feito no portal oficial.",
            "Se quiseres falar com alguém sobre isto, a linha 1414 pode ajudar."
          ],
          ligacoes: [{ texto: "Pedir a autoexclusão no SRIJ", href: "https://autoexclusaoonline.srij.turismodeportugal.pt/requerimento" }, LIGAR_1414]
        }
      },
      {
        chaves: ["dica", "palpite", "prognostic", "odd", "cota$", "cotas$", "aposta certa", "apostas certas"],
        resposta: {
          paragrafos: [
            "Aqui não falamos de palpites nem de cotas. Não existe aposta certa.",
            "Se o jogo já pesa, a única jogada certa é pedir ajuda."
          ],
          ligacoes: [LIGAR_1414]
        }
      },
      {
        chaves: ["ajuda", "preciso", "nao consigo", "dinheiro", "ganhar", "apost", "jogo", "jogar"],
        resposta: RESPOSTA_AJUDA
      },
      {
        chaves: ["obrigad"],
        resposta: {
          paragrafos: ["De nada. Se precisares, a linha 1414 está lá. Fala."]
        }
      },
      {
        chaves: ["ola$", "bom dia", "boa tarde", "boa noite", "hey$", "oi$"],
        resposta: {
          paragrafos: ["Olá. Podes escolher uma das respostas rápidas ou escrever o que te preocupa."]
        }
      }
    ];

    var RESPOSTA_DESCONHECIDA = {
      paragrafos: [
        "Não tenho uma resposta para isso. Sou uma ferramenta automática com respostas limitadas.",
        "Para falar com uma pessoa, liga 1414. Se tu ou alguém estão em perigo agora, liga 112."
      ],
      ligacoes: [LIGAR_1414, { texto: "112, emergência", href: "tel:112" }]
    };

    function responderComRegras(mensagem) {
      var texto = normalizar(mensagem);
      for (var i = 0; i < REGRAS.length; i++) {
        if (contem(texto, REGRAS[i].chaves)) return REGRAS[i].resposta;
      }
      return RESPOSTA_DESCONHECIDA;
    }

    /* Função isolada para obter a resposta do assistente.
       Hoje: regras locais. Para ligar a uma API mais tarde, substituir o corpo
       marcado abaixo, mantendo:
         - o protocolo de risco local em primeiro lugar;
         - a resposta no mesmo formato { paragrafos: [], lista?: [], ligacoes?: [] };
         - o envio só do texto da mensagem, sem nome, contacto ou identificadores;
         - as regras locais como resposta de recurso se a API falhar.
       Devolve sempre uma Promise. */
    function obterResposta(mensagem) {
      if (haRisco(mensagem)) return Promise.resolve(RESPOSTA_RISCO);

      // LIGAÇÃO FUTURA À API (exemplo, desligado):
      // return fetch("[A CONFIRMAR: endereço da API]", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ mensagem: mensagem })
      // })
      //   .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      //   .catch(function () { return responderComRegras(mensagem); });

      return Promise.resolve(responderComRegras(mensagem));
    }

    function adicionarMensagem(autor, conteudo) {
      var bolha = el("div", "mensagem " + (autor === "pessoa" ? "mensagem--pessoa" : "mensagem--assistente"));
      if (conteudo.risco) bolha.className += " mensagem--risco";
      bolha.appendChild(el("span", "mensagem__autor", autor === "pessoa" ? "Tu:" : "Assistente:"));

      (conteudo.paragrafos || []).forEach(function (t) { bolha.appendChild(el("p", "", t)); });

      if (conteudo.lista) {
        var ol = el("ol");
        conteudo.lista.forEach(function (t) { ol.appendChild(el("li", "", t)); });
        bolha.appendChild(ol);
      }

      if (conteudo.ligacoes) {
        var ul = el("ul");
        conteudo.ligacoes.forEach(function (l) {
          var li = el("li");
          var a = el("a", "", l.texto);
          a.href = l.href;
          if (l.href.indexOf("tel:") === 0) a.setAttribute("data-ajuda", "chat-" + l.href.slice(4));
          li.appendChild(a);
          ul.appendChild(li);
        });
        bolha.appendChild(ul);
      }

      registo.appendChild(bolha);
      registo.scrollTop = registo.scrollHeight;
      return bolha;
    }

    function definirAtivo(ativo) {
      campo.disabled = !ativo;
      form.querySelector("button[type=submit]").disabled = !ativo;
      Array.prototype.forEach.call(rapidas.querySelectorAll("button"), function (b) { b.disabled = !ativo; });
    }

    function enviar(mensagem) {
      if (interrompida || ocupado) return Promise.resolve();
      var esta = conversa;
      ocupado = true;
      registo.setAttribute("aria-busy", "true");
      adicionarMensagem("pessoa", { paragrafos: [mensagem] });
      return obterResposta(mensagem).then(function (resposta) {
        if (esta !== conversa) return;
        registo.setAttribute("aria-busy", "false");
        var bolha = adicionarMensagem("assistente", resposta);
        if (resposta.risco) {
          interrompida = true;
          definirAtivo(false);
          // O campo fica desativado: o foco passa para o primeiro contacto de emergência.
          var primeiro = bolha.querySelector("a");
          if (primeiro) primeiro.focus();
        }
      }).then(function () {
        if (esta === conversa) ocupado = false;
      }, function () {
        if (esta === conversa) { ocupado = false; registo.setAttribute("aria-busy", "false"); }
      });
    }

    function saudar(anunciar) {
      if (!anunciar) registo.setAttribute("aria-live", "off");
      adicionarMensagem("assistente", {
        paragrafos: [
          "Olá. Sou um assistente automático, não uma pessoa. Não faço diagnósticos nem dou conselhos médicos, e não guardo o que escreves.",
          "Escolhe uma opção ou escreve a tua pergunta. Se precisares de falar com alguém agora, liga 1414."
        ],
        ligacoes: [LIGAR_1414]
      });
      if (!anunciar) registo.setAttribute("aria-live", "polite");
    }

    campo.addEventListener("input", function () {
      if (campo.getAttribute("aria-invalid") === "true" && campo.value.trim()) limparErro(campo, erro);
    });

    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      var texto = campo.value.trim();
      if (!texto) {
        mostrarErro(campo, erro, "Escreve uma mensagem antes de enviar.");
        campo.focus();
        return;
      }
      limparErro(campo, erro);
      campo.value = "";
      enviar(texto).then(function () { if (!interrompida) campo.focus(); });
    });

    rapidas.addEventListener("click", function (evento) {
      var botao = evento.target.closest("button[data-mensagem]");
      if (botao) {
        limparErro(campo, erro);
        enviar(botao.getAttribute("data-mensagem"));
      }
    });

    botaoRecomecar.addEventListener("click", function () {
      registo.textContent = "";
      conversa++;
      ocupado = false;
      registo.setAttribute("aria-busy", "false");
      interrompida = false;
      definirAtivo(true);
      limparErro(campo, erro);
      saudar(true);
      campo.focus();
    });

    if (botaoAmigo) {
      botaoAmigo.addEventListener("click", function () {
        seccao.scrollIntoView({ block: "start" });
        if (interrompida) { registo.focus(); return; }
        var ultima = registo.lastElementChild;
        if (ultima && ultima.getAttribute("data-caminho") === "amigo") { campo.focus(); return; }
        enviar("Quero ajudar um amigo").then(function () {
          var resposta = registo.lastElementChild;
          if (resposta) resposta.setAttribute("data-caminho", "amigo");
          campo.focus();
        });
      });
    }

    saudar(false);
  });

  /* ------------------------------------------------------------------
     Formulário "Fica por dentro"
     Nesta versão os dados ficam só no localStorage deste browser.
     ------------------------------------------------------------------ */
  executar("inscricao", function () {
    var form = document.getElementById("form-inscricao");
    if (!form) return;

    var CHAVE = "foraDeJogo.inscricoes";
    var resumo = document.getElementById("inscricao-resumo");
    var estado = document.getElementById("inscricao-estado");

    var campos = [
      {
        input: document.getElementById("email"),
        erro: document.getElementById("email-erro"),
        validar: function (i) {
          var v = i.value.trim();
          if (!v) return "Escreve o teu e-mail.";
          if (!/^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[^\s@.]{2,}$/.test(v)) {
            return "O e-mail não parece completo. Confirma se tem @ e um domínio, por exemplo nome@exemplo.pt.";
          }
          return "";
        }
      },
      {
        input: document.getElementById("consentimento"),
        erro: document.getElementById("consentimento-erro"),
        validar: function (i) {
          return i.checked ? "" : "Para te inscreveres, tens de aceitar receber os e-mails da campanha.";
        }
      },
      {
        input: document.getElementById("maior-idade"),
        erro: document.getElementById("idade-erro"),
        validar: function (i) {
          return i.checked ? "" : "A inscrição é só para maiores de 18 anos. Confirma a tua idade para continuar.";
        }
      }
    ];

    function atualizarResumo() {
      if (resumo.hidden) return;
      var n = campos.filter(function (c) { return c.input.getAttribute("aria-invalid") === "true"; }).length;
      if (n === 0) { resumo.hidden = true; resumo.textContent = ""; return; }
      resumo.textContent = n === 1
        ? "Há 1 campo por corrigir. Vê a mensagem junto do campo."
        : "Há " + n + " campos por corrigir. Vê as mensagens junto de cada campo.";
    }

    function validarCampo(c) {
      var mensagem = c.validar(c.input);
      if (mensagem) mostrarErro(c.input, c.erro, mensagem);
      else limparErro(c.input, c.erro);
      return !mensagem;
    }

    // Depois de um erro, a mensagem atualiza-se enquanto a pessoa corrige o campo
    // (no "input" e não no "blur", para o layout não mudar no momento de um clique).
    // Nunca desaparece sozinha.
    campos.forEach(function (c) {
      var evento = c.input.type === "checkbox" ? "change" : "input";
      c.input.addEventListener(evento, function () {
        if (c.input.getAttribute("aria-invalid") === "true") { validarCampo(c); atualizarResumo(); }
      });
    });

    function lerInscricoes() {
      try {
        var dados = JSON.parse(window.localStorage.getItem(CHAVE) || "[]");
        return Array.isArray(dados) ? dados : [];
      } catch (e) {
        return [];
      }
    }

    function guardarLocalmente(inscricao) {
      var lista = lerInscricoes();
      var existe = lista.some(function (i) { return i.email === inscricao.email; });
      if (existe) return "duplicado";
      lista.push(inscricao);
      window.localStorage.setItem(CHAVE, JSON.stringify(lista));
      return "guardado";
    }

    /* LIGAÇÃO FUTURA AO BACKEND:
       Substituir guardarLocalmente() por um pedido POST a um serviço próprio
       [A CONFIRMAR: endereço e responsável pelo tratamento dos dados].
       O backend deve:
         - guardar o registo do consentimento (texto aceite, data e hora);
         - confirmar o e-mail (opt-in duplo) e incluir a opção de cancelar;
         - atribuir as 100 vagas por ordem de inscrição, com 50 reservadas a quem
           não está na base de sócios (cruzamento feito pelo clube);
         - nunca receber nem ligar o resultado da triagem. */

    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      estado.textContent = "";

      var invalidos = campos.filter(function (c) { return !validarCampo(c); });
      if (invalidos.length) {
        resumo.textContent = invalidos.length === 1
          ? "Há 1 campo por corrigir. Vê a mensagem junto do campo."
          : "Há " + invalidos.length + " campos por corrigir. Vê as mensagens junto de cada campo.";
        resumo.hidden = false;
        invalidos[0].input.focus();
        return;
      }
      resumo.hidden = true;
      resumo.textContent = "";

      var inscricao = {
        email: campos[0].input.value.trim().toLowerCase(),
        data: new Date().toISOString(),
        consentimento: true,
        maiorIdade: true
      };

      var resultado;
      try {
        resultado = guardarLocalmente(inscricao);
      } catch (e) {
        resultado = "falhou";
      }

      var mensagem;
      if (resultado === "duplicado") {
        mensagem = "Este e-mail já está inscrito neste dispositivo. Não precisas de fazer mais nada.";
      } else if (resultado === "falhou") {
        mensagem = "Não foi possível guardar a inscrição neste dispositivo. O teu browser pode estar a bloquear o armazenamento local. Tenta noutro browser.";
      } else {
        mensagem = "Obrigado, a tua inscrição ficou registada. Nesta versão de demonstração, os dados ficam só neste dispositivo e não são enviados para lado nenhum.";
        form.reset();
      }
      // Escrever no frame seguinte para que uma mensagem igual à anterior volte a ser anunciada.
      window.setTimeout(function () { estado.textContent = mensagem; }, 50);
    });
  });
})();
