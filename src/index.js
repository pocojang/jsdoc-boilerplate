/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @param {string} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {string[]} [tags]
 * @return {Object}
 */
function createTodo(id, content, isDone, category, tags) {}

/**
 * 모든 할 일을 조회할 수 있다.
 * @return {Object[]}
 */
function readTodoList() {}

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {string} id
 * @return {Object}
 */
function readTodo(id) {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {string} id
 * @param {string} content
 * @param {boolean} isDone
 * @param {string} category
 * @param {string[]} [tags]
 * @return {Object}
 */
function updateTodo(id, content, isDone, category, tags) {}

/**
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {string} id
 * @param {string[]} tags
 * @return {Object}
 */
function updateTags(id, tags) {}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {string} id
 * @return {boolean}
 */
function deleteTodo(id) {}

/**
 * 모든 할 일을 제거할 수 있다.
 * @return {boolean}
 */
function deleteTodoList() {}
