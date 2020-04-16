import { Component, OnInit } from "@angular/core";
import { NgxImageCompressService } from "ngx-image-compress";

@Component({
  selector: "app-image-compress",
  templateUrl: "./image-compress.component.html",
  styleUrls: ["./image-compress.component.scss"]
})
export class ImageCompressComponent implements OnInit {
  constructor(private imageCompress: NgxImageCompressService) {}

  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  compressFile() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.imgResultBeforeCompress = image;
      console.warn("Size in bytes was:", this.imageCompress.byteCount(image));

      this.imageCompress
        .compressFile(image, orientation, 50, 50)
        .then(result => {
          this.imgResultAfterCompress = result;
          console.warn(
            "Size in bytes is now:",
            this.imageCompress.byteCount(result)
          );
        });
    });
  }
}
