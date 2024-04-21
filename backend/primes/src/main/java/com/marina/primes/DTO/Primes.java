package com.marina.primes.DTO;

import java.util.ArrayList;

public class Primes
{
    private ArrayList<Integer> primeNumbersList;
    private Long executionTime;

    public Primes(ArrayList<Integer> primeNumbersList, Long executionTime)
    {
        this.primeNumbersList = primeNumbersList;
        this.executionTime = executionTime;
    }

    public ArrayList<Integer> getPrimeNumbersList()
    {
        return this.primeNumbersList;
    }

    public Long getExecutionTime()
    {
        return this.executionTime;
    }

    public void setPrimeNumbersList(ArrayList<Integer> primeNumbersList)
    {
        this.primeNumbersList = primeNumbersList;
    }

    public void setExecutionTime(Long executionTime)
    {
        this.executionTime = executionTime;
    }

}
