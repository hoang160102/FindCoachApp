export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.getUserId;
    const addCoach = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      areas: payload.areas,
      description: payload.description,
      hourlyRate: payload.hourlyRate,
    };
    const token = context.rootGetters.token
    const response = await fetch(
      `https://coach-8d884-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token,
      {
        method: 'PUT',
        body: JSON.stringify(addCoach),
      }
    );

    if (!response.ok) {
      return
    }
    context.commit('registerCoach', {
      ...addCoach,
      id: userId,
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.refresh && !context.getters.shouldUpdate) {
      return
    }
    const response = await fetch(
      `https://coach-8d884-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch')
      throw error
    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
      };
      coaches.push(coach)
    }
    context.commit('setCoaches', coaches)
    context.commit('setFetchTime')
  },
};
