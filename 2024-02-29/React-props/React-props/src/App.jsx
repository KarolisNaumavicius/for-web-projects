import Button from "./components/button/Button.jsx";
import Card from './components/card/Card.jsx';
import "./App.css";
import './components/card/Card.css';
import LampImg from "./assets/lamp-svgrepo-com.svg";
import ThunderImg from "./assets/flash-thunder-svgrepo-com.svg";
import ToolsImg from "./assets/tools-hammer-svgrepo-com.svg";
import BoxImg from "./assets/box-svgrepo-com.svg";
import NutImg from "./assets/nut-and-bolt-svgrepo-com.svg";
import KeyImg from "./assets/key-svgrepo-com.svg";
import ViteImg from "./assets/vite-svgrepo-com.svg";


const App = () => {

  const data = [
    {
      title: 'Instant Server Start',
      content: 'On demand file serving over native ESM, no bundling required!',
      img: LampImg
    },
    {
      title: 'Lightning Fast HMR',
      content: 'Hot Module Replacement (HMR) that stays fast regardless of app size.',
      img: ThunderImg
    },
    {
      title: 'Rich Features',
      content: 'Out-of-the-box support for TypeScript, JSX, CSS and more.',
      img: ToolsImg
    },
    {
      title: 'Optimized Build',
      content: 'Pre-configured Rollup build with multi-page and library mode support.',
      img: BoxImg
    },
    {
      title: 'Universal Plugins',
      content: 'Rollup-superset plugin interface shared between dev and build.',
      img: NutImg
    },
    {
      title: 'Fully Typed APIs',
      content: 'Flexible programmatic APIs with full TypeScript typing.',
      img: KeyImg
    }
  ];

  const getStarted = () => {

    window.location.href = "https://vitejs.dev/guide/";
    console.log('Button clicked getStarted!');
  };

  const whyVite = () => {
    window.location.href = "https://vitejs.dev/guide/why.html";
    console.log('Button clicked whyVite!');
  };

  const viewOnGit = () => {
    window.location.href = "https://github.com/vitejs/vite";
    console.log('Button clicked viewOnGit!');
  };

  const ViteConf = () => {
    window.location.href = "https://viteconf.org/?utm=vite-homepage";
    console.log('Button clicked ViteConf!');
  };

  const sponsorVite = () => {
    window.location.href = "https://github.com/sponsors/vitejs";
    console.log('Button clicked ViteConf!');
  }; 
  
  const sponsorEven = () => {
    window.location.href = "https://github.com/sponsors/yyx990803";
    console.log('Button clicked ViteConf!');
  };

  console.log(ViteImg)
  return (
    <div className="app-css"> 
    <div className="vite-symbol">
      <img src={ViteImg} alt="" />
    </div>
    <div className="vite-shadow">
    </div>
      <div className='paragraph'><h1 className="vite-word">Vite</h1>
      <div className="paragraph-two">
      <h1>Next Generation</h1>
      <h1>Frontend Tooling</h1>
      </div>
      <div className="paragraph-three">
      <h3>Get ready for a development environment that can</h3>
      <h3>finally catch up with you.</h3>
      </div>
      </div>
      <div className="buttons">
      <Button text="Get Started" style="active" onClick={getStarted} />
      <Button text="Why Vite?" onClick={whyVite} />
      <Button text="View on Github" onClick={viewOnGit} /> <div>
        <img src={ThunderImg} className="imageTh" />
      <Button text="ViteConf 23!" style="active" showIcon={true} onClick={ViteConf}
      />
       </div>
      </div>
      <div className='cards'>
      {data.map((value, index) => (
        <Card key={index} value={value} alt=""/>
      ))}
    </div>
      <div className='sponsor-buttons'>
      <Button text="Sponsor Vite" onClick={sponsorVite} />
      <Button text="Sponsor Even You" onClick={sponsorEven} 
      />
      </div>
    </div>
  );
};

export default App
