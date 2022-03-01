input.onButtonPressed(Button.A, function () {
    dice_1 += 1
    basic.showNumber(dice_1)
})
input.onButtonPressed(Button.B, function () {
    dice_2 += 1
    basic.showNumber(dice_2)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(dice_2)
    basic.showNumber(dice_1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Ghost)
    dice_2 = 0
    dice_1 = 0
})
let dice_1 = 0
let dice_2 = 0
basic.showIcon(IconNames.Ghost)
basic.showNumber(0)
dice_2 = 0
dice_1 = 0
