import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx"
import NoProjectSelected from "./components/NoProjectSelected.jsx"
import { useState } from 'react'
function App() {
  const [projectSelected, setProjectSelected] = useState({
      projects : [],
      selectedProjectID : null
  });
  function handleSelectingProject(){
      setProjectSelected(prevState => {
          return {
              ...prevState,
              selectedProjectID : undefined
          }
      })
  }
  let content;
  if(projectSelected.selectedProjectID === null){
      content = <NoProjectSelected onSelectProject={handleSelectingProject}/>
  }else{
      content = <NewProject />
  }
  return (
      <div>
          <main className="bg-blue-300 text-white flex gap-8">
              <Sidebar onSelectProject={handleSelectingProject}/>
              {content}
          </main>
      </div>
  );
}

export default App;
