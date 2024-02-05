import {useGetWorkers} from './services/useGetWorkers'
import './App.css'

function App() {

  const workers = useGetWorkers();
  console.log (workers)

  return (
    <>

    </>
  )
}

export default App
