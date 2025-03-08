
// Script do lado do cliente aqui
    console.log('Iniciando script Gerador de dados para teste de formulario.');
   
    const nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana"];
    const sobrenomes = ["Silva", "Santos", "Oliveira", "Souza", "Pereira", "Lima", "Carvalho", "Ferreira", "Costa", "Almeida"];
    const estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","São Paulo"];
    const cidades = ["Rio Branco", "Maceió", "Macapá", "Manaus", "Salvador", "Fortaleza", "Vitória", "Goiânia", "São Luís", "Cuiabá", "Campo Grande", "Belo Horizonte", "Belém", "João Pessoa", "Curitiba", "Recife", "Teresina", "Rio de Janeiro", "São Paulo"];
    const Bairros = ["Rosas","Lírios","Orquídeas","Girassol","Tulipas","Hortênsias","Margaridas","Jasmims", "Violetas","Camélias"];


function gerarDados() {
      let cpf = [];
      for (let i = 0; i < 9; i++) {
          cpf.push(Math.floor(Math.random() * 10));
      }
  
      cpf.push(calcularDigito(cpf));
      cpf.push(calcularDigito(cpf));
      
      document.getElementById('fotopersondoesnotexist').src="https://thispersondoesnotexist.com/?t="+cpf.join('');
      document.getElementById('cpf').innerText = formatarCPF(cpf.join(''));
      document.getElementById('nome').innerText = nomes[cpf[6]]+" "+sobrenomes[cpf[5]]+" "+sobrenomes[cpf[4]];
      document.getElementById('email').innerText = nomes[cpf[6]]+"."+sobrenomes[cpf[4]]+"@xyz"+cpf[6]+".com.br";
      document.getElementById('telefone').innerText = "+55 (21) 2"+cpf[2]+cpf[1]+cpf[6]+"-"+cpf[0]+cpf[5]+cpf[2]+cpf[3];
      document.getElementById('celular').innerText = "+55 (21) 9"+cpf[0]+cpf[5]+cpf[2]+cpf[3]+"-"+cpf[0]+cpf[2]+cpf[1]+cpf[6];
      document.getElementById('endereco').innerText = "Rua "+sobrenomes[cpf[3]];
      document.getElementById('numero').innerText = cpf[5]+cpf[5]+cpf[7];
      document.getElementById('bairro').innerText = Bairros[cpf[0]];
      document.getElementById('estado').innerText = estados[cpf[5]+cpf[6]];
      document.getElementById('cidade').innerText = cidades[cpf[5]+cpf[6]];
}
  
function calcularDigito(cpf) {
      let soma = 0;
      let peso = cpf.length + 1;
  
      for (let i = 0; i < cpf.length; i++) {
          soma += cpf[i] * peso--;
      }
  
      let resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
}
  
function formatarCPF(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}




