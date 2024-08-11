import {Fragment, useState} from "react";
import {Container, Input, FormLabel, FormControl,Button} from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/menu";
import {State} from "./types";
import "./App.css";

export default  function App(){
  const [state,setState] = useState<State>({
    url: ""
  });

  function set(key: string, value: any){
      setState((p) => ({...p, [key]: value}));
  }

  return (<Container className="container">
    <FormControl isRequired>
      <FormLabel>Url</FormLabel>
      <Menu orientation="horizontal">
        <div className="line">
          <MenuButton
              as={Button}
              transition='all 0.2s'
              borderRadius='md'
              borderWidth='1px'
              _hover={{ bg: 'gray.400' }}
              _expanded={{ bg: 'blue.400' }}
              _focus={{ boxShadow: 'outline' }}
              px={4}
              py={2}
          >
            GET
          </MenuButton>
          <Input placeholder='https://' onChange={(e) => set("url", e.target.value)} />
        </div>
        <MenuList>
          <MenuItem>GET</MenuItem>
          <MenuItem>POST</MenuItem>
          <MenuItem>PUT</MenuItem>
          <MenuItem>DELETE</MenuItem>
        </MenuList>
      </Menu>
    </FormControl>
  </Container>);
}