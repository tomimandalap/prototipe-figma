import EasyAccess, { defaultMutations } from 'vuex-easy-access'
export const state = () => ({
  authenticated: false,
})
export const mutations = { ...defaultMutations(state()) }
export const plugins = [EasyAccess()]
export const actions = {}
