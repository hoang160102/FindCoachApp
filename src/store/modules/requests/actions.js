export default {
  async requestMsg(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://coach-8d884-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request');
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async loadRequests(context) {
    const coachId = context.rootGetters.getUserId
    console.log(coachId)
    const response = await fetch(
      `https://coach-8d884-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const responseData = await response.json()
    if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch')
        throw error
    }
    const requests = []
    for (const key in responseData) {
        const addRequest = {
            id: key,
            coachId: coachId,
            email: responseData[key].email,
            message: responseData[key].message
        }
        requests.push(addRequest)
    }
    context.commit('setRequests', requests)
  },
};
