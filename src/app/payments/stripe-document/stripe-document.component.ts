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
    this.currentFileUpload = this.file[0];
    const payload = new FormData();
    payload.append("purpose", "identity_document");
    payload.append("file", this.currentFileUpload, this.currentFileUpload.name);
    this.http
      .post("https://files.stripe.com/v1/files", payload, {
        headers: {
          Authorization: `Bearer ${this.stripeService.key}`
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
