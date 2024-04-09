import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

export default function Example () {
  return (
      <Button type='primary' icon={<EditOutlined />}>Modifier</Button>
  )
}