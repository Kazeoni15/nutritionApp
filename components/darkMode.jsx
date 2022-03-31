import {useColorMode, Switch} from "@chakra-ui/react";
import {useState} from "react";

import NextLink from "next/link"


export default function DarkMode(){
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark"

  


    return(
        
        
        <Switch m="1rem" color="green" isChecked={isDark} onChange={toggleColorMode} />

        
    )
}