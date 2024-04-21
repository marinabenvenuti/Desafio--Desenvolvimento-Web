package com.marina.primes;

import com.marina.primes.DTO.Primes;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@SpringBootApplication
@RestController
public class PrimesApplication
{

	public static void main(String[] args) {
		SpringApplication.run(PrimesApplication.class, args);
	}

	@GetMapping("/primeNumbers")
	public Primes primeNumbersTillK(@RequestParam Integer k)
	{
		Long startTime = System.nanoTime();
		ArrayList<Integer> primeNumbersList = findAllPrimeNumberBeforeK(k);
		Long executionTime = (System.nanoTime() - startTime) / 1000000;

		return new Primes(primeNumbersList, executionTime);
	}


	private ArrayList<Integer> findAllPrimeNumberBeforeK(Integer k)
	{
		ArrayList<Integer> primeNumbersList = new ArrayList<>();
		for (int i = 2; i < k; i++)
		{
			if (isPrime(i))
			{
				primeNumbersList.add(i);
			}
		}
		return primeNumbersList;
	}

	private boolean isPrime(Integer number)
	{
		if (number <= 1)
		{
			return false;
		}

		for (int i = 2; i <= Math.sqrt(number); i++)
		{
			if (number % i == 0) {
				return false;
			}
		}

		return true;
	}
}