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
  constructor(private stripeService: StripeService, private http: HttpClient) {}

  ngOnInit() {}
  onFileSelect(event) {
    this.selectedFiles = event.target.files;
    this.file = event.target.files;
  }

  uploadDocument() {
    var fd = new FormData();
    // fd.set('purpose', 'identity_document');
    // fd.set('file', document.getElementById('file').files[0]);
    this.debug("Uploading document...");
    return fetch("https://files.stripe.com/v1/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripe._apiKey}`
      },
      body: fd
    })
      .then(function(r) {
        return r.json();
      })
      .then(function(response) {
        this.debug(JSON.stringify(response, null, 2));
        return response.id;
      });
  }
  debug(message) {
    var debugMessage = document.getElementById("debug-message");
    console.log("DEBUG: ", message);
    debugMessage.innerText += "\n" + message;
  }
}
