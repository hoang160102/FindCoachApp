export default {
    getRequests(state) {
        return state.requests
    },
    hasRequests(state) {
        return state.requests.length > 0 && state.requests
    }
}