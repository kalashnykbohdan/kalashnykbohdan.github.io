'use strict';

// ==============================

// Task 7

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
const firstID = 100000;
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод отвечающий за добавление суммы к балансу
     * Создает объект транзакции и вызывает addTransaction
     */
    deposit(amount) {
        if(account.transactions.length !== 0){
            const createTransaction = {
                id: account.transactions[account.transactions.length - 1].id + 1,
                type: Transaction.DEPOSIT,
                amount: amount,
            }
            account.addTransaction(createTransaction);
        }
        else{
            const createTransaction = {
                id: firstID,
                type: Transaction.DEPOSIT,
                amount: amount,
            }
            account.addTransaction(createTransaction);
        }

    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Создает объект транзакции и вызывает addTransaction
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        const temp = 0 - amount;
        if(account.transactions.length !== 0){
            const createTransaction = {
                id: account.transactions[account.transactions.length - 1].id + 1,
                type: Transaction.WITHDRAW,
                amount: temp,
            }
            account.addTransaction(createTransaction);
        }
        else{
            const createTransaction = {
                id: firstID,
                type: Transaction.WITHDRAW,
                amount: temp,
            }
            account.addTransaction(createTransaction);
        }
    },
    /*
     * Метод добавляющий транзацию в свойство transactions
     * Принимает объект трназкции
     */
    addTransaction(transaction) {
        if(account.balance + transaction.amount < 0){
            console.log('Cнятие суммы не возможно, недостаточно средств')
            
        }
        // console.log(transaction.length);
        // console.log(account.transactions.length);

        if(account.transactions.length == 0){
        
            account.transactions[0] = transaction;
        }
        else{
            
        
            account.transactions[account.transactions.length] = transaction;
        }
        // console.log(transaction.amount);
        // console.log(account.balance);
        account.balance = account.balance + transaction.amount;

    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return account.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        if(account.transactions.length !== 0){
            for(let i = 0; i < account.transactions.length; i ++){
                if(account.transactions[i].id == id){
                    return account.transactions[i];
                }
            }
        }
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let transactionsType = [];
        let y = 0;
        transactionsType.length = 0;
        for(let i = 0; i < account.transactions.length; i ++){
            if(account.transactions[i].type == type){
                
                transactionsType[y] = account.transactions[i];
                y++;
            }
        }
        return transactionsType;
    },
  };
  

  console.log('getBalance: ',account.getBalance());
  account.deposit(6000);

//   console.log('getBalance: ',account.getBalance());
  account.withdraw(188);
//   console.log('getBalance: ',account.getBalance());
  account.withdraw(253);
//   console.log('getBalance: ',account.getBalance());
  account.withdraw(123);
//   console.log('getBalance: ',account.getBalance());
  account.withdraw(18);
//   console.log('getBalance: ',account.getBalance());
  account.withdraw(483);
//   console.log('getBalance: ',account.getBalance());

  account.deposit(700);
//   console.log('getBalance: ',account.getBalance());
  account.deposit(50);
//   console.log('getBalance: ',account.getBalance());

  account.withdraw(400);
//   console.log('getBalance: ',account.getBalance());
  account.withdraw(1236);
//   console.log('getBalance: ',account.getBalance());

  account.deposit(150);
  console.log('getBalance: ',account.getBalance());


  console.log('getTransactionDetails(id): ',account.getTransactionDetails(100004));
  console.log('getTransactionTotal(type_transactions): ',account.getTransactionTotal(Transaction.WITHDRAW));
  
  console.log('TransactionTotal: ',account.transactions);
  console.log('transactions.length: ',account.transactions.length);

//   console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);