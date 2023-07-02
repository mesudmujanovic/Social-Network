package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Entity.Image;
import com.socialnetwork.Entity.VerifyAcc;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ImageDto {
    private Long id;
    private String name;

    private String verName;
    private byte[] content;
    private Long verifyId;


    @Component
    public class ImageMapper {

        public ImageDto toDto(Image image) {
            ImageDto imageDto = new ImageDto();
            imageDto.setId(image.getId());
            imageDto.setName(image.getName());
            imageDto.setContent(image.getContent());
            return imageDto;
        }

        public Image toEntity(ImageDto imageDto) {
            Image image = new Image();
            image.setId(imageDto.getId());
            image.setName(imageDto.getName());
            image.setContent(imageDto.getContent());

            return image;
        }
    }

}
