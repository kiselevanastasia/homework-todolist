import { DataType } from "./App"

// export type TasksPropsType = {
//   title: string
//   tasks: Array<TasksType>
//   // tasks: TasksType[]
//   students: Array<string>
// }


// export type TasksType = {
//   taskId: number
//   title: string
//   isDone: boolean
// }

type TasksPropsType = {
  data: DataType
}

export const Tasks = ({data}: TasksPropsType) => {
  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <ul>
          {data.tasks.map((el, index) => {
            return (
              <li key={el.taskId} >
                <input type="checkbox" checked={el.isDone} />
                {el.title}
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h3>Students</h3>
        {data.students.map((el, index) => {
          return (
            <div>{el}</div>
          )
        })
        }
      </div>
    </div>
  )
}