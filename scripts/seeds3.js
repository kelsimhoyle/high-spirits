const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect("mongodb://localhost/highspirits", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => {
            console.log("connected")
        },
        err => { console.log(err) }
    );

const alcoholSeeds2 = [
    {
        name: "Narrow Road Vodka",
        alcoholType: "Vodka",
        flavor: "Woody-Nutty",
        distillery: "ELEVATION 5003 DISTILLERY"
    },
    {
        name: "Timber Ridge Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "ELEVATION 5003 DISTILLERY"
    },
    {
        name: "Lunarshine Corn Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "ELEVATION 5003 DISTILLERY"
    },
    {
        name: "Falernu Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Woody-Nutty",
        distillery: "ELEVATION 5003 DISTILLERY"
    },
    {
        name: "Franklin Coffee Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Vanilla",
        distillery: "ELEVATION 5003 DISTILLERY"
    },
    {
        name: "Elkins Distilling Co. Corn Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "ELKINS DISTILLING CO."
    },
    {
        name: "Elkins Colorado Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "ELKINS DISTILLING CO."
    },
    {
        name: "Elkins Apple Spiced Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "ELKINS DISTILLING CO."
    },
    {
        name: "Elwood Distilling Co. Single Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "ELWOOD DISTILLING"
    },
    {
        name: "Rockit Rye 100% Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Rhapsody Blue Corn Bourbon",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Better Days Bourbon",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Wild Thing Colorado Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Better Days Bourbon",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "O'Feisty McBourbon",
        alcoholType: "Bourbon",
        flavor: "Herbal-Spice",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Red, White & Blue Bourbon",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Maple and Cinnamon Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Cinnamon Oat",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Blackberry",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Vanilla Orange",
        alcoholType: "Whiskey",
        flavor: "Vanilla",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Apple Brandy",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Pear Brandy",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Peach Brandy",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Yellow Corn Oat Bourbon",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Yellow Corn Oat Bourbon - Finished in a Peach Brandy Barrel",
        alcoholType: "Bourbon",
        flavor: "Fruity",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Red Corn Oat Bourbon",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "FEISTY SPIRITS DISTILLERY"
    },
    {
        name: "Golden Moon Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Port Cask Reserve Gin",
        alcoholType: "Gin",
        flavor: "None-Mild",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Golden Moon Colorado Single Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Golden Moon Ex Gratia",
        alcoholType: "Other",
        flavor: "Herbal-Spice",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Golden Moon Kummel",
        alcoholType: "Other",
        flavor: "None-Mild",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Golden Moon Amer dit Picon",
        alcoholType: "Other",
        flavor: "Herbal-Spice",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Golden Moon Creme de Violette",
        alcoholType: "Other",
        flavor: "Floral",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "REDUX Absinthe",
        alcoholType: "Absinthe",
        flavor: "Herbal-Spice",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Golden Moon Dry Curacao",
        alcoholType: "Other",
        flavor: "Citrus",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Apple Jack",
        alcoholType: "Other",
        flavor: "Fruity",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Gun Fighter American Bourbon - Double Cask",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Gun Fighter American Rye - Double Cask",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "GOLDEN MOON DISTILLERY"
    },
    {
        name: "Colorado Honey Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "HONEY HOUSE DISTILLERY"
    },
    {
        name: "Hex Vodka",
        alcoholType: "Vodka",
        flavor: "Caramel",
        distillery: "HONEY HOUSE DISTILLERY"
    },
    {
        name: "Cinnamon Honey Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "HONEY HOUSE DISTILLERY"
    },
    {
        name: "Cold Brew Coffee Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Vanilla",
        distillery: "HONEY HOUSE DISTILLERY"
    },
    {
        name: "Red Cliffs Spiced Rum",
        alcoholType: "Rum",
        flavor: "Herbal-Spice",
        distillery: "HONEY HOUSE DISTILLERY"
    },
    {
        name: "Woodcutter's Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",
        distillery: "IDLEWILD SPIRITS DISTILLERY"
    },
    {
        name: "Colorado Single Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "IDLEWILD SPIRITS DISTILLERY"
    },
    {
        name: "Barrel Aged Gin",
        alcoholType: "Gin",
        flavor: "Woody-Nutty",
        distillery: "IDLEWILD SPIRITS DISTILLERY"
    },
    {
        name: "Alpine Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "IDLEWILD SPIRITS DISTILLERY"
    },
    {
        name: "Foragin'",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "IDLEWILD SPIRITS DISTILLERY"
    },
    {
        name: "Vanilla Vodka",
        alcoholType: "Vodka",
        flavor: "Vanilla",
        distillery: "IDLEWILD SPIRITS DISTILLERY"
    },
    {
        name: "Rocky Mountain Gold Rum",
        alcoholType: "Rum",
        flavor: "Caramel",
        distillery: "IDLEWILD SPIRITS DISTILLERY"
    },
    {
        name: "Hibiscus Infused Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "IDLEWILD SPIRITS DISTILLERY"
    },
    {
        name: "Idlewild Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "IDLEWILD SPIRITS DISTILLERY"
    },
    {
        name: "Housemade Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Genievre Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Ponderosa Gin",
        alcoholType: "Gin",
        flavor: "Woody-Nutty",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Rye Aquavit",
        alcoholType: "Other",
        flavor: "Herbal-Spice",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Platinum Rum",
        alcoholType: "Rum",
        flavor: "Caramel",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Ginger",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Mint",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Cacao",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Caramel",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Coffee",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Caramel",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Amaro",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Orange",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Citrus",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Amaretto",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Caramel",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Pumpkin Spice",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Papa's Bitters Herbal",
        alcoholType: "Bitters-Schnapps",
        flavor: "Herbal-Spice",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Papa's Bitters Walnut",
        alcoholType: "Bitters-Schnapps",
        flavor: "Woody-Nutty",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Papa's Bitters Citrus",
        alcoholType: "Bitters-Schnapps",
        flavor: "Citrus",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Papa's Bitters Cherry Basil",
        alcoholType: "Bitters-Schnapps",
        flavor: "Fruity",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Papa's Bitters Old Fashioned",
        alcoholType: "Bitters-Schnapps",
        flavor: "Woody-Nutty",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Smoked Single Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Rye Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "Colorado Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",
        distillery: "IRONTON DISTILLERY & CRAFTHOUSE"
    },
    {
        name: "SNO Vodka",
        alcoholType: "Vodka",
        flavor: "Herbal-Spice",
        distillery: "J&L DISTILLERY"
    },
    {
        name: "FYR Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "J&L DISTILLERY"
    },
    {
        name: "SNO Gin",
        alcoholType: "Gin",
        flavor: "None-Mild",
        distillery: "J&L DISTILLERY"
    },
    {
        name: "Jinn Ginn",
        alcoholType: "Gin",
        flavor: "None-Mild",
        distillery: "K J WOOD DISTILLERS"
    },
    {
        name: "Ourye Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "K J WOOD DISTILLERS"
    },
    {
        name: "Dead Drift Colorado Aged Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "K J WOOD DISTILLERS"
    },
    {
        name: "Berthoud Blue Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "K J WOOD DISTILLERS"
    },
    {
        name: "A.D. Laws Four Grain Straight Bourbon",
        alcoholType: "Bourbon",
        flavor: "Citrus",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "A.D. Laws Four Grain Straight Bourbon Cask Strength",
        alcoholType: "Bourbon",
        flavor: "None-Mild",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "A.D. Laws Farmers Select Single Barrel Four Grain Straight Bourbon",
        alcoholType: "Bourbon",
        flavor: "None-Mild",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "A.D. Laws Four Grain Straight Bourbon Bottled in Bond",
        alcoholType: "Bourbon",
        flavor: "Fruity",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "A.D. Laws Small Batch Secale Straight Rye",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "A.D. Laws Single Barrel Secale Straight Rye",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "A.D. Laws Secale Straight Rye Bottled in Bond",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "A.D. Laws Hordeum Straight Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "A.D. Laws Triticum Straight Wheat Whiskey",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "A.D. Laws Straight Corn Whiskey Bottle Bond",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "A.D. Laws Two Grain Straight Bourbon Bottled in Bond",
        alcoholType: "Bourbon",
        flavor: "None-Mild",
        distillery: "LAWS WHISKEY HOUSE"
    },
    {
        name: "Lee Spirit Dry Gin",
        alcoholType: "Gin",
        flavor: "Floral",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Lee Spirit Lavender Gin",
        alcoholType: "Gin",
        flavor: "Floral",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Lee Spirit Strawberry Ginger Gin",
        alcoholType: "Gin",
        flavor: "Fruity",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Ginfuego",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Forbidden Fruit",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Citrus",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Creme de Violette",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Creme de Cacao",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Creme de Rose",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Floral",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Alpine Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Peppermint Schnapps",
        alcoholType: "Bitters-Schnapps",
        flavor: "Herbal-Spice",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Winston Lee Blended Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "LEE SPIRITS COMPANY"
    },
    {
        name: "Leopold's Silver Tree Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold's American Small Batch Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold's Summer Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold's Navy Strength American Gin",
        alcoholType: "Gin",
        flavor: "None-Mild",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Straight Bourbon",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",

        distillery: "LEOPOLD BROS."
    },
    {
        name: "American Small Batch Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Maryland-Style Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Michigan Cherry Whiskey",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Michigan Tart Cherry Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. New York Apple Whiskey",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Rocky Mountain Blackberry Whiskey",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Rocky Mountain Blackberry Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Rocky Mountain Peach Whiskey",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Rocky Mountain Peach Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Georgia Peach Whiskey",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. American Orange Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Citrus",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Maraschino Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. New England Cranberry Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Frenchpress-Style American Coffee Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "None-Mild",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Three Pins Alpine Herbal Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Aperitivo",
        alcoholType: "Other",
        flavor: "Herbal-Spice",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Fernet Leopold Highland Amaro",
        alcoholType: "Other",
        flavor: "Herbal-Spice",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. Absinthe Verte",
        alcoholType: "Absinthe",
        flavor: "Herbal-Spice",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Leopold Bros. New York Sour Apple Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Fruity",
        distillery: "LEOPOLD BROS."
    },
    {
        name: "Tiny's Oktoberfest Bierschnapps",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "LONTUCKY SPIRITS"
    },
    {
        name: "The Last Waltz - Colorado Straight Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",
        distillery: "LONTUCKY SPIRITS"
    },
    {
        name: "Silver Pot - Distilled Light Rum",
        alcoholType: "Rum",
        flavor: "Caramel",
        distillery: "LONTUCKY SPIRITS"
    },
    {
        name: "Shine - Locally Grown Corn Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "LONTUCKY SPIRITS"
    },
    {
        name: "Fire - Cinnamon & Ginger Infused Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "LONTUCKY SPIRITS"
    },
    {
        name: "Gin",
        alcoholType: "Gin",
        flavor: "Woody-Nutty",
        distillery: "LONTUCKY SPIRITS"
    },
    {
        name: "Lusca Spiced Rum",
        alcoholType: "Rum",
        flavor: "Herbal-Spice",
        distillery: "LONTUCKY SPIRITS"
    },
    {
        name: "Amaro Arancia: Bitter Orange Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Citrus",
        distillery: "LONTUCKY SPIRITS"
    },
    {
        name: "Bravo Zulu Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "None-Mild",
        distillery: "MAD RABBIT DISTILLERY"
    },
    {
        name: "Bravo Zulu Delicious V.I Rum",
        alcoholType: "Rum",
        flavor: "Caramel",
        distillery: "MAD RABBIT DISTILLERY"
    },
    {
        name: "Bravo Zulu Triple Filtered Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "MAD RABBIT DISTILLERY"
    },
    {
        name: "Bravo Zulu Rocky Mountain Gin",
        alcoholType: "Gin",
        flavor: "None-Mild",
        distillery: "MAD RABBIT DISTILLERY"
    },

    {
        name: "Marble Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "MARBLE DISTILLING CO."
    },
    {
        name: "Marble Gingercello",
        alcoholType: "Other",
        flavor: "Herbal-Spice",
        distillery: "MARBLE DISTILLING CO."
    },
    {
        name: "Marble Gingercello Reserve",
        alcoholType: "Other",
        flavor: "Herbal-Spice", distillery: "MARBLE DISTILLING CO."
    },
    {
        name: "Marble Moonlight Expresso",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Vanilla",
        distillery: "MARBLE DISTILLING CO."
    },
    {
        name: "Hoover's Revenge, Ragged Mountain Rye",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "MARBLE DISTILLING CO."
    },
    {
        name: "Fireside Bourbon",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "MILE HIGH SPIRITS"
    },
    {
        name: "Denver Dry Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "MILE HIGH SPIRITS"
    },
    {
        name: "Fireside Peach",
        alcoholType: "Bourbon",
        flavor: "Fruity",
        distillery: "MILE HIGH SPIRITS"
    },
    {
        name: "Cuidadi Tequila",
        alcoholType: "Tequila",
        flavor: "Herbal-Spice",
        distillery: "MILE HIGH SPIRITS"
    },
    {
        name: "Elevate Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild", distillery: "MILE HIGH SPIRITS"
    },
    {
        name: "Peg-Leg Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "MILE HIGH SPIRITS"
    },
    {
        name: "Mystic Mountain Outlaw Premim Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "MYSTIC MOUNTAIN DISTILLERY"
    },
    {
        name: "Mystic Mountain Outlaw Red Premium Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "MYSTIC MOUNTAIN DISTILLERY"
    },
    {
        name: "Aces High Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "MYSTIC MOUNTAIN DISTILLERY"
    },
    {
        name: "Aces High Cinnamon Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "MYSTIC MOUNTAIN DISTILLERY"
    },
    {
        name: "Rocky Mountain Sippin' Hooch 101",
        alcoholType: "Moonshine",
        flavor: "None-Mild",
        distillery: "MYSTIC MOUNTAIN DISTILLERY"
    },
    {
        name: "Orange Burst Mystic Mountain",
        alcoholType: "Moonshine",
        flavor: "Citrus",
        distillery: "MYSTIC MOUNTAIN DISTILLERY"
    },
    {
        name: "Citrus Mystic Moonshine",
        alcoholType: "Moonshine",
        flavor: "Citrus",
        distillery: "MYSTIC MOUNTAIN DISTILLERY"
    },
    {
        name: "Colorado Crystal Super Premium Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "MYSTIC MOUNTAIN DISTILLERY"
    },
    {
        name: "Colorado Blue Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "MYSTIC MOUNTAIN DISTILLERY"
    },
    {
        name: "Colorado Pig Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "MYSTIC MOUNTAIN DISTILLERY"
    },
    {
        name: "Hell Bear American Whiskey",
        alcoholType: "Whiskey",
        flavor: "Vanilla",
        distillery: "MYTHOLOGY DISTILLERY"
    },
    {
        name: "Chatter Wolf Vodka",
        alcoholType: "Vodka",
        flavor: "Caramel",
        distillery: "MYTHOLOGY DISTILLERY"
    },
    {
        name: "Needle Pig Gin",
        alcoholType: "Gin",
        flavor: "Floral",
        distillery: "MYTHOLOGY DISTILLERY"
    },
    {
        name: "Feather Jester Rum",
        alcoholType: "Rum",
        flavor: "Fruity",
        distillery: "MYTHOLOGY DISTILLERY"
    },
    {
        name: "Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "NOCO DISTILLERY"
    },
    {
        name: "Gin",
        alcoholType: "Gin",
        flavor: "None-Mild",
        distillery: "NOCO DISTILLERY"
    },
    {
        name: "Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "NOCO DISTILLERY"
    },
    {
        name: "Infused Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "NOCO DISTILLERY"
    },
    {
        name: "Botanical Vodka",
        alcoholType: "Vodka",
        flavor: "Herbal-Spice",
        distillery: "NOCO DISTILLERY"
    },
    {
        name: "Brandy",
        alcoholType: "Brandy",
        flavor: "None-Mild",
        distillery: "NOCO DISTILLERY"
    },
    {
        name: "Absinthe",
        alcoholType: "Absinthe",
        flavor: "None-Mild",
        distillery: "NOCO DISTILLERY"
    },
    {
        name: "Blue Agave Spirits",
        alcoholType: "Tequila",
        flavor: "None-Mild",
        distillery: "NOCO DISTILLERY"
    },
    {
        name: "Aquavit",
        alcoholType: "Other",
        flavor: "None-Mild",
        distillery: "NOCO DISTILLERY"
    },
    {
        name: "Orange Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "None-Mild",
        distillery: "NOCO DISTILLERY"
    },
    {
        name: "Old Elk",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "OLD ELK DISTILLERY"
    },
    {
        name: "Rabbit Bourbon Cream",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "OLD ELK DISTILLERY"
    },
    {
        name: "Old Standard Organic Bourbon",
        alcoholType: "Bourbon",
        flavor: "Caramel", distillery: "OLD TOWN DISTILLING CO."
    },
    {
        name: "Mountain Avenue Organic Gin",
        alcoholType: "Gin",
        flavor: "Floral",
        distillery: "OLD TOWN DISTILLING CO."
    },
    {
        name: "Native Organic Vodka",
        alcoholType: "Vodka",
        flavor: "Caramel",
        distillery: "OLD TOWN DISTILLING CO."
    },
    {
        name: "Old Standard Organic Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "OLD TOWN DISTILLING CO."
    },
    {
        name: "Old Standard 'Moonshine' Small Batch Organic Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "OLD TOWN DISTILLING CO."
    },
    {
        name: "Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Vanilla",
        distillery: "ON POINT DISTILLERY"
    },
    {
        name: "Lavendar Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "ON POINT DISTILLERY"
    },
    {
        name: "Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "ON POINT DISTILLERY"
    },
    {
        name: "Rasberry Vodka",
        alcoholType: "Vodka",
        flavor: "Fruity",
        distillery: "ON POINT DISTILLERY"
    },
    {
        name: "Spiced Rum",
        alcoholType: "Rum",
        flavor: "Herbal-Spice",
        distillery: "ON POINT DISTILLERY"
    },
    {
        name: "Blackberry Vodka",
        alcoholType: "Vodka",
        flavor: "Fruity",
        distillery: "ON POINT DISTILLERY"
    },
    {
        name: "Coffee",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Vanilla",
        distillery: "ON POINT DISTILLERY"
    },
    {
        name: "Amaretto",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Woody-Nutty",
        distillery: "ON POINT DISTILLERY"
    },
    {
        name: "Orange",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Citrus",
        distillery: "ON POINT DISTILLERY"
    },
    {
        name: "Cinnamon",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "ON POINT DISTILLERY"
    },
    {
        name: "Jackelope & Jenny Gin",
        alcoholType: "Gin",
        flavor: "Woody-Nutty",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Jackelope & Jenny Aged Gin",
        alcoholType: "Gin",
        flavor: "None-Mild",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Jackelope Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Jackelope Aged Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Tub Gin",
        alcoholType: "Gin",
        flavor: "None-Mild",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Colorado Staright Bourbon",
        alcoholType: "Bourbon",
        flavor: "None-Mild",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "American Single Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Smoked Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Coat Artisan Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Pear Brandy",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Peach Brandy",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Apricot Brandy",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Peach Brandy Eau De Vie",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Plum Brandy Eau De Vie",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Pear Brandy Eau De Vie",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Cherry Brandy Eau De Vie",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Apricot Brandy Eau De Vie",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "D'Agave Silver",
        alcoholType: "Tequila",
        flavor: "None-Mild",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "D'Agave Gold",
        alcoholType: "Tequila",
        flavor: "Woody-Nutty",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "D'Agave Extra",
        alcoholType: "Tequila",
        flavor: "None-Mild",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Grappa of Gewurztraminer",
        alcoholType: "Other",
        flavor: "Herbal-Spice",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Grappa of Viognier",
        alcoholType: "Other",
        flavor: "Fruity",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Grappa Muscat",
        alcoholType: "Other",
        flavor: "None-Mild",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Bier Schnapps - Lefthand IPA",
        alcoholType: "Bitters-Schnapps",
        flavor: "None-Mild",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Bier Schnapps - Steeltoe Stout",
        alcoholType: "Bitters-Schnapps",
        flavor: "Vanilla",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "Amaro Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "PEACH STREET DISTILLERS"
    },
    {
        name: "RSD Organic Bourbon",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",
        distillery: "RISING SUN DISTILLERY"
    },
    {
        name: "RSD Organic Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "RISING SUN DISTILLERY"
    },
    {
        name: "RSD Organic Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "RISING SUN DISTILLERY"
    },
    {
        name: "RSD Silk Road Organic Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "RISING SUN DISTILLERY"
    },
    {
        name: "RSD Organic Oaked Silk Road Gin",
        alcoholType: "Gin",
        flavor: "Vanilla",
        distillery: "RISING SUN DISTILLERY"
    },
    {
        name: "RSD Lavendar Hibiscus Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice", distillery: "RISING SUN DISTILLERY"
    },
    {
        name: "RSD Colorado Chile Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice", distillery: "RISING SUN DISTILLERY"
    },
    {
        name: "RSD Colorado Chile Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice", distillery: "RISING SUN DISTILLERY"
    },
    {
        name: "RSD Colorado Peach Brandy",
        alcoholType: "Brandy",
        flavor: "Fruity", distillery: "RISING SUN DISTILLERY"
    },
    {
        name: "RSD Organic Coffee Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice", distillery: "RISING SUN DISTILLERY"
    },
    {
        name: "Rocker Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "ROCKER SPIRITS"
    },
    {
        name: "Rocker Rum",
        alcoholType: "Rum",
        flavor: "Caramel", distillery: "ROCKER SPIRITS"
    },
    {
        name: "Rocker Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild", distillery: "ROCKER SPIRITS"
    },
    {
        name: "Sand Creek Single Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty", distillery: "SAND CREEK DISTILLERY"
    },
    {
        name: "Silver Coyote Pure Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel", distillery: "SANTA FE SPIRITS DISTILLERY"
    },
    {
        name: "Expedition Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild", distillery: "SANTA FE SPIRITS DISTILLERY"
    },
    {
        name: "Santa Fe Spirits Apple Brandy",
        alcoholType: "Brandy",
        flavor: "Fruity", distillery: "SANTA FE SPIRITS DISTILLERY"
    },
    {
        name: "Wheeler's Gin",
        alcoholType: "Gin",
        flavor: "Floral", distillery: "SANTA FE SPIRITS DISTILLERY"
    },
    {
        name: "Colkegan Single Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty", distillery: "SANTA FE SPIRITS DISTILLERY"
    },
    {
        name: "Atapino Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Woody-Nutty", distillery: "SANTA FE SPIRITS DISTILLERY"
    },
    {
        name: "Slow Burn",
        alcoholType: "Gin",
        flavor: "Woody-Nutty", distillery: "SANTA FE SPIRITS DISTILLERY"
    },
    {
        name: "Colkegan Apple Brandy Cask Finished",
        alcoholType: "Brandy",
        flavor: "Fruity", distillery: "SANTA FE SPIRITS DISTILLERY"
    },
    {
        name: "Colkegan Cask Strength Single Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty", distillery: "SANTA FE SPIRITS DISTILLERY"
    },
    {
        name: "Spirit Hound Straight Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty", distillery: "SPIRIT HOUND DISTILLERS"
    },
    {
        name: "Spirit Hound Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "SPIRIT HOUND DISTILLERS"
    },
    {
        name: "Spirit Hound Montain Bum Rum",
        alcoholType: "Rum",
        flavor: "Caramel",
        distillery: "SPIRIT HOUND DISTILLERS"
    },
    {
        name: "Spirit Hound Colorado Sambuca",
        alcoholType: "Other",
        flavor: "Herbal-Spice",
        distillery: "SPIRIT HOUND DISTILLERS"
    },
    {
        name: "Spirit Hound White Dog Moonshine",
        alcoholType: "Moonshine",
        flavor: "None-Mild",
        distillery: "SPIRIT HOUND DISTILLERS"
    },
    {
        name: "The Clever Jack - Blanco Agave",
        alcoholType: "Tequila",
        flavor: "None-Mild",
        distillery: "STATE 38 DISTILLING"
    },
    {
        name: "The Young Ace - Agave Reposado",
        alcoholType: "Tequila",
        flavor: "Woody-Nutty",
        distillery: "STATE 38 DISTILLING"
    },
    {
        name: "The Wise King - Anejo Agave",
        alcoholType: "Tequila",
        flavor: "Woody-Nutty",
        distillery: "STATE 38 DISTILLING"
    },
    {
        name: "The Pious Queen",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "STATE 38 DISTILLING"
    },
    {
        name: "The Astute Jester",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "STATE 38 DISTILLING"
    },
    {
        name: "Colorado Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "STATE 38 DISTILLING"
    },
    {
        name: "Scottish Peat Smoked Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "STATE 38 DISTILLING"
    },
    {
        name: "Darling Apple Brandy",
        alcoholType: "Brandy",
        flavor: "Fruity",
        distillery: "STATE 38 DISTILLING"
    },
    {
        name: "Warrior Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "STEAMBOAT WHISKEY COMPANY"
    },
    {
        name: "Colorado Silver",
        alcoholType: "Other",
        flavor: "None-Mild",
        distillery: "STONEYARD DISTILLERY"
    },
    {
        name: "Barrel Reserve",
        alcoholType: "Other",
        flavor: "None-Mild",
        distillery: "STONEYARD DISTILLERY"
    },
    {
        name: "Cin.Fire",
        alcoholType: "Other",
        flavor: "Herbal-Spice",
        distillery: "STONEYARD DISTILLERY"
    },
    {
        name: "Lucky-Oh",
        alcoholType: "Other",
        flavor: "None-Mild",
        distillery: "STONEYARD DISTILLERY"
    },
    {
        name: "176 Proof",
        alcoholType: "Other",
        flavor: "None-Mild",
        distillery: "STONEYARD DISTILLERY"
    },
    {
        name: "Stranahan's Original",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "STRANAHAN'S COLORADO WHISKEY"
    },
    {
        name: "Stranahan's Diamond Peak",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "STRANAHAN'S COLORADO WHISKEY"
    },
    {
        name: "Stranahan's Sherry Cask",
        alcoholType: "Other",
        flavor: "Caramel",
        distillery: "STRANAHAN'S COLORADO WHISKEY"
    },
    {
        name: "Stranahan's SnowFlake",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "STRANAHAN'S COLORADO WHISKEY"
    },
    {
        name: "Stranahan's Single Barrel",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "STRANAHAN'S COLORADO WHISKEY"
    },
    {
        name: "Straight Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "SYNTAX DISTILLERY"
    },
    {
        name: "Crystal Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "SYNTAX DISTILLERY"
    },
    {
        name: "Rose Gin",
        alcoholType: "Gin",
        flavor: "Floral",
        distillery: "SYNTAX DISTILLERY"
    },
    {
        name: "Heavy Rum",
        alcoholType: "Rum",
        flavor: "Vanilla",
        distillery: "SYNTAX DISTILLERY"
    },
    {
        name: "Wellhead Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "SYNTAX DISTILLERY"
    },
    {
        name: "CarrowDair Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "TALNUA DISTILLERY"
    },
    {
        name: "Inishan Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "TALNUA DISTILLERY"
    },
    {
        name: "Finglas Dubdair Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "TALNUA DISTILLERY"
    },
    {
        name: "Finglas Fin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "TALNUA DISTILLERY"
    },
    {
        name: "Summer Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "THE BLOCK DISTILLING CO."
    },
    {
        name: "Autumn Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "THE BLOCK DISTILLING CO."
    },
    {
        name: "Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "THE BLOCK DISTILLING CO."
    },
    {
        name: "StopGap Jones Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "THE FAMILY JONES"
    },
    {
        name: "Juniper Jones Gin",
        alcoholType: "Gin",
        flavor: "None-Mild",
        distillery: "THE FAMILY JONES"
    },
    {
        name: "StopGap Jones Bourbon",
        alcoholType: "Bourbon",
        flavor: "None-Mild",
        distillery: "THE FAMILY JONES"
    },
    {
        name: "Annika Jones Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "THE FAMILY JONES"
    },
    {
        name: "Mo Jones Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "THE FAMILY JONES"
    },
    {
        name: "The Heart Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice", distillery: "THE HEART DISTILLERY"
    },
    {
        name: "Colorado Straight Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "THE HEART DISTILLERY"
    },
    {
        name: "The Heart Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild", distillery: "THE HEART DISTILLERY"
    },
    {
        name: "Trinity Absinthe",
        alcoholType: "Absinthe",
        flavor: "Herbal-Spice",
        distillery: "THE HEART DISTILLERY"
    },
    {
        name: "Colorado Straight Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "THE HEART DISTILLERY"
    },
    {
        name: "Tower 56 Bourbon",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",
        distillery: "TOWER 56 DISTILLING"
    },
    {
        name: "Tower 56 Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "TOWER 56 DISTILLING"
    },
    {
        name: "Tower 56 Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "TOWER 56 DISTILLING"
    },
    {
        name: "Tower 56 Almondretto",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Woody-Nutty",
        distillery: "TOWER 56 DISTILLING"
    },
    {
        name: "Tower 56 Coffee Spirit",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Caramel",
        distillery: "TOWER 56 DISTILLING"
    },
    {
        name: "Tower 56 Cask 56",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "TOWER 56 DISTILLING"
    },
    {
        name: "Boulder American Single Malt Whiskey - American Oak",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Boulder American Single Malt Whiskey - Peated",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Boulder American Single Malt Whiskey - Port Cask",
        alcoholType: "Whiskey",
        flavor: "Fruity",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Boulder Bourbon",
        alcoholType: "Bourbon",
        flavor: "Fruity",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Boulder Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Boulder Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Boulder Pink Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Boulder Ginskey, Barrel Aged Gin",
        alcoholType: "Gin",
        flavor: "Caramel",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Pumpkin King Cordial",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Herbal-Spice",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Arrosta",
        alcoholType: "Other",
        flavor: "Vanilla",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Boulder Navy Strength Gin",
        alcoholType: "Gin",
        flavor: "Floral",
        distillery: "VAPOR DISTILLERY"
    },
    {
        name: "Blue Corn Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "WHISTLING HARE DISTILLERY"
    },
    {
        name: "Founder's Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "WHISTLING HARE DISTILLERY"
    },
    {
        name: "Wine Barrel Aged Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "WHISTLING HARE DISTILLERY"
    },
    {
        name: "Amber Rum",
        alcoholType: "Rum",
        flavor: "Caramel",
        distillery: "WHISTLING HARE DISTILLERY"
    },
    {
        name: "White Rum",
        alcoholType: "Rum",
        flavor: "Caramel",
        distillery: "WHISTLING HARE DISTILLERY"
    },
    {
        name: "Sawatch American Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "WOOD'S HIGH MOUNTAIN DISTILLERY"
    },
    {
        name: "Tenderfool Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "WOOD'S HIGH MOUNTAIN DISTILLERY"
    },
    {
        name: "Alpine Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "WOOD'S HIGH MOUNTAIN DISTILLERY"
    },
    {
        name: "Treeline Gin",
        alcoholType: "Gin",
        flavor: "Woody-Nutty",
        distillery: "WOOD'S HIGH MOUNTAIN DISTILLERY"
    },
    {
        name: "Treeline Barrel Rested Gin",
        alcoholType: "Gin",
        flavor: "Vanilla",
        distillery: "WOOD'S HIGH MOUNTAIN DISTILLERY"
    },
    {
        name: "Mountain Hopped Gin",
        alcoholType: "Gin",
        flavor: "Floral",
        distillery: "WOOD'S HIGH MOUNTAIN DISTILLERY"
    },
    {
        name: "Fleur de Sureau - Elderflower Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Floral",
        distillery: "WOOD'S HIGH MOUNTAIN DISTILLERY"
    },
    {
        name: "Reserve Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "WOODY CREEK DISTILLERS"
    },
    {
        name: "100% Potato Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "WOODY CREEK DISTILLERS"
    },
    {
        name: "Straight Rye",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "WOODY CREEK DISTILLERS"
    },
    {
        name: "Colorado Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "WOODY CREEK DISTILLERS"
    }
];

db.Alcohol.collection.insertMany(alcoholSeeds2)
    .then(data => {
        data.ops.forEach(item => {
            db.Distillery.findOneAndUpdate({ distillery: item.distillery }, { $push: { alcohols: item._id } })
                .then(data => console.log("Item added to Distillery list"))
                .catch(err => console.log(err))
        });
        // process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1)
    });
