function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

}

function opcoesCampos() {

    document.getElementById("campos").style.visibility = "visible";
    document.getElementById("campos").style.opacity = "1";
    document.getElementById("campos").style.display = "block";
}

function adicionaCamposHemograma() {

  tabela = document.getElementById("tabela");

  tabela.innerHTML =
      `  <table  border="1" id="tabelaCampos">
          <thead>
            <tr>
              <th>Data</th>
              <th>15/02/2018 </th>
              <th>16/02/2018 </th>
              <th>17/02/2018 </th>
              <th>18/02/2018 </th>
              <th>19/02/2018 </th>
              <th>20/02/2018 </th>
              <th>21/02/2018 </th>
            </tr>
          </thead>
         <tr  id="Hb">
            <td>Hb</td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)"></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
          </tr>
          <tr  id="Htc">
            <td>Htc</td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
          </tr>
          <tr id="VCM">
            <td>VCM</td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
          </tr>
          <tr id="HCM">
            <td>HCM</td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
            <td contenteditable="true" class="idContentEditable" onblur="validacao(this)></td>
          </tr>
          <tr id="Leuco">
            <td>Leuco</td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
          </tr>
          <tr id="Bast">
            <td>Bast</td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
          </tr>
          <tr id="Seg">
            <td>Seg</td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
          </tr>
          <tr id="Eose">
            <td>Eose</td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
          </tr>
          <tr id="Basof">
            <td>Basof</td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
          </tr>
          <tr id="Linf">
            <td>Linf</td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
          </tr>
          <tr id="Mon">
            <td>Mon</td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
          </tr>
          <tr id="Plaq">
            <td>Plaq</td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
            <td contenteditable="true" class="idContentEditable"></td>
          </tr>
        </table> `

        var numTableCells = document.querySelectorAll(".idContentEditable");

        for(let i = 0; i < numTableCells.length; i++){
            numTableCells[i].addEventListener('keypress', function(evt) {

                console.log(this);
                if (isNaN(this.textContent)) {
                  alert("Insira apenas números!");
                  this.innerHTML = "";
                  this.blur();
                }

                if (evt.which === 13) {
                    this.blur()
                    validacao(this);
                }
            });
        }

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var numTableCells = document.querySelectorAll(".idContentEditable");

for(let i = 0; i < numTableCells.length; i++){
    numTableCells[i].addEventListener('keypress', function(evt) {

        console.log(this);
        if (isNaN(this.textContent)) {
          alert("Insira apenas números!");
          this.innerHTML = "";
          this.blur();
        }

        if (evt.which === 13) {
            this.blur()
            validacao(this);
        }
    });
}




function validacao(tr) {
  switch (tr.parentNode.id) {
    case "Hb":
          if(tr.textContent < 13.5 || tr.textContent > 18) {

            tr.classList.add("valorInvalido");
          } else {
            tr.classList.remove("valorInvalido");
          }
      break;

      case "Htc":
            if(tr.textContent < 42 || tr.textContent > 52) {

              tr.classList.add("valorInvalido");
            } else {
              tr.classList.remove("valorInvalido");
            }
        break;

        case "VCM":
              if(tr.textContent < 87 || tr.textContent > 103) {

                tr.classList.add("valorInvalido");
              } else {
                tr.classList.remove("valorInvalido");
              }
          break;

          case "HCM":
                if(tr.textContent < 30 || tr.textContent > 33) {

                  tr.classList.add("valorInvalido");
                } else {
                  tr.classList.remove("valorInvalido");
                }
            break;
    default:
  }
}

function test(){
  
}
