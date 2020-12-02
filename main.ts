controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shootyboi = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . 2 4 4 2 2 2 2 2 2 2 . . . 
        . . . 2 4 5 2 2 2 2 2 2 2 . . . 
        . . . 2 4 4 2 2 2 2 2 2 2 . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceboi, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let dieboi: Sprite = null
let shootyboi: Sprite = null
let spaceboi: Sprite = null
spaceboi = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 8 . . . . . . . . . . . 
    . . . . 8 8 . . . . . . . . . . 
    5 5 5 . 8 8 . 9 9 . . . . . . . 
    5 4 4 8 8 8 8 9 1 9 . . . . . . 
    5 4 2 8 8 8 8 9 9 9 9 . . . . . 
    5 4 4 8 8 8 8 9 9 9 9 9 . . . . 
    5 5 5 . 8 8 . . . . . . . . . . 
    . . . . 8 8 . . . . . . . . . . 
    . . . . 8 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spaceboi.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spaceboi, 200, 200)
game.onUpdateInterval(500, function () {
    dieboi = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 . . . . . . . . . . 
        . . . . . 3 3 . . . . . . . . . 
        . . . . . 3 3 . . . . . . . . . 
        . . . . . 3 3 . . . . . . . . . 
        . 2 4 4 3 3 3 3 3 3 3 9 . . . . 
        . 2 4 5 3 3 3 3 3 3 3 1 9 . . . 
        . 2 4 5 3 3 3 3 3 3 3 9 9 9 . . 
        . 2 4 4 3 3 3 3 3 3 3 3 3 3 3 . 
        . . . . . 3 3 . . . . . . . . . 
        . . . . . 3 3 . . . . . . . . . 
        . . . . . 3 3 . . . . . . . . . 
        . . . . . 3 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    dieboi.setVelocity(-100, 0)
    dieboi.setPosition(180, randint(0, 120))
})
