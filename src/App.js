import { Navigation } from './comon/components/navigation/navigation.component';
import Home from './comon/pages/home/home.page';

import './App.css';

function App() {

  return (
    <div className="App bg-slate-50">
      <Navigation headerBg="transparent" />
      <Home />
    </div>
  );
}

export default App;
