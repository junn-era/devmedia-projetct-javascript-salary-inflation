const dataInput = require('readline-sync');

let basicSalary = [
    {year: 2010, salary: 510.00},
    {year: 2011, salary: 545.00},
    {year: 2012, salary: 622.00},
    {year: 2013, salary: 678.00},
    {year: 2014, salary: 724.00},
    {year: 2015, salary: 788.00},
    {year: 2016, salary: 880.00},
    {year: 2017, salary: 937.00},
    {year: 2018, salary: 954.00},
    {year: 2019, salary: 998.00},
    {year: 2020, salary: 1045.00}
];
let inflation = [
    {year: 2010, ipca: 5.91},
    {year: 2011, ipca: 6.50},
    {year: 2012, ipca: 5.84},
    {year: 2013, ipca: 5.91},
    {year: 2014, ipca: 6.41},
    {year: 2015, ipca: 10.67},
    {year: 2016, ipca: 6.29},
    {year: 2017, ipca: 2.95},
    {year: 2018, ipca: 3.75},
    {year: 2019, ipca: 4.31},
    {year: 2020, ipca: 4.52}
];

console.log('\nEscolha uma das alternativas:\n')
console.log('1 - Listar os salários mínimos de 2010 à 2020');
console.log('2 - Listar o índice IPCA de 2010 à 2020');
console.log('3 - Comparação entre o percentual de aumento salarial e o IPCA');

let choice = dataInput.question('\nDigite o número da sua escolha: ');
choice = Number(choice);

console.log(`\nOpção escolhida: ${choice}`);

let yearLabel = 'Ano: ';
let salaryLabel = 'Salário: ';
let salaryIncreaseLabel = 'Crescimento Salarial: ';
let ipcaLabel = 'Inflação (IPCA): ';

yearLabel = yearLabel.padEnd(30, '.');
salaryLabel = salaryLabel.padEnd(30, '.');
salaryIncreaseLabel = salaryIncreaseLabel.padEnd(30, '.');
ipcaLabel = ipcaLabel.padEnd(30, '.');

switch(choice) {
    case 1:
        for(let i = 0; i <= basicSalary.length-1; i++) {
            let year = basicSalary[i].year;
            let salary = basicSalary[i].salary;
            
            let formattedSalary = salary.toFixed(2).replace('.', ',');

            console.log('');
            console.log(yearLabel+year);
            console.log(`${salaryLabel}R$${formattedSalary}`);
        }
        break;
    case 2:
        for(let i = 0; i<= inflation.length-1; i++) {
            let year = inflation[i].year;
            let ipca = inflation[i].ipca;

            let formattedIpca = ipca.toFixed(2).replace('.', ',');

            console.log('');
            console.log(yearLabel+year);
            console.log(`${ipcaLabel}${formattedIpca}%`);
        }
        break;
    case 3:
        for(let i = 0; i<= basicSalary.length-1; i++) {
            let year = basicSalary[i].year;
            let salary = basicSalary[i].salary;
            let percentualIncrease;
            let formattedIncrease;

            if(i > 0) {
                let previousSalary = basicSalary[i-1].salary;
                let difference = salary - previousSalary;

                percentualIncrease = (difference / previousSalary) * 100;

                formattedIncrease = percentualIncrease.toFixed(2).replace('.', ',')+'%';
            } else {
                formattedIncrease = ' (Não houve)';
            }

            let ipca = inflation[i].ipca;

            let formattedSalary = salary.toFixed(2).replace(',', ',');
            let formattedIpca = ipca.toFixed(2).replace('.',',');

            console.log('');
            console.log(yearLabel+year);
            console.log(`${salaryLabel}R$${formattedSalary}`);
            console.log(`${salaryIncreaseLabel}${formattedIncrease}`);
            console.log(`${ipcaLabel}${formattedIpca}%`);
        }
        break;
    default:
        console.log('Opção Inválida...Tente novamente.');
        break;
}