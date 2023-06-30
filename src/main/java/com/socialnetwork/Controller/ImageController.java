package com.socialnetwork.Controller;
import com.socialnetwork.Entity.Image;
import com.socialnetwork.Infrastucture.Response.ImageResponse;
import com.socialnetwork.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ImageController {

    @Autowired
    public ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity<ImageResponse> uploadSliku(@RequestParam("file") MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        ImageResponse imageResponse = new ImageResponse();
        Image slika = imageService.uploadImage(file);
        imageResponse.setId(slika.getId());
        imageResponse.setName(fileName);
        imageResponse.setContent(slika.getContent());
        return ResponseEntity.ok(imageResponse);
    }



    @GetMapping("/allImages")
    public ResponseEntity<List<Image>> getAllImages() {
        List<Image> images = imageService.getAllImages();
        return ResponseEntity.ok(images);
    }

    @GetMapping("/images/{id}")
    public ResponseEntity<String> getImageById(@PathVariable("id") Long id) {
        Image image = imageService.getImageById(id);
        if (image != null) {
            String base64Image = Base64.getEncoder().encodeToString(image.getContent());
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(base64Image);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
