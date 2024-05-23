import Input from './components/Input.jsx'
import ThemeButton from './components/ThemeButton'
import './App.css';
import { useContext } from 'react';
// import TaskList from './TaskList'
import { ThemeContext } from './store/Theme';
import { TaskProvider } from './store/Context';

function App() {

const {theme}=useContext(ThemeContext);
  return (<>
    <div className={`app ${theme}`}>hello app
    <TaskProvider>
    <Input/>
    <ThemeButton style={{color: 'white'}}></ThemeButton>
    </TaskProvider>
    </div></>
  )
}

export default App;
