radio.onReceivedString(function (receivedString) {
    if (receivedString == "hit") {
        music.playTone(349, music.beat(BeatFraction.Whole))
        servos.P1.setAngle(180)
        basic.pause(300)
        servos.P1.setAngle(90)
        basic.pause(300)
        servos.P2.setAngle(180)
        basic.pause(1000)
        servos.P2.setAngle(90)
        basic.pause(1600)
        servos.P1.setAngle(0)
        basic.pause(1000)
        servos.P1.setAngle(90)
        basic.pause(500)
        basic.showIcon(IconNames.Fabulous)
    }
})
radio.setGroup(128)
