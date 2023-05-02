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


        if (`${this.name()}` == 'colombia') {
            this.setTootip(`El pais: ${this.name()} , es importador de cafe colombiano`)
        } else if (`${this.name()}` == 'usa') {
            this.setTootip(`El pais: ${this.name()} , es importador de cafe colombiano`)
        } else if (`${this.name()}` == 'canada') {
            this.setTootip(`El pais: ${this.name()} , es importador de cafe colombiano`)
        }
        else if (`${this.name()}` == 'spain') {
            this.setTootip(`El pais: ${this.name()} , es importador de cafe colombiano`)
        }
        else if (`${this.name()}` == 'germany') {
            this.setTootip(`El pais: ${this.name()} , es importador de cafe colombiano`)
        }
        else if (`${this.name()}` == 'italy') {
            this.setTootip(`El pais: ${this.name()} , es importador de cafe colombiano`)
        }
        else if (`${this.name()}` == 'finland') {
            this.setTootip(`El pais: ${this.name()} , es importador de cafe colombiano`)
        } else if (`${this.name()}` == 'britain') {
            this.setTootip(`El pais: ${this.name()} , es importador de cafe colombiano`)
        } else if (`${this.name()}` == 'honshu') {
            this.setTootip(`El pais: ${this.name()} , es importador de cafe colombiano`)
        }else if (`${this.name()}` == 'south korea') {
            this.setTootip(`El pais: ${this.name()} , es importador de cafe colombiano`)
        }
        else {
            this.setTootip(`El pais: ${this.name()} , no es importador de cafe colombiano`)
        }
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


const countryPath2027 = CountryPath.findByName("svg2")
countryPath2027.fill("red")

const countryPath202 = CountryPath.findByName("colombia")
countryPath202.fill("red")


const countryPath = CountryPath.findByName("east antarctica")
countryPath.fill("green")

const countryPath2 = CountryPath.findByName("alaska-westcopy")
countryPath2.fill("green")

const countryPath4 = CountryPath.findByName("mauretania")
countryPath4.fill("yellow")

const countryPath5 = CountryPath.findByName("guinee")
countryPath5.fill("red")


const countryPath6 = CountryPath.findByName("south_sudan")
countryPath6.fill("red")

const countryPath7 = CountryPath.findByName("alaska")
countryPath7.fill("gold")

const countryPath8 = CountryPath.findByName("antarctic peninsula")
countryPath8.fill("violet")

const countryPath9 = CountryPath.findByName("baffin")
countryPath9.fill("violet")

const countryPath10 = CountryPath.findByName("ellesmere")
countryPath10.fill("violet")

const countryPath11 = CountryPath.findByName("victoria")
countryPath11.fill("orange")

const countryPath12 = CountryPath.findByName("sumatra")
countryPath12.fill("orange")

const countryPath13 = CountryPath.findByName("kirgizstan")
countryPath13.fill("orange")

const countryPath14 = CountryPath.findByName("honshu")
countryPath14.fill("orange")

const countryPath15 = CountryPath.findByName("kalimantan")
countryPath15.fill("red")

const countryPath16 = CountryPath.findByName("new zealand south island")
countryPath16.fill("red")

const countryPath17 = CountryPath.findByName("new zealand north island")
countryPath17.fill("red")

const countryPath18 = CountryPath.findByName("irian jaya")
countryPath18.fill("skyblue")

const countryPath19 = CountryPath.findByName("banks")
countryPath19.fill("skyblue")

const countryPath20 = CountryPath.findByName("novaya zemlya north")
countryPath20.fill("skyblue")

const countryPath21 = CountryPath.findByName("devon")
countryPath21.fill("purple")

const countryPath22 = CountryPath.findByName("east malaysia")
countryPath22.fill("purple")

const countryPath23 = CountryPath.findByName("sakhalin")
countryPath23.fill("purple")

const countryPath24 = CountryPath.findByName("alexander")
countryPath24.fill("purple")

const countryPath25 = CountryPath.findByName("sulawesi")
countryPath25.fill("green")

const countryPath26 = CountryPath.findByName("java")
countryPath26.fill("green")

const countryPath27 = CountryPath.findByName("newfoundland")
countryPath27.fill("green")

const countryPath28 = CountryPath.findByName("tierra del fuego chile")
countryPath28.fill("red")

const countryPath9090 = CountryPath.findByName("tahiti")
countryPath9090.fill("red")

const countryPath9092 = CountryPath.findByName("ulster")
countryPath9092.fill("yellow")


const countryPath9095 = CountryPath.findByName("haiti")
countryPath9095.fill("yellow")

