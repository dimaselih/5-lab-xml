export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.photo_400_orig}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>
                    </div>
                </div>
            `
        )
    }
    //<button class="btn btn-secondary" id="click-${data.id}" data-id="${data.id}">Клик</button>
    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }
    
    addListenersClick(data, listener) {
        document
            .getElementById(`click-${data.id}`)
            .addEventListener("click", listener)
    }
    
    listener_click(data) {
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
        //this.addListenersClick(data, listener_click)
    }

    remove() {
        this.parent.remove();
      }

}