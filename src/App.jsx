import { useState } from "react";
import "./App.css";

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAnterior) => valorAnterior + 1);
  }

  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }

  return (
    <div>
      <p>Valor atual: {contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Voltar um</button>
    </div>
  );
}

function Aviso() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>Alternar aviso</button>

      {visivel && <p className="aviso">O aviso está visível.</p>}
    </div>
  );
}

function Saudacao() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <input
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite seu nome"
      />

      <p>Olá, {nome || "visitante"}!</p>
    </div>
  );
}

function CartaoBoasVindas() {
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  return (
    <div className="cartao">
      <input
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite seu nome"
      />

      <button onClick={() => setMostrarSaudacao(!mostrarSaudacao)}>
        {mostrarSaudacao ? "Esconder saudação" : "Mostrar saudação"}
      </button>

      {mostrarSaudacao && <p className="saudacao">Olá, {nome || "visitante"}!</p>}
    </div>
  );
}

function ContadorMeta() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAnterior) =>
      valorAnterior === 10 ? valorAnterior : valorAnterior + 1
    );
  }

  return (
    <div>
      <p>Valor atual: {contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={() => setContador(0)}>Voltar a zero</button>

      {contador === 10 && <p className="meta">Meta atingida!</p>}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="cabecalho">
        <h1>Missões com useState</h1>
        <p>Estado em React: contador, aviso, campo de texto e cartão.</p>
      </header>

      <main>
        <section className="missao">
          <h2>Missão 1 — Contador</h2>
          <Contador />
        </section>

        <section className="missao">
          <h2>Missão 2 — Mostrar e esconder um aviso</h2>
          <Aviso />
        </section>

        <section className="missao">
          <h2>Missão 3 — Saudação com campo de texto</h2>
          <Saudacao />
        </section>

        <section className="missao">
          <h2>Desafio final — Cartão de boas-vindas</h2>
          <CartaoBoasVindas />
        </section>

        <section className="missao">
          <h2>Desafio extra — Contador com meta</h2>
          <ContadorMeta />
        </section>
      </main>
    </div>
  );
}

export default App;