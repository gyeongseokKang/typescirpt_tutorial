{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: Todo = {
    title: "title",
    description: "description",
    label: "study",
    priority: "high",
  };

  updateTodo(todo, { priority: "low" });
}
