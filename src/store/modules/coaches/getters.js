export default {
  coachesList(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches.length > 0 && state.coaches;
  },
};
