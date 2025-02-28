import { useNavigate } from 'react-router';
import database from './assets/database.png';
function Taskbar() {
  const navigate = useNavigate();
  const handleClick = (buttonName: string) => {
    // switch (buttonName) {
    //   case 'docs':
    //     navigate('/docs');
    //     break;
    //   case 'about':
    //     navigate('/about');
    //     break;
    //   case 'contact':
    //     navigate('/contact');
    //     break;
    // }
    if (buttonName === '/') {
      navigate('/');
    } else if (buttonName === 'docs') {
      navigate('/docs');
    } else if (buttonName === 'about') {
      navigate('/about');
    }
  };
  return (
    <div className='taskBar'>
      <span className='left'>
        <button
          className='taskBarButtons'
          id='Home'
          onClick={() => handleClick('/')}
        >
          <img src={database} />
        </button>
      </span>

      <span className='right'>
        <button className='taskBarButtons' onClick={() => handleClick('docs')}>
          Docs
        </button>
        <button className='taskBarButtons' onClick={() => handleClick('about')}>
          About
        </button>
        {/* <button
          className='taskBarButtons'
          onClick={() => handleClick('contact')}
        >
          Contact
        </button> */}
      </span>
    </div>
  );
}
export default Taskbar;
