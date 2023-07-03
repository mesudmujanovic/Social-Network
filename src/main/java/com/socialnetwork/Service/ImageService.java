package com.socialnetwork.Service;

import com.socialnetwork.Entity.Image;
import com.socialnetwork.Infrastucture.Dto.ImageDto;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

public interface ImageService {

    Image uploadImage(MultipartFile file, String verName) throws IOException;

    List<Image> getAllImages();

    List<Image> getAllImagesAndName();

    Image getImageById(Long id);

    Image getImageByVerName(String verName);

}
