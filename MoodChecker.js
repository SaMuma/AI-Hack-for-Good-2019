let delay = 0
let x = 0
input.onButtonPressed(Button.A, function () {
    incrementCounter()
    if (x == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        if (x == 2) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (x > 0) {
        radio.sendNumber(x)
        basic.pause(delay)
        onInit()
    }
})
function onInit() {
    basic.showIcon(IconNames.Heart)
    x = 0
}
function incrementCounter() {
    if (x == 3) {
        x = 1
    } else {
        x = x + 1
    }
}
radio.setTransmitPower(7)
radio.setGroup(45)
onInit()