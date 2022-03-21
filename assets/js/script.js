

//Referencia html
const section = document.querySelector("section");

//Variables;
const razones = [];

razones[26]= 'Por que me apoyars en situaciones dificiles, y me apoyas con ciertos miedos que tenia, y ya ahorita palo diario pue JAJAJA te amo.';
razones[27]= 'Por que eres la rebanada que le falta a mi pizza, eres mi complemento, tienes el tamaño perfecto para que te abrece.';
razones[28]= 'Por que hacemos el ridiculo juntos, y no tienes pena de nada, desde que te sacaste ese moco JAJAJA, me encanta como somos, te adoro, espero eso no se pierda nunca';
razones[29]= 'Por que me presumes y se siente bien bonito.';
razones[30]= 'Por que me enseñas a cocinar yy estas ahi para hacer videollamada y apoyarme a cocinar, ademas por enseñarme a comprar tomate, carbon, carne.';
razones[31]= 'Por que me platicas cosas muy interesantes y me enseñas cosas que no sabia, y nunca me criticas que no se. Webi wabo.';
razones[32]= 'Por que estamos bien mensitos, te amo.';
razones[33]= 'Por que somos bien tumblr.';
razones[34]= 'Por que me llevas con don salatiel a platicar (Te amo mucho, gracias por llevarme).';
razones[35]= 'Por que me ayudas a arreglar mi casita para que vivamos juntitos ahi:)';
razones[36]= 'Por que me encanta como comes las tostadas, te amo mucho, enserio me gusta mucho como muerdes la tostada y como mamas mi pi*** hay eso no va, pero si bien rico JAJAA TE AMO.';
razones[37]= 'Por que me invitas cosas y me llevaste a comprar mi hamburguesa.';
razones[38]= 'Por que tienes unos terrenos bien bonitos (los que estan ak oerderme en tu mirada preciosa).';
razones[39]= 'Por que me das el calor que necesito en las noches frias, y los mejores rapidines antes de regresar a tux JAJAJA, ese dia de Joan fue pasadoOOooOOo JAJAJA.';
razones[40]= 'Por que eres mi Mary Jane, te amo.';
razones[41]= 'Por que estas bien piernona suputamadre, tanta carne y yo chimuelo, no enserio que ricas piernas culona.';
razones[42]= 'Por que roncas bien hermoso JAJA, te amo, fuera de coto me encanta dormir contigo y despertar en la madrugada que tuve un sueño de miedo y me escuches, te amo.';
razones[43]= 'Por que vemos series y peliculas juntos siempre que podemos con tu clima bien ricco JAJA.';
razones[44]= 'Por que intentas entrar en mis aficiones.';
razones[45]= 'Por que eres mi miniona y apoyas mis fanatismos JAJA.';
razones[46]= 'Por que siempre te ries del mismo chiste del unboxing una y otra vez.';
razones[47]= 'Por que cocinas bien rico, ay dioos ya casate conmigo esos chilaquiles que haces me enamoran.';
razones[48]= 'Por que eres mi lugar seguro, cuando me siento extraño lo unico que necesito es un abrazo tuyo';
razones[49]= 'Por que desde el primer dia siempre estuviste ahi y me diste esta pulseria.';
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