import '../../styles/contextdemo.css'
import { ThemeProvider, useTheme } from '../../context/ThemeContext/ThemeContext'

const ContextDemo = () => {
    return (
        <ThemeProvider>
            <div className='app'>
                <HeaderContext />
                <MainContent />
            </div>
        </ThemeProvider>
    )
}

const HeaderContext = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header className={isDarkMode ? 'dark' : 'light'}>
            <div className='logo'>
                useContext Demo
            </div>
            <button
                className='theme-toggle'
                onClick={toggleTheme}
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    )
}

const MainContent = () => {
    const { isDarkMode } = useTheme();

    return (
        <main className={isDarkMode ? 'dark' : 'light'}>
            <h1 className={isDarkMode ? 'dark' : 'light'}>Night/Day Mode</h1>
        </main>
    )
}

export default ContextDemo