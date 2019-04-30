export const state = () => ({
  loading: false,
  pages: [],
  posts: [],
  choices: [],
  dashboard: []
})

export const mutations = {
  setPages(state, payload) {
    state.pages = payload
  },
  setPosts(state, payload) {
    state.posts = payload
  },
  updateChoices(state, payload) {
    state.choices.push(payload)
  },
  setLoading(state, payload) {
    state.loading = payload
    console.log('setting loading', payload);
  },
  setDashboard(state, payload) {
    state.dashboard = payload
  }

}

export const getters = {
  getPage(state) {
    return (name) => state.pages.find(page => page.title.rendered.toLowerCase() === name.toLowerCase())
  },
  getPages(state) {
    return state.pages
  },
  getPosts(state) {
    return state.posts
  },
  isLoading(state) {
    return state.loading
  },
  getDashboard(state) {
    return state.dashboard
  }
}
