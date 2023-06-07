package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.User;
import com.socialnetwork.Infrastucture.Dto.UserDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum UserDtoMapper implements DtoMapper<UserDto, User> {
    INSTANCE;

    @Override
    public UserDto apply(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        return userDto;
    }
}
