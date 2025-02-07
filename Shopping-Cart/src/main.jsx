import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FilterProvider } from './context/filters.jsx';
import './index.css'


try {
  createRoot(document.getElementById('root')).render(
    <FilterProvider>
      <App />
    </FilterProvider>,
  );
} catch (error) {
  console.error("Error en la renderización:", error);
}

