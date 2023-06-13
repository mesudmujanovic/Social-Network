package com.socialnetwork.Controller;


import com.socialnetwork.Infrastucture.Dto.CommentDto;
import com.socialnetwork.Infrastucture.Dto.PostDto;
import com.socialnetwork.Infrastucture.Request.CommentRequest;
import com.socialnetwork.Infrastucture.Response.CommentResponse;
import com.socialnetwork.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")

public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping("/saveComment/postId/{postId}/verId/{verId}")
    public ResponseEntity<CommentResponse> createComment(@RequestBody CommentRequest commentRequest,
                                                         @PathVariable Long postId,
                                                         @PathVariable Long verId){
        CommentDto commentDto = new CommentDto().fromReqToDto(commentRequest);
        CommentDto saveComment = commentService.createComment(commentDto, postId, verId);
        return ResponseEntity.ok(saveComment.fromDtoToRes(saveComment));
    }

    @GetMapping("/allComments")
    public ResponseEntity<List<CommentResponse>> getAllComments(){
        List<CommentDto> commentDto = commentService.getAllComments();
        return ResponseEntity.ok(commentDto.stream().map(commss -> commss.fromDtoToRes(commss)).collect(Collectors.toList()));
    }
}
