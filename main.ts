let Number2 = 0
input.onButtonPressed(Button.A, function () {
    Number2 = randint(1, 3)
    if (Number2 == 1) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . # . .
            # . . # .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
    if (Number2 == 2) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . . .
            # . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
    if (Number2 == 3) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    Number2 = randint(1, 3)
    if (Number2 == 1) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . # . .
            # . . # .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
    if (Number2 == 2) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . . .
            # . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
    if (Number2 == 3) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
