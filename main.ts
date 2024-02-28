namespace SpriteKind {
    export const hold = SpriteKind.create()
    export const cross = SpriteKind.create()
    export const storm = SpriteKind.create()
}
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
function gameEnd (winner: number) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.cross)
    sprites.destroyAllSpritesOfKind(SpriteKind.storm)
    scene.setBackgroundImage(assets.image`endScreen`)
    tiles.setCurrentTilemap(tilemap`endMap`)
    if (winner == 1) {
        winText = textsprite.create("Player 1 Wins!")
    }
    winText.setPosition(38, 57)
    winText.setMaxFontHeight(10)
    winText.setOutline(1, 6)
    pause(5000)
    game.reset()
}
controller.player3.onEvent(ControllerEvent.Connected, function () {
	
})
info.player1.onScore(10, function () {
    end = true
    gameEnd(1)
})
function wantPlunderIsland () {
    wantPlunder = game.askForString("Do you want to plunder this island? (y/n)", 1)
    if (wantPlunder == "y") {
        if (tryPlunderIsland()) {
            game.splash("Island plundered")
            info.player1.changeScoreBy(1)
            pause(2000)
        } else {
            game.splash("Plunder unsuccessful")
            pause(2000)
        }
    } else {
        pause(2000)
    }
}
// use counter variable for number of players, then direct to different functions for each version
controller.player2.onEvent(ControllerEvent.Connected, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.storm, function (sprite, otherSprite) {
    info.player1.changeScoreBy(-1)
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cross, function (sprite, otherSprite) {
    if (!(end)) {
        sprites.destroy(otherSprite)
        info.player1.changeScoreBy(1)
    }
})
// easy: if guess number within 2 of random number
// medium: if guess number within 1 of random number
// hard: if guess number is random number
function tryPlunderIsland () {
    islandDifficulty = game.askForNumber("How many skulls were on the island? (1, 2, 3)", 1)
    while (islandDifficulty > 3) {
        islandDifficulty = game.askForNumber("How many skulls were on the island? (1, 2, 3)", 1)
    }
    islandStrength = randint(0, 10)
    pStrength = game.askForNumber("Guess a number", 2)
    if (islandDifficulty == 3) {
        if (pStrength == islandStrength) {
            return true
        } else {
            return false
        }
    } else if (islandDifficulty == 2) {
        if (pStrength <= islandStrength + 1 && pStrength >= islandStrength - 1) {
            return true
        } else {
            return false
        }
    } else if (islandDifficulty == 1) {
        if (pStrength <= islandStrength + 2 && pStrength >= islandStrength - 2) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
let pStrength = 0
let islandStrength = 0
let islandDifficulty = 0
let wantPlunder = ""
let winText: TextSprite = null
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
info.player1.setScore(0)
end = false
cross = sprites.create(assets.image`xTreasure`, SpriteKind.cross)
crossLocs = [cross.tilemapLocation()]
crossLocs.push(newLoc(crossLocs, true))
tiles.placeOnTile(cross, crossLocs.pop())
let storm = sprites.create(assets.image`storm`, SpriteKind.storm)
let stormLocs = [storm.tilemapLocation()]
stormLocs.push(newLoc(stormLocs, false))
tiles.placeOnTile(storm, stormLocs.pop())
// after certain amount of time, storm destroyed
forever(function () {
    stormLocs.push(newLoc(stormLocs, false))
    tiles.placeOnTile(storm, stormLocs.pop())
    for (let index = 0; index < 6; index++) {
        pause(2000)
    }
})
forever(function () {
    if (true) {
        // ask if want to plunder island
        // if y
        // win island
        // island yours and get 1 pt
        // set island to plundered
        // if plundered island plundered, island loose point
        // if n
        // wait 5 sec
        if (p1.tileKindAt(TileDirection.Left, assets.tile`landSand2`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Top, assets.tile`landSand3`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Right, assets.tile`landSand4`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Bottom, assets.tile`landSand`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Left, assets.tile`coast3`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Left, assets.tile`coast2`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Top, assets.tile`coast4`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Top, assets.tile`coast2`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Right, assets.tile`coast`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Right, assets.tile`coast4`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Bottom, assets.tile`coast`)) {
            wantPlunderIsland()
        }
        if (p1.tileKindAt(TileDirection.Bottom, assets.tile`coast2`)) {
            wantPlunderIsland()
        }
    }
})
