import { useState } from "react"
import styles from "./contatos.module.css"

function Contato() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [sucesso, setSucesso] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (!nome || !email || !mensagem) {
      alert("Preencha todos os campos!")
      return
    }

    if (!email.includes("@")) {
      alert("E-mail inválido!")
      return
    }

    if (mensagem.length < 10) {
      alert("Mensagem deve ter no mínimo 10 caracteres!")
      return
    }

    setSucesso("Mensagem enviada com sucesso! 🎉")
    setNome("")
    setEmail("")
    setMensagem("")
  }

  return (
    <div className={styles.container}>
      <h1>Contato</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {sucesso && <p>{sucesso}</p>}
    </div>
  )
}

export default Contato