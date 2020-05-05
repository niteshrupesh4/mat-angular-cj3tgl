import { Component, OnInit } from "@angular/core";
import { StripeService } from "ngx-stripe";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
      fname: ["Elon", Validators.required],
      lname: ["musk", Validators.required],
      email: ["elon@yopmail.com", Validators.required],
      url: ["http://rocketrides.io", Validators.required],
      mcc: ["7623", Validators.required],
      phone: ["9867654376", Validators.required],
      line1: ["40 Parkes Road", Validators.required],
      line2: ["", Validators.required],
      city: ["Southbank", Validators.required],
      state: ["VIC", Validators.required],
      postal_code: ["3006", Validators.required],
      account_number: ["000123456", Validators.required],
      routing_number: ["110000", Validators.required]
    });
  }

  // when submitted,
  // - tokenize bank details
  createBankAccount() {
    this.debug("Creating bank account...");
    this.stripeService
      .createToken("bank_account", {
        country: "AU",
        currency: "aud",
        account_number: this.accountForm.value.account_number,
        routing_number: this.accountForm.value.routing_number,
        account_holder_type: "individual",
        account_holder_name: this.accountForm.value.name
      })
      .subscribe(obj => {
        this.debug("Created bank account" + obj.token.id); //btok_xxx
        this.createAccount(obj.token.id);
      });
  }

  // - create account
  createAccount(bankToken) {
     let headers = new HttpHeaders({
      client_secret:
        "5c3d46a7c0d6dc57a9d817a1dec383b027c5c0ef476084ec9264842790ee271b"
    });
    let options = { headers: headers };
    this.accountForm.value.external_account = bankToken;
    this.debug("Creating account...");
    this.http
      .post(
        "https://node-demo.niteshrupesh.repl.co/app/api/v1/user/create-account",
        {
          body: this.accountForm.value
        },
        options
      )
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
