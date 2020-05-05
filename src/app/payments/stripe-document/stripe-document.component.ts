import { Component, OnInit } from "@angular/core";
import { StripeService } from "ngx-stripe";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-stripe-document",
  templateUrl: "./stripe-document.component.html",
  styleUrls: ["./stripe-document.component.scss"]
})
export class StripeDocumentComponent implements OnInit {
  file: any;
  currentFileUpload: File;
  constructor(private stripeService: StripeService, private http: HttpClient) {}

  ngOnInit() {}
  onFileSelect(event) {
    this.file = event.target.files;
    this.uploadDocument();
  }

  uploadDocument() {
    this.debug("Uploading document...");
    const payload = new FormData();
    payload.append("purpose", "identity_document");
    payload.append("file", this.currentFileUpload, this.currentFileUpload.name);
    this.http.post("https://files.stripe.com/v1/files", payload, {
        headers: {
  "business_type": "individual",
  "individual": {
    "address": {
      "city": "mmmmmm",
      "country": "AU",
      "line1": "address 1",
      "line2": "Address 2",
      "postal_code": "0200",
      "state": "Victoria"
    },
    "dob": {
      "day": "**",
      "month": "*",
      "year": "****"
    },
    "email": "abc@gmail.com",
    "first_name": "Arup11",
    "last_name": "Das",
    "phone": "+61488858880",
    "verification": {
      "document": {
        "front": "file_1GfM4sIxJbILw13VE4Tptalq",
        "back": "file_1GfM51IxJbILw13VykwxIoNj"
      },
      "additional_document": {
        "front": "file_1GfM56IxJbILw13VMPwtgCAf"
      }
    }
  },
  "business_profile": {
    "mcc": "5734",
    "product_description": "shoes",
    "url": "www.aaabb.com"
  }
}
      })
      .subscribe((response: any) => {
        this.debug(JSON.stringify(response, null, 2));
        console.log(response);
      });
  }
  debug(message) {
    var debugMessage = document.getElementById("debug-message");
    console.log("DEBUG: ", message);
    debugMessage.innerText += "\n" + message;
  }
}
