package com.socialnetwork.Repository;

import com.socialnetwork.Entity.VerifyAcc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerifyRepository extends JpaRepository<VerifyAcc,Long> {

    VerifyAcc findBynameAccount (String nameAccount);
}