const countryPath9093 = CountryPath.findByName("palawan")
countryPath9093.fill("yellow")

const countryPath9094 = CountryPath.findByName("negros")
countryPath9094.fill("yellow")

const countryPath9091 = CountryPath.findByName("galapagos")
countryPath9091.fill("red")

const countryPath29 = CountryPath.findByName("tierra del fuego argentina")
countryPath29.fill("yellow")

const countryPath30 = CountryPath.findByName("tasmania")
countryPath30.fill("yellow")

const countryPath31 = CountryPath.findByName("somaliland")
countryPath31.fill("yellow")

const countryPath32 = CountryPath.findByName("path302")
countryPath32.fill("red")

const countryPath33 = CountryPath.findByName("spitsbergen")
countryPath33.fill("red")

const countryPath34 = CountryPath.findByName("kotelny")
countryPath34.fill("red")

const countryPath36 = CountryPath.findByName("luzon")
countryPath36.fill("yellow")

const countryPath37 = CountryPath.findByName("novaya zemlya south")
countryPath37.fill("yellow")

const countryPath38 = CountryPath.findByName("hokkadata-toggle=")
countryPath38.fill("yellow")

const countryPath39 = CountryPath.findByName("prince of wales")
countryPath39.fill("yellow")

const countryPath40 = CountryPath.findByName("thurston")
countryPath40.fill("darkblue")

const countryPath41 = CountryPath.findByName("nordaustlandet")
countryPath41.fill("darkblue")

const countryPath42345 = CountryPath.findByName("djibouti")
countryPath42345.fill("darkred")

const countryPath423451 = CountryPath.findByName("puerto rico")
countryPath423451.fill("darkred")

const countryPath42345123 = CountryPath.findByName("cabinda")
countryPath42345123.fill("darkred")

const countryPath423451235 = CountryPath.findByName("el salvador")
countryPath423451235.fill("green")

const countryPath423451234 = CountryPath.findByName("belize")
countryPath423451234.fill("green")

const countryPath42 = CountryPath.findByName("path7462")
countryPath42.fill("darkblue")

const countryPath43 = CountryPath.findByName("southhampton")
countryPath43.fill("darkblue")

const countryPath438 = CountryPath.findByName("kuwait")
countryPath438.fill("darkblue")

const countryPath437 = CountryPath.findByName("qatar")
countryPath437.fill("darkblue")

const countryPath44 = CountryPath.findByName("bolshevik")
countryPath44.fill("orange")

const countryPath45 = CountryPath.findByName("prescott")
countryPath45.fill("orange")

const countryPath46 = CountryPath.findByName("prince patrick")
countryPath46.fill("orange")

const countryPath47 = CountryPath.findByName("eglinton")
countryPath47.fill("orange")

const countryPath48 = CountryPath.findByName("axel heiberg")
countryPath48.fill("silver")

const countryPath49 = CountryPath.findByName("october")
countryPath49.fill("silver")

const countryPath2987 = CountryPath.findByName("north korea")
countryPath2987.fill("white")



const countryPath50 = CountryPath.findByName("novaya sibir")
countryPath50.fill("silver")

const countryPath51 = CountryPath.findByName("hawaii")
countryPath51.fill("red")

const countryPath52 = CountryPath.findByName("domincan republic")
countryPath52.fill("brown")

const countryPath53 = CountryPath.findByName("prince george")
countryPath53.fill("brown")

const countryPath54 = CountryPath.findByName("kyushu")
countryPath54.fill("brown")

const countryPath55 = CountryPath.findByName("shikoku")
countryPath55.fill("brown")

const countryPath56 = CountryPath.findByName("st. lawrence island")
countryPath56.fill("brown")

const countryPath57 = CountryPath.findByName("wrangel")
countryPath57.fill("skyblue")

const countryPath58 = CountryPath.findByName("wrangel-w")
countryPath58.fill("skyblue")

const countryPath587 = CountryPath.findByName("new britain")
countryPath587.fill("skyblue")

const countryPath588 = CountryPath.findByName("new ireland")
countryPath588.fill("green")

const countryPath600 = CountryPath.findByName("timor")
countryPath600.fill("red")

const countryPath601 = CountryPath.findByName("seram")
countryPath601.fill("yellow")

const countryPath59 = CountryPath.findByName("hainan")
countryPath59.fill("red")

const countryPath60 = CountryPath.findByName("komsomolets")
countryPath60.fill("red")

const countryPath61 = CountryPath.findByName("lyakhovsky")
countryPath61.fill("red")

const countryPath62 = CountryPath.findByName("mackenzie king")
countryPath62.fill("green")

