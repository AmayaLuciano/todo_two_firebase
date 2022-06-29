import { Button, HStack, Input } from '@chakra-ui/react'

const Form = ({onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <HStack mb='8'>
                <Input name='input' placeholder='Escribe una tarea'/>
                <Button  type='submit' px='10'>Agregar </Button>
            </HStack>
        </form>
    )
}

export default Form;