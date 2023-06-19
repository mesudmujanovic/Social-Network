package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.User;
import com.socialnetwork.Infrastucture.Dto.UserDto;
import com.socialnetwork.Intergration.DtoMapper;

import java.util.stream.Collectors;

public enum UserDtoMapper implements DtoMapper<UserDto, User> {
    INSTANCE;

    @Override
    public UserDto apply(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setVerifyDtoList(user.getVerifyAcc().stream().map( verifys -> VerifyDtoMapper.INSTANCE.apply(verifys)).collect(Collectors.toList()));
        return userDto;
    }
}
