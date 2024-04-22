package com.marina.primes.DTO;

public class Primes
{
    private Long primeNumbers;
    private Long executionTime;

    public Primes(Long primeNumbers, Long executionTime)
    {
        this.primeNumbers = primeNumbers;
        this.executionTime = executionTime;
    }

    public Long getPrimeNumbers()
    {
        return primeNumbers;
    }

    public Long getExecutionTime()
    {
        return executionTime;
    }

    public void setPrimeNumbers(Long primeNumbers)
    {
        this.primeNumbers = primeNumbers;
    }

    public void setExecutionTime(Long executionTime)
    {
        this.executionTime = executionTime;
    }
}
