import React from 'react'
import logo from '../../assets/img/ICFAI Tech-Logo.jpg'


export default ()=>{
    return(
    <div>
    <div id="head" style={{fontSize:"smaller"}}>
        <div id="headcontent" style={{borderBottom: "solid 12 red",color: "white",backgroundColor: "blue"}}>
            <table style={{fontSize:"smaller" }}  width="100%" border="0" cellSpacing="0" cellPadding="2">
                <tbody>
                <tr>
                    <td width="55%" >
                        <div align="right">
                            &nbsp;&nbsp;
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div id="header" style={{height: "90px", marginTop: "10px"}}>
        <table width="100%">
            <tbody>
            <tr>
                <td style={{width: 162+"px"}} rowSpan="2" valign="top" align="left">
                    <img src="./../assets/img/IFHE-Logo.jpg" alt="Logo"/></td>
                <td style={{color: "#29166f", height: "38px"}} align="center">
                    <strong>
                        <span style={{fontSize: "16pt"}}>
                            <em>Research Information Management System</em>
                        </span>
                    </strong>
                </td>
                <td align="right" style={{width: "162px"}} rowSpan="2" valign="top">
                    <img src={logo} width="122" height="60" alt="logo" />
                </td>
            </tr>
            </tbody>

        </table>
    </div>
    <div id="head" style={{fontSize:"smaller"}}>
        <div id="headcontent" style={{borderBottom: "solid 12 red",color: "white",backgroundColor: "blue"}}>
            <table style={{fontSize:"smaller"}}  width="100%" border="0" cellSpacing="0" cellPadding="2">
                <tbody>
                <tr >
                    <td width="45%" >
                        <div id="divenr"><strong>  &nbsp;&nbsp;&nbsp;&nbsp;  </strong></div>
                        <span id="lblUserID"></span>
                    </td>
                    <td width="55%" >
                        <div align="right">
                        &nbsp;&nbsp;
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div id="nav" style={{color:"blue"}}>
        &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </div>
    )
}