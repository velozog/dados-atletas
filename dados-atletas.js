class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas

    }
    calculaCategoria(){
        if (this.idade >= 9 && this.idade <= 11){
            return "Infaltil" 
       }if ( this.idade === 12 || this.idade === 13){
            return "Juvenil"
       }if (this.idade === 14 || this.idade === 15){
           return "Intermediario" 
       }if (this.idade > 15 && this.idade <= 30){
            return "Adulto"
       }else{
            return "Sem categoria"
       }
    }   
    calculaIMC(){
        return this.peso / (this.altura**2)
    }
    calculaMediaValida(){
        const notasSemExtremos = this.notas.slice();
        const maxNotaIndex = notasSemExtremos.indexOf(Math.max(...notasSemExtremos));
        notasSemExtremos.splice(maxNotaIndex, 1);
        const minNotaIndex = notasSemExtremos.indexOf(Math.min(...notasSemExtremos));
        notasSemExtremos.splice(minNotaIndex, 1);
        const media = notasSemExtremos.reduce((a, b) => a + b, 0) / notasSemExtremos.length;
        return media;
    }
    obtemNomeAtleta(){
        return this.nome
    }
    obtemIdadeAtleta(){
        return this.idade
    }
    obtemPesoAtleta(){
        return this.peso
    }
    obtemNotasAtleta(){
        return this.notas
    }
    obtemCategoria(){
        return this.calculaCategoria()
    }
    obtemIMC(){
        return this.calculaIMC()
    }
    obtemMediaValida(){
        return this.calculaMediaValida()
    }
    obtemAlturaDoAtleta(){
        return this.altura
    }
     
          
}
const atleta = new Atleta("Cesar Abascal",
    30, 86, 1.67,
    [10, 9.34, 8.42, 10, 7.88]);
    
console.log(`Nome: ${atleta.obtemNomeAtleta()}`)
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`)
console.log(`Peso: ${atleta.obtemPesoAtleta()}`)
console.log(`Altura: ${atleta.obtemAlturaDoAtleta()}`)
console.log(`Notas: ${atleta.obtemNotasAtleta()}`)
console.log(`Categoria: ${atleta.obtemCategoria()}`)
console.log(`IMC: ${atleta.obtemIMC()}`)
console.log(`Media: ${atleta.calculaMediaValida()}`)