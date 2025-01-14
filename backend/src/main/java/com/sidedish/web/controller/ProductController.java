package com.sidedish.web.controller;

import com.sidedish.servcie.ProductService;
import com.sidedish.web.dto.MainCategoryProductDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("product")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<MainCategoryProductDto> mainCategoryList(@RequestParam("main-category") String mainCategory){
        return productService.findMainCategory(mainCategory);
    }
}
