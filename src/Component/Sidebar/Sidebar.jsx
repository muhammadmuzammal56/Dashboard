import React, { useState } from "react";
import './Sidebar.css'
import Logo  from '../../imgs/logo.png'
import { SidebarData } from "../../Data/Data";
import {UilSignOutAlt,UilBars} from "@iconscout/react-unicons"
import {motion} from 'framer-motion'
const Sidebar =()=>{
    const [Selected,setSelected]=useState(0)
    const [expanded,setExpanded]=useState(true)
    const sidebarVariants = {
        true:{
            left:'0'
        },
        false:{
            left:'-60%'
        }
    } 
return(
    <>
    <div className="bars" style={expanded?{left:'60%'}:{left:'5%'}} onClick={()=>setExpanded(!expanded)}>
                <UilBars/>
            </div>
        <motion.div className="Sidebar" variants={sidebarVariants} animate={window.innerWidth<=768?`${expanded}`:''} >
            {/* log */}
            <div className="logo">
                <img src={Logo} alt=""/>
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            {/* menu */}
            <div className="menu">
                {
                    // "menuitem active"
                    SidebarData.map((item,index)=>{
                        return(
                            <div className={Selected===index?"menuitem active":"menuitem"}
                            key={index}
                            onClick={()=>setSelected(index)}>
                                <item.icon/>
                                <span>
                                    {item.heading}
                                </span>
                            </div>
                        )
                    })
                }
                <div className="menuitem">
                    <UilSignOutAlt/>
                </div>
            </div>
        </motion.div>
    
    </>
)
}
export default Sidebar;