import {MainPage} from "../../pages/main/index.js";


export class AuthButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
                <div id="vkid-auth-container"></div>
            `;

    }

    render() {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforebegin', html);


        if ('VKIDSDK' in window) {
            const VKID = window.VKIDSDK;

            VKID.Config.init({
                app: 53163557,
                redirectUrl: 'http://localhost',
                responseMode: VKID.ConfigResponseMode.Callback,
                source: VKID.ConfigSource.LOWCODE,
                scope: '', // Заполните нужными доступами по необходимости
            });

            const oneTap = new VKID.OneTap();
            const self = this;

            oneTap.render({
                container: document.getElementById('vkid-auth-container'),

                showAlternativeLogin: true
            })
            .on(VKID.WidgetEvents.ERROR, vkidOnError)
            .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload) {
                const code = payload.code;
                const deviceId = payload.device_id;

                VKID.Auth.exchangeCode(code, deviceId)
                .then((data) => {
                    vkidOnSuccess(data);
                    self.hide() 
                })
                .catch(vkidOnError);
            });
            
            function vkidOnSuccess(data) {
                // Обработка полученного результата
                console.log('Authorization successful', data);
                // Сохраните токены для дальнейшего использования
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
                localStorage.setItem('id_token', data.id_token);
                localStorage.setItem('user_id', data.user_id);
                if (typeof window.onAuthSuccess === 'function') {
                    window.onAuthSuccess();
                }

            }

            function vkidOnError(error) {
                // Обработка ошибки
                console.error('Authorization error', error);
            }
            }
    }
    hide() {
        const container = document.getElementById('vkid-auth-container');
        if (container) {
            container.style.display = 'none';
        }
    }

    isLoggedIn() {
        return !!localStorage.getItem('access_token');
    }


}
