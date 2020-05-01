namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile1 = img`
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
`
}
function level_2 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(9)
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    level_2()
})
music.baDing.playUntilDone()
scene.setTileMap(img`
. . . . . . . . . . 
6 . 6 6 6 6 . 6 6 . 
. . . . . 6 . . 6 . 
. 6 6 6 . 6 . 6 6 . 
. 6 . 6 . 6 6 . 6 . 
. 6 . 6 . . . . 6 6 
. 6 6 6 6 6 6 . 2 . 
. . . . . . 6 6 . . 
. . . . . . . . . . 
`)
scene.setTile(6, img`
6 7 7 6 c c 6 c 6 6 c 6 c 6 c f 
6 7 7 6 c 6 6 c 6 6 c 6 c c f c 
6 7 c c c 7 6 c 6 6 c 6 c c 6 6 
c c c 6 c 7 6 c 6 6 c c c c c c 
c c 7 6 c 7 6 c 6 6 c c c 6 6 6 
c 7 7 6 c 7 6 c 6 c c c c c c c 
c 7 7 6 c 7 6 c c c c 6 6 6 6 6 
6 7 7 6 c 7 6 c c c 6 6 6 6 6 6 
6 7 7 6 c 6 c c c c c c c c c c 
6 7 7 6 c c c c 6 6 6 6 6 6 c c 
6 7 7 6 c c c 7 7 7 7 7 7 7 6 c 
6 7 7 c c c c c c c c c c c c c 
6 7 c c c 6 6 6 6 6 6 c 6 6 6 6 
6 c c c 7 7 7 7 7 7 c c 7 7 7 7 
c f c 7 7 7 7 7 7 7 c 7 7 7 7 7 
f c 6 6 6 6 6 6 6 c c 6 6 6 6 6 
`, true)
scene.setTile(2, img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, true)
let mySprite = sprites.create(img`
. . . . f f f f f f f . . . . . 
. . . . f f e e e f f . . . . . 
. . . . f e f e f e f . . . . . 
. . . . f e e e e e f . . . . . 
. . . . f e f f f e f . . . . . 
. . . . f e e e e e f . . . . . 
. . . . f f f e f f f . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . e 5 5 5 5 5 e . . . . . 
. . . . e 5 5 5 5 5 e . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(5, 10)
controller.moveSprite(mySprite)
