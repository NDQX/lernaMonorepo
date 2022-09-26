import './App.css';

import {Header} from '@sense/header';
import {Footer} from '@sense/footer';

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
