var apiKey = "9c9246aeb1b94fb7b6af308a45f0bf18";

var xurVendorHash = "2190858386";

var xhr = new XMLHttpRequest();
xhr.open("GET", `https://www.bungie.net/Platform/Destiny2/Manifest`, true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function()
{
    if(this.readyState === 4 && this.status === 200)
    {
        var json = JSON.parse(this.responseText);
        console.log(json.ErrorStatus);
    }
    else if(this.status !== 200)
    {
        console.log(`Manifest fetch error ${this.status}`)
    }
}

xhr.send();