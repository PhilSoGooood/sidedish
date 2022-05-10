package com.sidedish.repository;

import org.springframework.data.relational.core.mapping.Table;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sidedish.domain.product.ProductOrder;
import com.sidedish.web.dto.OrderDto;

@Repository
@Table(value = "product_order")
public interface OrderRepository extends CrudRepository<ProductOrder, Long> {
}