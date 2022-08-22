class ClientComponent {
    constructor(url) {
        this.url = url;
    }
    async getData() {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}
class ClientDecorator {
    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }
    async getData() {
        return await this.clientComponent.getData();
    }
}
class UpperCaseClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const newData = data.map(e => {
            e.title = e.title.toUpperCase();
            return e;
        });
        return newData;
    }    
}
class HtmlClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const newData = data.map(e => {
            e.title = `<h1>${e.title}</h1>`;
            e.thumbnailUrl = `<img src='${e.thumbnailUrl}'>`;
            return e;
        });
        return newData;
    }
}

(async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const client = new ClientComponent(url);
    const upperClient = new UpperCaseClientDecorator(client);
    // const data = await upperClient.getData();
    // console.log(data);

    const htmlClient = new HtmlClientDecorator(upperClient);
    const data = await htmlClient.getData();
    // console.log(data); 
    divContent1.innerHTML = data.reduce((ac, e) => {
        return ac + e.title + e.thumbnailUrl;
    }, '');
    const htmlClient2 = new HtmlClientDecorator(client);
    const data2 = await htmlClient2.getData();
    divContent2.innerHTML = data2.reduce((ac, e) => {
        return ac + e.title + e.thumbnailUrl;
    }, '');
})();