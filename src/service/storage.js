export class StorageService {
    /**
     *
     * @param {string} key
     * @param {Object} object
     * @returns {string|null}
     */
    static getObject(key, object) {
        const value = localStorage.getItem(btoa(String(key)));
        return value ? JSON.parse(window.atob(value)) : null;
    }

    /**
     *
     * @param {String} key
     * @param {Object} object
     */
    static setObject(key, object) {
        localStorage.setItem(window.btoa(String(key)), window.btoa(JSON.stringify(object)));
    }

}
