import axios from 'axios'
import TodoDetail from 'containers/TodoDetail'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await axios.get(`/todos/${params.id}`)

  return {
    props: {
      todo: data,
    },
  }
}

const TodoDetailPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({ todo }) => {
  return <TodoDetail todo={todo} />
}

export default TodoDetailPage
