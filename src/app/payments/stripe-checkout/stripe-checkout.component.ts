import { Component, OnInit } from "@angular/core";
import {
  StripeService,
  Elements,
  Element as StripeElement,
  ElementsOptions
} from "ngx-stripe";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-stripe-checkout",
  templateUrl: "./stripe-checkout.component.html",
  styleUrls: ["./stripe-checkout.component.scss"]
})
export class StripeCheckoutComponent implements OnInit {
  elements: Elements;
  card: StripeElement;

  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: "es"
  };

  stripeTest: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ["", [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions).subscribe(elements => {
      this.elements = elements;
      // Only mount the element the first time
      if (!this.card) {
        this.card = this.elements.create("card", {
          style: {
            base: {
              iconColor: "#666EE8",
              color: "#31325F",
              lineHeight: "40px",
              fontWeight: 300,
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSize: "18px",
              "::placeholder": {
                color: "#CFD7E0"
              }
            }
          }
        });
        this.card.mount("#card-element");
      }
    });
  }

  buy() {
    const name = this.stripeTest.get("name").value;
    let headers = new HttpHeaders({
      client_secret:
        "5c3d46a7c0d6dc57a9d817a1dec383b027c5c0ef476084ec9264842790ee271b"
    });
    let options = { headers: headers };

    this.stripeService.createToken(this.card, { name }).subscribe(obj => {
      debugger;
      if (obj) {
        console.log("Token is --> ", obj.token.id);

        this.http
          .post(
            "https://node-demo.niteshrupesh.repl.co/app/api/v1/user/charge",
            {
              token: obj.token.id
            },
            options
          )
          .subscribe(
            res => {
              console.log("The response from server is ", res);
              console.log("Payment Done");
            },
            err => {
              console.log("The error is ", err);
            }
          );
      } else {
        // Error creating the token
        console.log("Error comes ");
      }
    });
  }
}
