input.onButtonPressed(Button.A, function () {
    TM1650.on()
    TM1650.showNumber(AMOUNT)
    basic.pause(1000)
    TM1650.off()
})
let RED = 0
let GREEN = 0
let BLUE = 0
let AMOUNT = 0
AMOUNT = 0
ModuleWorld_PWM.RGB(0, 0, 0)
TM1650.clear()
TM1650.off()
basic.forever(function () {
    BLUE = Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB)
    GREEN = Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG)
    RED = Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR)
    ModuleWorld_PWM.RGB(RED, GREEN, BLUE)
    if (BLUE == 255) {
        TM1650.on()
        TM1650.showNumber(1000)
        AMOUNT += 1000
        basic.pause(2000)
        TM1650.clear()
        TM1650.off()
    }
    if (GREEN == 255) {
        TM1650.on()
        AMOUNT += 500
        TM1650.showNumber(500)
        basic.pause(2000)
        TM1650.clear()
        TM1650.off()
    }
    if (RED == 255 && GREEN > 50) {
        TM1650.on()
        TM1650.showNumber(200)
        basic.pause(2000)
        AMOUNT += 200
        TM1650.clear()
        TM1650.off()
    }
})
