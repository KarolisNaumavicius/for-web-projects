import './Button.css'

// Komponentas = funkcija
// Propsas = parametras
const Button = (props) => {

    const { style, showIcon, text, children, onClick } = props; 

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

    // Jeigu su const props, tada nereikia rašyti props visą laiką

    return  (
            <button className={props.style} onClick={onClick}>
              {props.showIcon && <spam></spam>}
              {props.text}
              {props.children}
              
            </button>
          );
        };
        
        // - && jeigu vienas teigiamas variantas

export default Button;