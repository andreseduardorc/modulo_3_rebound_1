document.addEventListener("DOMContentLoaded", function() {
  welcomeBox();
  box_time();
  box_date();
  flight();
});

function welcomeBox() {
  const welcome = document.getElementById("welcomeBox");
  welcome.innerHTML = '';

  const box = document.createElement("div");
  box.classList.add("container");
  box.setAttribute("id", "welcomeBox");
  const text = document.createElement("h1");
  text.innerText = "Bienvenido a la Plataforma";
  const text2 = document.createElement("h3");
  text2.innerText =
    "Aquí podrá encontrar la información de vuelos más reciente en nuestro aeropuerto.";

  box.appendChild(text);
  box.appendChild(text2);
  welcome.appendChild(box);
}

function box_time() {
  const time = document.getElementById("time");
  time.innerHTML = '';
  const caja1 = document.createElement("div");
  caja1.classList.add("column");
  caja1.setAttribute("id", "time");
  const hora = document.createElement("h3");
  hora.innerText = "Hora:";
  const textHours = document.createElement("h3");
  textHours.setAttribute("id", "insertTime");
  textHours.innerText = new Date().toLocaleTimeString();

  caja1.appendChild(hora);
  caja1.appendChild(textHours);
  time.appendChild(caja1);
}

function box_date() {
  const fecha = document.getElementById("date");
  fecha.innerHTML = '';
  const caja2 = document.createElement("div");
  caja2.classList.add("column");
  caja2.setAttribute("id", "date");
  const date = document.createElement("h3");
  date.innerText = "Fecha:";
  const textDate = document.createElement("h3");
  textDate.setAttribute("id", "insertDate");
  textDate.innerText = new Date().toLocaleDateString();

  caja2.appendChild(date);
  caja2.appendChild(textDate);
  fecha.appendChild(caja2);
}

function flight() {
  const contadorNumeroVuelo = Math.round(Math.random() * 1999) + 1;
  const contadorTerminal = Math.round(Math.random() * 39) + 1;

  let vuelo = document.getElementById("flightBox");
  if (!vuelo) {
    vuelo = document.createElement("div");
    vuelo.classList.add("container");
    vuelo.setAttribute("id", "flightBox");
    document.body.appendChild(vuelo);
  }
  vuelo.innerHTML = '';

  const vueloTitle = document.createElement("h1", "br");
  vueloTitle.innerText = "El vuelo más próximo:";
  const numeroVuelo = document.createElement("h3");
  numeroVuelo.innerText = `Número de vuelo: ${contadorNumeroVuelo}`;
  const terminal = document.createElement("h3");
  terminal.innerText = `Terminal: ${contadorTerminal}`;

  vuelo.appendChild(vueloTitle);
  vuelo.appendChild(numeroVuelo);
  vuelo.appendChild(terminal);
}
