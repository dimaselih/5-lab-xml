function getUrl(url) {
    // Вы можете добавить любую обработку URL здесь
    return url;
}

class Ajax {
    post(url, callback) {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', getUrl(url))
        xhr.send()

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const data = JSON.parse(xhr.response)
                callback(data)
            }
        }
    }
}

export const ajax = new Ajax();