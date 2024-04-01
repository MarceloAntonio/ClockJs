const relogio = document.getElementById("relogio")

function horario() {
  const data = new Date()
  const hora = data.getHours().toString().padStart(2, "0")
  const mins = data.getMinutes().toString().padStart(2, "0")
  const segs = data.getSeconds().toString().padStart(2, "0")
  relogio.textContent = `${hora}:${mins}:${segs}`
}

setInterval(horario, 1000)
horario()
