export default function Footer() {
  return (
    <footer className='App-footer relative mt-auto bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-white'>
      <div className='Footer-center flex-grow flex items-center justify-center'>
        <p className='text-center'>&copy; {new Date().getFullYear()} Tiago Cruz</p>
      </div>
      <div className='SocialIcons absolute right-5 flex top-4 gap-2'>
        <a
          href='https://www.linkedin.com/in/tiago-cruz1224/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='/images/linkedin-icon.jpg' alt='LinkedIn' className='w-6 h-6' />
        </a>
        <a href='https://www.instagram.com/tiagocruzdev/' target='_blank' rel='noopener noreferrer'>
          <img src='/images/instagram-icon.png' alt='Instagram' className='w-6 h-6' />
        </a>
        <a href='https://github.com/TiagoCruz1224' target='_blank' rel='noopener noreferrer'>
          <img src='/images/github-icon.png' alt='GitHub' className='w-6 h-6' />
        </a>
      </div>
    </footer>
  );
}
