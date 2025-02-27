import { useNavigate } from 'react-router';

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
    } else if (buttonName === 'contact') {
      navigate('/contact');
      // navigate to contact
    }
  };
  return (
    <div className='taskBar'>
      <button className='taskBarButtons' onClick={() => handleClick('/')}>
        Home
      </button>
      <button className='taskBarButtons' onClick={() => handleClick('docs')}>
        Docs
      </button>
      <button className='taskBarButtons' onClick={() => handleClick('about')}>
        About
      </button>
      <button className='taskBarButtons' onClick={() => handleClick('contact')}>
        Contact
      </button>
    </div>
  );
}
export default Taskbar;
