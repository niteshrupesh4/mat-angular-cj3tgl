import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService, Pokemon } from "../data.service";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { Observable } from "rxjs";

@Component({
  selector: "app-scroll-pagination",
  templateUrl: "./scroll-pagination.component.html",
  styleUrls: ["./scroll-pagination.component.scss"]
})
export class ScrollPaginationComponent implements OnInit {
  pokemons: Observable<Pokemon>;

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor(private pkmService: DataService) {
    this.pokemons = this.pkmService.fetchPokemons();
  }

  idTrackFn = (pokemon: Pokemon) => pokemon.number;

  currentIndex(index) {
    console.log("currentIndex", index);
  }

  gotToScrollIndex() {
    this.viewport.scrollToIndex(
      Math.floor(Math.random() * this.viewport.getDataLength()) + 1
    );
  }
  ngOnInit() {}
}
