import { Divider } from 'antd'
import TodoItem from 'components/Todo/TodoItem'
import { ITodo } from 'interfaces'

interface IProps {
  todos: ITodo[]
}

const TodoContainer = ({ todos }: IProps) => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-lg">Todo List</h2>
      <Divider />
      <div className="w-full max-w-3xl divide-y divide-gray-light">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoContainer
