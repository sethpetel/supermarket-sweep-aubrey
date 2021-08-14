// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Store":
            case "level":return tiles.createTilemap(hex`100008000b010909090909090909090909020b050a080708070807080708070807080a06090c0b0b0b0b0b0b0b0b0b0b0b0b0b05090b0b0b0c0b0b0b0c0b0b0b0c0b0b06090b0b0b0b0b0b0b0b0b0b0b0b0b0b05090c0b0b0b0b0b0b0b0b0b0b0b0b0b060a070807080708070807080708070a050b030909090909090909090909040b06`, img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . 2 
. . . . 2 . . . 2 . . . 2 . . . 
. . . . . . . . . . . . . . . 2 
. 2 . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile10,myTiles.tile9,sprites.builtin.coral2,sprites.dungeon.darkGroundCenter,sprites.swamp.swampTile3,sprites.castle.tileDarkGrass2,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
            case "tile5":return tile5;
            case "tile6":return tile6;
            case "tile7":return tile7;
            case "tile8":return tile8;
            case "tile9":return tile9;
            case "tile10":return tile10;
            case "Flower":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
