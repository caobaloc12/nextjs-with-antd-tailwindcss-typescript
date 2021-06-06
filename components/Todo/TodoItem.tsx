import { Switch } from 'antd'
import { ITodo } from 'interfaces'
import { memo, useState } from 'react'

interface IProps {
  todo: ITodo
}

const TodoItem = ({ todo }: IProps) => {
  const [completed, setCompleted] = useState(todo.completed)

  return (
    <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center text-base py-5">
      <div
        className={`${
          completed ? 'line-through text-gray' : 'text-gray-dark'
        }`}>
        {todo.title}
      </div>
      <div className="flex-none space-x-2">
        <span>Completed</span>
        <Switch checked={completed} onChange={setCompleted} />
      </div>
    </div>
  )
}

export default memo(TodoItem)
