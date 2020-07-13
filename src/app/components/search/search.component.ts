import { Component, OnInit } from "@angular/core";
import { ServerService } from "src/app/services/server.service";
import {
  FormControl,
  FormBuilder,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  results: any = [];
  name: any;
  nam = new FormControl("");
  movieForm: FormGroup;

  constructor(public server: ServerService, private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      Title: [""],
      Genre: [""],
    });
  }

  ngOnInit(): void {
    this.getData();
    this.search(name);

    this.movieForm.valueChanges.subscribe((results) => {
      console.log("name value changed" + results);
    });
  }

  getData() {
    this.server.getData().subscribe((results) => {
      this.results = results;
      //  console.log(results)
    });
  }

  search(name) {
    this.server.search(this.nam.value).subscribe((results: {}) => {
      this.results = results;
     // console.log(results['Search'])
    });
  }

  // searching(){
  //   this.server.search(this.nam).subscribe((results:{}) => {
  //     this.results = results['Search'];
  //     console.log(results['Search'])
  //   })
  // }
}
