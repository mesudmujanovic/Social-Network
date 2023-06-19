package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.User;
import com.socialnetwork.Entity.VerifyAcc;
import com.socialnetwork.Infrastucture.Dto.UserDto;
import com.socialnetwork.Intergration.DtoMapper;

import java.util.stream.Collectors;

public enum UserMapper implements DtoMapper<User, UserDto> {
    INSTANCE;

    @Override
    public User apply(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setUsername(userDto.getUsername());
        user.setVerifyAcc(userDto.getVerifyDtoList().stream().map( verifys -> VerifyMapper.INSTANCE.apply(verifys)).collect(Collectors.toList()));
        return user;
    }
}