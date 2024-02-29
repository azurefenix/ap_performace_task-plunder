namespace SpriteKind {
    export const hold = SpriteKind.create()
    export const cross = SpriteKind.create()
    export const storm = SpriteKind.create()
    export const skull = SpriteKind.create()
    export const noInteraction = SpriteKind.create()
}
/**
 * maybe add enemy ships (british armada) that subtract life and/or points
 */
// add bool so check if cross or storm
// if cross can't be on land if storm can
// if storm can't be on player if cross can
function newLoc (list: tiles.Location[], cORs: boolean) {
    posHolder = sprites.create(assets.image`posHolder`, SpriteKind.noInteraction)
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
            if (posHolder.tilemapLocation() != p.tilemapLocation()) {
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
function xMarksTheSpot () {
    messages = ["a", "b", "c"]
    messageResults = [0, 1, 0]
    if (true) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    }
}
sprites.onDestroyed(SpriteKind.cross, function (sprite) {
    if (!(end)) {
        cross = sprites.create(assets.image`xTreasure`, SpriteKind.cross)
        crossLocs.push(newLoc(crossLocs, true))
        tiles.placeOnTile(cross, crossLocs.pop())
    }
})
function changeIslandIcon () {
    aroundMIsland0 = [
    tiles.getTileLocation(2, 3),
    tiles.getTileLocation(2, 4),
    tiles.getTileLocation(2, 5),
    tiles.getTileLocation(2, 6),
    tiles.getTileLocation(3, 2),
    tiles.getTileLocation(4, 2),
    tiles.getTileLocation(5, 2),
    tiles.getTileLocation(6, 3),
    tiles.getTileLocation(6, 4),
    tiles.getTileLocation(6, 5),
    tiles.getTileLocation(6, 6),
    tiles.getTileLocation(3, 7),
    tiles.getTileLocation(4, 7),
    tiles.getTileLocation(4, 7)
    ]
    for (let value of aroundMIsland0) {
        if (value == p.tilemapLocation()) {
            if (flagCompare.image == mIsland0.image) {
                game.splash("You have already plundered this island")
            } else {
                mIsland0.setImage(assets.image`p1Flag`)
                break;
            }
        }
    }
    aroundSIsland0 = [
    tiles.getTileLocation(15, 1),
    tiles.getTileLocation(16, 1),
    tiles.getTileLocation(17, 1),
    tiles.getTileLocation(18, 1),
    tiles.getTileLocation(18, 2),
    tiles.getTileLocation(18, 3),
    tiles.getTileLocation(18, 4),
    tiles.getTileLocation(17, 4),
    tiles.getTileLocation(16, 4),
    tiles.getTileLocation(15, 4),
    tiles.getTileLocation(15, 3),
    tiles.getTileLocation(15, 2)
    ]
    for (let value of aroundSIsland0) {
        if (value == p.tilemapLocation()) {
            if (flagCompare.image == sIsland0.image) {
                game.splash("You have already plundered this island")
            } else {
                sIsland0.setImage(assets.image`p1Flag`)
                break;
            }
        }
    }
}
function gameEnd (wORl: boolean) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.cross)
    sprites.destroyAllSpritesOfKind(SpriteKind.storm)
    scene.setBackgroundImage(assets.image`endScreen`)
    tiles.setCurrentTilemap(tilemap`endMap`)
    if (wORl) {
        winText = textsprite.create("You win!")
    } else {
        winText = textsprite.create("You lose :(")
    }
    winText.setPosition(38, 57)
    winText.setMaxFontHeight(10)
    winText.setOutline(1, 6)
    pause(5000)
    game.reset()
}
info.onScore(10, function () {
    end = true
    gameEnd(true)
})
info.onLifeZero(function () {
    end = true
    gameEnd(false)
})
function wantPlunderIsland () {
    if (game.ask("Plunder Island?")) {
        if (tryPlunderIsland()) {
            changeIslandIcon()
            game.splash("Island plundered")
            info.changeScoreBy(1)
            pause(2000)
        } else {
            game.splash("Plunder unsuccessful")
            pause(2000)
        }
    } else {
        pause(2000)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.storm, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cross, function (sprite, otherSprite) {
    if (!(end)) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(1)
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
let winText: TextSprite = null
let aroundSIsland0: tiles.Location[] = []
let aroundMIsland0: tiles.Location[] = []
let messageResults: number[] = []
let messages: string[] = []
let count = 0
let row = 0
let col = 0
let posHolder: Sprite = null
let flagCompare: Sprite = null
let mIsland0: Sprite = null
let sIsland0: Sprite = null
let crossLocs: tiles.Location[] = []
let cross: Sprite = null
let end = false
let p: Sprite = null
tiles.setCurrentTilemap(tilemap`twoPMap`)
p = sprites.create(assets.image`p1`, SpriteKind.Player)
controller.moveSprite(p)
p.setPosition(303, 7)
scene.cameraFollowSprite(p)
info.setScore(0)
info.setLife(3)
end = false
cross = sprites.create(assets.image`xTreasure`, SpriteKind.cross)
crossLocs = [cross.tilemapLocation()]
crossLocs.push(newLoc(crossLocs, true))
tiles.placeOnTile(cross, crossLocs.pop())
let storm = sprites.create(assets.image`storm`, SpriteKind.storm)
let stormLocs = [storm.tilemapLocation()]
stormLocs.push(newLoc(stormLocs, false))
tiles.placeOnTile(storm, stormLocs.pop())
sIsland0 = sprites.create(assets.image`skullIslandStrength1`, SpriteKind.skull)
sIsland0.setPosition(256, 30)
let sIsland1 = sprites.create(assets.image`skullIslandStrength1`, SpriteKind.skull)
sIsland1.setPosition(224, 110)
let sIsland2 = sprites.create(assets.image`skullIslandStrength1`, SpriteKind.skull)
sIsland2.setPosition(128, 190)
mIsland0 = sprites.create(assets.image`skullIslandStrength2`, SpriteKind.skull)
mIsland0.setPosition(56, 65)
let mIsland1 = sprites.create(assets.image`skullIslandStrength2`, SpriteKind.skull)
mIsland1.setPosition(40, 265)
let lIsland = sprites.create(assets.image`skullIslandStrength3`, SpriteKind.skull)
lIsland.setPosition(248, 250)
flagCompare = sprites.create(assets.image`p1Flag`, SpriteKind.noInteraction)
flagCompare.setPosition(-20, -20)
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
        if (p.tileKindAt(TileDirection.Left, assets.tile`landSand2`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Top, assets.tile`landSand3`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Right, assets.tile`landSand4`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Bottom, assets.tile`landSand`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Left, assets.tile`coast3`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Left, assets.tile`coast2`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Top, assets.tile`coast4`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Top, assets.tile`coast2`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Right, assets.tile`coast`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Right, assets.tile`coast4`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Bottom, assets.tile`coast`)) {
            wantPlunderIsland()
        }
        if (p.tileKindAt(TileDirection.Bottom, assets.tile`coast2`)) {
            wantPlunderIsland()
        }
    }
})
// after certain amount of time, storm destroyed
forever(function () {
    stormLocs.push(newLoc(stormLocs, false))
    tiles.placeOnTile(storm, stormLocs.pop())
    for (let index = 0; index < 6; index++) {
        pause(2000)
    }
})
