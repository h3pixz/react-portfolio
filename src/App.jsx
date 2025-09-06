import { Header, Footer, Home, About } from "./components/index.js"
function App() {
  

  return (
    <>
        <Header />
        <main>
          <Home />
          <div className="container">
            <h1>React portfolio</h1>
          </div>
          <About />
        </main>    
        <Footer />
    </>
  )
}

export default App
