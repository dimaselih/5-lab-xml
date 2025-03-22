export class SpanNewComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div><span class="badge bg-secondary" style="margin: 15px">Очень свежие продукты</span></div>
            `
        )
    }
    
    
    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}