package com.sidedish.web.dto;

import com.sidedish.domain.product.EventBadge;
import com.sidedish.domain.product.EventCategory;
import lombok.Builder;
import lombok.Getter;

@Getter
public class EventCategoryProductDto extends CategoryProductDto{
    private String productName;
    private String description;
    private int price;
    private EventBadge eventBadge;
    private EventCategory eventCategory;

    @Builder
    public EventCategoryProductDto(String productName, String description, int price, EventBadge eventBadge, EventCategory eventCategory) {
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.eventBadge = eventBadge;
        this.eventCategory = eventCategory;
    }
}
