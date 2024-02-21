function newLoc (num: number, list: any[]) {
    posHolder = sprites.create(img`
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
        `, SpriteKind.Player)
    while (true) {
        col = randint(0, 10)
        row = randint(0, 10)
        tiles.placeOnTile(posHolder, tiles.getTileLocation(col, row))
        if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(col, row), assets.tile`land`))) {
        	
        }
    }
}
let row = 0
let col = 0
let posHolder: Sprite = null
let p1 = sprites.create(assets.image`p1`, SpriteKind.Player)
controller.player1.moveSprite(p1)
let p2 = sprites.create(assets.image`p2`, SpriteKind.Player)
controller.player2.moveSprite(p2)
let p3 = sprites.create(assets.image`p3`, SpriteKind.Player)
controller.player3.moveSprite(p3)
let p4 = sprites.create(img`
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    . e e e e e e e e e e e e e e . 
    . . e e e e e e e e e e e e . . 
    . . . e e e e e e e e e e . . . 
    . . . . e e e e e e e e . . . . 
    `, SpriteKind.Player)
controller.player4.moveSprite(p4)
