import React from 'react';

const nav = () => {
    const navList = [
        {content : 'Main', herf:''},
        {content : 'Review', herf:'Review'},
        {content : 'Cardlist', herf:'Cardlist'},
        {content : 'Notice', herf:'Notice'}
    ]
    return (
        <div id='nav'>
            <h2 className='blind'>메인 메뉴</h2>
            <ul>
                {  // 중괄호로 묶어줄 떄는 return 써줘야함
                     navList.map((element, index)=>{
                         return(
                            <li key={index}>{element.content}</li>
                         )
                     })
                }
               
            </ul>
        </div>
    );
};

export default nav;