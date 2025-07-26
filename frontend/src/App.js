    import { Allroutes } from "./routes/Allroutes";
    import { Header } from "./components/Layout/Header";
    import { Footer } from "./components/Layout/Footer";
    import 'bootstrap-icons/font/bootstrap-icons.css';

    function App()
    {
        return( 
            <div className="App min-h-screen bg-white text-gray-900 dark:bg-gray-100 dark:text-white transition-colors duration-300">
                <Header/>
                <Allroutes/>
                <Footer/>
            </div>
        );
    }
    export default App; 