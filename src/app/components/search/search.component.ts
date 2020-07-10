import { Component, OnInit } from "@angular/core";
import { ServerService } from "src/app/services/server.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  results: any = [];
  name: any;
  nam = new FormControl("");

  constructor(public server: ServerService) {}

  ngOnInit(): void {
    this.getData();
    this.search(name);
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
      console.log(this.results);
    });
  }
}
