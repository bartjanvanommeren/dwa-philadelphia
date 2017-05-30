export default {
    id: 0,
    question: 'Wil je alleen of samen sporten?',
    options: [{
        title: 'Alleen',
        imagePath: 'pathToImage',
        audioPath: 'pathToAudio',
        nextRoom: {
            id: 1,
            question: 'Wil je met een bal of zonder bal sporten?',
            options: [{
                title: 'Met een bal',
                imagePath: 'pathToImage',
                audioPath: 'pathToAudio',
                sports: [
                    {name: 'Tennis'},
                    {name: 'Badminton'},
                    {name: 'Tafeltennis'}
                ]
            }, {
                title: 'Zonder een bal',
                imagePath: 'pathToImage',
                audioPath: 'pathToAudio',
                nextRoom: {
                    id: 2,
                    question: 'Wil je binnen of buiten sporten?',
                    options: [{
                        title: 'Binnen',
                        imagePath: 'pathToImage',
                        audioPath: 'pathToAudio',
                        nextRoom: {
                            id: 3,
                            question: 'Wil je met of zonder water sporten?',
                            options: [{
                                title: 'Met water',
                                imagePath: 'pathToImage',
                                audioPath: 'pathToAudio',
                                sports: [
                                    {name: 'Baantjes zwemmen'},
                                    {name: 'Vrij zwemmen'},
                                    {name: 'Aqua gym'}
                                ]
                            }, {
                                title: 'Zonder water',
                                imagePath: 'pathToImage',
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
                        imagePath: 'pathToImage',
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
        imagePath: 'pathToImage',
        audioPath: 'pathToAudio',
        nextRoom: {
            id: 4,
            question: 'Wil je binnen of buiten sporten?',
            options: [{
                title: 'Binnen',
                imagePath: 'pathToImage',
                audioPath: 'pathToAudio',
                sports: [
                    {name: 'Basketbal'},
                    {name: 'Korfbal'},
                    {name: 'Volleybal'}
                ]
            }, {
                title: 'Buiten',
                imagePath: 'pathToImage',
                audioPath: 'pathToAudio',
                sports: [
                    {name: 'Voetbal'},
                    {name: 'Korfbal'}
                ]
            }]
        }
    }]
};
