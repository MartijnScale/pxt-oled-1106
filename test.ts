// tests go here; this will not be compiled when this package is used as a library
OLED.init()
//OLED.writeString("Hello!:")
OLED.writeString("Hello!: Wat gebeurt er als....?")
basic.showIcon(IconNames.Heart)
basic.pause(1000)
OLED.newLine()
OLED.writeNumNewLine(100)
OLED.writeString("Het nummer is: ")
OLED.writeNum(76)
OLED.newLine()
OLED.writeStringNewLine("Klaar!")
OLED.writeString("------")
