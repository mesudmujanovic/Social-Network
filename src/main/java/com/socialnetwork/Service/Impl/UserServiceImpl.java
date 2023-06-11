package com.socialnetwork.Service.Impl;

import com.socialnetwork.Entity.User;
import com.socialnetwork.Infrastucture.Dto.UserDto;
import com.socialnetwork.Repository.UserRepository;
import com.socialnetwork.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Override
    public void register(UserDto userDto) throws Exception {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setPassword(encoder.encode(userDto.getPassword()));
        userRepository.save(user);
    }

    @Override
    public UserDto userId(Long id) {
        User user = userRepository.findById(id).orElseThrow(()->new RuntimeException("not found user" + id));
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        return userDto;
    }
}
