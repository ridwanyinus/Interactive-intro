import './App.css';
import Profile from './components/Profile.tsx';
import TypeIt from './components/TypeIt.tsx';

const TypeItComponent: React.FC = () => {
  return (
    <main>
      <div className='particles-container'>
        <Profile />
      </div>
      <TypeIt />
    </main>
  );
};

export default TypeItComponent;
