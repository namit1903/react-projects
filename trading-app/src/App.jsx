import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Summary from './pages/StockOverviewPage';
import StockDetail from './pages/StockDetailPage';

function App() {

  return (
    <><main className="container">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Summary/>}/>
  <Route path='/stock-detail/:symbol' element={<StockDetail/>}/>
  {/* symbol is a variable , colon is important to show it is a symbol */}
</Routes>
</BrowserRouter>
</main>
    </>
  )
}

export default App
