package com.socialnetwork.Controller;
import com.socialnetwork.Entity.Image;
import com.socialnetwork.Infrastucture.Response.ImageResponse;
import com.socialnetwork.Repository.ImageRepository;
import com.socialnetwork.Service.ImageService;
import com.socialnetwork.Service.VerifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ImageController {

    @Autowired
    public ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity<ImageResponse> uploadSliku(@RequestParam("file") MultipartFile file, @RequestParam("verName") String verName) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        ImageResponse imageResponse = new ImageResponse();
        Image slika = imageService.uploadImage(file, verName);
        imageResponse.setId(slika.getId());
        imageResponse.setName(fileName);
        imageResponse.setVerName(slika.getVerName());
        imageResponse.setContent(slika.getContent());
        return ResponseEntity.ok(imageResponse);
    }

//    @PostMapping("/upload/{verifyId}")
//    public ResponseEntity<ImageResponse> uploadSliku(@RequestParam("file") MultipartFile file, @PathVariable("verifyId") Long verifyId) throws IOException {
//        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//        ImageResponse imageResponse = new ImageResponse();
//        VerifyAcc verifyAcc = verifyService.verifyIdEntity(verifyId).orElse(null);
//        Image slika = imageService.uploadImage(file, Optional.ofNullable(verifyAcc));
//        imageResponse.setId(slika.getId());
//        imageResponse.setName(fileName);
//        imageResponse.setContent(slika.getContent());
//        return ResponseEntity.ok(imageResponse);
//    }

    @GetMapping("/getImages/{verName}")
    public ResponseEntity<String> getSlikuByVerName(@PathVariable("verName") String verName) {
        Image image = imageService.getImageByVerName(verName);
        if (image != null) {
            String base64Image = Base64.getEncoder().encodeToString(image.getContent());
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(base64Image);
        } else {
            return ResponseEntity.notFound().build();
        }
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

    @GetMapping("/allImagesVerName")
    public ResponseEntity<List<Image>> getAllImagesVerName() {
        List<Image> images = imageService.getAllImagesAndName();
        return ResponseEntity.ok(images);
    }

    @GetMapping("/allImages")
    public ResponseEntity<List<String>> getAllImages() {
        List<Image> images = imageService.getAllImages();
        List<String> base64Images = new ArrayList<>();

        for (Image image : images) {
            String base64Image = Base64.getEncoder().encodeToString(image.getContent());
            base64Images.add(base64Image);
        }
        if (!base64Images.isEmpty()) {
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(base64Images);
        } else {
            return ResponseEntity.notFound().build();
        }
    }









}
