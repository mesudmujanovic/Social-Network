package com.socialnetwork.Controller;


import com.socialnetwork.Infrastucture.Dto.CommentDto;
import com.socialnetwork.Infrastucture.Dto.PostDto;
import com.socialnetwork.Infrastucture.Request.CommentRequest;
import com.socialnetwork.Infrastucture.Response.CommentResponse;
import com.socialnetwork.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")

public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping("/saveComment")
    public ResponseEntity<CommentResponse> createComment(@RequestBody CommentRequest commentRequest){
        CommentDto commentDto = new CommentDto().fromReqToDto(commentRequest);
        CommentDto saveComment = commentService.createComment(commentDto);
        return ResponseEntity.ok(saveComment.fromDtoToRes(saveComment));
    }
}
