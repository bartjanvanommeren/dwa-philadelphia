export default {
    id: 0,
    question: 'Wil je alleen of samen sporten?',
    audioPath: 'uitleg keuze tussen team en geen team.mp3',
    options: [{
        title: 'Alleen',
        doorContent: 'blauw.svg',
        doorOutside: 'alleensportengif2.gif',
        side: 'left',
        audioPath: 'dit is geen teamsport.mp3',
        nextRoom: {
            id: 1,
            question: 'Wil je met een bal of zonder bal sporten?',
            audioPath: 'uitleg keuze tussen bal en zonder bal.mp3',
            options: [{
                title: 'Met een bal',
                doorContent: 'gymzaal.svg',
                doorOutside: 'Pingpongtafel.svg',
                imageId: 'pingpongtafel',
                side: 'left',
                audioPath: 'dit is met bal.mp3',
                sportsOverviewBackground: 'gymzaal',
                sports: [{
                    name: 'Badminton',
                    imagePath: 'badmintonner.svg'
                }, {
                    name: 'Tafeltennis',
                    imagePath: 'Pingpongtafel.svg'
                }, {
                    name: 'Tennis'
                }]
            }, {
                title: 'Zonder een bal',
                doorContent: 'blauw.svg',
                doorOutside: 'Alleengeenbal.svg',
                side: 'right',
                audioPath: 'dit is zonder bal.mp3',
                nextRoom: {
                    id: 2,
                    question: 'Wil je binnen of buiten sporten?',
                    audioPath: 'uitleg keuze tussen binnen en buiten.mp3',
                    options: [{
                        title: 'Binnen',
                        doorContent: 'sportzaal.svg',
                        doorOutside: 'alleensportengif2.gif',
                        side: 'left',
                        audioPath: 'dit is binnensporten.mp3',
                        nextRoom: {
                            id: 3,
                            question: 'Wil je met of zonder water sporten?',
                            audioPath: 'uitleg keuze tussen water en droog.mp3',
                            options: [{
                                title: 'Met water',
                                doorContent: 'zwembad klein.svg',
                                doorOutside: '',
                                side: 'left',
                                audioPath: 'dit is een zwemsport.mp3',
                                sportsOverviewBackground: 'zwembad',
                                sports: [{
                                    name: 'Baantjes zwemmen',
                                    audioPath: 'dit is baantjeszwemmen.mp3',
                                    imagePath: 'zwemmer-oud.svg',
                                    imageId: 'zwemmer'
                                }, {
                                    name: 'Vrij zwemmen',
                                    audioPath: 'dit is vrijzwemmen.mp3',
                                    imagePath: 'vrijzwemmer-oud.svg',
                                    imageId: 'vrijzwemmer'
                                }, {
                                    name: 'Aqua gym',
                                    audioPath: 'dit is aquagym.mp3',
                                    imagePath: 'aquagymmer-oud.svg',
                                    imageId: 'aquagymmer'
                                }]
                            }, {
                                title: 'Zonder water',
                                doorContent: 'sportzaal.svg',
                                doorOutside: '',
                                side: 'right',
                                audioPath: 'dit is geen zwemsport.mp3',
                                sportsOverviewBackground: 'sportzaal',
                                sports: [{
                                    name: 'Fitness',
                                    imagePath: 'fitnesser.svg'
                                }, {
                                    name: 'Yoga',
                                    imagePath: 'yoga.svg'
                                }, {
                                    name: 'Dansen',
                                    imagePath: 'danser.svg'
                                }]
                            }]
                        }
                    }, {
                        title: 'Buiten',
                        doorContent: 'weiland2.svg',
                        doorOutside: 'alleenzonderbalbuiten.svg',
                        side: 'right',
                        audioPath: 'dit is buitensporten.mp3',
                        sportsOverviewBackground: 'weiland',
                        sports: [{
                            name: 'Hardlopen',
                            imagePath: 'renner.svg'
                        }, {
                            name: 'Fietsen',
                            imagePath: 'fiets.svg'
                        }, {
                            name: 'Peerdrijden',
                            imagePath: 'TjeerdHetPeerd.svg'
                        }]
                    }]
                }
            }]
        }
    }, {
        title: 'Samen',
        doorContent: 'blauw.svg',
        doorOutside: 'samensporten.svg',
        imageId: 'samensporten',
        side: 'right',
        audioPath: 'dit is teamsport.mp3',
        nextRoom: {
            id: 4,
            question: 'Wil je binnen of buiten sporten?',
            audioPath: 'uitleg keuze tussen binnen en buiten.mp3',
            options: [{
                title: 'Binnen',
                doorContent: 'gymzaal.svg',
                doorOutside: 'volleybalster met bal.svg',
                side: 'left',
                audioPath: 'dit is binnensporten.mp3',
                sportsOverviewBackground: 'gymzaal',
                sports: [{
                    name: 'Basketbal',
                    imagePath: 'basketballer.svg',
                    imageId: 'basketballer'
                }, {
                    name: 'Korfbal',
                    imagePath: 'korfballer.svg'
                }, {
                    name: 'Volleybal',
                    imagePath: 'volleybalster met bal.svg'
                }]
            }, {
                title: 'Buiten',
                doorContent: 'sportveldklein.svg',
                doorOutside: 'voetballer met goal en bal.svg',
                side: 'right',
                audioPath: 'dit is buitensporten.mp3',
                sportsOverviewBackground: 'sportveld',
                sports: [{
                    name: 'Voetbal',
                    imagePath: 'voetballer met goal en bal.svg'
                }, {
                    name: 'Korfbal',
                    imagePath: 'korfballer.svg'
                }]
            }]
        }
    }]
};
