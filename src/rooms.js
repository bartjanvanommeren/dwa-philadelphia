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
                doorOutside: 'tafeltennis.svg',
                side: 'left',
                audioPath: 'dit is met bal.mp3',
                sports: [{
                    name: 'Tennis'
                }, {
                    name: 'Badminton',
                    imagePath: 'badminton.svg'
                }, {
                    name: 'Tafeltennis',
                    imagePath: 'tafeltennis.svg'
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
                                sports: [{
                                    name: 'Baantjes zwemmen',
                                    audioPath: 'dit is baantjeszwemmen.mp3',
                                    imagePath: 'baantjeszwemmen.svg'
                                }, {
                                    name: 'Vrij zwemmen',
                                    audioPath: 'dit is vrijzwemmen.mp3',
                                    imagePath: 'vrijzwemmen.svg'
                                }, {
                                    name: 'Aqua gym',
                                    audioPath: 'dit is aquagym.mp3',
                                    imagePath: 'aquagym.svg'
                                }]
                            }, {
                                title: 'Zonder water',
                                doorContent: 'sportzaal.svg',
                                doorOutside: '',
                                side: 'right',
                                audioPath: 'dit is geen zwemsport.mp3',
                                sports: [{
                                    name: 'Fitness',
                                    imagePath: 'fitness.svg'
                                }, {
                                    name: 'Yoga',
                                    imagePath: 'yoga.svg'
                                }, {
                                    name: 'Dansen',
                                    imagePath: 'dansen.svg'
                                }]
                            }]
                        }
                    }, {
                        title: 'Buiten',
                        doorContent: 'weiland2.svg',
                        doorOutside: 'alleenzonderbalbuiten.svg',
                        side: 'right',
                        audioPath: 'dit is buitensporten.mp3',
                        sports: [{
                            name: 'Hardlopen',
                            imagePath: 'hardlopen.svg'
                        }, {
                            name: 'Fietsen',
                            imagePath: 'fietsen.svg'
                        }, {
                            name: 'Peerdrijden',
                            imagePath: 'peerdrijden.svg'
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
                sports: [{
                    name: 'Basketbal',
                    imagePath: 'basketballer.svg'
                }, {
                    name: 'Korfbal',
                    imagePath: ''
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
                sports: [{
                    name: 'Voetbal',
                    imagePath: 'voetballer met goal en bal.svg'
                }, {
                    name: 'Korfbal'
                }]
            }]
        }
    }]
};
