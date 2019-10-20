input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        . . . . .
        . . . . .
        `)
})
