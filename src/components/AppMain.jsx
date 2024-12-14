import style from "./AppMain.module.css"

function AppMain(){
    return (
        // Sezione della card intera del main
        <section className={style.card}>

            {/* Immgaine lotr*/}
            <img src="./lotr_img.jpg" alt="" />

            {/* Container main testo */}
            <div className="textContainer">
                <h5>La compagnia dell'anello</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas maiores minus expedita odit suscipit consectetur esse ducimus, eos quos voluptatem quod iste magni voluptatibus atque adipisci porro praesentium. Iure.</p>
                <button>LEGGI DI PIU'</button>
            </div>

        </section>
    )
}

export default AppMain