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
  minHeight: '30vw',
  textAlign: 'center',
  paddingTop: '15%',
};
 
  const contentStyle={
  textAlign:'left',
  background: 'white',
  color: 'black',
  lineHeight: '2rem',
  padding: '4rem 18%',
  Height: '37vw',
  fontFamily: 'cursive',
  fontSize: '0.9rem',
  letterSpacing:'0.1rem'
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
