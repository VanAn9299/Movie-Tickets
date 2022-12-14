import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux/es/exports'
import './Seats.css'


function Seats(props) {
    const [seats, SetSeats] = useState(12)
    const ConvertNumLetter = (num) => {
        let letters = ''
        while (num >= 0) {
            letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
            num = Math.floor(num / 26) - 1
        }
        return letters
    }
    const CovertArraySeat = () => {
        var ls = [];
        for (let i = 0; i < seats; i++) {
            ls = [...ls, ConvertNumLetter(i)]
        }
        return ls;
    }
    const CovertArrayTicket = () => {
        var ls = [];

        if (props.TkRdc.num > 0) {
            for (let i = 0; i < props.TkRdc.num; i++) {
                ls = [...ls, i + 60]
            }
        }
        return ls;
    }
    const [choose, SetSeatChosen] = useState([])
    const [ticket, ManageTicket] = useState([])
    const [arrayMethod, SetArraymethod] = useState([])
    console.log(arrayMethod);
    const [arrayUse, SetArrayUse] = useState([])
    console.log(arrayUse);

    const ArrayMethodList = () => {
        var ls = [];
        ticket.map((v, i) => {
            return ls = [...ls, v]
        })
        return ls
    }
    const ArrayMethod = (chosen) => {
        var ls = arrayMethod;
        ls = [...ls, chosen]

        return ls
    }
    const CreateArrayUse = () => {
        var ls = [];
        if (choose !== []) {
            for (let i = (arrayMethod.length - props.TkRdc.num) + 1; i < arrayMethod.length; i++) {
                ls = [...ls, arrayMethod[i]]
            }
            ls = [...ls, choose]
        } else {
            for (let i = (arrayMethod.length - props.TkRdc.num); i < arrayMethod.length; i++) {
                ls = [...ls, arrayMethod[i]]
            }
        }
        return ls
    }
    const [next, SetNextCheck] = useState(0)
    const HandleCheckSeat = () => {
        var difArr = []
        var countCheck = 0;
        (props.TkRdc.num === arrayMethod.length ? ticket : arrayUse).forEach(n => {
            if (difArr.indexOf(n) === -1) {
                difArr = [...difArr, n]
            }
        });
        difArr.length === (props.TkRdc.num === arrayMethod.length ? ticket : arrayUse).length ? countCheck = 0 : countCheck = countCheck + 1
        difArr.indexOf(choose) > -1 ? countCheck = countCheck + 1 : countCheck = countCheck
        return countCheck;
    }
    useEffect(() => {
        ManageTicket(CovertArrayTicket())
    }, [props.TkRdc.num])
    useEffect(
        () => {
            SetArraymethod(ArrayMethodList())
        }, [ticket]
    )
    useEffect(() => {
        SetArraymethod(ArrayMethod(choose))
        SetArrayUse(CreateArrayUse())
        SetNextCheck(HandleCheckSeat())
    }, [choose])
    useEffect(() => {
        window.scrollTo(0, 0)
    
      }, [])
    return (
        <div className='box_seat'>
            {
                props.StRdc.bolean &&
                <div className='order'>
                    <h1>Ch???n gh???</h1>
                    <p>Vui lo??ng cho??n gh???? trong s?? ?????? gh???? phi??a d??????i. N????u ba??n mu????n cho??n loa??i gh???? kha??c ho????c thay ??????i s???? l??????ng ve?? mu????n mua vui lo??ng nh????p va??o B??????c 1 "Cho??n Ve??" ???? thanh c??ng cu?? b??n tr??n ?????? quay tr???? la??i ma??n hi??nh cho??n.</p>
                    <div className='table_seat'>
                        <div className='exam'>
                            <div><span></span> <p>Gh??? ???? b??n</p></div>
                            <div><span></span> <p>Gh??? ??ang ch???n</p></div>
                            <div><span></span> <p>Gh??? tr???ng</p></div>
                        </div>
                        <div className='theater'>
                            <h3>SCREEN</h3>
                            <div className='seat'>
                                <div className='control'>
                                    {
                                        CovertArraySeat().map((v, i) => {
                                            return (
                                                <p key={i}>{v}</p>
                                            )
                                        })
                                    }
                                </div>
                                <div className='seat'>
                                    <table>
                                        <tbody>
                                            {
                                                CovertArraySeat().map((v, i) => {
                                                    return (
                                                        <tr key={v}>
                                                            {
                                                                CovertArraySeat().map((v2, i2) => {
                                                                    return (
                                                                        <td onClick={() => {
                                                                            SetSeatChosen(i * 12 + i2);
                                                                        }}
                                                                            style={{
                                                                                // ( props.TkRdc.num === arrayMethod ? ticket : arrayUse)
                                                                                backgroundColor:
                                                                                    (props.TkRdc.num === arrayMethod.length ? ticket : arrayUse).indexOf(i * 12 + i2) >= 0 ? 'red' : '#ccc',
                                                                            }} key={i * 12 + i2} >{i2 + 1}</td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className='control'>
                                    {
                                        CovertArraySeat().map((v, i) => {
                                            return (
                                                <p key={i}>{v}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='checkSeat'>
                            {
                                next === 0 ?
                                    <button onClick={() => {
                                        {
                                            props.CheckTicketSagaFunc(true);
                                            props.ArraySeatSagaFunc(props.TkRdc.num === arrayMethod.length ? ticket : arrayUse)
                                        }
                                    }}>Thanh to??n</button>
                                    :
                                    <h2 style={{ color: 'red', backgroundColor: 'yellow' }}>
                                        Vui l??ng ki???m tra l???i.
                                    </h2>
                            }
                        </div>
                    </div>
                </div>}
        </div >
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        login: state.login,
        RegisterRdc: state.RegisterRdc,
        loginRdc: state.loginRdc,
        StRdc: state.StRdc,
        TkRdc: state.TkRdc,


    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        SeatSagaFunc: (bl) => {
            dispatch({ type: "SeatSaga", payload: bl })
        },
        CheckTicketSagaFunc: (bl) => {
            dispatch({ type: "CheckTicketSaga", payload: bl })
        },
        ArraySeatSagaFunc: (ls) => {
            dispatch({ type: "ArraySeatSaga", payload: ls })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seats)