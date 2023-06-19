package com.socialnetwork.Infrastucture.Request;

import com.socialnetwork.Infrastucture.Dto.VerifyDto;
import lombok.Data;

import java.util.List;

@Data
public class UserRequest {

    private String username;

    public List<VerifyDto> verifyDtoList;
}
