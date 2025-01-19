import React from 'react'

const TaskCard = ({ task }: { task: any }) => {
  return (
    <div>{task.title}</div>
  )
}

export default TaskCard