package com.socialnetwork.Service.Impl;

import com.socialnetwork.Entity.Image;
import com.socialnetwork.Infrastucture.Dto.ImageDto;
import com.socialnetwork.Repository.ImageRepository;
import com.socialnetwork.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    ImageRepository imageRepository;


    public Image uploadImage(MultipartFile file, String verName) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Image image = new Image();
        image.setName(fileName);
        image.setVerName(verName);
        image.setContent(file.getBytes());
        return imageRepository.save(image);
    }


    public Image getImageByVerName(String verName) {
        return imageRepository.findByVerName(verName);
    }
    @Override
    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }

    @Override
    public Image getImageById(Long id) {
        return imageRepository.findById(id).orElse(null);
    }


}


