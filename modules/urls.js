// modules/urls.js
import { version } from "./consts.js";

class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method';
        this.commonInfo = `v=${version}`;
    }

    getUserInfo(userId) {
        const accessToken = localStorage.getItem('access_token');
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig&access_token=${accessToken}&${this.commonInfo}`;
    }

    getGroupMembers(groupId) {
        const accessToken = localStorage.getItem('access_token');
        return `${this.url}/groups.getMembers?group_id=${groupId}&access_token=${accessToken}&${this.commonInfo}&sort=id_asc&count=10&filter=friends`;
    }
}

export const urls = new Urls();
