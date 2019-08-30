package com.anthem.rxsmart.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.anthem.rxsmart.model.Eligibility;

public interface EligibilityRepository extends MongoRepository<Eligibility, String> {
}
