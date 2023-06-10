package com.socialnetwork.Infrastucture.Request;

import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Infrastucture.Dto.CommentDto;
import lombok.Data;

import java.util.List;

@Data
public class PostRequest {

    private String text;

    private List<CommentDto> comments;

}
