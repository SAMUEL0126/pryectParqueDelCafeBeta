TEN_MILLONS = 10000000
ONE_HUNDRED_MILLIONS = 100000000

class CountryPathColletion {

    constructor(items) {
        this.items = items
    }

    first() {
        return new CountryPath(this.items[0])
    }

    find(index) {
        return new CountryPath(this.items[index])
    }

    last() {

    }
    static get() {
        return new CountryPathColletion(document.querySelectorAll("path"))
    }
    for(funct) {
        this.items.forEach(countryPath => {
            funct(new CountryPath(countryPath))
        });
    }
}



class CountryPath {

    constructor(element) {
        this.element = element
        this.setTootip(`Pais: ${this.name()}`)
    }

    fill(color) {

        this.element.setAttribute("fill", color)
    }

    name() {
        return this.element.getAttribute('id')
        
    }

    setPopulation(population) {
        this.element.setAttribute("population", population)
    }

    setTootip(string) {
        this.element.setAttribute('title', string)
    }

    static findByName(name) {
        return new CountryPath(document.getElementById(name))
    }

}

class Response {
    constructor(object) {

        this.object = object
    }
    population() {
        return this.object.population
    }
    region() {
        return this.object.region
    }
    subregion() {
        return this.object.subregion
    }
    area() {
        return this.object.area
    }
}

class CountryAPI {
    static async findByName(name) {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)

        if (response.status == 404) {
            throw Error(`country ${name} not found`)
        }

        return new Response((await response.json())[0])
    }
}

CountryPathColletion.get().for(async countryPath => {

    const response = await CountryAPI.findByName(countryPath.name())



    if (response.area() < TEN_MILLONS) {

        return
    }

    if (response.area() < ONE_HUNDRED_MILLIONS) {

        return
    }


})
