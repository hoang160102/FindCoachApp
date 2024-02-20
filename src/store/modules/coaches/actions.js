export default {
    registerCoach(context, payload) {
        const addCoach = {
            id: context.rootGetters.getUserId,
            firstName: payload.firstName,
            lastName: payload.lastName,
            areas: payload.areas,
            description: payload.description,
            hourlyRate: payload.hourlyRate
        }
        context.commit('registerCoach', addCoach)
    }
}