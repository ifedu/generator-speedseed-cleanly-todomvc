/*jshint unused:false */

((exports) => {
    const STORAGE_KEY = 'todos-vuejs'

    exports.todoStorage = {
        fetch: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
        save: (todos) => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
})(window)