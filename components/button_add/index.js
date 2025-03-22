import {ProductCardComponent} from "../../components/product-card/index.js";

export class AddButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }


    getHTML() {
        return (`<div><button class="btn btn-primary" id="click-card-1" data-id="1">Добавить карточку </button></div>`)
    }

    render(data) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        html.addEventListener('click', this.addCard.bind(this));
    }

    addCard(data) {
        const newCardData = {
            id: Math.random(),
            src: 'https://example.com/image.jpg',
            title: 'Новая Карта',
            text: 'Это новая карта',
          };
          this.addCardToPage(newCardData);
      }
    
      removeCard(id) {
        const cardId = prompt('Введите ID карты для удаления');
        this.removeCardFromPage(cardId);
      }

      addCardToPage(data) {
        const productCard = new ProductCardComponent(this.pageRoot);
        productCard.render(data, this.clickCard.bind(this));
      }
    
      removeCardFromPage(id) {
        const cardElement = document.getElementById(`click-card-${id}`);
        if (cardElement) {
          cardElement.parentNode.remove();
        }
      }
}


//  const addButton = document.createElement('button');
//      addButton.textContent = 'Добавить карту';
//      addButton.addEventListener('click', this.addCard.bind(this));
//     this.pageRoot.appendChild(addButton);