function Dashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Dashboard Admin</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Totale Articoli</h3>
          <p className="stat">4</p>
        </div>
        <div className="stat-card">
          <h3>Visite Oggi</h3>
          <p className="stat">127</p>
        </div>
        <div className="stat-card">
          <h3>Commenti in attesa</h3>
          <p className="stat">5</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
