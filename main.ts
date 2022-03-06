let Result = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Result = randint(1, 3)
    if (Result == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Result == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
