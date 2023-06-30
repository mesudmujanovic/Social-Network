package com.socialnetwork.Service;

import com.socialnetwork.Entity.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageService {
    Image uploadImage(MultipartFile file) throws IOException;

    List<Image> getAllImages();

    Image getImageById(Long id);
}
