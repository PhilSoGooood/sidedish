package com.sidedish.domain.product;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ProductOrder {
	@Id
	private Long id;

	private Long productId;
	private Long userId;
	private int quantity;
	private int price;
}
