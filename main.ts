namespace SpriteKind {
    export const hold = SpriteKind.create()
    export const cross = SpriteKind.create()
    export const storm = SpriteKind.create()
}
/**
 * after certain amount of time, storm destroyed
 */
controller.player4.onEvent(ControllerEvent.Connected, function () {
	
})
// add bool so check if cross or storm
// if cross can't be on land if storm can
// if storm can't be on player if cross can
function newLoc (list: tiles.Location[], cORs: boolean) {
    posHolder = sprites.create(assets.image`posHolder`, SpriteKind.hold)
    while (true) {
        col = randint(0, 16)
        row = randint(0, 27)
        tiles.placeOnTile(posHolder, tiles.getTileLocation(col, row))
        // cross true
        // storm false
        if (cORs) {
            if (tiles.tileAtLocationEquals(posHolder.tilemapLocation(), assets.tile`sea`)) {
                return posHolder.tilemapLocation()
            }
        } else {
            // also check if sprites overlap
            if (posHolder.tilemapLocation() != p1.tilemapLocation()) {
                if (posHolder.tilemapLocation() != cross.tilemapLocation()) {
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
sprites.onDestroyed(SpriteKind.cross, function (sprite) {
    if (!(end)) {
        cross = sprites.create(assets.image`xTreasure`, SpriteKind.cross)
        crossLocs.push(newLoc(crossLocs, true))
        tiles.placeOnTile(cross, crossLocs.pop())
    }
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
	
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
	
})
sprites.onOverlap(SpriteKind.storm, SpriteKind.cross, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.storm, function (sprite, otherSprite) {
    sprite.setVelocity(5, 5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cross, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
let count = 0
let row = 0
let col = 0
let posHolder: Sprite = null
let crossLocs: tiles.Location[] = []
let cross: Sprite = null
let end = false
let p1: Sprite = null
tiles.setCurrentTilemap(tilemap`onePMap`)
p1 = sprites.create(assets.image`p1`, SpriteKind.Player)
controller.player1.moveSprite(p1)
p1.setPosition(0, 0)
scene.cameraFollowSprite(p1)
end = false
cross = sprites.create(assets.image`xTreasure`, SpriteKind.cross)
crossLocs = [cross.tilemapLocation()]
crossLocs.push(newLoc(crossLocs, true))
tiles.placeOnTile(cross, crossLocs.pop())
let storm = sprites.create(assets.image`storm`, SpriteKind.storm)
let stormLocs = [storm.tilemapLocation()]
stormLocs.push(newLoc(stormLocs, false))
tiles.placeOnTile(storm, stormLocs.pop())
// plunder island
// if guess number within 2 of random number, win island
// island yours and get 1 pt
if (p1.isHittingTile(CollisionDirection.Left)) {
	
}
