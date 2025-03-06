import MainScreen from "./components/mainScreen/MainScreen"
import Modal from "./components/modal/Modal"
import { TaskProvider } from "./context/taskContext"

function App() {
  return (
    <TaskProvider>
      <MainScreen/>
    </TaskProvider>
  )
}

export default App
