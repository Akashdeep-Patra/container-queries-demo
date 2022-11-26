import Card from './components/Card/Card';

function ContainerApp() {
  return (
    <div className='App  p-10 flex flex-col gap-5 justify-center'>
      <div className='@container/main'>
        <Card />
      </div>
      <div className='gap-5 max-w-[100vw] flex flex-col'>
        <div className='flex @container/grid flex-col md:flex-row gap-5'>
          <Card />
          <Card />
        </div>
        <div className='flex @container/grid flex-col md:flex-row gap-5'>
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default ContainerApp;
