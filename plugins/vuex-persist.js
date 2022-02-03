import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'auth-persist',
    storage: window.localStorage,
  }).plugin(store)
}
