/**
 * Creates a redux/saga action
 * @param {string} type 
 * @param {Object} payload 
 * @returns {Object} - redux/saga action 
 */
const action = (type, payload) => {
    return {
        type,
        payload,
    };
};

export default action;