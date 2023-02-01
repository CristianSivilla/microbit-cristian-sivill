let i = 0
let bclicked = 0
let atimes = 0
function interact(interval: number) {
    
    basic.clearScreen()
    i = 1
    while (i < interval + 1) {
        basic.showString("" + ("" + recta(i)))
        basic.pause(100)
        basic.clearScreen()
        i += 1
    }
}

function recta(n: number) {
    if (n < 0) {
        basic.showString("Si us plau selecciona un valor")
    }
    
    let result = 3 * n ** 2 + n + 1
    return result
    
}

function numElements() {
    
    while (bclicked < 1) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            basic.clearScreen()
            atimes += 1
            basic.showString("" + ("" + atimes))
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showString("B")
            bclicked += 1
        }
        
        basic.pause(50)
    }
    basic.clearScreen()
    basic.showString("Calculant Recta :)")
    interact(atimes)
}

function showIcon() {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    . . . . .
                    `)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    }
    basic.showString("Hola")
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    basic.clearScreen()
    basic.showString("Amb aquest Programa pots calcular la recta")
    basic.clearScreen()
}

basic.forever(function on_forever() {
    
    music.setBuiltInSpeakerEnabled(true)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.showString("Selecciona els valors")
    basic.showLeds(`
                        . # . # .
                        . . . . .
                        # . . . #
                        . # # # .
                        . . . . .
                        `)
    numElements()
    basic.pause(500)
})
