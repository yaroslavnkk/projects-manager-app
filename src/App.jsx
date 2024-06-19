import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx"
import NoProjectSelected from "./components/NoProjectSelected.jsx"
import SelectedProject from "./components/SelectedProject.jsx";
import { useState } from 'react'
function App() {
  const [projectSelected, setProjectSelected] = useState({
      projects : [],
      selectedProjectID : null
  });
  function handleSelectProject(){
      setProjectSelected(prevState => {
          return {
              ...prevState,
              selectedProjectID : undefined
          }
      })
  }
  function handleSelectExistingProject(projectId){
      setProjectSelected(prevState => {
          return {
              ...prevState,
              selectedProjectID : projectId
          }
      })
    }
    function handleCancelClick() {
       setProjectSelected(prevState => {
           return {
               ...prevState,
               selectedProjectID : null
           }
       })
   }
  function handleAddProject(projectData){
      setProjectSelected(prevState => {
          const newProject = {
              title: projectData.title,
              description: projectData.description,
              dueDate: projectData.dueDate,
              id : Math.random()
          };
          return {
              ...prevState,
              selectedProjectID: null,
              projects : [...prevState.projects, newProject]
          }
      })
  }
  function handleDeleteProject(){
          setProjectSelected((prevState) => {
              return {
                  ...prevState,
                  selectedProjectID: null,
                  projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectID)
              }
          })
  }
  const selectedProject = projectSelected.projects.find(project => project.id === projectSelected.selectedProjectID);
  let content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject}/>;
  if(projectSelected.selectedProjectID === null){
      content = <NoProjectSelected onSelectProject={handleSelectProject}/>
  }else if(projectSelected.selectedProjectID === undefined){
      content = <NewProject onAdd={handleAddProject} onCancel={handleCancelClick}/>
  }

  return (
      <div>
          <main className="bg-slate-600 flex gap-8">
              <Sidebar onSelectExistingProject={handleSelectExistingProject} onSelectProject={handleSelectProject} projects={projectSelected.projects}/>
              {content}
          </main>
      </div>
  );
}

export default App;
