import logo from '../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        {/* navBar */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid navbar-container">
            <img className="App-logo" src={logo} alt="logo"></img>
            <a class="navbar-brand" href="#">Zmazon</a>
            <button class="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">WishList</a>
                <a class="nav-link" href="#">Cart</a>
                <a class="nav-link" href="#">Log-in</a>
              </div>
            </div>
          </div>
        </nav>

      </body>
    </div>
  );
}

export default App;
