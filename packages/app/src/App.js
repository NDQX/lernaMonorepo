import './App.css';

import {Header} from 'header';
import {Footer} from 'footer';

function Index() {
    return (
        <>
            <Header/>
            <div>
                Content!
            </div>
            <Footer/>
        </>
    );
}


function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
