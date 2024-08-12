import {useState} from "react";
import {Container, Input, FormLabel, FormControl, Button, Text, Textarea} from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/menu";
import {State} from "./types";
import "./App.css";

export default  function App(){
  const [state,setState] = useState<State>({
    url: "http://localhost:8080",
    method: "GET",
    body: "{ }",
    response: "",
    headers: "{ }"
  });

  function set(key: string, value: any){
      setState((p) => ({...p, [key]: value}));
  }

  function send() {

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
            {state.method}
          </MenuButton>
          <Input variant='filled' placeholder='https://' onChange={(e) => set("url", e.target.value)} />
          <Button onClick={send} colorScheme="blue">Send</Button>
        </div>
        <MenuList>
          <MenuItem onClick={()=> set("method", "GET")}>GET</MenuItem>
          <MenuItem onClick={()=> set("method", "POST")}>POST</MenuItem>
          <MenuItem onClick={()=> set("method", "PUT")}>PUT</MenuItem>
          <MenuItem onClick={()=> set("method", "DELETE")}>DELETE</MenuItem>
        </MenuList>
      </Menu>
    </FormControl>
    <Text my='20px'>Headers</Text>
    <Textarea
        value={state.headers}
        onChange={(e)=>set("headers",e.target.value)}
        placeholder='Object'
    />
    <Text my='20px'>Body</Text>
    <Textarea
        value={state.body}
        onChange={(e)=>set("body",e.target.value)}
        placeholder='Body'
    />
  </Container>);
}