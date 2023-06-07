package com.socialnetwork.Infrastucture.Mapper;

import com.socialnetwork.Entity.User;
import com.socialnetwork.Infrastucture.Dto.UserDto;
import com.socialnetwork.Intergration.DtoMapper;

public enum UserMapper implements DtoMapper<User, UserDto> {
    INSTANCE;

    @Override
    public User apply(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        return user;
    }
}
