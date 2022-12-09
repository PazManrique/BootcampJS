/*EJERCITACION 9
1- Validar que se haya seleccionado una provincia
2- Validar que la fecha de nacimiento sea una fecha correcta.
1 – El campo nombre debe ser obligatorio.
2- El precio debe ser obligatorio.
3- El precio debe ser mayor a $120,00
4-Si se selecciona un impuesto menor a 16, debe avisársele al usuario que esta seleccionando un impuesto bajo.
5- si se selecciona el radiobutton “Descuento 5%” se le debe mostrar un mensaje al usuario indicándole que la opción seleccionada es la mas indicada.*/

function Validar1()
  {

    
    if( document.getElementById('province').value == 'Selecciona' ) {
      alert("Debe seleccionar una opción");
      return false}


      if (isNaN(parseInt(document.getElementById('day').value)) || document.getElementById('day').value >31) {
        alert('el campo día debe ser un número válido del mes ');
        return false;
      }  

      if (isNaN(parseInt(document.getElementById('year').value))|| document.getElementById('year').value >2023) {
        alert('el campo año debe ser un número válido');
        return false;
      }  
      else
      {
       return true;
      }
      }


 
    

  
  



function Validar2(pName,price)
  {
   pName=document.getElementById(pName);
   price=document.getElementById(price);
   if(pName.value=="")
    {
     alert("El campo Nombre esta vacio");
     user.focus();
     return false;
    };
  
    
     if(price.value=="")
      {
       alert("El campo precio esta vacio");
       pwd.focus();
       return false;
      };

      if(price.value<120)
      {
       alert("El campo precio debe ser mayor a 120");
       pwd.focus();
       return false;
      };

      if(taxes.value<16)
      {
       alert("Está seleccionando un impuesto bajo");
       pwd.focus();
       return false;
      }

      if(taxes.value<16)
      {
       alert("Está seleccionando un impuesto bajo");
       pwd.focus();
       return false;
      }
      

     else
      {
       return true;
      }
    }

    var disount = document.getElementById("discount");
  discount.addEventListener("click", function(){alert("Esta es la opción más acertada")});
  




