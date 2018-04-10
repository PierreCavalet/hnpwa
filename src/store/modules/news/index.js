import Vue from 'vue'

import { fetchIdsByType, fetchItems } from '../../../api'

// initial state
const state = {
  items: [],
  activeIds: [],
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
    return fetchIdsByType(type)
      .then(ids => {
        commit('SET_LIST', { type, ids })
        return ids
      })
      .then(ids => dispatch('ENSURE_ACTIVE_ITEMS'))
  },

  ENSURE_ACTIVE_ITEMS: ({ commit, dispatch, state }, { type }) => {
    return dispatch('FETCH_ITEMS', {
      ids: getters.activeIds
    })
  },

  FETCH_ITEMS: ({ commit, dispatch, state }, { ids }) => {
    const notFetchedIds = ids.filter(id => !state.items[id])

    if (notFetchedIds.length === 0) {
      return Promise.resolve()
    }

    return fetchItems(notFetchedIds).then(items => {
      commit('SET_ITEMS', { items })
    })
  }
}

const mutations = {
  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
