import React from 'react'
export default function Main(props) {
  const divstyle={
    backgroundImage:'url('+ props.backimg +')',
    boxShadow: 'inset 13px -18px 0 2000px rgba(0,0,0,.75)',
    minHeight:'100%',
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'contain'
  };
  
const headerStyle= {
  textAlign: 'center',
  height: 'fit-content',
  fontSize:'187%'
};
 
  const contentStyle={
  background: 'white',
  color: 'black',
  lineHeight: '1.8rem',
  Height: '37vw',
  fontSize: '1.1rem',
  
};
  return (
    <>
        <div className="whole" style={divstyle}>
          <div className="heading" style={headerStyle}><h1 style={{color:'white'}}>{props.header}</h1></div>
          <div className="content" style={contentStyle}>{props.description}</div>
        </div>
    </>
  )
}