const countryPath63 = CountryPath.findByName("ellef ringnes")
countryPath63.fill("green")

const countryPath64 = CountryPath.findByName("bathurst")
countryPath64.fill("green")

const countryPath65 = CountryPath.findByName("edgeoya")
countryPath65.fill("green")

const countryPath66 = CountryPath.findByName("sardinia")
countryPath66.fill("red")

const countryPath67 = CountryPath.findByName("sicily")
countryPath67.fill("red")

const countryPath68 = CountryPath.findByName("st. lawrence island west")
countryPath68.fill("red")

const countryPath1002 = CountryPath.findByName("new caledonia")
countryPath1002.fill("red")

const countryPath1003 = CountryPath.findByName("bell")
countryPath1003.fill("red")


const countryPath1004 = CountryPath.findByName("salisbury")
countryPath1004.fill("red")


const countryPath1005 = CountryPath.findByName("new caledonia")
countryPath1005.fill("red")


const countryPath1006 = CountryPath.findByName("wilczek")
countryPath1006.fill("red")


const countryPath69 = CountryPath.findByName("smyley")
countryPath69.fill("gold")

const countryPath510 = CountryPath.findByName("casamance")
countryPath510.fill("red")

const countryPath511 = CountryPath.findByName("bissau")
countryPath511.fill("green")

const countryPath509 = CountryPath.findByName("gambia")
countryPath509.fill("gold")

const countryPath70 = CountryPath.findByName("kerguelen")
countryPath70.fill("red")

const countryPath71 = CountryPath.findByName("chile")
countryPath71.fill("silver")

const countryPath72 = CountryPath.findByName("venezuela")
countryPath72.fill("white")

const countryPath73 = CountryPath.findByName("australia")
countryPath73.fill("pink")

const countryPath74 = CountryPath.findByName("brazil")
countryPath74.fill("green")

const countryPath75 = CountryPath.findByName("argentina")
countryPath75.fill("yellow")

const countryPath76 = CountryPath.findByName("guyana")
countryPath76.fill("skyblue")

const countryPath77 = CountryPath.findByName("ecuador")
countryPath77.fill("blue")

const countryPath78 = CountryPath.findByName("bolivia")
countryPath78.fill("orange")

const countryPath79 = CountryPath.findByName("peru")
countryPath79.fill("brown")

const countryPath80 = CountryPath.findByName("paraguay")
countryPath80.fill("purple")

const countryPath81 = CountryPath.findByName("uruguay")
countryPath81.fill("violet")

const countryPath82 = CountryPath.findByName("guyane")
countryPath82.fill("gold")

const countryPath83 = CountryPath.findByName("suriname")
countryPath83.fill("fuchsia")

const countryPath84 = CountryPath.findByName("usa")
countryPath84.fill("red")

const countryPath85 = CountryPath.findByName("mexico")
countryPath85.fill("orange")

const countryPath86 = CountryPath.findByName("canada")
countryPath86.fill("yellow")

const countryPath87 = CountryPath.findByName("guatemala")
countryPath87.fill("purple")

const countryPath88 = CountryPath.findByName("greenland")
countryPath88.fill("green")

const countryPath89 = CountryPath.findByName("chukotka")
countryPath89.fill("Maroon")

const countryPath90 = CountryPath.findByName("cuba")
countryPath90.fill("blue")

const countryPath956 = CountryPath.findByName("king christian")
countryPath956.fill("blue")

const countryPath9560 = CountryPath.findByName("raiatea")
countryPath9560.fill("yellow")

const countryPath91 = CountryPath.findByName("nicaragua")
countryPath91.fill("violet")

const countryPath92 = CountryPath.findByName("costa rica")
countryPath92.fill("green")


const countryPath93 = CountryPath.findByName("honduras")
countryPath93.fill("darkblue")


const countryPath94 = CountryPath.findByName("panama")
countryPath94.fill("darkred")

const countryPath95 = CountryPath.findByName("niger")
countryPath95.fill("darkred")

const countryPath96 = CountryPath.findByName("algeria")
countryPath96.fill("brown")

const countryPath97 = CountryPath.findByName("south africa")
countryPath97.fill("violet")

const countryPath98 = CountryPath.findByName("sudan")
countryPath98.fill("silver")

const countryPath99 = CountryPath.findByName("egypt")
countryPath99.fill("orange")

const countryPath100 = CountryPath.findByName("drc")
countryPath100.fill("green")


const countryPath101 = CountryPath.findByName("ethiopia")
countryPath101.fill("blue")


const countryPath102 = CountryPath.findByName("zambia")
countryPath102.fill("violet")


const countryPath103 = CountryPath.findByName("morocco")
countryPath103.fill("green")


