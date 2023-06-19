package com.socialnetwork.Infrastucture.Dto;

import com.socialnetwork.Entity.User;
import com.socialnetwork.Entity.VerifyAcc;
import com.socialnetwork.Infrastucture.Mapper.VerifyDtoMapper;
import com.socialnetwork.Infrastucture.Mapper.VerifyMapper;
import com.socialnetwork.Infrastucture.Request.User.SignupRequest;
import com.socialnetwork.Infrastucture.Request.UserRequest;
import com.socialnetwork.Infrastucture.Response.UserResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

    private Long id;
    private String username;

    private String password;

    private List<VerifyDto> verifyDtoList;

    public static  UserDto fromRequest(SignupRequest request){
        UserDto userDto = new UserDto();
        userDto.setUsername(request.getUsername());
        userDto.setPassword(request.getPassword());
        return userDto;
    }

    public  static UserDto fromRequestToDto(UserRequest userRequest){
        UserDto userDto = new UserDto();
        userDto.setVerifyDtoList(userRequest.getVerifyDtoList().stream().map( verifys -> VerifyDtoMapper.INSTANCE.apply(VerifyMapper.INSTANCE.apply(verifys))).collect(Collectors.toList()));
        return userDto;
    }

    public static UserResponse fromResponse(UserDto userDto) {
        UserResponse userResponse = new UserResponse();
        userResponse.setId(userDto.getId());
        userResponse.setUsername(userDto.getUsername());
        userResponse.setVerifyDtoList(userDto.getVerifyDtoList());
        return userResponse;
    }
}