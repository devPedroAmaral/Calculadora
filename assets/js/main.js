//factory function --- cria um objeto

function criaCalculadora() {
    return {
        //atributos
        display: document.querySelector('.display'),
        
        
        //métodos
        inicia: function() { // = inicia() {};
            this.cliqueBotoes()
            this.pressionaEnter();

        },

        pressionaEnter: function() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        cliqueBotoes: function() {
            document.addEventListener('click', e => {
                const el = e.target;
        
                if(el.classList.contains('btn-num')) {
                  this.btnParaDisplay(el.innerText);
                }
        
                if(el.classList.contains('btn-clear')) {
                  this.clearDisplay();
                }
        
                if(el.classList.contains('btn-del')) {
                  this.apagaUm();
                }
        
                if(el.classList.contains('btn-eq')) {
                  this.realizaConta();
                }
        
                this.display.focus();
              });
        },

        btnParaDisplay: function(valor) {
            this.display.value += valor;
        },

        clearDisplay: function () {
            this.display.value = ''
        },

        apagaUm: function () {
            this.display.value = this.display.value.slice(0,-1);
        },

        realizaConta: function () {
            let conta = this.display.value
            try {
                conta = eval(conta)
                if(!conta) {
                    alert('conta inválida')
                    return;
                } 
                this.display.value = String(conta);
            }catch(e) {
                alert('conta inválida')
                return;
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();