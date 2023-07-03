package com.socialnetwork.Infrastucture.Response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Lob;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ImageResponse {

    private Long id;

    private String name;

    private String verName;

    @Lob
    private byte[] content;


}