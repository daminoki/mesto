export default class UserInfo {
    constructor(userSelectors) {
        this._userName = document.querySelector(userSelectors.name);
        this._userDescription = document.querySelector(userSelectors.description);
    }

    getUserInfo() {
        this._userData = {
            name: this._userName.textContent,
            description: this._userDescription.textContent,
        }
        return this._userData();
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userDescription.textContent =data.description;
    }
}