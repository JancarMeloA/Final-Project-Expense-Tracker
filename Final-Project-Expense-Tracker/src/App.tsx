
import Formulario from "./component/Formulario";
import History from './component/History';
import Conteiner_inc_Exp from './component/Conteiner_inc_Exp';
import { MyContextProvider } from './component/Context';
import Balance from "./component/Balance";
function App() {


  return (
    
    <MyContextProvider>

    <div className='bg-white-1 flex flex-col items-center justify-center min-h-screen m-0 font-Lato-serif text-[15px]'>
      <div id="container" className='m-30-u w-[350px]'>
        <Balance />
          <Conteiner_inc_Exp />
          <History />
          <Formulario />
      </div>
  </div>

  </MyContextProvider>
  )
}

export default App
