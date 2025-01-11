import seriesdata from "../api/seresdata.json";
import { SeresCard } from "./SeresCard";
import styles from "./Netflix.module.css"


const Netflixcard = () => {
    return (
        <div className="main">
            <h1>List Of Best Netflix Series</h1>
            <ul className={styles.container}>
                {seriesdata.map((curElem) => {
                    return (
                        <SeresCard key={curElem.id} data={curElem} />
                    );
                })}
            </ul>
        </div>

    );
};

export default Netflixcard;
