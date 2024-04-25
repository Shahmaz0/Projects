import Navigation from "./components/Navigation/Navigation.jsx";
import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

function App() {
        return (
            <div>
                <Navigation/>
                <ContactHeader/>\
                    {/*<ContactForm/>*/}
                    <ContactForm/>
            </div>
        )
}
export default App;