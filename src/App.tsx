import Card from './components/Card/Card';

function App() {
  return (
    <div className='App  p-10 flex flex-col gap-5 justify-center'>
      <Card />
      <div className='gap-5 max-w-[100vw] flex flex-col'>
        <div className='flex  flex-col md:flex-row gap-5'>
          <Card />
          <Card />
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
