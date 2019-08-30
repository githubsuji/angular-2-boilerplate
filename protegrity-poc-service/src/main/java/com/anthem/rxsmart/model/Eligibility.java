package com.anthem.rxsmart.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter
@Document(collection = "Eligibility")
public class Eligibility {
	@Id 
	private String id;
	private @NonNull String firstName;
	private @NonNull String lastName;
	private @NonNull String email;
}