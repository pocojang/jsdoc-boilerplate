/**
 * @typedef Todo
 * @property {string} id
 * @property {string} content
 * @property {boolean} isDone
 * @property {string} category
 * @property {string[]} [tags]
 */

/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @param {Todo} todo
 */
function createTodo(todo) {}

/**
 * 모든 할 일을 조회할 수 있다.
 */
function readTodoList() {}

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {string} id
 */
function readTodo(id) {}
