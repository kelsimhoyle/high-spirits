const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect("mongodb://localhost/highspirits", { useNewUrlParser: true }).then(
    () => {
        console.log("connected")

    },
    err => { console.log(err) }
);



const distillerySeed = [
    {
        distillery: "10TH MOUNTAIN WHISKEY & SPIRIT COMPANY",
        website: "http://10thwhiskey.com",
        city: "Vail"
    },
    {
        distillery: "1350 DISTILLING",
        website: "http://1350distilling.com",
        city: "Colorado Springs"
    },
    {
        distillery: "3 HUNDRED DAYS DISTILLING",
        website: "http://www.3hundreddays.com",
        city: "Monument"
    },
    {
        distillery: "52EIGHTY DISTILLING",
        website: "http://52eightydistilling.com", city: "Littleton"
    },
    {
        distillery: "ARCHETYPE DISTILLERY", website: "http://www.archetypedistilling.com",
        city: "Denver"
    },
    {
        distillery: "AXE AND THE OAK WHISKEY HOUSE",
        website: "http://www.axeandtheoak.com",
        city: "Colorado Springs"
    },
    {
        distillery: "BEAR CREEK DISTILLERY",
        website: "http://www.bearcreekdistillery.com",
        city: "Denver"
    },
    {
        distillery: "BIG FAT PASTOR SPIRITS",
        website: "http://bigfatpastorspirits.com",
        city: "Loveland"
    },
    {
        distillery: "BLACK BEAR DISTILLERY",
        website: "http://www.blackbeardistillery.com",
        city: "Green Mountain Falls"
    },
    {
        distillery: "BOUCK BROTHERS DISTILLING",
        website: "http://www.bouckbros.com",
        city: "Idaho Springs"
    },
    {
        distillery: "BRECKENRIDGE DISTILLERY",
        website: "http://breckenridgedistillery.com",
        city: "Breckenridge"
    },
    {
        distillery: "BRANCH & BARREL WHISKEY",
        website: "http:/www.branchandbarrelwhiskey.com",
        city: "Centennial"
    },
    {
        distillery: "COLORADO GOLD DISTILLERY",
        website: "http://ColoradoHighVodka.com",
        city: "Colorado Springs"
    },
    {
        distillery: "COPPERMUSE DISTILLERY",
        website: "http://www.coppermuse.com",
        city: "Fort Collins"
    },
    {
        distillery: "DEERHAMMER DISTILLING COMPANY",
        website: "http://deerhammer.com",
        city: "Buena Vista"
    },
    {
        distillery: "DENVER DISTILLERY",
        website: "http://Denverdistillery.com",
        city: "Denver"
    },
    {
        distillery: "DEVIANT SPIRIT DV8",
        website: "http://deviantspirits.com",
        city: "Boulder"
    },
    {
        distillery:
            "DEVIATION DISTILLING",
        website: "http://www.deviationdistilling.com",
        city: "Denver"
    },
    {
        distillery: "DEVIL'S HEAD DISTILLERY",
        website: "http://www.devilsheaddistillery.com",
        city: "Englewood"
    },
    {
        distillery: "DISTILLERY 291",
        website: "http://www.distillery291.com",
        city: "Colorado Springs"
    },
    {
        distillery: "DOWNSLOPE DISTILLING",
        website: "http://www.downslopedistilling.com",
        city: "Centennial"
    },
    {
        distillery: "DRY LAND DISTILLERS",
        website: "https://drylanddistillers.com",
        city: "Longmont"
    },
    {
        distillery: "DURANGO CRAFT SPIRITS",
        website: "http://www.durangospirits.com",
        city: "Durango"
    },
    {
        distillery: "ELEVATION 5003 DISTILLERY",
        website: "http://www.elevation5003.com",
        city: "Fort Collins"
    },
    {
        distillery: "ELKINS DISTILLING CO.",
        website: "http://www.elkinsdistilling.com",
        city: "Estes Park"
    },
    {
        distillery: "ELWOOD DISTILLING",
        website: "http://www.elwooddistilling.com",
        city: "Boulder"
    },
    {
        distillery: "FEISTY SPIRITS DISTILLERY",
        website: "http://FeistySpirits.com",
        city: "Fort Collins"
    },
    {
        distillery: "GOLDEN MOON DISTILLERY",
        website: "http://www.goldenmoondistillery.com",
        city: "Golden"
    },
    {
        distillery: "HONEY HOUSE DISTILLERY",
        website: "http://www.honeyhousedistillery.com",
        city: "Durango"
    },
    {
        distillery: "IDLEWILD SPIRITS DISTILLERY",
        website: "http://www.idlewildspirits.com",
        city: "Winter Park"
    },
    {
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE",
        website: "http://www.irontondistillery.com",
        city: "Denver"
    },
    {
        distillery: "J&L DISTILLERY",
        website: "http://www.jldistilling.com",
        city: "Boulder"
    },
    {
        distillery: "K J WOOD DISTILLERS",
        website: "http://www.kjwooddistillers.com",
        city: "Ouray"
    },
    {
        distillery: "LAWS WHISKEY HOUSE",
        website: "http://www.lawswhiskeyhouse.com",
        city: "Denver"
    },
    {
        distillery: "LEE SPIRITS COMPANY",
        website: "http://www.leespirits.com",
        city: "Colorado Springs"
    },
    {
        distillery: "LEOPOLD BROS.",
        website: "http://www.leopoldbros.com",
        city: "Denver"
    },
    {
        distillery: "LONTUCKY SPIRITS",
        website: "http://www.longtuckyspirits.com",
        city: "Longmont"
    },
    {
        distillery: "MAD RABBIT DISTILLERY",
        website: "http://madrabbitdistillery.com",
        city: "Westminster"
    },
    {
        distillery: "MARBLE DISTILLING CO.",
        website: "http://www.marbledistilling.com",
        city: "Carbondale"
    },
    {
        distillery: "MILE HIGH SPIRITS",
        website: "http://www.DrinkMHS.com",
        city: "Denver"
    },
    {
        distillery: "MYSTIC MOUNTAIN DISTILLERY",
        website: "http://www.mmdistillery.com",
        city: "Thornton"
    },
    {
        distillery: "MYTHOLOGY DISTILLERY",
        website: "http://www.mythologydistillery.com",
        city: "Denver"
    },
    {
        distillery: "NOCO DISTILLERY",
        website: "http://www.nocodistillery.com",
        city: "Fort Collins"
    },
    {
        distillery: "OLD ELK DISTILLERY",
        website: "http://www.olkelk.com",
        city: "Fort Collins"
    },
    {
        distillery: "OLD TOWN DISTILLING CO.",
        website: "http://www.oldtowndistilling.com",
        city: "Fort Collins"
    },
    {
        distillery: "ON POINT DISTILLERY",
        website: "http://www.12pointdistillery.com",
        city: "Lafayette"
    },
    {
        distillery: "PEACH STREET DISTILLERS",
        website: "http://www.peachstreetdistillers.com",
        city: "Palisade"
    },
    {
        distillery: "RISING SUN DISTILLERY",
        website: "http://www.risingsundistillery.com",
        city: "Denver"
    },
    {
        distillery: "ROCKER SPIRITS",
        website: "http://www.rockerspirits.com",
        city: "Littleton"
    },
    {
        distillery: "SAND CREEK DISTILLERY",
        website: "http://www.sandcreekdistillery.com",
        city: "Hugo"
    },
    {
        distillery: "SANTA FE SPIRITS DISTILLERY",
        website: "http://www.santafespirits.com",
        city: "Santa Fe "
    },
    {
        distillery: "SPIRIT HOUND DISTILLERS",
        website: "http://www.spirithounds.com",
        city: "Lyons"
    },
    {
        distillery: "STATE 38 DISTILLING",
        website: "http://www.state38.com",
        city: "Golden"
    },
    {
        distillery: "STEAMBOAT WHISKEY COMPANY",
        website: "http://www.steamboatwhiskeyco.com",
        city: "Steamboat Springs"
    },
    {
        distillery: "STONEYARD DISTILLERY",
        website: "http://stoneyarddistillery.com",
        city: "Dotsero"
    },
    {
        distillery: "STORM KING DISTILLING CO.",
        website: "http://www.stormkingdistilling.com",
        city: "Montrose"
    },
    {
        distillery: "STRANAHAN'S COLORADO WHISKEY",
        website: "http://www.stranahans.com",
        city: "Denver"
    },
    {
        distillery: "SYNTAX DISTILLERY",
        website: "http://www.syntaxspirits.com",
        city: "Greeley"
    },
    {
        distillery: "TALNUA DISTILLERY",
        website: "http://www.talnua.com",
        city: "Arvada"
    },
    {
        distillery: "THE BLOCK DISTILLING CO.",
        website: "http://www.theblockdistillingco.com",
        city: "Denver"
    },
    {
        distillery: "THE FAMILY JONES",
        website: "http://www.thefamilyjones.co",
        city: "Denver"
    },
    {
        distillery: "THE HEART DISTILLERY",
        website: "https://theheartdistillery.com",
        city: "Windsor"
    },
    {
        distillery: "TOWER 56 DISTILLING",
        website: "http://www.tower56.com",
        city: "Greeley"
    },
    {
        distillery: "VAPOR DISTILLERY",
        website: "http://www.vapordistillery.com",
        city: "Boulder"
    },
    {
        distillery: "WHISTLING HARE DISTILLERY",
        website: "http://www.whistlinghare.com",
        city: "Westminster"
    },
    {
        distillery: "WOOD'S HIGH MOUNTAIN DISTILLERY",
        website: "http://woodsdistillery.com",
        city: "Salida"
    },
    {
        distillery: "WOODY CREEK DISTILLERS",
        website: "http://www.woodycreekdistillers.com",
        city: "Basalt"
    }
]

db.Distillery
    .remove({})
    .then(() => db.Distillery.collection.insertMany(distillerySeed))
    .then(data => {
        console.log(data.result.n = " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.err(err);
        process.exit(1)
    });
