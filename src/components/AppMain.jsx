import style from "./AppMain.module.css"

function AppMain({img, title, description, tags, published}) {
    if (published === false) {
        return null;
    }

    // Array jsx dei tags "span"
    const arrayTagsJsx = tags.map((curElem, curIndex) => <span className={curElem} key={curIndex}>{curElem}</span>);

    // Se img è vuoto assegno altro percorso img
    const percorsoImg = (img === '') ?"./notFound.png" :img;

    return (
        // Sezione della card intera del main
        <section className={style.card}>

            {/* Immgaine lotr*/}
            <img src={percorsoImg} alt="" />

            {/* Container main testo */}
            <div className="textContainer">
                <h2>{title}</h2>
                {arrayTagsJsx};
                <p>{description}</p>
                <button>LEGGI DI PIU'</button>
            </div>

        </section>
    )
}

export default AppMain