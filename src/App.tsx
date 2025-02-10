import RootLayout from "./components/layout/RootLayout";
import { Toaster } from "./components/ui/sonner"

const App = () => {
  return (
    <>
      <RootLayout/>
      <Toaster closeButton />
    </>
  );
};

export default App;