package com.anthem.rxsmart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anthem.rxsmart.model.ProtegrityData;
import com.anthem.rxsmart.util.ProtegrityUtil;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping("/v1/protegrity/")
@Api(description = "Set of endpoints to test Encryption and Decryption using Protegrity API.")
public class ProtegrityEncryptionDecryptionController {
	
	@Autowired
	ProtegrityUtil protegrityUtil;
	
	@PostMapping("protect")
	@ApiOperation("${protegrityEncryptionDecryptionController.protectData}")
	public Object protectData(
			@ApiParam("Data to protect. Cannot be empty.") @RequestBody ProtegrityData protegrityData) {
		
		return protegrityUtil.getProtectedData(protegrityData);
	}

	@PostMapping("unprotect")
	@ApiOperation("${protegrityEncryptionDecryptionController.unProtectData}")
	public Object unProtectData(
			@ApiParam("Data to unprotect. Cannot be empty.") @RequestBody ProtegrityData protegrityData) {
		
		return protegrityUtil.getUnProtectedData(protegrityData);
	}
	
	@GetMapping("version")
	@ApiOperation("${protegrityEncryptionDecryptionController.getProtegrityVersion}")
	public Object getProtegrityVersion() {
		
		return protegrityUtil.getProtegrityVersion();
	}
}
