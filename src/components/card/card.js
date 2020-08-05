import React from 'react';
import './card.css';

export function Card(props) {
    const {
        logo,
        isBillDue,
        spentTillNow = 0,
        dueDate = null,
        isPayable = null,
        amtToPay,
        info
    } = props;

    return (

        <div className='card'>
            <div className='card-section'>
                <div className='logo fa fa-font'>
                    {logo && <img src={logo} alt='logo' />}
                </div>
                <div>
                    {isBillDue && <div className='bill-overdue' style={{ color: 'red' }}>BILL OVERDUE</div>}
                </div>
            </div>
            <div className='card-section'>
                <div>
                    <div className='spent-till-now-txt'>Spent Till Now</div>
                    <div>
                        <font size="+3" className='spent-till-now'> {spentTillNow}</font>

                    </div>
                </div>
                {
                    dueDate ?
                        <div>
                            <div className='due-date-txt'>DUE DATE</div>
                            <div>{dueDate}</div>
                        </div>
                        :
                        <div>
                            <a href={'abc'}>FAQ</a>
                        </div>
                }
            </div>
            <div className='card-section'>
                {
                    isPayable ?
                        <button>Pay <span>&#x20b9;</span> {amtToPay}</button>
                        :
                        <p>{info}</p>
                }

            </div>
        </div>
    )
}