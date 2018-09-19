type Complex2 = { money: number, deposit: (val: number) => void };

let bankAccount: Complex2 = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    },
};



let myself: { name, bankAccount: Complex2, hobbies: string[] } = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking'],
};

myself.bankAccount.deposit(3000);

console.log(myself);
