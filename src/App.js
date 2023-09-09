import logo from './logo.svg';
import './App.css';
// import './content/icons/';
import logos from "./content/icons/github.svg";
import logos1 from "./content/icons/cibgreensock.svg";
import logos2 from "./content/icons/logos_bootstrap.svg";
import logos3 from "./content/icons/logos_git-icon.svg";
import logos4 from "./content/icons/logos_sass.svg";
import logos5 from "./content/icons/Vector.svg";
import logos6 from "./content/icons/vscode-icons_file-type-css.svg";
import logos7 from "./content/icons/vscode-icons_file-type-html.svg";
import logos8 from "./content/icons/vscode-icons_file-type-js-official.svg";
import logos9 from "./content/icons/vscode-icons_file-type-tailwind.svg";
import logos10 from "./content/icons/vscode-icons_file-type-vscode.svg";
import logos11 from "./content/icons/logos_react.svg";
import PersonalPhoto from "./content/PersonalPhoto/MatheusJesus.jpeg";

//Below are the imports of the project images
import project1 from "./content/thumbnailProject/Rectangle 4.svg";
import project2 from "./content/thumbnailProject/Rectangle 6.svg";
import project3 from "./content/thumbnailProject/Rectangle 8.svg";
import project4 from "./content/thumbnailProject/Rectangle 12.svg";
import project5 from "./content/thumbnailProject/Rectangle 13.svg";
import project6 from "./content/thumbnailProject/Rectangle 14.svg";




function App() {
  return (

   
    
    <div className="App">
        <header className = "header">
          <nav>
            MSJS
          </nav>
          <ul className="unorderedList1" >
            <li className="List1">Home</li>
            <li className="List1">About</li>
            <li className="List1">Tech Stack</li>
            <li className="List1">Project</li>
            <li className="List1">Contact</li>
          </ul>
          
        </header>


        <div className="apresentation"> 
        
          <div>
            Hello👋<br/>
            My name is <br/> Matheus Jesus
            <br/>
            I build things for web
          </div>
          <img className="PersonalPhoto" src={PersonalPhoto} alt="PersonalPhoto"></img>
        </div>

              <div className="tech"> My tech Stack</div>
              <div className="techWork"> Technologies I've been working with recently</div>

          <div>
            <div className="FormImg" >
              <img src={logos} alt='GitHub'></img>
              <img src={logos1} alt='GitHub'></img>
              <img src={logos2} alt='GitHub'></img>
              <img src={logos3} alt='GitHub'></img>
              <img src={logos4} alt='GitHub'></img>
              <img src={logos5} alt='GitHub'></img>
              <img src={logos6} alt='GitHub'></img>
              <img src={logos7} alt='GitHub'></img>
              <img src={logos8} alt='GitHub'></img>
              <img src={logos9} alt='GitHub'></img>
              <img src={logos10} alt='GitHub'></img>
              <img src={logos11} alt='GitHub'></img>
            </div>
          </div>
          
              <div className="tech">Projects</div>
              <div className="techWork">Things I've built so far</div>

          <div className="projectX">
            <div className='GroupOne'>
              <img className='imgProjects' src={project1} alt=''></img>
              <div className='TitleDescription'>Project Tile goes here</div>
              <div className='description'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
            </div>

            <div className='GroupOne'>
              <img className='imgProjects' src={project2} alt=''></img>
              <div className='TitleDescription'>Project Tile goes here</div>
              <div className='description'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
            </div>

            <div className='GroupOne'>
              <img className='imgProjects' src={project3} alt=''></img>
              <div className='TitleDescription'>Project Tile goes here</div>
              <div className='description'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
            </div>

            <div className='GroupOne'>
              <img className='imgProjects' src={project4} alt=''></img>
              <div className='TitleDescription'>Project Tile goes here</div>
              <div className='description'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
            </div>

            <div className='GroupOne'> 
              <img className='imgProjects' src={project5} alt=''></img>
              <div className='TitleDescription'>Project Tile goes here</div>
              <div className='description'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
            </div>

            <div className='GroupOne'>
              <img className='imgProjects' src={project6} alt=''></img>
              <div className='TitleDescription'>Project Tile goes here</div>
              <div className='description'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
            </div>
          </div>
        <hr></hr>
        <footer>
          <div>
            <ul className="unorderedList2">
              <li className="List2">Home</li>
              <li className="List2">About</li>
              <li className="List2">Technologies</li>
              <li className="List2">Projects</li>
              <li className="List2">Contact</li>
              
              <div className='LoveCoffe'> Designed and built by PavanMg with Love & coffee</div>

            </ul>

          </div>

        </footer>



    </div>
  );
}

export default App;
