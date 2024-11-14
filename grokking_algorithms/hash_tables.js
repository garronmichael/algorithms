// 5.1 Consistent

// 5.2 Inconsistent

// 5.3 Inconsistent

// 5.4 Consistent

const cache = {}

function getPage(url) {
    if (cache[url]) {
        return cache[url]
    } else {
        data = getDataFromServer(url)
        cache[url] = data
        return data
    }
}

function getDataFromServer(url) {
    //  stuff
}

// 5.5 First character as index or prime number mod

// 5.6 Length of the string or prime number mod

// 5.7 First character as index or prime number mod