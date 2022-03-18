

//Referencia html
const section = document.querySelector("section");

//Variables;
const razones = [];

razones[26]= 'Por apoyarme en situaciones dificiles, y apoyarme con ciertos miedos que tenia, y ya ahorita palo diario pue JAJAJA te amo.';
razones[27]= 'Por que eres la rebanada que le falta a mi pizza';
razones[28]= 'Por que hacemos el ridiculo juntos';
razones[29]= 'Por que me presumes';
razones[30]= 'Por que me enseñas a cocinar';
razones[31]= 'Por que me platicas cosas muy interesantes y me enseñas cosas que no sabia';
razones[32]= 'Por que estamos bien mensitos, te amo.';
razones[33]= 'Por que somos bien tumblr.';
razones[34]= 'Por que me llevas con don salatiel (Te amo mucho, gracias por llevarme).';
razones[35]= 'Por que me ayudas a areglar mi casita( y prxomiamente a comprar las sillas o no se si ya las compramos xd.)';
razones[36]= 'Por como comes las tostadas.';
razones[37]= 'Por llevarme a comprar mi hamburguesa.';
razones[38]= 'Por tus terrenos.';
razones[39]= 'Por darme el calor que necesito en las noches frias, y los mejores rapidines antes de regresar a tux JAJAJA, esa del dia de Joanfue pasada.';
razones[40]= 'Por ser mi Mary Jane.';
razones[41]= 'Por que estas bien piernona suputamadre, tanta carne y yo chimuelo.';
razones[42]= 'Por que roncas bien hermoso JAJA, te amo.';
razones[43]= 'Por que vemos series y peliculas juntos.';
razones[44]= 'Por que intentas entrar en mis aficiones.';
razones[45]= 'Por ser mi miniona.';
razones[46]= 'Por reirte del mismo chiste del unboxing una y otra vez.';
razones[47]= 'Por que cocinas bien rico.';
razones[48]= 'Por que eres mi lugar seguro cuando me siento mal.';
razones[49]= 'Por darme esta pulseria.';
razones[50]= 'Por casarte conmigo.';





for(let i=26; i<=50; i++){

    let texto;
    texto = 
    `
    <article>
        <h2>Razón #${i}</h2>
        <img src="assets/img/razon${i}.jpeg" width="400">
        <p> ${ razones[i] } </p>   
    </article>
    `
    section.innerHTML += texto;
   
}