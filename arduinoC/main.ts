
enum SIZE {
    //% block="29*29"
    1,
    //% block="58*58"
    2
}

enum LINE {
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4
}

enum BTN {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="A+B"
    AB
}


//% color="#AA278D" iconWidth=50 iconHeight=40
namespace oled12864 {






    //% block="show [STR] at x [X] y [Y]" blockType="command"
    //% STR.shadow="string" STR.defl=11:22:33:44:55:66
    //% X.shadow="range" X.params.min=0 X.params.max=127 X.defl=0
    //% Y.shadow="range" Y.params.min=0 Y.params.max=63 Y.defl=0
    export function psControl(parameter: any, block: any) {
        let str = parameter.STR.code
        // let x = parameter.X.code
        // let y = parameter.Y.code
        Generator.addInclude('oled12864', '#include <PS4Controller.h>');
        // Generator.addObject(`myoled`, `OLED_12864`, `myoled;`);
        Generator.addSetup(`myoled.begin`, `Serial.begin(115200);\n\tPS4.begin(${str});\n\tSerial.println("Ready.");`);
        Generator.addCode(`    if(PS4.isConnected()) {
            Serial.println("Successfully connected!");
        if ( PS4.data.button.up )
            Serial.println("Up Button");
        if ( PS4.data.button.down )
            Serial.println("Down Button");
        if ( PS4.data.button.left )
            Serial.println("Left Button");
        if ( PS4.data.button.right )
            Serial.println("Right Button");
          
        if ( PS4.data.button.upright )
            Serial.println("Up Right");
        if ( PS4.data.button.upleft )
            Serial.println("Up Left");
        if ( PS4.data.button.downleft )
            Serial.println("Down Left");
        if ( PS4.data.button.downright )
            Serial.println("Down Right");
          
        if ( PS4.data.button.triangle )
            Serial.println("Triangle Button");
        if ( PS4.data.button.circle )
            Serial.println("Circle Button");
        if ( PS4.data.button.cross )
            Serial.println("Cross Button");
        if ( PS4.data.button.square )
            Serial.println("Square Button");
          
        if ( PS4.data.button.l1 )
            Serial.println("l1 Button");
        if ( PS4.data.button.r1 )
            Serial.println("r1 Button");
          
        if ( PS4.data.button.l3 )
            Serial.println("l3 Button");
        if ( PS4.data.button.r3 )
            Serial.println("r3 Button");
          
        if ( PS4.data.button.share )
            Serial.println("Share Button");
        if ( PS4.data.button.options )
            Serial.println("Options Button");
          
        if ( PS4.data.button.ps )
            Serial.println("PS Button");
        if ( PS4.data.button.touchpad )
            Serial.println("Touch Pad Button");
          
        if ( PS4.data.button.l2 ) {
            Serial.print("l2 button at ");
            Serial.println(PS4.data.analog.button.l2, DEC);
        }
        if ( PS4.data.button.r2 ) {
            Serial.print("r2 button at ");
            Serial.println(PS4.data.analog.button.r2, DEC);
        }
  
        if ( PS4.event.analog_move.stick.lx ) {
            Serial.print("Left Stick x at ");
            Serial.println(PS4.data.analog.stick.lx, DEC);
            mind_n_leftX = PS4.data.analog.stick.lx;
        }
        if ( PS4.event.analog_move.stick.ly ) {
            Serial.print("Left Stick y at ");
            Serial.println(PS4.data.analog.stick.ly, DEC);
            mind_n_leftY = PS4.data.analog.stick.ly;
        }
        if ( PS4.event.analog_move.stick.rx ) {
            Serial.print("Right Stick x at ");
            Serial.println(PS4.data.analog.stick.rx, DEC);
        }
        if ( PS4.event.analog_move.stick.ry ) {
            Serial.print("Right Stick y at ");
            Serial.println(PS4.data.analog.stick.ry, DEC);
        }
  
       if (PS4.data.status.charging)
          Serial.println("The controller is charging");
       if (PS4.data.status.audio)
          Serial.println("The controller has headphones attached");
       if (PS4.data.status.mic)
          Serial.println("The controller has a mic attached");

            Serial.print("Battey = ");
            Serial.print(PS4.data.status.battery, DEC);
            Serial.println(" / 16");
       
            Serial.println();

            delay(100);
        };`);
    }

 




    /*
    //% block="AnalogWrite:[PIN_AnalogWrite],AnalogRead:[PIN_AnalogRead],DigitalWrite:[PIN_DigitalWrite],DigitalRead:[PIN_DigitalRead]" blockType="command"
    //% PIN_AnalogWrite.shadow="dropdownRound" PIN_AnalogWrite.options="PIN_AnalogWrite"
    //% PIN_AnalogRead.shadow="dropdownRound" PIN_AnalogRead.options="PIN_AnalogRead"
    //% PIN_DigitalWrite.shadow="dropdownRound" PIN_DigitalWrite.options="PIN_DigitalWrite"
    //% PIN_DigitalRead.shadow="dropdownRound" PIN_DigitalRead.options="PIN_DigitalRead"
    export function blocktest(parameter: any)
    {
        let PIN_AnalogWrite=parameter.PIN_AnalogWrite.code;
        let PIN_AnalogRead=parameter.PIN_AnalogRead.code;
        let PIN_DigitalWrite=parameter.PIN_DigitalWrite.code;
        let PIN_DigitalRead=parameter.PIN_DigitalRead.code;

        Generator.addCode([`(${PIN_AnalogWrite},${PIN_AnalogRead},${PIN_DigitalWrite},${PIN_DigitalRead})`, Generator.ORDER_UNARY_POSTFIX]);
    }

    */


}
