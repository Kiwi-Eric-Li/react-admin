const getLocal = (key: string) => {
    return localStorage.get(key);
}
const setLocal = (key: string, value: string) => {
    return localStorage.set(key, value);
}
const removeLocal = (key: string) => {
    return localStorage.removeItem(key);
}
const clearLocal = () => {
    return localStorage.clear();
}

export {getLocal, setLocal, removeLocal, clearLocal};