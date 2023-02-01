i = 0
bclicked = 0
atimes = 0
def interact(interval: number):
    global i
    basic.clear_screen()
    i = 1
    while i < interval + 1:
        basic.show_string("" + str(recta(i)))
        basic.pause(100)
        basic.clear_screen()
        i += 1
       
def recta(n: number):
    if n < 0:
        basic.show_string("Si us plau selecciona un valor")
    result = (3 * (n**2) + n + 1)
    return result
    pass

def numElements():
    global atimes, bclicked
    while bclicked < 1:
        if input.button_is_pressed(Button.A):
            basic.show_string("A")
            basic.clear_screen()
            atimes += 1
            basic.show_string("" + str(atimes))
        elif input.button_is_pressed(Button.B):
            basic.show_string("B")
            bclicked += 1
        basic.pause(50)
    basic.clear_screen()
    basic.show_string("Calculant Recta :)")
    interact(atimes)

def showIcon():
    basic.clear_screen()
    music.start_melody(music.built_in_melody(Melodies.JUMP_UP),
        MelodyOptions.ONCE)

    for index in range(4):
        basic.show_leds("""
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    . . . . .
                    """)

        music.start_melody(music.built_in_melody(Melodies.JUMP_UP),
        MelodyOptions.ONCE)
    basic.show_string("Hola")
    music.start_melody(music.built_in_melody(Melodies.ODE),
            MelodyOptions.ONCE)
    basic.clear_screen()
    basic.show_string("Amb aquest Programa pots calcular la recta")
    basic.clear_screen()

def on_forever():
    global atimes, bclicked
    music.set_built_in_speaker_enabled(True)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.show_string("Selecciona els valors")
    basic.show_leds("""
                        . # . # .
                        . . . . .
                        # . . . #
                        . # # # .
                        . . . . .
                        """)
    numElements()
    basic.pause(500)
basic.forever(on_forever)