controller.player4.onEvent(ControllerEvent.Connected, function () {
    tiles.setCurrentTilemap(tilemap`fourPMap`)
    p4 = sprites.create(assets.image`p4`, SpriteKind.Player)
    controller.player4.moveSprite(p4)
})
// add bool so check if cross or storm
// if cross can't be on land if storm can
// if storm can't be on player if cross can
function newLoc (list: tiles.Location[], cORs: boolean) {
    posHolder = sprites.create(assets.image`storm`, SpriteKind.Player)
    while (true) {
        col = randint(0, 10)
        row = randint(0, 10)
        tiles.placeOnTile(posHolder, tiles.getTileLocation(col, row))
        // cross true
        // storm false
        if (cORs) {
            if (tiles.tileAtLocationEquals(posHolder.tilemapLocation(), assets.tile`sea`)) {
                return posHolder.tilemapLocation()
            }
        } else {
            if (posHolder.tilemapLocation() != p1.tilemapLocation()) {
                if (posHolder.tilemapLocation() != p2.tilemapLocation()) {
                    if (posHolder.tilemapLocation() != p3.tilemapLocation()) {
                        if (posHolder.tilemapLocation() != p4.tilemapLocation()) {
                            count = 0
                            for (let value of list) {
                                if (value == posHolder.tilemapLocation()) {
                                    count += 1
                                }
                            }
                            if (count == 0) {
                                return posHolder.tilemapLocation()
                            }
                        }
                    }
                }
            }
        }
    }
}
controller.player3.onEvent(ControllerEvent.Connected, function () {
    tiles.setCurrentTilemap(tilemap`threePMap`)
    p3 = sprites.create(assets.image`p3`, SpriteKind.Player)
    controller.player3.moveSprite(p3)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    tiles.setCurrentTilemap(tilemap`twoPMap`)
    p2 = sprites.create(assets.image`p2`, SpriteKind.Player)
    controller.player2.moveSprite(p2)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    tiles.setCurrentTilemap(tilemap`onePMap`)
    p1 = sprites.create(assets.image`p1`, SpriteKind.Player)
    controller.player1.moveSprite(p1)
})
let count = 0
let p3: Sprite = null
let p2: Sprite = null
let p1: Sprite = null
let row = 0
let col = 0
let posHolder: Sprite = null
let p4: Sprite = null
let stormLocs: number[] = []
let xLocs: number[] = []
