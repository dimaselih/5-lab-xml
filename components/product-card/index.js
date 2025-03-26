import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";


export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(item) {
        return `
            <div class="card m-2" style="width: 18rem;">
                <img src="${item.photo_400_orig}" class="card-img-top" alt="${item.first_name} ${item.last_name}">
                <div class="card-body">
                    <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
                    <p class="card-text">ID: ${item.id}</p>
                    <button class="btn btn-primary" data-id="${item.id}">View Profile</button>
                </div>
            </div>
        `;
    }

    render(item, clickHandler) {
        ajax.post(urls.getUserInfo(item), (data) => {
            if (data && data.response && data.response[0]) {
                
                const user = data.response[0];
                //if (user.first_name[0]!='В') return 1
                const html = this.getHTML(user);
                this.parent.insertAdjacentHTML('beforeend', html);

                const button = this.parent.querySelector(`button[data-id="${user.id}"]`);
                button.addEventListener('click', clickHandler);
            } else {
                console.error('Invalid data received', data);
            }
        });
    }
}
