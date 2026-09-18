const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        modoBtn.textContent = "☀️";
        localStorage.setItem("modo", "escuro");
    } else {
        modoBtn.textContent = "🌙";
        localStorage.setItem("modo", "claro");
    }
});

const modoSalvo = localStorage.getItem("modo");

if (modoSalvo === "escuro") {
    document.body.classList.add("dark");
    modoBtn.textContent = "☀️";
}

const menuMobile = document.getElementById("menuMobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
    });
});

const curiosidadeBtn = document.getElementById("curiosidadeBtn");
const curiosidadeTexto = document.getElementById("curiosidadeTexto");

curiosidadeBtn.addEventListener("click", function () {
    if (curiosidadeTexto.innerHTML === "") {
        curiosidadeTexto.innerHTML = `
            <p>
                O poema <strong>"Algorhyme"</strong> utiliza uma
                brincadeira com palavras para explicar a ideia
                do algoritmo Spanning Tree.
            </p>
        `;

        curiosidadeBtn.textContent = "Ocultar curiosidade";
    } else {
        curiosidadeTexto.innerHTML = "";
        curiosidadeBtn.textContent = "Mostrar curiosidade";
    }
});

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });
});

const eventos = document.querySelectorAll(".evento");

const observer = new IntersectionObserver(
    function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateX(0)";
            }
        });
    },
    { threshold: 0.2 }
);

eventos.forEach(function (evento) {
    evento.style.opacity = "0";
    evento.style.transform = "translateX(-30px)";
    evento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(evento);
});

console.log("Página sobre Radia Perlman carregada com sucesso!");
console.log("HTML + CSS + JavaScript + Redes de Computadores");

