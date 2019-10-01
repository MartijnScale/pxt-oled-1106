namespace OLED {
    let font: Buffer;

    const SSD1306_SETCONTRAST = 0x81
    const SSD1306_SETPAGEADRESS = 0xB0
    const SSD1306_DISPLAYALLON_RESUME = 0xA4
    const SSD1306_DISPLAYALLON = 0xA5
    const SSD1306_NORMALDISPLAY = 0xA6
    const SSD1306_DISPLAYOFF = 0xAE
    const SSD1306_DISPLAYON = 0xAF
    const SSD1306_SETDISPLAYOFFSET = 0xD3
    const SSD1306_SETCOMPINS = 0xDA
    const SSD1306_SETVCOMDETECT = 0xDB
    const SSD1306_SETDISPLAYCLOCKDIV = 0xD5
    const SSD1306_SETPRECHARGE = 0xD9
    const SSD1306_SETMULTIPLEX = 0xA8
    const SSD1306_SETLOWCOLUMN = 0x02
    const SSD1306_SETHIGHCOLUMN = 0x10
    const SSD1306_SETSTARTLINE = 0x40
    const SSD1306_COMSCANINC = 0xC0
    const SSD1306_COMSCANDEC = 0xC8
    const SSD1306_SEGREMAP = 0xA0
    const SSD1306_CHARGEPUMP = 0x8D
    const chipAdress = 0x3C

    function command(cmd: number) {
        let buf = pins.createBuffer(2)
        buf[0] = 0x00
        buf[1] = cmd
        pins.i2cWriteBuffer(chipAdress, buf, false)
    }

    export function clear() {
        command(SSD1306_SETSTARTLINE)
        command(SSD1306_SETHIGHCOLUMN)
        command(SSD1306_SETLOWCOLUMN)
        for (let pagenumber = 0; pagenumber < 8; pagenumber++) {
            command(SSD1306_SETPAGEADRESS + pagenumber)   //176 is 0xB0, pageaddress command

            //write 16 chunks of 0x40 and then 8 bytes of 0x00
            for (let counter = 0; counter < 16; counter++) {
                let data = pins.createBuffer(9);
                data[0] = 0x40; // Data Mode
                for (let i = 1; i < 9; i++) {
                    data[i] = 0x00
                }
                for (let i = 0; i < 9; i++) {
                    pins.i2cWriteBuffer(chipAdress, data, false)
                }
            }
        }

        command(SSD1306_DISPLAYON)
    }
}