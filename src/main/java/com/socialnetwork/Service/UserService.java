package com.socialnetwork.Service;

import com.socialnetwork.Infrastucture.Dto.UserDto;

public interface UserService {
    public  void register(UserDto userDto) throws Exception;

    public UserDto userId ( Long userId );


}
