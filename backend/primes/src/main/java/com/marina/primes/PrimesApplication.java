package com.marina.primes;

import com.marina.primes.DTO.Primes;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;



@CrossOrigin(origins = "http://localhost:3000")
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
		Long primeNumbers = findAllPrimeNumberBeforeK(k);
		Long executionTime = (System.nanoTime() - startTime) / 1000000;

		return new Primes(primeNumbers, executionTime);
	}


	private Long findAllPrimeNumberBeforeK(Integer k)
	{
		Long primeNumbers = 0L;
		for (int i = 2; i < k; i++)
		{
			if (isPrime(i))
			{
				primeNumbers++;
			}
		}
		return primeNumbers;
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