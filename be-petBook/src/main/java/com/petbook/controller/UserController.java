package com.petbook.controller;

import com.petbook.vo.UserVO;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;

@RestController
@Log4j2
public class UserController {

    @GetMapping("/users")
    @ApiOperation(value = "유저 목록조회", notes = "유저 목록조회 API")
    public Object Users() {
        HashMap<String, String> result = new HashMap<String, String>();
        result.put("msg", "success");

        return result;
    }

    @PostMapping("/user")
    @ApiOperation(value = "유저 등록", notes = "유저 등록 API")
    public Object user_reg(@RequestBody UserVO vo) {

        return vo;
    }

    @GetMapping("/user/{id}")
    @ApiOperation(value = "유저 상세조회", notes = "유저 상세조회 API")
    @ApiImplicitParam(name = "id", value = "유저 ID")
    public Object user_detail(@PathVariable String id) {
        HashMap<String, String> result = new HashMap<String, String>();
        result.put("id", id);

        return result;
    }

    @PutMapping("/user/{id}")
    @ApiOperation(value = "유저 수정", notes = "유저 수정 API")
    @ApiImplicitParam(name = "id", value = "유저 ID")
    public Object user_update(@PathVariable String id) {
        HashMap<String, String> result = new HashMap<String, String>();
        result.put("id", id);

        return result;
    }

    @DeleteMapping("/user/{id}")
    @ApiOperation(value = "유저 삭제", notes = "유저 삭제 API")
    @ApiImplicitParam(name = "id", value = "유저 ID")
    public Object user_delete(@PathVariable String id) {
        HashMap<String, String> result = new HashMap<String, String>();
        result.put("id", id);

        return result;
    }
}
