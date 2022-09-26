const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const sendRequest = (url) => {
    return new Promise((resolve, reject) => {
        
        const xhr = new XMLHttpRequest()
        
        xhr.open('GET', url)
        
        xhr.send()
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.status)
                }
            }
        }
    })
}

let showData = async () => {
    try {
        console.log(await sendRequest('https://api.github.com/search/users?q=cskang0121'))
    } catch (e) {
        console.log(e)
    }
}

showData()