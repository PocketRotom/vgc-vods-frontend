type KeyedObject = { [key: string]: any };

const groupToArray = <T extends KeyedObject>(array: T[], key: keyof T): [T[keyof T], T[]][] => {
    const groupedMap = new Map<T[keyof T], T[]>();
    for (const e of array) {
        let thisList = groupedMap.get(e[key]);
        if (thisList === undefined) {
            thisList = [];
            groupedMap.set(e[key], thisList);
        }
        thisList.push(e);
    }
    return Array.from(groupedMap);
};

export default groupToArray;
