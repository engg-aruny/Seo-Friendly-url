import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productName = "fake blush, glow and sheet (mask)";
  seoFrendlyUrl: string | undefined;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.seoFrendlyUrl = `/products/2/${this.getHyphenatedString()}`
  }

  goToProductDetail() {
    this.router.navigate(["products", 2, this.getHyphenatedString()])
  }

  getHyphenatedString() {
    let limitedTitle = this.productName.substring(0, 100);
    let hyphenatedString = limitedTitle
      .replace(",", "")
      .replace(/[^\w\s]/gi, '')
      .replace(/[\(\)]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    return hyphenatedString;
  }
}
