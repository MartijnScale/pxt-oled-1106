# Extension for micro:bit to support OLED-1106 display

This micro:bit extension is developed to provide better support for OLED 128x64 Displays with the SH-1106 controller.
It is based on the available SH-1306 OLED extensions that were already available for the micro:bit

## Hardware

Connect the OLED Display to the I2C, the 3V and GND pins of the micro:bit, preferrably using a Breakout Board.

## Usage

This extension can be used with Blocks and JavaScript, the explanation below is the same for both:

* OLED_1106.init
Initialize the OLED Display, should be ran once (in "on start" block).

* OLED_1106.clear
Clears the entire OLED Display. Is included in OLED_1106.init, no need to run it again for initializing.

* OLED_1106.writeString("")
Writes a string on the OLED Display. If the string is longer than the width of the OLED Display, the remainder of the string will be written on the next line. 

* OLED_1106.writeNumber()
Writes a number on the OLED Display.

* OLED_1106.writeStringNewLine("")
Same as OLED_1106.writeString("") but with a Carriage Return on the end.

* OLED_1106.writeNumNewLine()
Same as OLED_1106.writeNumber() but with a Carriage Return on the end.

## Supported targets

* for PXT/microbit
