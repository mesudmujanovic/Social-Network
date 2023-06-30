package com.socialnetwork.Infrastucture.Response;

import lombok.Data;

import javax.persistence.Lob;

@Data
public class ImageResponse {

    private Long id;

    private String name;

    @Lob
    private byte[] content;

    private Integer userId;
}
