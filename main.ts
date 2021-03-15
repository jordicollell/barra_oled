let blanc = 0
let negre = 0
let pol = 0
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(true)
basic.forever(function () {
    pol = input.soundLevel()
    negre = Math.round(Math.map(pol, 0, 255, 0, 60))
    blanc = Math.round(Math.map(pol, 0, 255, 1, 61))
    OLED12864_I2C.showNumber(
    0,
    0,
    Math.round(Math.map(pol, 0, 255, 0, 100)),
    1
    )
    OLED12864_I2C.hline(
    0,
    30,
    negre,
    1
    )
    OLED12864_I2C.hline(
    blanc,
    30,
    60 - negre,
    0
    )
    basic.pause(100)
})
