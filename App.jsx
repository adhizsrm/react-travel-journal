import Header from "/components/Header.jsx"
import Entry from "/components/Entry.jsx"
import journalData from "./data.js"
export default function App() {
    const data = journalData.map((element) => {
        return(
            <>
                <Entry 
                    key={element.id}
                    {...element}
                />
            </>
            
        )
    })
    return(
        <>
            <Header />
            <main className="container">
                {data}
            </main>
        </>
    );
}