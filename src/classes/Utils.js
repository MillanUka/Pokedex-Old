
/**
 * 
 * @param {Array} list to empty
 */export const emptyList = (list) => {
    list.length = 0;
}

/**
 * Copies a list to another array
 * @param {Array} listToCopyFrom List to copy from
 * @param {Array} listToCopyTo 
 */
export const copyList = (listToCopyFrom, listToCopyTo) => {
    emptyList(listToCopyTo);

    listToCopyFrom.forEach(element => {
        listToCopyTo.push(element);
    });
}



