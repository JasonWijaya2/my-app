import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import '../../styles/contextdemo.css'; // Import custom styles
import { ThemeProvider, useTheme } from '../../context/ThemeContext/ThemeContext';

const ContextDemo = () => {
    return (
        <ThemeProvider>
            <div className="app d-flex flex-column min-vh-100">
                <HeaderContext />
                <MainContent />
            </div>
        </ThemeProvider>
    );
};

const HeaderContext = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header className={`py-3 px-4 ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'} shadow`}>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="h5 mb-0">useContext Demo</h1>
                <button
                    className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
                    onClick={toggleTheme}
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </header>
    );
};

const MainContent = () => {
    const { isDarkMode } = useTheme();

    return (
        <main className={`flex-grow-1 d-flex justify-content-center align-items-center ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            <h1 className="text-center">{isDarkMode ? 'Night Mode' : 'Day Mode'}</h1>
        </main>
    );
};

export default ContextDemo;