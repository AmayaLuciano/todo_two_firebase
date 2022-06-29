import { Badge, StackDivider, VStack } from "@chakra-ui/react";
import Task from "./Task";

const TaskDisplay = ({setTasks, tasks}) => {
     if(!tasks.length){
        return(
            <Badge colorScheme='green' p={4} borderRadius='lg' m={4} >No tienes tareas</Badge>
        )
    } 

    return (
        <VStack 
        alignItems='stretch'
        divider={<StackDivider/>}
        borderColor='gray.500'
        borderWidth='2px'
        p={4}
        borderRadius='lg'
        w='100%'
        maxW={{base:'90vw', sm:'80vw', lg:'50vw', xl:'40vw'}}>
            {tasks.map(task => (
                <Task value={task.value} setTasks={setTasks} tasks={tasks} key={task.id} id={task.id} completed={task.completed}/>
            ))}
        </VStack>
    )
}

export default TaskDisplay;