import './App.css';
import { Navigation } from './comon/components/navigation/navigation.component';
import Home from './comon/pages/home/home.page';

function App() {
  return (
    <div className="App">
      <Navigation headerBg="transparent" />
      <Home />
    </div>
  );
}

export default App;
