import { BrowseRouter, Route, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Route path="/" exact component={Home} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
