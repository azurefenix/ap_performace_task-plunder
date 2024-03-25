namespace SpriteKind {
    export const hold = SpriteKind.create()
    export const cross = SpriteKind.create()
    export const storm = SpriteKind.create()
    export const skull = SpriteKind.create()
    export const noInteraction = SpriteKind.create()
}
/**
 * This game is based off the board game plunder
 */
// add bool to check if cross or storm
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
                if (posHolder.tilemapLocation() != cross2.tilemapLocation()) {
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
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (p.tileKindAt(TileDirection.Top, assets.tile`sea`)) {
        tiles.placeOnTile(p, p.tilemapLocation().getNeighboringLocation(CollisionDirection.Top))
    }
})
// Choose message for X sprites, use bool to determine if add/subtract form points or life
function xMarksTheSpot () {
    messageNames = [
    "The Kraken",
    "Trove",
    "Loot",
    "Royal Navy",
    "Tell No Tales",
    "Scurvy",
    "Pillage",
    "Message in a Bottle",
    "Mutiny",
    "The Locker",
    "Berth",
    "Castaways",
    "Man Overboard",
    "Peg Legs",
    "Notorious",
    "Doubloons",
    "Chest",
    "Vermin"
    ]
    messages = [
    "Ye fashion harpoons ta kill the monster guardin this treasure.",
    "Good fortune finds ye when the changing tide reveals a cave of riches.",
    "Ye intercept a supply run meant fer yer foes and take fer yourself.",
    "Yer pirating ways be not appreciated. Perhaps a bribe will stay their guns.",
    "Ye make sure only ye know where this treasure be.",
    "Ye reach the treasure but yer voyage be plagued by sickness",
    "Ye take what ye need then take more.",
    "A floating missive tells the whereabouts of a pirate's secret stash.",
    "With no treasure found, yer crew grows unruly. Squashin rebellions be costly",
    "Those who stand between ye and treasure be sent ta the bottom.",
    "After a fine haul yer weary sea legs could do with a bit of rest.",
    "Ye find some scallywags left fer dead. They happily join yer ranks.",
    "Yer lookout be tossed from the crow's nest.",
    "The battle fer this treasure cost yer crew some limbs. They'll learn ta live with splinters.",
    "Yer fame and legend grow with every haul. Sailors hasten ta join yer crew.",
    "Ye vow ta empty these seas of every last coin.",
    "Filled with riches this trunk be. Enjoy yer spoils.",
    "Where treasure lived thar now be rats. Ye set em ablaze fer fear of plague."
    ]
    messageResults = [
    -2,
    3,
    1,
    -4,
    -1,
    -2,
    2,
    3,
    -3,
    -1,
    3,
    2,
    -1,
    2,
    3,
    2,
    2,
    -2
    ]
    messagePointsOrLife = [
    false,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    true
    ]
    whichMessage = randint(0, 17)
    game.splash(messageNames[whichMessage], messages[whichMessage])
    // points true
    // lives false
    if (messagePointsOrLife[whichMessage]) {
        info.changeScoreBy(messageResults[whichMessage])
    } else {
        info.changeLifeBy(messageResults[whichMessage])
        if (info.life() > 4) {
            info.setLife(4)
        } else if (info.life() < 0) {
            info.setLife(0)
        }
    }
}
sprites.onDestroyed(SpriteKind.cross, function (sprite) {
    if (!(end)) {
        cross2 = sprites.create(assets.image`xTreasure`, SpriteKind.cross)
        crossLocs.push(newLoc(crossLocs, true))
        tiles.placeOnTile(cross2, crossLocs.pop())
        xMarksTheSpot()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (p.tileKindAt(TileDirection.Left, assets.tile`sea`)) {
        tiles.placeOnTile(p, p.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
    }
})
// at game end destroy all sprites and display win/loose to player
function gameEnd (wORl: boolean) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.cross)
    sprites.destroyAllSpritesOfKind(SpriteKind.storm)
    sprites.destroyAllSpritesOfKind(SpriteKind.hold)
    sprites.destroyAllSpritesOfKind(SpriteKind.skull)
    scene.setBackgroundImage(assets.image`endScreen`)
    tiles.setCurrentTilemap(tilemap`endMap`)
    if (wORl) {
        winText = "You win!"
    } else {
        winText = "You lost :("
    }
    game.splash(winText)
    pause(2000)
    game.reset()
}
info.onScore(7, function () {
    end = true
    gameEnd(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (p.tileKindAt(TileDirection.Right, assets.tile`sea`)) {
        tiles.placeOnTile(p, p.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (p.tileKindAt(TileDirection.Bottom, assets.tile`sea`)) {
        tiles.placeOnTile(p, p.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom))
    }
})
info.onLifeZero(function () {
    end = true
    gameEnd(false)
})
// ask user if want to plunder Island
// if yes, call tryPlunderIsland fuction to determine is plunder was successful
// if successful, player gains 1 pt
function wantPlunderIsland () {
    if (game.ask("Plunder Island?")) {
        if (tryPlunderIsland()) {
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
    if (!(end)) {
        info.changeLifeBy(-1)
        pause(2000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cross, function (sprite, otherSprite) {
    if (!(end)) {
        sprites.destroy(otherSprite)
    }
})
// easy: if guess number within 2 of random number
// medium: if guess number within 1 of random number
// hard: if guess number is random number
// if player guess within bounds give return true so player gains 1 pt
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
let winText = ""
let whichMessage = 0
let messagePointsOrLife: boolean[] = []
let messageResults: number[] = []
let messages: string[] = []
let messageNames: string[] = []
let count = 0
let row = 0
let col = 0
let posHolder: Sprite = null
let crossLocs: tiles.Location[] = []
let cross2: Sprite = null
let end = false
let p: Sprite = null
tiles.setCurrentTilemap(tilemap`twoPMap`)
p = sprites.create(assets.image`p1`, SpriteKind.Player)
tiles.placeOnTile(p, tiles.getTileLocation(19, 0))
scene.cameraFollowSprite(p)
info.setScore(0)
info.setLife(3)
end = false
cross2 = sprites.create(assets.image`xTreasure`, SpriteKind.cross)
crossLocs = [cross2.tilemapLocation()]
crossLocs.push(newLoc(crossLocs, true))
tiles.placeOnTile(cross2, crossLocs.pop())
let storm2 = sprites.create(assets.image`storm`, SpriteKind.storm)
let stormLocs = [storm2.tilemapLocation()]
stormLocs.push(newLoc(stormLocs, false))
tiles.placeOnTile(storm2, stormLocs.pop())
let sIsland0 = sprites.create(assets.image`skullIslandStrength1`, SpriteKind.skull)
sIsland0.setPosition(256, 30)
let sIsland1 = sprites.create(assets.image`skullIslandStrength1`, SpriteKind.skull)
sIsland1.setPosition(224, 110)
let sIsland2 = sprites.create(assets.image`skullIslandStrength1`, SpriteKind.skull)
sIsland2.setPosition(128, 190)
let mIsland0 = sprites.create(assets.image`skullIslandStrength2`, SpriteKind.skull)
mIsland0.setPosition(56, 65)
let mIsland1 = sprites.create(assets.image`skullIslandStrength2`, SpriteKind.skull)
mIsland1.setPosition(40, 265)
let lIsland = sprites.create(assets.image`skullIslandStrength3`, SpriteKind.skull)
lIsland.setPosition(248, 250)
forever(function () {
    if (true) {
        // ask if want to plunder island
        // if y
        // win island
        // island yours and get 1 pt
        // if no
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
// after 2 sec, storm destroyed and new storm spawned
forever(function () {
    stormLocs.push(newLoc(stormLocs, false))
    tiles.placeOnTile(storm2, stormLocs.pop())
    for (let index = 0; index < 6; index++) {
        pause(2000)
    }
})
