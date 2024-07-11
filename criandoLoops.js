const estacoes = ["primavera", "inverno", "outono"]
const despesas = [
    {
      fatura: "luz",
      valoresMensal: [0, 70, 67],
    },
    {
      fatura: "internet",
      valoresMensal: [100, 120, 389.6],
    },
    {
      fatura: "agua",
      valoresMensal: [75, 80, 37],
    },
  ];


for (let i = 0; i < despesas.length; i++){
 const conta = despesas[i].fatura
 const conta2 = despesas[i].valoresMensal


const somaConta = conta2.reduce((total, number) => total+number,0)
console.log("Sua conta de " + conta + " dos últimos 3 meses é r$ " + somaConta)

/* console.log(conta2) */

} 
