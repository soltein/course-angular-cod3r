import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  };

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
  
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log("1", this.product)
    this.productService.readById(id).subscribe(product => {
      this.product = product
      console.log("2", this.product)
    });  
  }


  updateroduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
