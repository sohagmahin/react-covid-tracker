import './App.css';
import DashBoard from './components/dashboard/dashboard';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <DashBoard />
      </main>
    </div>
  );
}

export default App;
