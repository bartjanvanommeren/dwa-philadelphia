export default {
    id: 0,
    question: 'Wil je alleen of samen sporten?',
    audioPath: 'uitleg keuze tussen samen en alleen.mp3',
    options: [{
        title: 'Alleen',
        doorContent: 'blauw.svg',
        doorOutside: 'alleensportengif2.gif',
        side: 'left',
        audioPath: 'Dit is alleen sporten, wil je dit.mp3',
        nextRoom: {
            id: 1,
            question: 'Wil je met een bal of zonder bal sporten?',
            audioPath: 'uitleg keuze tussen bal en zonder bal.mp3',
            options: [{
                title: 'Met een bal',
                doorContent: 'blauw.svg',
                doorOutside: 'pingpongtafel2.svg',
                side: 'left',
                audioPath: 'Dit is met bal sporten, wil je dit.mp3',
                sports: [{
                    name: 'Tennis'
                }, {
                    name: 'Badminton'
                }, {
                    name: 'Tafeltennis'
                }]
            }, {
                title: 'Zonder een bal',
                doorContent: 'blauw.svg',
                doorOutside: 'Alleengeenbal.svg',
                side: 'right',
                audioPath: 'Dit is zonder bal sporten, wil je dit.mp3',
                nextRoom: {
                    id: 2,
                    question: 'Wil je binnen of buiten sporten?',
                    audioPath: 'uitleg keuze tussen binnen en buiten.mp3',
                    options: [{
                        title: 'Binnen',
                        doorContent: 'blauw.svg',
                        doorOutside: 'alleensportengif2.gif',
                        side: 'left',
                        audioPath: 'Dit is binnen sporten, wil je dit.mp3',
                        nextRoom: {
                            id: 3,
                            question: 'Wil je met of zonder water sporten?',
                            audioPath: 'uitleg keuze tussen water en droog.mp3',
                            options: [{
                                title: 'Met water',
                                doorContent: 'zwembad klein.svg',
                                doorOutside: '',
                                side: 'left',
                                audioPath: 'Dit is zwem sporten, wil je dit.mp3',
                                sports: [
                                    {
                                        name: 'Baantjes zwemmen',
                                        audioPath: 'Dit is baantjeszwemmen, wil je dit doen.mp3'
                                    },
                                    {
                                        name: 'Vrij zwemmen',
                                        audioPath: 'Dit is vrijzwemmen, wil je dit doen.mp3'
                                    },
                                    {
                                        name: 'Aqua gym',
                                        audioPath: 'Dit is aquagym, wil je dit doen.mp3'
                                    }
                                ]
                            }, {
                                title: 'Zonder water',
                                doorContent: 'sportzaal.svg',
                                doorOutside: '',
                                side: 'right',
                                audioPath: 'Dit is geen zwem sporten, wil je dit.mp3',
                                sports: [{
                                    name: 'Fitness'
                                }, {
                                    name: 'Yoga'
                                }, {
                                    name: 'Dansen'
                                }]
                            }]
                        }
                    }, {
                        title: 'Buiten',
                        doorContent: 'weiland2.svg',
                        doorOutside: 'alleenzonderbalbuiten.svg',
                        side: 'right',
                        audioPath: 'Dit is buiten sporten, wil je dit.mp3',
                        sports: [{
                            name: 'Hardlopen'
                        }, {
                            name: 'Fietsen'
                        }, {
                            name: 'Peerdrijden'
                        }]
                    }]
                }
            }]
        }
    }, {
        title: 'Samen',
        doorContent: 'blauw.svg',
        doorOutside: 'teamsporters.svg',
        side: 'right',
        audioPath: 'Dit is samen sporten, wil je dit.mp3',
        nextRoom: {
            id: 4,
            question: 'Wil je binnen of buiten sporten?',
            audioPath: 'uitleg keuze tussen binnen en buiten.mp3',
            options: [{
                title: 'Binnen',
                doorContent: 'blauw.svg',
                doorOutside: 'volleybalster met bal.svg',
                side: 'left',
                audioPath: 'Dit is binnen sporten, wil je dit.mp3',
                sports: [{
                    name: 'Basketbal'
                }, {
                    name: 'Korfbal'
                }, {
                    name: 'Volleybal'
                }]
            }, {
                title: 'Buiten',
                doorContent: 'blauw.svg',
                doorOutside: 'voetballer met goal en bal.svg',
                side: 'right',
                audioPath: 'Dit is buiten sporten, wil je dit.mp3',
                sports: [{
                    name: 'Voetbal'
                }, {
                    name: 'Korfbal'
                }]
            }]
        }
    }]
};
