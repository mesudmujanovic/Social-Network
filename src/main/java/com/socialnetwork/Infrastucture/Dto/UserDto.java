package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Infrastucture.Request.User.SignupRequest;
import com.socialnetwork.Infrastucture.Response.UserJwt.UserResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

    private Long id;
    private String username;

    private String password;

    public static  UserDto fromRequest(SignupRequest request){
        UserDto userDto = new UserDto();
        userDto.setUsername(request.getUsername());
        userDto.setPassword(request.getPassword());
        return userDto;
    }


    public static UserResponse fromResponse(UserDto userDto) {
        UserResponse userResponse = new UserResponse();
        userResponse.setId(userDto.getId());
        userResponse.setUsername(userDto.getUsername());
        return userResponse;
    }
}