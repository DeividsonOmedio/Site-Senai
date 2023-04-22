const selecionado = [...document.querySelectorAll("#flexCheckDefault")];
var totalCursos = document.getElementById("totalCursos")
var horasTotais = document.getElementById("horasTotais")
var matricula = document.getElementById("matricula")
var tabela = document.getElementById("table")
var alertar = document.getElementById("alert")
var chec = document.querySelectorAll("#flexCheckDefault")
var alertCursos = document.getElementById("alertCursos")

var cursosSelecionados = []
var quantCursos = 0
var quantHoras = 0
var contador = 1
selecionado.map((e)=>{
   
    e.addEventListener("change", (el) => {
        console.log(el)
        if (e.checked) {
            quantCursos++
            totalCursos.innerHTML = `${quantCursos} curso(s)`
            quantHoras += Number(e.value)
            horasTotais.innerHTML = `${quantHoras}h`
            cursosSelecionados[contador] = e.name
           
            
            contador++
        }
        else{
            quantCursos--
            totalCursos.innerHTML = `${quantCursos} curso(s)`
            quantHoras -= Number(e.value)
            horasTotais.innerHTML = `${quantHoras}h`
            cursosSelecionados-= e.name
            

        }
        
      });
      
        })
       
        var sel=0
        
        var i=0
        var ttt = "teste"
        
        matricula.addEventListener("click", function(e){
            
            sel=0
            var selec= []
           
            chec.forEach(function(el){
                if(el.checked){
                    sel++
                    selec[i] = el.name
                    i++
                   
                    localStorage.setItem("passarCursos", selec );
            
                }
            })
            if(sel === 0){
                e.preventDefault()
                alertar.innerHTML= "É preciso selecionar pelo menos 1 curso!"
                setTimeout(destruirAlerta, 3000)
                
            }
            function destruirAlerta(){
                alertar.remove()
            }
            
        })

      
        
      




