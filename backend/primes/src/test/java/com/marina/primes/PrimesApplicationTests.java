package com.marina.primes;

import com.marina.primes.DTO.Primes;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class PrimesApplicationTests {

	@Autowired
	private PrimesApplication primesApplication;

	@Test
	void receiveCorrectValueForValidInput() {
		Primes result = primesApplication.amountOfPrimeNumbersBeforeK(100L);

		assertThat(result.getAmountOfPrimeNumbers()).isEqualTo(25L);
	}

	void receiveZeroForNegativeNumbers() {
		Primes result = primesApplication.amountOfPrimeNumbersBeforeK(-100L);

		assertThat(result.getAmountOfPrimeNumbers()).isEqualTo(0);
	}

}
