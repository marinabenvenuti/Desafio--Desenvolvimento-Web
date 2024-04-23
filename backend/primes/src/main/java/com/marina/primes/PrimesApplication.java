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
	public Primes amountOfPrimeNumbersBeforeK(@RequestParam Long k)
	{
		Long startTime = System.nanoTime();
		Long amountOfPrimeNumbers = calcAmountOfPrimeNumbersBeforeK(k);
		Long executionTime = (System.nanoTime() - startTime) / 1000000;

		return new Primes(amountOfPrimeNumbers, executionTime);
	}

	private Long calcAmountOfPrimeNumbersBeforeK(Long k)
	{
		Long primeNumbers = 0L;
		for (Long n = 2L; n < k; n++)
		{
			if (isPrime(n))
			{
				primeNumbers++;
			}
		}
		return primeNumbers;
	}

	private boolean isPrime(Long number)
	{
		if (number <= 1)
		{
			return false;
		}

		for (Long n = 2L; n <= Math.sqrt(number); n++)
		{
			if (number % n == 0) {
				return false;
			}
		}

		return true;
	}
}