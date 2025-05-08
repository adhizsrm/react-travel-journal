import Header from "/components/Header.jsx"
import Entry from "/components/Entry.jsx"
import journalData from "./data.js"
export default function App() {
    const data = journalData.map((element) => {
        return(
            <>
                <Entry 
                    id={element.id} 
                    img={
                        {
                            src:element.img.src, 
                            alt:element.img.alt 
                        }
                    
                    }
                    title={element.title}
                    country={element.country}
                    googleMapsLink={element.googleMapsLink}
                    dates={element.dates}
                    text={element.text} 
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