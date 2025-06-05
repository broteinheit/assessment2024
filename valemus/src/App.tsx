import React from 'react';
import './App.css';
import Menu from './components/Menu';
import ProjectSelection from './components/ProjectSelection';
import ProjectMask from './components/ProjectMask';
import ProjectContextProvider from './components/ProjectContext';
import { fetchJson } from './fetchMockData';

function App() {
  return (
    <ProjectContextProvider getProjects={() => fetchJson('projekte.json')} getCategories={() => fetchJson('kategorien.json')}>
      <div className="App">
        <Menu/>
        <ProjectSelection/>
        <ProjectMask/>
      </div>
    </ProjectContextProvider>
  );
}

export default App;
