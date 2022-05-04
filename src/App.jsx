import './App.css'
import StoreProvider from './components/StoreProvider'
import TaskList from './components/TaskList'

function App() {
  return (
    <StoreProvider>
      <div className="container">
        <h1>Hola</h1>
        <TaskList />
      </div>
    </StoreProvider>
  )
}

export default App
