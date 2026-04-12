import { useLivros } from "../context/useLivros";

function Dashboard() {
  const { totalLivros, livrosCarrinho, livrosComprados, livrosLidos } = useLivros();

  return (
    <section className="p-3 bg-medieval mb-3">
      <h5 className="text-center mb-3" style={{color: '#c5a059'}}>📊 Dashboard</h5>
      <div className="d-flex flex-column gap-2">
        <p className="m-0">📚 Total: <strong>{totalLivros}</strong></p>
        <p className="m-0">🛒 Carrinho: <strong>{livrosCarrinho}</strong></p>
        <p className="m-0">💰 Comprados: <strong>{livrosComprados}</strong></p>
        <p className="m-0">📖 Lidos: <strong>{livrosLidos}</strong></p>
      </div>
    </section>
  );
}

export default Dashboard;
