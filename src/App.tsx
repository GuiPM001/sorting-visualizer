import Main from "components/Main";
import Controller from "components/Controller";

function App() {
  return (
    <main className="h-screen w-screen grid grid-rows-12 gap-6">
      <h1 className="text-2xl font-bold px-6 self-center">
        Sorting visualizer
      </h1>

      <Controller />
      <Main />
    </main>
  );
}

export default App;
