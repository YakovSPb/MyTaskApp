import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(task => {
  		if(new Date(task.date) < new Date()) {
  			task.status = 'просрочена'
  		}
  		return task
  	}).sort((a,b) => a.date > b.date ? 1 : -1)
    .sort(({status: a}, {status: b}) => a === 'выполнено' ? 1: b === 'выполнено' ? -1 : 0)
  },
  mutations: {
  	createTask(state, task) {
  		state.tasks.push(task)
  		localStorage.setItem('tasks', JSON.stringify(state.tasks))
  	},
    updateTask(state, {id, title, description, date}) {
      const tasks = state.tasks.concat()
      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]
      const status = new Date(date) > new Date() ? 'активна' : 'просрочена'
      tasks[idx] = {...task, title, date, description, status}
      state.tasks = tasks.sort((a,b) => a.date > b.date ? 1 : -1).sort(({status: a}, {status: b}) => a === 'выполнено' ? 1: b === 'выполнено' ? -1 : 0)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id) {
      const idx = state.tasks.findIndex(t => t.id === id)
      state.tasks[idx].status = 'выполнено'
      state.tasks.sort((a,b) => a.date > b.date ? 1 : -1).sort(({status: a}, {status: b}) => a === 'выполнено' ? 1: b === 'выполнено' ? -1 : 0)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, id) {
      const idx = state.tasks.findIndex(t => t.id === id)
      state.tasks.splice(idx, 1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))

    }
  },
  actions: {
  	createTask({commit}, task) {
  		commit('createTask', task)
  	},
    updateTask({commit}, task) {
      commit('updateTask', task)
    },
    completeTask({commit}, id) {
      commit('completeTask', id)
    },
    deleteTask({commit}, id) {
      commit('deleteTask', id)
    }

  },
  getters: {
  	tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)
  },
  modules: {
  }
})
