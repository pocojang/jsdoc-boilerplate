interface ITodoFunctions {
  createTodo: (
    id: string,
    content: string,
    isDone: boolean,
    category: string,
    tags?: string[]
  ) => void;

  readTodoList: () => void;
  readTodo: (id: string) => void;

  updateTodo: (
    id: string,
    content: string,
    isDone: boolean,
    category: string,
    tags?: string[]
  ) => void;
  updateTags: (id: string, tags?: string[]) => void;

  deleteTodoList: () => void;
  deleteTodo: (id: string) => void;
  deleteTagsList: (id: string) => void;
  deleteTags: (id: string, tags: string[]) => void;
}

export const createTodo: ITodoFunctions['createTodo'] = (
  id,
  content,
  isDone,
  category,
  tags
) => {};

export const readTodoList: ITodoFunctions['readTodoList'] = () => {};
export const readTodo: ITodoFunctions['readTodo'] = (id) => {};

export const updateTodo: ITodoFunctions['updateTodo'] = (
  id,
  content,
  isDone,
  category,
  tags
) => {};
export const updateTags: ITodoFunctions['updateTags'] = (id, tags) => {};

export const deleteTodoList: ITodoFunctions['deleteTodoList'] = () => {};
export const deleteTodo: ITodoFunctions['deleteTodo'] = (id) => {};
export const deleteTagsList: ITodoFunctions['deleteTagsList'] = (id) => {};
export const deleteTags: ITodoFunctions['deleteTags'] = (id, tags) => {};
