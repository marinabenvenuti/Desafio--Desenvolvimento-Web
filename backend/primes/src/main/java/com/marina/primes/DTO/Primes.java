package com.marina.primes.DTO;

public class Primes {
    private Long amountOfPrimeNumbers;
    private Long executionTime;

    public Primes(Long primeNumbers, Long executionTime) {
        this.amountOfPrimeNumbers = primeNumbers;
        this.executionTime = executionTime;
    }

    public Long getAmountOfPrimeNumbers() {
        return amountOfPrimeNumbers;
    }

    public Long getExecutionTime() {
        return executionTime;
    }

    public void setAmountOfPrimeNumbers(Long amountOfPrimeNumbers) {
        this.amountOfPrimeNumbers = amountOfPrimeNumbers;
    }

    public void setExecutionTime(Long executionTime) {
        this.executionTime = executionTime;
    }
}