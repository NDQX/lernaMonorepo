import './App.css';

import {Header} from '@senseman/header';
import {Footer} from '@senseman/footer';

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
