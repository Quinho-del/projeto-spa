import styles from "./produtos.module.css"

function Produtos() {
  return (
    <div className={styles.container}>
      <h1>Filmes</h1>

      <div>
        <h3>Interestelar</h3>
        <p>Ficção científica sobre viagens no espaço.</p>
      </div>

      <div>
        <h3>Vingadores</h3>
        <p>Heróis salvando o mundo.</p>
      </div>

      <div>
        <h3>Invocação do Mal</h3>
        <p>Filme de terror baseado em fatos reais.</p>
      </div>

    </div>
  )
}

export default Produtos