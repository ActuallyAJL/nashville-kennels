import { React , useState , useEffect } from "react"

export const MadLib = () => {

    const [madLibrary, setMadLibrary] = useState({});

    useEffect(() => {
        setMadLibrary(
            {
                pluralNoun1: "unicorns",
                adjective1: "pretty",
                noun: "street",
                typeOfFood: "mexican",
                articleOfClothing: "dickey",
                verbEndingIning: "wallowing",
                pluralNoun2: "trees",
                pluralNoun3: "lasers",
                numberVal: "113",
                celebrity: "Taylor Swift",
                color: "golden rod",
                verbEndingIning2: "licking",
                typeOfFood: "Italian sweets",
                pluralNoun: "concrete shoes",
                adjective2: "gloomy",
                adjective3: "claustrophobic"
             }
        );
    } , []);
    
    return (<section className="madlib">
        <h3 className="madlib">Madlib</h3>
        <div className="madlib">What Unicorns Eat</div>
        <h4>Would it surprise you to learn that the most majestic {madLibrary.pluralNoun3} in the world eat garbage? Well, they do! Everything from {madLibrary.adjective2} soda cans to {madLibrary.noun}-stained {madLibrary.typeOfFood} boxes to used {madLibrary.articleOfClothing} - and more! Some have been spotted {madLibrary.verbEndingIning2} dumpsters and then using their long {madLibrary.pluralNoun1} to spear as many bags of {madLibrary.pluralNoun2} as they can before being caught. According to an interview with the {madLibrary.numberVal} Minutes News, {madLibrary.celebrity} once came home to find a/an {madLibrary.color} unicorn {madLibrary.verbEndingIning} up in the recycling bin. The poor thing had mistaken leftover {madLibrary.typeOfFood} for dried up {madLibrary.pluralNoun}. "It was a/an {madLibrary.adjective3} mistake. I am a good cook!"</h4>
    </section>)
}