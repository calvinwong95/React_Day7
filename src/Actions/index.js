import * as type from "./../types";

export const addUser = (data) => {
    return {
        type: type.ADD_USER,
        payload: data,
    }
}

