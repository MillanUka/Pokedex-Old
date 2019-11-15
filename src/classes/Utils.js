export const emptyList = (list) => {
    list.length = 0;
}

export const copyList = (listToCopyFrom, listToCopyTo) => {
    emptyList(listToCopyTo);

    listToCopyFrom.forEach(element => {
        listToCopyTo.push(element);
    });
}



