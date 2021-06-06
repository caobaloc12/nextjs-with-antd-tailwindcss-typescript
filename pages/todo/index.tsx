import axios from 'axios'
import TodoContainer from 'containers/TodoList'
import { ITodo } from 'interfaces'
import { GetServerSideProps, InferGetStaticPropsType } from 'next'

interface IData extends ITodo {}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('/todos?_limit=10')
  const todos: IData = data

  return {
    props: {
      todos,
    },
  }
}

const TodoPage = ({
  todos,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return <TodoContainer todos={todos} />
}

export default TodoPage
