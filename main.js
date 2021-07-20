const request = new XMLHttpRequest();

request.onreadystatechange = function (event){
    if (this.readyState === 4){
        if(this.status === 200){
            //console.log("Réponse reçue: %s", this.responseText)
            var goodObject = parseJson(JSON.parse(this.responseText)[0]);
            console.log(goodObject)
        } else {
            console.log("Status de la réponse: %s", this.status, this.responseText);
        }
    }
}

function parseJson(object)  {
    for (var key in object) {
        if(object.hasOwnProperty(key)){
            var value = object[key]
            switch (true) {
                case value === "true" || value === "false":
                    object[key] = value === "true";
                    break;
                case /\d/.test(value):
                    object[key] = parseInt(value);
                    break;
            }
        }
        for(var underKey in value){
            //console.log('test');
            if(value.hasOwnProperty(underKey)){

                var newValue = value[underKey];
                //console.log(newValue);
                switch (true) {
                    case /\d/.test(newValue):
                        value[underKey] = parseInt(newValue);
                        break;
                }
            }
        }
    }
    return object;
}
request.open('GET', 'http://localhost/TutoAjax/user.json', true);
request.send(null);
