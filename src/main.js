import React from 'react'
export default function Main(props) {
  const divstyle={
    backgroundImage:'url('+ props.backimg +')',
    minHeight:'100%',
    color:'white',
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover'
  };
  
const headerStyle= {
  textAlign: 'center',
  height: 'fit-content',
  paddingTop: '28%',
  paddingBottom: '12%',
  fontSize:'187%'
};
 
  const contentStyle={
  background: 'white',
  color: 'black',
  lineHeight: '1.2rem',
  padding: '4rem 20%',
  Height: '37vw',
  fontFamily: 'cursive',
  fontSize: '0.9rem',
  
};
  return (
    <>
        <div className="whole" style={divstyle}>
          <div className="heading" style={headerStyle}><h1>{props.header}</h1></div>
          <div className="content" style={contentStyle}>{props.description}</div>
        </div>
    </>
  )
}
