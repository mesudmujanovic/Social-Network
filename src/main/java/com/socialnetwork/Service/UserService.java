package com.socialnetwork.Service;

import com.socialnetwork.Entity.User;
import com.socialnetwork.Infrastucture.Dto.UserDto;

import java.util.List;

public interface UserService {
    public  void register(UserDto userDto) throws Exception;

    public UserDto userId ( Long userId );

    public List<UserDto> getAll();


}
