import { Descriptions, Switch } from 'antd'
import { ITodo } from 'interfaces'

interface IProps {
  todo: ITodo
}

const TodoDetail = ({ todo }: IProps) => {
  return (
    <div className="bg-white px-5 pt-5 pb-10">
      <Descriptions title="Todo Detail" bordered>
        <Descriptions.Item label="ID" span={3}>
          {todo.id}
        </Descriptions.Item>
        <Descriptions.Item label="User ID" span={3}>
          {todo.userId}
        </Descriptions.Item>
        <Descriptions.Item label="Title" span={3}>
          {todo.title}
        </Descriptions.Item>
        <Descriptions.Item label="Completed" span={3}>
          <Switch defaultChecked={todo.completed} />
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default TodoDetail
