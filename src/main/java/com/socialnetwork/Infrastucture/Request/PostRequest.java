package com.socialnetwork.Infrastucture.Request;

import com.socialnetwork.Infrastucture.Dto.VerifyDto;
import lombok.Data;

import java.util.List;

@Data
public class PostRequest {
    public String postText;
    private String postName;


}
