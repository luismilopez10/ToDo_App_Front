import './App.css'
import StoreProvider from './components/StoreProvider'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  return (
    <StoreProvider>
      <div className="container">
        <h1>ToDo App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </StoreProvider>
  )
}

export default App
