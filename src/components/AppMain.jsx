import style from "./AppMain.module.css"

function AppMain({img, title, description, tags}){
    return (
        // Sezione della card intera del main
        <section className={style.card}>

            {/* Immgaine lotr*/}
            <img src={img} alt="" />

            {/* Container main testo */}
            <div className="textContainer">
                <h3>{title}</h3>
                <p>{description}</p>
                <button>LEGGI DI PIU'</button>
            </div>

        </section>
    )
}

export default AppMain