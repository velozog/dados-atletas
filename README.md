# dados-atletas
projeto de certificação curso devStart 2

Sistema de Informações de Atleta
Este é um sistema simples em JavaScript para calcular informações de um atleta, como sua categoria com base na idade, IMC (Índice de Massa Corporal) e média de notas válidas.

Como usar:

Clone este repositório ou baixe o arquivo dados-atletas.js.
Certifique-se de ter o Node.js instalado em seu ambiente.
Abra o terminal e navegue até o diretório onde o arquivo dados-atletas.js está localizado.
Execute o seguinte comando para executar o script:
node dados-atletas.js

Os resultados serão exibidos no console.
Detalhes do Atleta
Nome: Cesar Abascal
Idade: 30 anos
Peso: 86 kg
Altura: 1.67 m
Notas: [10, 9.34, 8.42, 10, 7.88]

Funções disponíveis
obtemNomeAtleta(): Retorna o nome do atleta.
obtemIdadeAtleta(): Retorna a idade do atleta.
obtemPesoAtleta(): Retorna o peso do atleta.
obtemAlturaDoAtleta(): Retorna a altura do atleta.
obtemNotasAtleta(): Retorna as notas do atleta.
obtemCategoria(): Retorna a categoria do atleta com base na idade.
obtemIMC(): Retorna o IMC (Índice de Massa Corporal) do atleta.
obtemMediaValida(): Retorna a média das notas válidas do atleta.

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
console.log(`Média: ${atleta.obtemMediaValida()}`)
