
         const ini = document.getElementById('contenedor')
         const botonImg = document.getElementById('botonn');
         let botonImg1 = document.getElementById('boton1');
         let botonImg2 = document.getElementById('boton2');
         let conte = document.getElementById('puntage')
         let conte1 = document.getElementById('puntage1')
         const boton = document.getElementById("botonn");
         const boton1 = document.getElementById("boton1");
         const boton2 = document.getElementById("boton2");
         let puntos= 0
         let fallos= 0
         let valor = 0
         let contador = 0;
         let disable = document.getElementById('texto');
         
document.addEventListener("keydown", function(e) {
    //Si se presiona la tecla de impresión de pantalla, evita que se realice la acción
    if (e.keyCode == 44) {
        e.preventDefault();
        alert("No se puede tomar una captura de pantalla de esta página.");
    }
});
       
        function start() {
            
            ini.style.display="none"

        }
        function ejecutar() {
            ini.style.display=""

         
         
              switch (contador) {
        case 0:
             disable.textContent = `${"1- dicen que el apodo de este hombre es de cara al ajo quien es carajo?"}`;
           

              // Establece la fuente de la imagen usando setAttribute
               botonImg.setAttribute('src', './img/carajo.png');
              botonImg1.setAttribute('src', './img/molo.png');
               botonImg2.setAttribute('src', './img/pecho.jpg');

             

            break;
    case 1:
         if (valor == 1){
               
                puntos ++
                
              }else{
                
                fallos ++
              }

            disable.textContent = `${"2- desde la selva se puede ver, cuando no va en lianas va en su moto autoprotejida, tarzan?"}`;
             botonImg.setAttribute('src', './img/tarzan.jpg');
              botonImg1.setAttribute('src', './img/tuke.jpg');
               botonImg2.setAttribute('src', './img/uña.png');
            break;
    case 2:
    if (valor == 1){
               
                puntos ++
                
              }else{
                
                fallos ++
              }

            disable.textContent = `${"3- el hombre zumba podria ser su apdo pero es su lugar le dicen peluca"}`;
             botonImg.setAttribute('src', './img/chirolo.jpg');
              botonImg1.setAttribute('src', './img/pico.jpg');
               botonImg2.setAttribute('src', './img/pelu.jpg');

            break;
           
    case 3:
       if (valor == 3){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"4- quien puede matar un dinosaurio con su hondilla, quien mas agarra tiranosaurios y se gasta un pante de leña en cosinarlo? es unico e inigualable chira "}`;
              botonImg.setAttribute('src', './img/traxs.jpg');
              botonImg1.setAttribute('src', './img/chira.jfif');
               botonImg2.setAttribute('src', './img/pollo.jpg');
            break;

            
 case 4:
  if (valor == 2){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"5- me arrastran casi al suelo"}`;
               botonImg.setAttribute('src', './img/gusa.png');
              botonImg1.setAttribute('src', './img/wara.png');
               botonImg2.setAttribute('src', './img/chiches.png');
            break;
case 5:
  if (valor == 3){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"6- hablemos de un poco de zumba, es unico en su especie, pico seco"}`;
               botonImg.setAttribute('src', './img/pelu.jpg');
              botonImg1.setAttribute('src', './img/traxs.jpg');
               botonImg2.setAttribute('src', './img/pico.jpg')
            break;
    case 6:
     if (valor == 3){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"7- es mas alto que una escalera de dos vandas, moto en su apodo y molondron su apellido"}`;
            botonImg.setAttribute('src', './img/carajo.png');
              botonImg1.setAttribute('src', './img/pelu.jpg');
               botonImg2.setAttribute('src', './img/molo.png')
            break;
    case 7:
     if (valor == 3){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"8- en su nave va asia el futuro en otra chiroloaventura"}`;
             botonImg.setAttribute('src', './img/chirolo.jpg');
              botonImg1.setAttribute('src', './img/molo.png');
               botonImg2.setAttribute('src', './img/traxs.jpg')
            break;
case 8:
  if (valor == 1){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"9- quien tiene dos carros y jala matatas de arina en bicicleta, mas tacaño que la niña tava"}`;
                  botonImg.setAttribute('src', './img/tarzan.jpg');
              botonImg1.setAttribute('src', './img/pollo.jpg');
               botonImg2.setAttribute('src', './img/traxs.jpg')

            break;
 case 9:
   if (valor == 2){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"10- se viene el minuto de maria, o barra de uña"}`;
                  botonImg.setAttribute('src', './img/chirolo.jpg');
              botonImg1.setAttribute('src', './img/uña.png');
               botonImg2.setAttribute('src', './img/pelu.jpg')

            break;

     case 10:
   if (valor == 2){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"10- me gustan las viejitas pero soy panadero"}`;
                  botonImg.setAttribute('src', './img/chirolo.jpg');
              botonImg1.setAttribute('src', './img/uña.png');
               botonImg2.setAttribute('src', './img/pan.jpg')


break;
  case 11:

   if (valor == 3){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"11- hablemos de zumbas de nuevo, nada mas que a este le apodan el hijo del guaro traxs"}`;
                  botonImg.setAttribute('src', './img/pan.jpg');
              botonImg1.setAttribute('src', './img/traxs.jpg');
               botonImg2.setAttribute('src', './img/pelu.jpg')
               break;

 case 12:
   if (valor == 2){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"12- mi nariz va adelante de mi att wara"}`;
                  botonImg.setAttribute('src', './img/chirolo.jpg');
              botonImg1.setAttribute('src', './img/wara.png');
               botonImg2.setAttribute('src', './img/pan.jpg')


break;
case 13:

   if (valor == 2){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"13- vendo paletas arriva de un carrito chocon"}`;
                  botonImg.setAttribute('src', './img/carro.jpg');
              botonImg1.setAttribute('src', './img/traxs.jpg');
               botonImg2.setAttribute('src', './img/pelu.jpg')


break;
case 14:

   if (valor == 1){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"14- le dicen el pecho"}`;
                  botonImg.setAttribute('src', './img/pecho.jpg');
              botonImg1.setAttribute('src', './img/traxs.jpg');
               botonImg2.setAttribute('src', './img/pelu.jpg')
break;
case 15:

   if (valor == 1){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"15- un dia toma el otro dia tambien tuke es el nombre"}`;
                  botonImg.setAttribute('src', './img/pecho.jpg');
              botonImg1.setAttribute('src', './img/traxs.jpg');
               botonImg2.setAttribute('src', './img/tuke.jpg')
               break;
case 16:

   if (valor == 1){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
            disable.textContent = `${"16- mi apodo viene de mis averturas en la cabeza el chejas"}`;
                  botonImg.setAttribute('src', './img/pecho.jpg');
              botonImg1.setAttribute('src', './img/cheja.jpg');
               botonImg2.setAttribute('src', './img/tuke.jpg')


        default:
        if (valor == 2){
               
                puntos ++
                
              }else{
                
                fallos ++
              }
                 var boton = document.getElementById("miBoton");
                 boton.disabled = true;
              ini.style.display="none" 
            disable.textContent = `${"tu nota es de " + " " +puntos}  `;
            
            break;

            




    }

          
            contador++;
            conte.textContent = ` ${puntos}`;
            conte1.textContent = ` ${fallos}`;

            boton.classList.remove("seleccionado");
             boton1.classList.remove("seleccionado");
             boton2.classList.remove("seleccionado");

        }




function miFuncion() {
            valor =1
    
  boton.classList.add("seleccionado");
  boton1.classList.remove("seleccionado");
boton2.classList.remove("seleccionado");

}
function miFuncion1() {
            valor =2
            
  boton.classList.remove("seleccionado");
  boton1.classList.add("seleccionado");
boton2.classList.remove("seleccionado");

}

function miFuncion2() {
            valor =3
           
   boton.classList.remove("seleccionado");
  boton1.classList.remove("seleccionado");
boton2.classList.add("seleccionado");



}




    