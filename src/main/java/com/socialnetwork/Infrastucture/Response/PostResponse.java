package com.socialnetwork.Infrastucture.Response;
import com.socialnetwork.Entity.Comment;
import com.socialnetwork.Infrastucture.Dto.CommentDto;
import lombok.Data;

import java.util.List;

@Data
public class PostResponse {
    private Long id;
    private String text;
    private List<CommentDto> comments;
}
