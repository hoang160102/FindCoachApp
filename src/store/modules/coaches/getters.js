export default {
  coachesList(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches.length > 0 && state.coaches;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coachesList
    const userId = rootGetters.getUserId
    return coaches.some((coach) => {
      return coach.id === userId
    })
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch
    if (!lastFetch) {
      return true
    }
    const currentTime = new Date().getTime()
    return (currentTime - lastFetch) / 1000 > 60
  }
};
