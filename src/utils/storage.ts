const getLocal = (key: string) => {
    return localStorage.get(key);
}
const setLocal = (key: string, value: string) => {
    localStorage.setItem(key, value);
}
const removeLocal = (key: string) => {
    localStorage.removeItem(key);
}
const clearLocal = () => {
    localStorage.clear();
}

export {getLocal, setLocal, removeLocal, clearLocal};