import axios from "axios"
// this follows te server side rendering

async function getBlog() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
  return response.data;
}

export default async function blog() {
  const blogs = await getBlog();
  return(
    <>
      This is the blog page
      {blogs.map((blog : any) => (
        <Todo title={blog.title} completed={blog.completed} />
      ))}
    </>
  )
}

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}


function Todo ({ title,completed } : ITodo) {
  return(
    <p>
    {title} {completed ? "done!" : "not done"}
    </p>
  )
}