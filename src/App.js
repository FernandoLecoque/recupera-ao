// Importação do bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Importação estilo CSS padrão
import "./App.css";

// Importação de páginas
import Login from "./pages/Login";
import Home from "./pages/Home";
import CadastroProduto from "./pages/CadastroProduto";
import EditarProduto from "./pages/EditarProduto";
import CadastroUsuario from "./pages/CadastroUsuario"


//Importação do gerenciador de rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CadastroUsuario />}/>
          <Route path="/login" element={<Login />}/>  
          <Route path="/home" element={<Home />}/> 
          <Route path="/produto/cadastrar" element={<CadastroProduto />}/>  
          <Route path="/produto/editar/:id" element={<EditarProduto />}/>   
          <Route path="/produto/cadastrarusuario" element={<CadastroUsuario />}/> 
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
