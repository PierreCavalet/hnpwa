import { fetchIdsByType } from '../../../api'

// initial state
const state = {
  items: [],
  lists: {
    top: [],
    new: [],
    show: [],
    ask: [],
    job: []
  }
}

const getters = {
  items: state => type => {
    return state.lists[type].map(id => state.items[id])
  }
}

const actions = {
  FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
    fetchIdsByType(type).then(ids => commit('SET_LIST', { type, ids }))
  }
}

const mutations = {
  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
