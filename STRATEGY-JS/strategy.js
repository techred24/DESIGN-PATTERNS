const data = [{
    name: "Erdinger Pikantus",
    country: "Alemania",
    info: "Erdinger Pikantus es una cerveza de estilo weizenbock elaborada en la localidad bávara de Erding.",
    img: "https://dxjcdxuv6chk2.cloudfront.net/assets/biere/flascheglas/pikantus-2020-v2.png"
},
{
    name: "Corona",
    country: "México",
    info: "La cerveza Corona es una marca mundialmente conocida, distribuida a lo largo de más de 159 países en los cinco continentes.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Corona-6Pack.JPG"
},
{
    name: "Delirium Tremens",
    country: "Bélgica",
    info: "Esta pale ale tiene una efervescencia fina con un toque un tanto picante. Al tomarse, calienta el paladar y deja un sabor fuerte y de un amargor seco.",
    img: "https://www.delirium.be/themes/custom/delirium/assets/img/beers/beer_delirium_tremens_bottle.png"
}];

class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    show() {
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                            <h2>${beer.name}</h2>
                            <p>${beer.country}</p>
                        </div>
                        <hr>`
        }, "");
    }
}
class DetailedListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                            <h2>${beer.name}</h2>
                            <p>${beer.country}</p>
                            <p>${beer.info}</p>
                        </div>
                        <hr>`
        }, "");
    }
}
class ListWithImageStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                            <img width="40%" src="${beer.img}">
                            <h2>${beer.name}</h2>
                        </div>
                        <hr>`
        }, "");
    }
}

const strategies = [
    new ListStrategy,
    new DetailedListStrategy,
    new ListWithImageStrategy
]

const info = new InfoContext(new ListStrategy(), data, content);

slcOptions.addEventListener('change', (e) => {
    info.setStrategy(strategies[e.target.value]);
    info.show();
});
