import EmptyTodo from "./components/EmptyTodo";
import tw from "tailwind-styled-components/dist/tailwind";

const Wrapper = tw.section`
  flex 
  flex-col 
  items-center 
  justify-start 
  gap-6
  w-full 
  max-w-xl 
  mx-auto 
  h-full`;

const H1 = tw.h1`
  mt-4
  sm:text-6xl 
  opacity-50
  font-bold
  tracking-wide`;

const Input = tw.input`
  border-2
  border-black
  rounded-sm
  w-full
  h-10
  px-5
  sm:text-sm
`;

function App() {
  return (
    <Wrapper>
      <H1>todos</H1>
      <EmptyTodo />
      <Input type="text" placeholder="E.g. Build a web app" />
    </Wrapper>
  );
}

export default App;
