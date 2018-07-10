function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            if (req.status == 200) {
                resolve(JSON.parse(req.responseText));
            }
            else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function () {
            reject(Error("Network Error"));
        };

        req.send();
    });
}

function post(url, data) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('POST', url, true);

        req.onload = function () {
            if (req.status == 200) {
                resolve(req.responseText);
            }
            else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function () {
            reject(Error("Network Error"));
        };

        req.send(data);
    });
}