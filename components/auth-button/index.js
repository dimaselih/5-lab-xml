export class AuthButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <div id="auth-button"></div>
        `;
    }

      

    render() {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        const VKID = window.VKIDSDK;

        VKID.Config.init({
            app: 53163557,
            redirectUrl: 'http://127.0.0.1:5501/public/'
        });

        const oneTap = new VKID.OneTap();
        const container = document.getElementById('auth-button');

        
          

        if (container) {
            oneTap.render({
                container: container,
                scheme: VKID.Scheme.LIGHT,
                lang: VKID.Languages.RUS,
                redirectUrl: 'http://127.0.0.1:5501/public/'
            });
        }
    }
}
