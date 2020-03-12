/* Forma de Adicionar com Herança
class List{

    constructor(){
        this.data =[];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class Todolist extends List{
    constructor(){
        super();
        this.usuario = 'Vinicius';        
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaList = new Todolist();

document.getElementById('novotodo').onclick = function(){
MinhaList.add('novo todo');
}
MinhaList.mostraUsuario(); */

/* da Erro 
class Todolist{
    constructor(){
        this.todos=[];
    }
    static addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
} */

/* Operaçoes em arrays 

const arr =[1,3,4,5,8,9,10];

const newArr = arr.map(function(item, index) {
    return item + index;
});
console.log(newArr);

const sum = arr.reduce(function(total,next){
return total + next ;
});
console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 ===0;
});
console.log(filter); 

const find = arr.find(function(item){
    return item === 4;
});
console.log(find); */

/* Arrow Function(arrays simplificados) 
const arr =[1,3,4,5,8,9,10];

const newArr = arr.map(item => item *2);
console.log(newArr); 


//codigo abaixo caso for retorna um objeto
const teste = () =>({nome:'Vinicius'});
console.log(teste()); 
*/


/* Verificando com valores padrao
const soma = (a = 3 ,b = 6) => a+b;

console.log(soma(1)); 
console.log(soma()); */

/* Desestruturação 2 formas 
const usuario={
    nome: 'Vincius',
    idade:20,
    endereco:{
        cidade :'Mogi das Cruzes',
        estado:'SP'
    },
};
console.log(usuario);

const {nome, idade, endereco: {cidade} }=usuario;

console.log('Nome',nome);
console.log('Idade',idade);
console.log('Cidade',cidade);

         ou 

function mostranome({nome,idade}){
    console.log(nome,idade);
}
mostranome(usuario); */



/* Operadores Rest-Spread 

const usuario={
    nome: 'Vincius',
    idade:20,
    endereco:{
        cidade :'Mogi das Cruzes',
        estado:'SP'
    },
};
const {nome,...resto}=usuario;
console.log(nome);
console.log('Outros dados do usuario',resto);

 ou em arrays 

const arr =[1,2,3,4];

const [a,b,...c]=arr;
console.log(a);
console.log(b);
console.log(c);
 ou em parametros de funcoes 

function soma(...params){
    return params.reduce((total,next)=>total+next);
}
console.log(soma(1,3,4)); */

/* Spread 
const arr1=[1,2,3];
const arr2=[4,5,6];

const arr3=[...arr1,...arr2];
console.log(arr3);

//outra funcao do Spread

const usuario1={
    nome:'Vinicius',
    idade:20,
    empresa:'gft'
};
const usuario2 = {...usuario1,nome:'Raphael'};

console.log(usuario2);*/


/* incluindo variaveis dentro de strings 

   const nome = 'Vinicius';
   const idade = 20;
   const empresa='gft';
//forma antiga
console.log('meu nome é '+nome+' e tenho '+idade+' anos,e trabalho na empresa '+empresa);

//tamplate literals do ES6 (forma nova)
console.log(`Meu nome é ${nome} e tenho ${idade} anos,trabalho na empresa ${empresa}`);*/

/* Sintax curta no ES6 
const nome = 'Vinicius';
const idade = 20;
const empresa='gft';

const usuario={
    nome ,
    idade,
    empresa,
};console.log(usuario);*/



