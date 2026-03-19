import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';
import Servicos from './Servicos';
import Sobre from './Sobre';
import Infos from './Infos';
import Social from './Social';

function App() {
  return (
    <div >
      <Sidebar />

      <main className='main'>

        <section id="home" className="section1"><Home /></section>

        <section id="sobre" className="section"><Servicos /></section>
        <section id="colecao" className="section"><Sobre /></section>
        <section id="equipe" className="section"><Infos /></section>
        <section id="contato" className="section"><Social /></section>

      </main>
    </div>
  );
}

export default App;
