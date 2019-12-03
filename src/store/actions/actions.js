export function authenticateUser(response) {
    return { type: 'USER_AUTHENTICATION', payload: response };
}

export function storeUser(response) {
    return { type: 'STORE_USER_DETAILS', payload: response };
}

export function incrementSearchCount(response) {
    return { type: 'SEARCH_COUNT_INCREMENT', payload: response };
}
