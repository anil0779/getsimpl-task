import React from 'react';
import './section.css';

export function Section(props) {
    const { items = [], sectionName, direction, wrap, itemsWithBackground } = props;

    const itemsClasses = (itemsWithBackground && {
        borderRadius: '50%',
        height: '56px',
        width: '56px',
        background: '#F6F6F6',
        textAlign: 'center'
    }) || { textAlign: 'center' }

    const sectionBodyClasses = direction === 'vertical' ?
        'section-body-vertical' : 'section-body-horizontal';

    return (
        <div className='section-container'>
            <div className='section-header' style={{ borderBottom: '1px solid #E0E0E0' }}>
                {sectionName}
            </div>
            <div className={`section-body ${sectionBodyClasses}`}>
                <div className={`${direction} ${wrap ? 'wrap' : ''}`}>
                    {
                        direction === 'horizontal' ?
                            items && items.map((item, index) => {
                                return (
                                    <div key={index} style={{ padding: '0.5rem' }}>
                                        <div style={itemsClasses}>
                                            <img style={{
                                                marginTop: '33%'
                                            }}
                                                width={'32px'} height={'32px'}
                                                src={item.src} alt={item.alt} className='fa fa-font'></img>
                                        </div>
                                        <div><small>{item.name}</small></div>
                                    </div>
                                )
                            })
                            :
                            items && items.map((item, index) => {
                                return (
                                    <div key={index} className={'items-container'} style={{ padding: '1rem', display: 'flex', flexDirection: 'row' }}>
                                        <div className='fa fa-font' style={{ width: '15%' }}></div>
                                        <div style={{ width: '70%' }}>
                                            <div>{item.name}</div>
                                            <div><small>{item.info}</small></div>
                                            <div><small>{item.additionalInfo}</small></div>
                                        </div>
                                        <div style={{ width: '15%', textAlign: 'right' }}><span>&#x20b9;</span>{item.amt}</div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}