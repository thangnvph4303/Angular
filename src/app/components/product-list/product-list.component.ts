import { EventEmitter } from '@angular/core'
import { Component, Input, Output } from '@angular/core'
import { IProduct } from 'src/app/interfaces/Product'
import { ProductService } from 'src/app/services/product.service';
// import { ProductService } from './../../services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent{
    // @Input() products!: IProduct[];
    // @Output() onRemove = new EventEmitter<any>();

    products: IProduct[] = []
    constructor(private productService: ProductService){
        this.productService.getProducts().subscribe(data => {
            this.products = data;
        }, error => console.log(error.message)
        )
    }
    removeItem(id: any) {
        // this.onRemove.emit(id)
        this.products = this.products.filter(item => item.id !== id)
    }
}