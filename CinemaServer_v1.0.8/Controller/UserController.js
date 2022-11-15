const db = require('./Common/DbHelper');

const CM = {
    EMAIL: 'email',
    PASS: 'password',
    CARD: 'card',
    CARD_NUM: 'cardNum',
    CARD_NAME: 'CardName',
    CARD_EXPIRATION_DATE: 'exDate',
    CARD_CVC: 'cvc',
    TICKET: 'ticket',
    TICKET_TIME: 'time',
    TICKET_PLACE: 'place'
}

module.exports = {
    GetUser: async (req, res) => {
        try {
            let data = db.Read();
            let email = req.query.email;
            let user = data[email];
            if (user) {
                let temp = { ...user };
                
                for (const key in temp[CM.CARD]) {
                    temp[CM.CARD][key][CM.CARD_CVC] = undefined;
                    temp[CM.CARD][key][CM.CARD_EXPIRATION_DATE] = undefined;
                }

                temp.password = undefined;
                res.send(temp);
            }
            else {
                res.sendStatus(404);
            }

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    Login: async (req, res) => {
        try {
            let data = db.Read();
            let email = req.body[CM.EMAIL];
            let pass = req.body[CM.PASS]
            if (email && pass) {
                let user = data[email];
                if (user && user[CM.PASS] == pass) {
                    res.sendStatus(200)
                    return;
                }
                
            }

            res.sendStatus(404);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    Register: async (req, res) => {
        try {
            let data = db.Read();
            let email = req.body[CM.EMAIL];
            let pass = req.body[CM.PASS]

            if (email && pass) {
                if (!data[email]) {
                    db.Insert({
                        [email]: {
                            [CM.EMAIL]: email,
                            [CM.PASS]: pass,
                            [CM.CARD]: {},
                            [CM.TICKET]: []
                        }
                    });
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404)
                }
            } else {
                res.sendStatus(400);
            }
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    Payment: async (req, res) => {
        try {
            let data = db.Read();
            let email = req.body[CM.EMAIL];
            let card = req.body[CM.CARD]
            let ticket = req.body[CM.TICKET]

            if (email && card) {
                if (data[email]) {
                    let cardNum = data[email][CM.CARD][CM.CARD_NUM];
                    let Userticket = data[email][CM.TICKET];

                    if (!cardNum) {
                        for (const key in card) {
                            if (!card[key]) {
                                res.sendStatus(400)
                                return;
                            }
                        }

                        data[email][CM.CARD][card[CM.CARD_NUM]] = {
                            [CM.CARD_NAME]: card[CM.CARD_NAME],
                            [CM.CARD_CVC]: card[CM.CARD_CVC],
                            [CM.CARD_EXPIRATION_DATE]: card[CM.CARD_EXPIRATION_DATE]
                        }
                    }

                    Userticket.push(ticket);

                    db.Write(data)

                    res.sendStatus(200);
                } else {
                    res.sendStatus(404)
                }
            } else {
                res.sendStatus(400);
            }
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
}