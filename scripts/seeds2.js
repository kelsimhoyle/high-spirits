const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect("mongodb://localhost/highspirits", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => {
            console.log("connected")
        },
        err => { console.log(err) }
    );


const alcoholSeed = [
    {
        name: "10TH Mountain Bourbon",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",
        distillery: "10TH MOUNTAIN WHISKEY & SPIRIT COMPANY"
    },
    {
        name: "10TH Mountain Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "10TH MOUNTAIN WHISKEY & SPIRIT COMPANY"
    },
    {
        name: "10TH Mountain Spirits Alpenglow Cordial",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Fruity",
        distillery: "10TH MOUNTAIN WHISKEY & SPIRIT COMPANY"
    },
    {
        name: "10TH Mountain Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "10TH MOUNTAIN WHISKEY & SPIRIT COMPANY"
    },
    {
        name: "Western Sippin' Shine - Apple Pie",
        alcoholType: "Moonshine",
        flavor: "Fruity",
        distillery: "3 HUNDRED DAYS DISTILLING"
    },
    {
        name: "Western Sippin' Shine - Colorado Honey",
        alcoholType: "Moonshine",
        flavor: "Caramel",
        distillery: "3 HUNDRED DAYS DISTILLING"
    },
    {
        name: "Western Sippin' Shine - Firebomb",
        alcoholType: "Moonshine",
        flavor: "Herbal-Spice",
        distillery: "3 HUNDRED DAYS DISTILLING"
    },
    {
        name: "Western Sippin' Shine - Margarita Moon",
        alcoholType: "Moonshine",
        flavor: "Citrus",
        distillery: "3 HUNDRED DAYS DISTILLING"
    },
    {
        name: "Western Sippin' Shine - Sugar Moon",
        alcoholType: "Moonshine",
        flavor: "None-Mild",
        distillery: "3 HUNDRED DAYS DISTILLING"
    },
    {
        name: "Western Sippin' Shine - Rocky Mountain Sweet Tea",
        alcoholType: "Moonshine",
        flavor: "None-Mild",
        distillery: "3 HUNDRED DAYS DISTILLING"
    },
    {
        name: "Western Sippin' Shine - Summertime Strawberry Lemononde",
        alcoholType: "Moonshine",
        flavor: "Fruity",
        distillery: "3 HUNDRED DAYS DISTILLING"
    },
    {
        name: "Western Sippin' Shine - Peach Cobbler",
        alcoholType: "Moonshine",
        flavor: "Fruity",
        distillery: "3 HUNDRED DAYS DISTILLING"
    },
    {
        name: "American Small Batch Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "52EIGHTY DISTILLING"
    },
    {
        name: "Hearthstone Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "52EIGHTY DISTILLING"
    },
    {
        name: "Cackler's Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "52EIGHTY DISTILLING"
    },
    {
        name: "Summer Peach Vodka",
        alcoholType: "Vodka",
        flavor: "Fruity",
        distillery: "52EIGHTY DISTILLING"
    },
    {
        name: "Winter Wheat Vodka",
        alcoholType: "Vodka",
        flavor: "Vanilla",
        distillery: "52EIGHTY DISTILLING"
    },
    {
        name: "Archangel Vodka",
        alcoholType: "Vodka",
        flavor: "Citrus",
        distillery: "ARCHETYPE DISTILLERY"
    },
    {
        name: "Archrival Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "ARCHETYPE DISTILLERY"
    },
    {
        name: "Pikes Peak Hill Shine",
        alcoholType: "Moonshine",
        flavor: "Herbal-Spice",
        distillery: "AXE AND THE OAK WHISKEY HOUSE"
    },
    {
        name: "Colorado Mountain Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Vanilla",
        distillery: "AXE AND THE OAK WHISKEY HOUSE"
    },
    {
        name: "Colorado Mountain Incline Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "AXE AND THE OAK WHISKEY HOUSE"
    },
    {
        name: "Straight Bourbon",
        alcoholType: "Bourbon",
        flavor: "Herbal-Spice",
        distillery: "BEAR CREEK DISTILLERY"
    },
    {
        name: "Wheated Bourbon",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "BEAR CREEK DISTILLERY"
    },
    {
        name: "Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "BEAR CREEK DISTILLERY"
    },
    {
        name: "Wheat Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "BEAR CREEK DISTILLERY"
    },
    {
        name: "White Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "BEAR CREEK DISTILLERY"
    },
    {
        name: "Rye Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "BEAR CREEK DISTILLERY"
    },
    {
        name: "Wheat Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "BEAR CREEK DISTILLERY"
    },
    {
        name: "Silver Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "BEAR CREEK DISTILLERY"
    },
    {
        name: "Spiced Rum",
        alcoholType: "Rum",
        flavor: "Vanilla",
        distillery: "BEAR CREEK DISTILLERY"
    },
    {
        name: "Cask Strength Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "BEAR CREEK DISTILLERY"
    },
    {
        name: "Vodka",
        alcoholType: "Vodka",
        flavor: "Floral",
        distillery: "BIG FAT PASTOR SPIRITS"
    },
    {
        name: "Genesis Gin",
        alcoholType: "Gin",
        flavor: "Floral",
        distillery: "BIG FAT PASTOR SPIRITS"
    },
    {
        name: "Barrel Rested Genesis Gin",
        alcoholType: "Gin",
        flavor: "Vanilla",
        distillery: "BIG FAT PASTOR SPIRITS"
    },
    {
        name: "Soul Searchin' Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "BIG FAT PASTOR SPIRITS"
    },
    {
        name: "Holy Smokes Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "BIG FAT PASTOR SPIRITS"
    },
    {
        name: "Black Bear Irish Style Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "BLACK BEAR DISTILLERY"
    },
    {
        name: "Black Bear Gold Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "BLACK BEAR DISTILLERY"
    },
    {
        name: "Black Bear White Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "BLACK BEAR DISTILLERY"
    },
    {
        name: "MountainShine",
        alcoholType: "Moonshine",
        flavor: "None-Mild",
        distillery: "BLACK BEAR DISTILLERY"
    },
    {
        name: "MountainShine Reserve",
        alcoholType: "Moonshine",
        flavor: "Woody-Nutty",
        distillery: "BLACK BEAR DISTILLERY"
    },
    {
        name: "Black Bear Gold Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "BLACK BEAR DISTILLERY"
    },
    {
        name: "Black Bear Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "BLACK BEAR DISTILLERY"
    },
    {
        name: "Colorado Coffee Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "BOUCK BROTHERS DISTILLING"
    },
    {
        name: "Pink Bear Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "BOUCK BROTHERS DISTILLING"
    },
    {
        name: "Brown Bear Gin",
        alcoholType: "Gin",
        flavor: "Vanilla",
        distillery: "BOUCK BROTHERS DISTILLING"
    },
    {
        name: "Breckenridge Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Vanilla",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Reserve Blend",
        alcoholType: "Bourbon",
        flavor: "None-Mild",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Whiskey Post Cask Finish",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Whiskey PX Cask Finish",
        alcoholType: "Whiskey",
        flavor: "Vanilla",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Distillers High Proof",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Dark Arts: Whiskey Distilled from Malt Mash",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Bourbon Whiskey Single Barrel",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Spiced Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Gin",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Spiced Rum",
        alcoholType: "Rum",
        flavor: "Herbal-Spice",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Bitter",
        alcoholType: "Other",
        flavor: "Herbal-Spice",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Vodka",
        alcoholType: "Vodka",
        flavor: "Citrus",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Pear Flavored Vodka",
        alcoholType: "Vodka",
        flavor: "Fruity",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Chili Chile Vodka",
        alcoholType: "Vodka",
        flavor: "Herbal-Spice",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Breckenridge Espresso Flavored Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "BRECKENRIDGE DISTILLERY"
    },
    {
        name: "Branch & Barrel White Oak",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "BRANCH & BARREL WHISKEY"
    },
    {
        name: "Branch & Barrel Honey Barrel Finished",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "BRANCH & BARREL WHISKEY"
    },
    {
        name: "Branch & Barrel Plum",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "BRANCH & BARREL WHISKEY"
    },
    {
        name: "Branch & Barrel Holiday Twist",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "BRANCH & BARREL WHISKEY"
    },
    {
        name: "Colorado High Hemp Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "COLORADO GOLD DISTILLERY"
    },
    {
        name: "Vertueux Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Vicieux Black Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Silver Rum",
        alcoholType: "Rum",
        flavor: "Vanilla",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Gold Rum",
        alcoholType: "Rum",
        flavor: "Vanilla",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Spiced Rum",
        alcoholType: "Rum",
        flavor: "Herbal-Spice",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Bacon Vodka",
        alcoholType: "Vodka",
        flavor: "Woody-Nutty",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Cucumber Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Honey & Dill Vodka",
        alcoholType: "Vodka",
        flavor: "Caramel",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Horseradish Vodka",
        alcoholType: "Vodka",
        flavor: "Herbal-Spice",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Jalapeno Vodka",
        alcoholType: "Vodka",
        flavor: "Herbal-Spice",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Lavendar Vodka",
        alcoholType: "Vodka",
        flavor: "Floral",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Amaretto Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Woody-Nutty",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Coffee Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Vanilla",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Gin with Hibiscus",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "Coppermuse Strawberry Vodka",
        alcoholType: "Vodka",
        flavor: "Fruity",
        distillery: "COPPERMUSE DISTILLERY"
    },
    {
        name: "DeerHammer Straight Bourbon",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",
        distillery: "DEERHAMMER DISTILLING COMPANY"
    },
    {
        name: "DeerHammer Rough & Tumble",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "DEERHAMMER DISTILLING COMPANY"
    },
    {
        name: "DeerHammer American Single Malt Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "DEERHAMMER DISTILLING COMPANY"
    },
    {
        name: "DeerHammer Dutch Style Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "DEERHAMMER DISTILLING COMPANY"
    },
    {
        name: "Denver Distillery Sweet Potato Vodka",
        alcoholType: "Vodka",
        flavor: "Caramel",
        distillery: "DENVER DISTILLERY"
    },
    {
        name: "Denver Distillery Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "DENVER DISTILLERY"
    },
    {
        name: "Denver Distillery Dark Rum",
        alcoholType: "Rum",
        flavor: "Caramel",
        distillery: "DENVER DISTILLERY"
    },
    {
        name: "Denver Distillery Silver Rum",
        alcoholType: "Rum",
        flavor: "Caramel",
        distillery: "DENVER DISTILLERY"
    },
    {
        name: "Denver Distillery Navy Strength Spiced Rum",
        alcoholType: "Rum",
        flavor: "Caramel",
        distillery: "DENVER DISTILLERY"
    },
    {
        name: "Denver Distillery Lemon Lime Sweet-Feed Shine",
        alcoholType: "Moonshine",
        flavor: "Citrus",
        distillery: "DENVER DISTILLERY"
    },
    {
        name: "Denver Distillery Punkin' Head Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Fruity",
        distillery: "DENVER DISTILLERY"
    },
    {
        name: "Denver Distillery Apple Pie Shine",
        alcoholType: "Moonshine",
        flavor: "Fruity",
        distillery: "DENVER DISTILLERY"
    },
    {
        name: "Denver Distillery Coffee Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Caramel",
        distillery: "DENVER DISTILLERY"
    },
    {
        name: "Denver Distillery Strawberry Kiwi Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Fruity",
        distillery: "DENVER DISTILLERY"
    },
    {
        name: "DV8 Vodka",
        alcoholType: "Vodka",
        flavor: "Fruity",
        distillery: "DEVIANT SPIRIT DV8"
    },
    {
        name: "DV8 Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "DEVIANT SPIRIT DV8"
    },
    {
        name: "DV8 Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "DEVIANT SPIRIT DV8,"
    },
    {
        name: "Deviation Distilling Citrus Rose",
        alcoholType: "Gin",
        flavor: "Citrus",
        distillery: "DEVIATION DISTILLING"
    },
    {
        name: "Deviation Distilling Mountain Herb",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "DEVIATION DISTILLING"
    },
    {
        name: "Deviation Distilling Spice Trade",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "DEVIATION DISTILLING"
    },
    {
        name: "Oak Barrel Reserve Aquavit",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "DEVIL'S HEAD DISTILLERY"
    },
    {
        name: "Aquavit",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "DEVIL'S HEAD DISTILLERY"
    },
    {
        name: "Gin",
        alcoholType: "Gin",
        flavor: "Floral",
        distillery: "DEVIL'S HEAD DISTILLERY"
    },
    {
        name: "Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "DEVIL'S HEAD DISTILLERY"
    },
    {
        name: "Barrel Proof Colorado Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "DISTILLERY 291"
    },
    {
        name: "Single Barrel Colorado Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Herbal-Spice",
        distillery: "DISTILLERY 291"
    },
    {
        name: "Single Barrel Colorado Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "DISTILLERY 291"
    },
    {
        name: "Barrel Proof Colorado Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Woody-Nutty",
        distillery: "DISTILLERY 291"
    },
    {
        name: "Small Batch American Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "DISTILLERY 291"
    },
    {
        name: "Fresh Colorado Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "DISTILLERY 291"
    },
    {
        name: "White Dog Colorado Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "None-Mild",
        distillery: "DISTILLERY 291"
    },
    {
        name: "Bad Guy Colorado Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Caramel",
        distillery: "DISTILLERY 291"
    },
    {
        name: "High Rye Colorado Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "Vanilla",
        distillery: "DISTILLERY 291"
    },
    {
        name: "The DECC Citrus Clove Liqueur",
        alcoholType: "Liqueurs-Cordials",
        flavor: "Fruity",
        distillery: "DISTILLERY 291"
    },
    {
        name: "Double Diamond Whiskey",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "Limited Edition - Double Diamond 4 Year",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "Limited Edition - Rye",
        alcoholType: "Whiskey",
        flavor: "Woody-Nutty",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "Vodka from Unrefined Cane",
        alcoholType: "Vodka",
        flavor: "Caramel",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "Vodka from Malt and Rye",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "Pepper Vodka",
        alcoholType: "Vodka",
        flavor: "Herbal-Spice",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "White Cane Rum",
        alcoholType: "Rum",
        flavor: "Vanilla",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "Vanilla Rum",
        alcoholType: "Rum",
        flavor: "Vanilla",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "Wine Barrel Aged Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "Agave Spirit",
        alcoholType: "Tequila",
        flavor: "None-Mild",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "Downslope Ould Tom Gin",
        alcoholType: "Gin",
        flavor: "Herbal-Spice",
        distillery: "DOWNSLOPE DISTILLING"
    },
    {
        name: "Dry Land Heirloom Wheat Whiskey",
        alcoholType: "Whiskey",
        flavor: "Vanilla",
        distillery: "DRY LAND DISTILLERS"
    },
    {
        name: "Dry Land Colorado Antero Wheat Whiskey",
        alcoholType: "Whiskey",
        flavor: "Caramel",
        distillery: "DRY LAND DISTILLERS"
    },
    {
        name: "Dry Land Cactus",
        alcoholType: "Tequila",
        flavor: "Woody-Nutty",
        distillery: "DRY LAND DISTILLERS"
    },
    {
        name: "Dry Land Pure Cane Rum",
        alcoholType: "Rum",
        flavor: "None-Mild",
        distillery: "DRY LAND DISTILLERS"
    },
    {
        name: "Dry Land Gin",
        alcoholType: "Gin",
        flavor: "None-Mild",
        distillery: "DRY LAND DISTILLERS"
    },
    {
        name: "Soiled Doves Vodka",
        alcoholType: "Vodka",
        flavor: "None-Mild",
        distillery: "DURANGO CRAFT SPIRITS"
    },
    {
        name: "Mayday Moonshine",
        alcoholType: "Moonshine",
        flavor: "None-Mild",
        distillery: "DURANGO CRAFT SPIRITS"
    },
    {
        name: "Cinder Dick Bourbon Whiskey",
        alcoholType: "Bourbon",
        flavor: "None-Mild",
        distillery: "DURANGO CRAFT SPIRITS"
    },
    {
        name: "Straight Rye Whiskey",
        alcoholType: "Whiskey",
        flavor: "Vanilla",
        distillery: "ELEVATION 5003 DISTILLERY"
    }
];

db.Alcohol
    .remove({})
    .then(() => db.Alcohol.collection.insertMany(alcoholSeed))
    .then(data => {
        data.ops.forEach(item => {
            db.Distillery.findOneAndUpdate({ distillery: item.distillery }, { $push: { alcohols: item._id} })
            .then(data => console.log("Item added to Distillery list"))
            .catch(err => console.log(err))
        });
        // process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1)
    });
