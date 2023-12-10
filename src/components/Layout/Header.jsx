import MenuLink from '../MenuLink';

export default function Header({ menuVisible, toggleMenu }) {
  return (
    <header
      className={`App-header p-6 text-white flex justify-between items-center h-screen relative ${
        menuVisible ? 'bg-black' : ''
      } ${menuVisible ? 'bg-opacity-80' : ''}`}
    >
      <div
        className='image z-2 absolute left-0 top-0 w-full h-full'
        style={{
          background: 'url(/images/image-header.jpg)',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className='image z-2 absolute  bg-gradient-to-r from-purple-900 to-blue-600 opacity-50 left-0 top-0 w-full h-full'></div>
      <div className='Profile flex items-center justify-center z-2 relative flex-col gap-10 w-full text-center'>
        <img
          src='/images/Tiagooo.png'
          alt='Tiago Cruz'
          className='rounded-full w-64 h-64 object-cover transform hover:scale-125 transition-transform duration-300 ease-in-out'
        />
        <div className='Profile-info flex flex-col gap-2'>
          <h1 className='text-4xl font-bold text-white'>Tiago Cruz</h1>
          <h3 className='text-2xl text-white border-b-white border-b-2 pb-1'>
            Fullstack Developer
          </h3>
        </div>
      </div>
      {menuVisible ? (
        <div className='Buttons flex'>
          <button
            className='text-white focus:outline-none text-6xl z-10 absolute top-6 right-6 transform transition-transform hover:scale-110'
            onClick={toggleMenu}
          >
            x
          </button>
        </div>
      ) : (
        <button
          className={`text-white focus:outline-none text-6xl absolute z-10 top-6 right-6 ${
            menuVisible ? 'hidden' : ''
          } transform transition-transform hover:scale-110`}
          onClick={toggleMenu}
        >
          <span>&#8801;</span>
        </button>
      )}
      {menuVisible && (
        <div className='Sidebar flex flex-col items-center justify-center gap-5 text-center bg-gradient-to-r from-gray-800 to-gray-900 p-4 space-y-4 transform transition-transform fixed right-0 h-full w-full'>
          <MenuLink url={'#about'} text={'Sobre mim'} toggleMenu={toggleMenu} />
          <MenuLink url={'#skills'} text={'Skills'} toggleMenu={toggleMenu} />
          <MenuLink url={'#portfolio'} text={'Portfólio'} toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
}
