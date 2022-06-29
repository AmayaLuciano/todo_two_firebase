import { useEffect, useState } from 'react'
import './App.css'
import { doc, collection, getDocs, addDoc, onSnapshot } from 'firebase/firestore'  
import db from './firebase'
import Form from './components/Form'
import { IconButton, VStack, useColorMode, Badge } from '@chakra-ui/react'
import TaskDisplay from './components/TaskDisplay'
import {FaMoon, FaSun} from 'react-icons/fa'


function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  const tasksRef = collection(db, 'tasks')

  const getTasks = async () => {
   onSnapshot(collection(db, 'tasks'),
   (snapshot) => {
    setTasks(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    })
    
    setLoading(false)
  }


  useEffect (() => {
    setLoading(true)
    getTasks()
  }, [])

  const createTask = async (e) => {
    e.preventDefault()
    const inputValue = e.target.input.value
    if(inputValue !== ''){
      await addDoc(tasksRef, {value: inputValue, completed: false})
    }
    e.target.input.value = ''
  }

  function onSubmit(e){
    e.preventDefault()
    const inputValue = e.target.input.value
    if(inputValue !== ''){
      setTasks([...tasks, {id: Math.random(), value: inputValue, completed: false}])
    }
    e.target.input.value = ''

    console.log(tasks)
  }
    
  const {colorMode, toggleColorMode} = useColorMode()


  return (
    <div className="App">
      <VStack p={4}>
        <IconButton icon={ colorMode === 'light' ? <FaSun/> : <FaMoon/>} size='lg' alignSelf='flex-end' onClick={toggleColorMode}/>
        <Form onSubmit={createTask}/>
        {loading ? <Badge colorScheme='orange' p={4} borderRadius='lg' m={4} >Cargando...</Badge> :  <TaskDisplay tasks={tasks} setTasks={setTasks}/> }
        
      </VStack>
    </div>
  )
}

export default App
