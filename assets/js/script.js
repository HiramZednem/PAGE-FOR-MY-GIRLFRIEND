

//Referencia html
const section = document.querySelector("section");

            /*<article>
                <h2>Razón #25</h2>
                <img src="assets/img/razon25.jpeg" width="400">
                <p>
                    Por llevarme a comer mis taquitos
                </p>                
            </article>*/

let razones = [];
for(let i=26; i<=50; i++){
    let texto;
    texto = 
    `
    <article>
        <h2>Razón #${i}</h2>
        <img src="assets/img/razon${i}.jpeg" width="400">           
    </article>
    `
    section.innerHTML += texto;
   
}