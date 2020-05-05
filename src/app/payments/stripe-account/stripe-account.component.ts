import { Component, OnInit } from "@angular/core";
import { StripeService } from "ngx-stripe";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-stripe-account",
  templateUrl: "./stripe-account.component.html",
  styleUrls: ["./stripe-account.component.scss"]
})
export class StripeAccountComponent implements OnInit {
  accountForm: FormGroup;
  constructor(
    private stripeService: StripeService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.accountForm = this.fb.group({
      name: ["Demo Inc", Validators.required],
      url: ["http://rocketrides.io", Validators.required],
      tax_id: ["000000000", Validators.required],
      phone: ["4088675309", Validators.required],
      line1: ["200 S. Virginia St.", Validators.required],
      city: ["Reno", Validators.required],
      state: ["NV", Validators.required],
      postal_code: ["89501", Validators.required],
      account_number: ["000123456789", Validators.required],
      routing_number: ["110000000", Validators.required]
    });
  }

  // when submitted,
  // - tokenize bank details
  createBankAccount() {
    var account = document.getElementById("account_number");
    var routing = document.getElementById("routing_number");
    var name = document.getElementById("name");
    this.debug("Creating bank account...");
    this.stripeService
      .createToken("bank_account", {
        country: "us",
        currency: "USD",
        account_number: this.accountForm.value.account_number,
        routing_number: this.accountForm.value.routing_number,
        account_holder_type: "company",
        account_holder_name: this.accountForm.value.name
      })
      .subscribe(obj => {
        this.debug("Created bank account" + obj.token.id); //btok_xxx
        this.createAccount(obj.token.id);
      });
  }

  // - create account
  createAccount(bankToken) {
    this.accountForm.value.external_account = bankToken;
    this.debug("Creating account...");
    this.http
      .post("http://localhost:4242/create-account", {
        body: this.accountForm.value)
      })
      .subscribe(response => {
        this.debug(JSON.stringify(response, null, 2));
      });
  }

  debug(message) {
    var debugMessage = document.getElementById("debug-message");
    console.log("DEBUG: ", message);
    debugMessage.innerText += "\n" + message;
  }
}
