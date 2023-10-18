import { useEffect, useState } from "react";
import { useHttp } from "./utils/useHttps";
import {
  Button,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import AddTodo from "./components/add-todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const getTodos = async () => {
    const data = await useHttp.get("todos");
    setTodos(data.data);
  };

  const { toggleColorMode, colorMode } = useColorMode();

  useEffect(() => {
    getTodos();
  });

  return (
    <Container marginTop={40}>
      <AddTodo
        getTodos={getTodos}
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
      />

      <Button onClick={toggleColorMode} marginLeft={10}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>

      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Completed Todos</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* <Todo
              todos={todos}
              getTodos={getTodos}
              currentTodo={currentTodo}
              setCurrentTodo={setCurrentTodo}
            /> */}
          </TabPanel>
          <TabPanel>{/* <CompletedTodos /> */}</TabPanel>
          <TabPanel>
            <p>Tab panel three</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default App;
