export const state = () => ({
  loading: true,
  pages: [],
  posts: []
})

export const mutations = {
  setPages(state, payload) {
    state.pages = payload
    console.log(state.pages);
  },
  setPosts(state, payload) {
    state.posts = payload
  },
  updateChoices(state, payload) {
    state.choices.push(payload)
  },
  setLoading(state, payload) {
    state.loading = payload
  }
}

export const getters = {
  getPage(state) {
    return (name) => state.pages.find(page => page.title.rendered.toLowerCase() === name.toLowerCase())
  },
  getPosts(state) {
    return state.posts
  },
  isLoading(state) {
    return state.loading
  }
}
