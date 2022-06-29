import { IconButton, HStack, Spacer, Text } from "@chakra-ui/react"
import { updateDoc, doc, deleteDoc } from "firebase/firestore"
import style from './styles/Task.module.css'
import db from '../firebase'
import { FaCheck, FaTrash } from "react-icons/fa"


const Task = ({tasks, value, setTasks, id, completed }) => {

    const deleteTask = async () => {
        const taskId = doc (db, 'tasks', id);
        await deleteDoc (taskId)
    }

    const completeTask = async () => {
        const taskId = doc (db, 'tasks', id);
        await updateDoc(taskId, {completed: !completed})
    }


    return (
        <HStack>
            <Text className={completed ? style.complete : ''}>{value}</Text>
            <Spacer/>
            <IconButton icon={<FaCheck/>} onClick={completeTask}/>
            <IconButton icon={<FaTrash/>} onClick={deleteTask}/>
        </HStack>
    )
}

export default Task