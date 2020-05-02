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
function level_14 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(13)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(0, img`
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
    mySprite.setPosition(132, 8)
}
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    level_6()
})
function level_12 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(13)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(1, img`
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
    mySprite.setPosition(132, 8)
}
function level_8 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(9)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(12, img`
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
    mySprite.setPosition(132, 8)
}
function level_7 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(4)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(10, img`
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
    mySprite.setPosition(132, 8)
}
scene.onHitTile(SpriteKind.Player, 11, function (sprite) {
    level_10()
})
function level_3 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(3)
    scene.setTileMap(img`
. . . 6 6 6 6 6 . . 
. 6 . 6 6 5 . . . 6 
. 6 . . 6 . 6 6 . 6 
. 6 6 . . 6 . . . . 
. 6 6 6 6 6 6 6 6 . 
. 6 . . . 6 6 6 6 . 
. . . 6 . . . 6 6 . 
6 . 6 . 6 6 . . . . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(5, img`
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
    mySprite.setPosition(24, 10)
}
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
	
})
function level_2 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(7)
    scene.setTileMap(img`
6 6 6 6 . . 6 6 6 6 
. 6 . . . . . 6 . 6 
6 . . 6 . 6 . . . . 
. . 6 6 6 6 6 . 6 . 
. 6 . . . . . . . 6 
. 6 4 6 6 6 6 6 . . 
. . 6 6 6 . . 6 . 6 
6 . . . . . 6 6 6 . 
. 6 . . 6 . . . . . 
`)
    scene.setTile(6, img`
c c 6 c c c 6 6 c c c c 6 7 7 6 
c c 6 c 6 c 6 6 c c 6 c 6 7 7 7 
c c c c 6 c 6 6 c 6 7 c 6 6 7 7 
c c c c 6 c c c c 6 7 c c c 6 6 
c c 6 c 6 c c 6 c 6 7 7 c c c c 
c c 6 c 6 c 6 6 c 6 7 7 7 7 7 6 
c c 6 c 6 c 6 6 c c 6 6 6 6 6 6 
c c 6 c c c 6 6 7 c c c c c c c 
c c 6 c c c 6 7 6 6 6 6 c 6 6 6 
c c 6 c 6 c 6 6 6 6 6 6 c 6 6 6 
c c 6 c 6 c c c c c c c c c c c 
c c 6 c 6 6 6 6 6 6 6 6 6 6 6 c 
c c c c c c c c c c c c c c c c 
c c c c 6 6 6 6 6 6 c c 6 6 6 6 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, true)
    scene.setTile(4, img`
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
    mySprite.setPosition(72, 11)
}
scene.onHitTile(SpriteKind.Player, 12, function (sprite) {
    level_9()
})
function level_11 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(13)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(15, img`
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
    mySprite.setPosition(132, 8)
}
function level_9 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(0)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(11, img`
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
    mySprite.setPosition(132, 8)
}
function level_13 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(13)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(13, img`
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
    mySprite.setPosition(132, 8)
}
scene.onHitTile(SpriteKind.Player, 8, function (sprite) {
    level_7()
})
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    level_4()
})
function level_10 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(13)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(14, img`
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
    mySprite.setPosition(132, 8)
}
function level_6 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(1)
    scene.setTileMap(img`
6 6 6 6 6 6 6 6 6 6 
6 . . . . . . . . 6 
6 . 6 6 6 6 6 6 . 6 
6 . 6 6 8 6 . 6 . 6 
6 . 6 . . . . 6 . 6 
6 . 6 . 6 6 6 6 . 6 
6 . 6 . . . . . . 6 
. . 6 6 6 6 6 6 6 6 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(8, img`
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
    mySprite.setPosition(14, 105)
}
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    level_8()
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    level_2()
})
function level_4 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(10)
    scene.setTileMap(img`
7 6 . . . 6 6 6 . . 
. . . 6 . . 6 6 6 . 
6 6 6 6 . 6 . . . . 
6 6 6 . . 6 6 6 . . 
. . . . 6 . 6 . . 6 
. 6 6 6 6 6 . . 6 6 
. 6 . 6 . . . 6 6 . 
. . . . . 6 . . . . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(7, img`
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
    mySprite.setPosition(137, 11)
}
function level_5 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(8)
    scene.setTileMap(img`
6 6 . 6 6 6 6 6 . 6 
6 . . . . 6 . . . . 
6 . . 6 6 6 . 6 6 . 
6 6 . 6 . . . . 6 6 
. 6 6 . . 6 6 . . . 
. 6 . . 6 6 . . 6 6 
9 6 . 6 6 . 6 6 6 . 
. . . . . . 6 . 6 . 
`)
    scene.setTile(6, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(9, img`
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
    mySprite.setPosition(132, 8)
}
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    level_5()
})
function level_15 () {
    music.powerUp.playUntilDone()
    scene.setBackgroundColor(13)
    scene.setTileMap(img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`)
    scene.setTile(7, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
6 6 6 6 c c 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c c c 
c 6 6 6 6 6 6 6 6 6 6 6 c 6 c c 
c c c c c c c c c c c 6 c 6 c c 
6 6 6 c 6 6 6 6 6 6 c 6 c 6 c c 
6 6 6 c 6 6 6 6 7 6 c c c 6 c c 
c c c c c c c 7 6 6 c c c 6 c c 
6 6 6 6 6 6 c c 6 6 c 6 c 6 c c 
6 7 7 7 7 7 6 c 6 6 c 6 c 6 c c 
c c c c 7 7 6 c 6 c c 6 c 6 c c 
6 6 c c c 7 6 c c c c 6 c c c c 
7 7 6 6 c 7 6 c 6 6 c 6 c c c c 
7 7 7 6 c 6 c c 6 6 c 6 c 6 c c 
6 7 7 6 c c c c 6 6 c c c 6 c c 
`, true)
    scene.setTile(6, img`
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
    mySprite.setPosition(132, 8)
}
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    level_3()
})
let mySprite: Sprite = null
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
mySprite = sprites.create(img`
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
