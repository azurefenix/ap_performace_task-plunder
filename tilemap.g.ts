// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "threePMap":
            case "threePMap1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000000000000000000000000010000000100000000000000000000000100000001000000000000000000000000000001000000000000000000000000000000010000000000000000000000000100000001000000000000000000000001000000010000000000000000000000000101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen);
            case "fourPMap":
            case "fourPMap1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000001000000000000000000000001000000010000000000000000000000010000000100000000000000000000000101010101010101000000000000000000000000010000000000000000000000000000000100000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen);
            case "onePMap":
            case "onePMap1":return tiles.createTilemap(hex`100010000a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a04060a0a0a0a0a0a0a0a0a0a0a0a0a0a07050a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a040202060a0a0a0a0a0a0a0a0a0a0a04010101030a0a0a0a0a0a0a0a0a0a0a09010101030a0a0a0a0a0a0a0a0a0a0a09010101030a0a0a0a0a0a0a0a0a0a0a07010101030a0a0a0a0a0a0a0a0a0a0a0a070808050a0a0a0402060a0a0a0a0a0a0a0a0a0a0a0a0a0901030a0a0a0a0a0a0a0a0a0a0a0a0a0901030a0a0a0a0a0a0a0a0a0a0a0a0a0901030a0a0a0a0a0a0a0a0a0a0a0a0a0708050a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`, img`
. . . . . . . . . . . . . . . . 
. 2 2 . . . . . . . . . . . . . 
. 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 . 
. . . . . . . . . . 2 2 2 2 2 . 
. . . . . . . . . . 2 2 2 2 2 . 
. . . . . . . . . . 2 2 2 2 2 . 
. . . . . . . . . . 2 2 2 2 2 . 
. . . . . . . . . . . 2 2 2 2 . 
. . 2 2 2 . . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile7,myTiles.tile8,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile9,myTiles.tile10,myTiles.tile3], TileScale.Sixteen);
            case "twoPMap":
            case "level1":return tiles.createTilemap(hex`1400140003030303030303030303030303030303030303030303030303030303030303030303030205030303030302070503030303030303030303040603030303030a010803030303030303030303030303030303030a0108030303030303030303030303030303030304090603030303030303030303030303030303030303030303030303030303020503030303030303030303030303030303030304060303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030205030303030303030303030303030303030303040603030303030303030303030303030303030303030303030302070705030303030207050303030303030303030a010101050303030a01080303030303030303030a010101080303030a010803030303030303020701010101080303030a01080303030303030304090909090906030303040906030303030303030303030303030303030303030303030303030303030303030303030303`, img`
....................
...............22...
..222..........22...
..222...............
..222...............
..222...............
.............22.....
.............22.....
....................
....................
....................
.......22...........
.......22...........
.............2222...
.222.........22222..
.222.........22222..
.222.......2222222..
.222.......2222222..
.222................
....................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile6,myTiles.tile5,myTiles.tile4,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "land":
            case "tile1":return tile1;
            case "landSand":
            case "tile7":return tile7;
            case "landSand2":
            case "tile8":return tile8;
            case "coast":
            case "tile2":return tile2;
            case "coast2":
            case "tile4":return tile4;
            case "coast3":
            case "tile5":return tile5;
            case "coast4":
            case "tile6":return tile6;
            case "landSand3":
            case "tile9":return tile9;
            case "landSand4":
            case "tile10":return tile10;
            case "sea":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
