import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input("post") post: any;
  @Input("i") i: string;

  animate: string = `hoverable my-4 animate__animated animate__fadeInDown`;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.animate = `hoverable my-4 animate__animated animate__flipInX animate__delay-${this.i}s`;
    console.log(this.i)
    console.log(this.animate)
  }

  view_post() {
    this.router.navigateByUrl('/test');
  }

}
