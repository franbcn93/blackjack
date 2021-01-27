const miModulo = (() => {
  "use strict";
  let e = [];
  const t = ["C", "D", "H", "S"],
    a = ["A", "J", "Q", "K"];
  let n = [];
  const r = document.querySelector("#btnPedir"),
    o = document.querySelector("#btnDetener"),
    l = document.querySelectorAll(".divCartas"),
    s = document.querySelectorAll("small"),
    d = () => {
      e = [];
      for (let a = 2; a <= 10; a++) for (let n of t) e.push(a + n);
      for (let n of t) for (let t of a) e.push(t + n);
      return _.shuffle(e);
    },
    c = () => {
      if (0 === e.length) throw "No hay cartas en el deck";
      return e.pop();
    },
    i = (e, t) => (
      (n[t] =
        n[t] +
        ((e) => {
          const t = e.substring(0, e.length - 1);
          return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
        })(e)),
      (s[t].innerText = n[t]),
      n[t]
    ),
    u = (e, t) => {
      const a = document.createElement("img");
      (a.src = `cartas/cartas/${e}.png`),
        a.classList.add("carta"),
        l[t].append(a);
    },
    h = (e) => {
      let t = 0;
      do {
        const e = c();
        (t = i(e, n.length - 1)), u(e, n.length - 1);
      } while (t < e && e <= 21);
      (() => {
        const [e, t] = n;
        setTimeout(() => {
          t === e
            ? alert("Nadie gana :(")
            : e > 21
            ? alert("Computadora gana")
            : t > 21
            ? alert("Jugador Gana")
            : alert("Computadora Gana");
        }, 100);
      })();
    };
  return (
    r.addEventListener("click", () => {
      const e = c(),
        t = i(e, 0);
      u(e, 0),
        t > 21
          ? (console.warn("Lo siento mucho, perdiste"),
            (r.disabled = !0),
            (o.disabled = !0),
            h(t))
          : 21 === t &&
            (console.warn("21, genial!"),
            (r.disabled = !0),
            (o.disabled = !0),
            h(t));
    }),
    o.addEventListener("click", () => {
      (r.disabled = !0), (o.disabled = !0), h(n[0]);
    }),
    {
      nuevoJuego: (t = 2) => {
        (e = d()), (n = []);
        for (let e = 0; e < t; e++) n.push(0);
        s.forEach((e) => (e.innerText = 0)),
          l.forEach((e) => (e.innerHTML = "")),
          (r.disabled = !1),
          (o.disabled = !1);
      },
    }
  );
})();