const countryPath104 = CountryPath.findByName("cameroon")
countryPath104.fill("red")


const countryPath105 = CountryPath.findByName("chad")
countryPath105.fill("blue")


const countryPath107 = CountryPath.findByName("libya")
countryPath107.fill("darkblue")


const countryPath108 = CountryPath.findByName("namibia")
countryPath108.fill("brown")


const countryPath109 = CountryPath.findByName("saudi")
countryPath109.fill("orange")


const countryPath110 = CountryPath.findByName("central africa")
countryPath110.fill("blue")


const countryPath111 = CountryPath.findByName("angola")
countryPath111.fill("silver")


const countryPath112 = CountryPath.findByName("somalia")
countryPath112.fill("white")


const countryPath113 = CountryPath.findByName("kenya")
countryPath113.fill("green")


const countryPath114 = CountryPath.findByName("gabon")
countryPath114.fill("violet")


const countryPath115 = CountryPath.findByName("nigeria")
countryPath115.fill("yellow")


const countryPath116 = CountryPath.findByName("botswana")
countryPath116.fill("red")


const countryPath117 = CountryPath.findByName("tanzania")
countryPath117.fill("darkblue")


const countryPath118 = CountryPath.findByName("tunisia")
countryPath118.fill("darkblue")


const countryPath119 = CountryPath.findByName("bioko")
countryPath119.fill("red")


const countryPath120 = CountryPath.findByName("eritrea")
countryPath120.fill("white")


const countryPath121 = CountryPath.findByName("uganda")
countryPath121.fill("gold")


const countryPath122 = CountryPath.findByName("yemen")
countryPath122.fill("brown")


const countryPath123 = CountryPath.findByName("togo")
countryPath123.fill("green")


const countryPath124 = CountryPath.findByName("benin")
countryPath124.fill("green")


const countryPath125 = CountryPath.findByName("burkina")
countryPath125.fill("red")


const countryPath126 = CountryPath.findByName("ghana")
countryPath126.fill("yellow")


const countryPath127 = CountryPath.findByName("mali")
countryPath127.fill("blue")


const countryPath128 = CountryPath.findByName("congo")
countryPath128.fill("blue")


const countryPath129 = CountryPath.findByName("burundi")
countryPath129.fill("red")


const countryPath130 = CountryPath.findByName("rwanda")
countryPath130.fill("silver")


const countryPath131 = CountryPath.findByName("zimbabwe")
countryPath131.fill("yellow")


const countryPath132 = CountryPath.findByName("spain")
countryPath132.fill("blue")


const countryPath133 = CountryPath.findByName("germany")
countryPath133.fill("red")


const countryPath134 = CountryPath.findByName("russia")
countryPath134.fill("red")


const countryPath135 = CountryPath.findByName("poland")
countryPath135.fill("green")


const countryPath136 = CountryPath.findByName("ukraine")
countryPath136.fill("pink")


const countryPath138 = CountryPath.findByName("finland")
countryPath138.fill("green")


const countryPath139 = CountryPath.findByName("france")
countryPath139.fill("brown")


const countryPath140 = CountryPath.findByName("norway")
countryPath140.fill("purple")


const countryPath141 = CountryPath.findByName("bulgaria")
countryPath141.fill("violet")


const countryPath142 = CountryPath.findByName("turkey")
countryPath142.fill("orange")


const countryPath143 = CountryPath.findByName("lithuania")
countryPath143.fill("yellow")


const countryPath144 = CountryPath.findByName("albania")
countryPath144.fill("blue")


const countryPath145 = CountryPath.findByName("hungary")
countryPath145.fill("white")


const countryPath146 = CountryPath.findByName("netherlands")
countryPath146.fill("orange")


const countryPath147 = CountryPath.findByName("belarus")
countryPath147.fill("blue")


const countryPath148 = CountryPath.findByName("romania")
countryPath148.fill("yellow")


const countryPath149 = CountryPath.findByName("sweden")
countryPath149.fill("blue")


const countryPath150 = CountryPath.findByName("syria")
countryPath150.fill("green")


const countryPath151 = CountryPath.findByName("croatia")
countryPath151.fill("gold")


const countryPath152 = CountryPath.findByName("italy")
countryPath152.fill("blue")


const countryPath153 = CountryPath.findByName("china")
countryPath153.fill("yellow")


const countryPath154 = CountryPath.findByName("mongolia")
countryPath154.fill("green")


const countryPath155 = CountryPath.findByName("thailand")
countryPath155.fill("red")


const countryPath156 = CountryPath.findByName("burma")
countryPath156.fill("green")


