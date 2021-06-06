import { Switch } from 'antd'
import { ITodo } from 'interfaces'
import Link from 'next/link'
import { memo, useState } from 'react'

interface IProps {
  todo: ITodo
}

const TodoItem = ({ todo }: IProps) => {
  const [completed, setCompleted] = useState(todo.completed)

  return (
    <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center text-base py-5">
      <Link href={`/todo/${todo.id}`}>
        <a
          className={`${
            completed ? 'line-through text-gray' : 'text-blue hover:underline'
          }`}>
          {todo.title}
        </a>
      </Link>
      <div className="flex-none space-x-2">
        <span>Completed</span>
        <Switch checked={completed} onChange={setCompleted} />
      </div>
    </div>
  )
}

export default memo(TodoItem)
