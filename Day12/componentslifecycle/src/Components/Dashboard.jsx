console.log("Dashboard module loaded");

function Dashboard() {
  console.log("Dashboard component rendered");

  return (
    <div>
      <h2>Dashboard Page</h2>
      <p>This page is lazy loaded ✅</p>
    </div>
  );
}

export default Dashboard;