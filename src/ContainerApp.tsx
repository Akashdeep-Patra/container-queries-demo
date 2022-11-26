import ContainerCard from './components/ContainerCard/ContainerCard';

function ContainerApp() {
  return (
    <div className='App  p-10 flex flex-col gap-5 justify-center'>
      <div className='@container/main'>
        <ContainerCard />
      </div>
      <div className='gap-5 max-w-[100vw] flex flex-col'>
        <div className='flex @container/grid flex-col md:flex-row gap-5'>
          <ContainerCard />
          <ContainerCard />
        </div>
        <div className='flex @container/grid flex-col md:flex-row gap-5'>
          <ContainerCard />
          <ContainerCard />
        </div>
      </div>
    </div>
  );
}

export default ContainerApp;
