export default {
    id: 0,
    question: 'Wil je alleen of samen sporten?',
    options: [{
        title: 'Alleen',
        doorContent: 'blauw.svg',
        doorOutside: 'alleensportengif2.gif',
        side: 'left',
        audioPath: 'pathToAudio',
        nextRoom: {
            id: 1,
            question: 'Wil je met een bal of zonder bal sporten?',
            options: [{
                title: 'Met een bal',
                doorContent: 'blauw.svg',
                doorOutside: 'pingpongtafel2.svg',
                side: 'left',
                audioPath: 'pathToAudio',
                sports: [
                    {name: 'Tennis'},
                    {name: 'Badminton'},
                    {name: 'Tafeltennis'}
                ]
            }, {
                title: 'Zonder een bal',
                doorContent: 'blauw.svg',
                doorOutside: 'Alleengeenbal.svg',
                side: 'right',
                audioPath: 'pathToAudio',
                nextRoom: {
                    id: 2,
                    question: 'Wil je binnen of buiten sporten?',
                    options: [{
                        title: 'Binnen',
                        doorContent: 'blauw.svg',
                        doorOutside: 'alleensportengif2.gif',
                        side: 'left',
                        audioPath: 'pathToAudio',
                        nextRoom: {
                            id: 3,
                            question: 'Wil je met of zonder water sporten?',
                            options: [{
                                title: 'Met water',
                                doorContent: 'zwembad klein.svg',
                                doorOutside: '',
                                side: 'left',
                                audioPath: 'pathToAudio',
                                sports: [
                                    {name: 'Baantjes zwemmen'},
                                    {name: 'Vrij zwemmen'},
                                    {name: 'Aqua gym'}
                                ]
                            }, {
                                title: 'Zonder water',
                                doorContent: 'sportzaal.svg',
                                doorOutside: '',
                                side: 'right',
                                audioPath: 'pathToAudio',
                                sports: [
                                    {name: 'Fitness'},
                                    {name: 'Yoga'},
                                    {name: 'Dansen'}
                                ]
                            }]
                        }
                    }, {
                        title: 'Buiten',
                        doorContent: 'weiland2.svg',
                        doorOutside: 'alleenzonderbalbuiten.svg',
                        side: 'right',
                        audioPath: 'pathToAudio',
                        sports: [
                            {name: 'Hardlopen'},
                            {name: 'Fietsen'},
                            {name: 'Peerdrijden'}
                        ]
                    }]
                }
            }]
        }
    }, {
        title: 'Samen',
        doorContent: 'blauw.svg',
        doorOutside: 'teamsporters.svg',
        side: 'right',
        audioPath: 'pathToAudio',
        nextRoom: {
            id: 4,
            question: 'Wil je binnen of buiten sporten?',
            options: [{
                title: 'Binnen',
                doorContent: 'blauw.svg',
                doorOutside: 'volleybalster met bal.svg',
                side: 'left',
                audioPath: 'pathToAudio',
                sports: [
                    {name: 'Basketbal'},
                    {name: 'Korfbal'},
                    {name: 'Volleybal'}
                ]
            }, {
                title: 'Buiten',
                doorContent: 'blauw.svg',
                doorOutside: 'voetballer met goal en bal.svg',
                side: 'right',
                audioPath: 'pathToAudio',
                sports: [
                    {name: 'Voetbal'},
                    {name: 'Korfbal'}
                ]
            }]
        }
    }]
};
