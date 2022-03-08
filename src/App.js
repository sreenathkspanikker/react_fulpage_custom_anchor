import { Header, Section, ScrollTo } from './container/'

function App() {
  return (
    <div className="App">
      <Header />
      <Section className="one" id="one">Section One</Section>
      <Section className="two" id="two">Section Two</Section>
      <Section className="three" id="three">Section Three</Section>
      <Section className="four" id="four">Section Four</Section>
      <ScrollTo />
    </div>
  );
}

export default App;
