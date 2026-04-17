const users = [
  { id: 1, status: 'member' },
  { id: 2, status: 'admin' },
  { id: 3, status: 'member' }
];

let findAdmin=users.find(
    function(x){
    return x.status==='admin'
    }
)
console.log(findAdmin)

//question 3
const expenses = [
  { title: 'Rent', amount: 1000 },
  { title: 'Groceries', amount: 200 },
  { title: 'Internet', amount: 50 }
];
let total=expenses.reduce(
    function(acummulator,x){
        return acummulator+x.amount;
    },0
)
console.log(total)