const countryPath157 = CountryPath.findByName("nepal")
countryPath157.fill("green")


const countryPath158 = CountryPath.findByName("uzbekistan")
countryPath158.fill("green")


const countryPath159 = CountryPath.findByName("afghanistan")
countryPath159.fill("red")


const countryPath190 = CountryPath.findByName("turkmenistan")
countryPath190.fill("white")


const countryPath191 = CountryPath.findByName("pakistan")
countryPath191.fill("pink")


const countryPath192 = CountryPath.findByName("iran")
countryPath192.fill("brown")


const countryPath193 = CountryPath.findByName("india")
countryPath193.fill("red")


const countryPath194 = CountryPath.findByName("kazakhstan")
countryPath194.fill("violet")


const countryPath195 = CountryPath.findByName("vietnam")
countryPath195.fill("blue")


const countryPath196 = CountryPath.findByName("laos")
countryPath196.fill("white")


const countryPath198 = CountryPath.findByName("south korea")
countryPath198.fill("blue")


const countryPath199 = CountryPath.findByName("oman")
countryPath199.fill("green")


const countryPath200 = CountryPath.findByName("emirates")
countryPath200.fill("red")


const countryPath201 = CountryPath.findByName("mozambique")
countryPath201.fill("red")


const countryPath203 = CountryPath.findByName("malawi")
countryPath203.fill("yellow")


const countryPath204 = CountryPath.findByName("ivoire")
countryPath204.fill("white")


const countryPath205 = CountryPath.findByName("senegal")
countryPath205.fill("white")


const countryPath206 = CountryPath.findByName("tajikistan")
countryPath206.fill("white")


const countryPath207 = CountryPath.findByName("bangladesh")
countryPath207.fill("yellow")


const countryPath208 = CountryPath.findByName("bhutan")
countryPath208.fill("yellow")


const countryPath209 = CountryPath.findByName("cambodia")
countryPath209.fill("yellow")


const countryPath210 = CountryPath.findByName("madagascar")
countryPath210.fill("green")


const countryPath211 = CountryPath.findByName("lesotho")
countryPath211.fill("red")


const countryPath212 = CountryPath.findByName("swaziland")
countryPath212.fill("yellow")


const countryPath213 = CountryPath.findByName("greece")
countryPath213.fill("red")


const countryPath214 = CountryPath.findByName("azerbaijan")
countryPath214.fill("green")


const countryPath215 = CountryPath.findByName("georgia")
countryPath215.fill("yellow")


const countryPath216 = CountryPath.findByName("armenia")
countryPath216.fill("blue")


const countryPath217 = CountryPath.findByName("iraq")
countryPath217.fill("red")


const countryPath218 = CountryPath.findByName("portugal")
countryPath218.fill("red")


const countryPath219 = CountryPath.findByName("britain")
countryPath219.fill("blue")


const countryPath220 = CountryPath.findByName("ireland")
countryPath220.fill("red")


const countryPath221 = CountryPath.findByName("papua new guinea")
countryPath221.fill("red")


const countryPath222 = CountryPath.findByName("serbia")
countryPath222.fill("red")


const countryPath223 = CountryPath.findByName("moldova")
countryPath223.fill("red")


const countryPath224 = CountryPath.findByName("malaysia")
countryPath224.fill("blue")


const countryPath225 = CountryPath.findByName("iceland")
countryPath225.fill("red")


const countryPath227 = CountryPath.findByName("liberia")
countryPath227.fill("blue")


const countryPath228 = CountryPath.findByName("sierra leone")
countryPath228.fill("orange")


const countryPath229 = CountryPath.findByName("switzerland")
countryPath229.fill("green")


const countryPath230 = CountryPath.findByName("slovenia")
countryPath230.fill("orange")


const countryPath231 = CountryPath.findByName("austria")
countryPath231.fill("yellow")


const countryPath232 = CountryPath.findByName("czech")
countryPath232.fill("orange")


const countryPath233 = CountryPath.findByName("slovakia")
countryPath233.fill("blue")


const countryPath234 = CountryPath.findByName("estonia")
countryPath234.fill("blue")


const countryPath235 = CountryPath.findByName("denmark")
countryPath235.fill("orange")


const countryPath236 = CountryPath.findByName("bosnia")
countryPath236.fill("green")


const countryPath237 = CountryPath.findByName("jordan")
countryPath237.fill("blue")


const countryPath238 = CountryPath.findByName("israel")
countryPath238.fill("red")


const countryPath239 = CountryPath.findByName("sri lanka")
countryPath239.fill("green")


const countryPath240 = CountryPath.findByName("taiwan")
countryPath240.fill("green")

