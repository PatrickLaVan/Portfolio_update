import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { baseName } from '../router';
import { Home } from './pages'
import ProjectBenu from './Projektpages/Benu';  // Detail pages for each project
import ProjectEgs from './Projektpages/Egs';  // Another project detail page
import ProjectMss from './Projektpages/Mss';
import ProjectUni from './Projektpages/Uni';
import ProjectMw from './Projektpages/Mw';
import ProjectJagd from './Projektpages/Jagd';




const App = () => {
  return (
    <Routes>
      <Route path={`/${baseName}`} element= {<Home/>}/>
      <Route path="/project-benu" element={<ProjectBenu />} />  {/* Project A detail page */}
      <Route path="/project-egs" element={<ProjectEgs />} />
      <Route path="/project-mss" element={<ProjectMss />} />
      <Route path="/project-uni" element={<ProjectUni />} />
      <Route path="/project-mw" element={<ProjectMw />} />
      <Route path="/project-jagd" element={<ProjectJagd />} />      
    </Routes>    
  )
}

export default App