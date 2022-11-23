import React, { Component } from 'react'; //for function
// import React,{Component} from 'react'; //for class


const Header = function(){
const headerStyle = {
    textAlign:'center',
    padding:20,
    background : '#000',
    color : '#fff',
    textTransform: 'uppercase'
}

    return(
        <div className="header" style={headerStyle}>
            Phone Directory
        </div>
    );
}

//for class
// class Header extends Component{
//     render(){
//         return(
//             <div className="header">
//                        Phone Directory
//             </div>
//         )
//     }
// }

export default Header;