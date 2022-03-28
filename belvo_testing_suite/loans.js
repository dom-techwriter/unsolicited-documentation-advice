const response = pm.response.json();
const reqBody =JSON.parse(pm.request.body.raw)
const loanData = response.loan_data;

pm.test("Successful POST request", () => {
  pm.expect(pm.response.code).to.be.oneOf([200,201]);
});

pm.test("Response time is less than 3000ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(3000);
});

// Response validation


pm.test('Response is expected Belvo JSON schema', function() {
    let result = tv4.validateResult(pm.response.json(), linkResponseSchema);
    if (!result.valid){
        console.log(result);
    }

    pm.expect(result.valid).to.be.true
})


pm.test("Returns institution", function () {
    pm.expect(response.institution).to.not.be.null;
    pm.expect(response.institution).to.be.a('string', 'Not a string');
    pm.expect(response.institution).to.match(/[a-z]+_[a-z]{2}_[a-z]+/, "Doesn't match regex");
});

pm.test("Returns access_mode", function () {
    pm.expect(response.access_mode).to.not.be.null;
    pm.expect(response.access_mode).to.be.oneOf(["single", "recurrent"])
});

pm.test("Returns created_at and last_accessed_at in the correct format", function () {
    pm.expect(response.last_accessed_at).to.not.be.null;
    pm.expect(response.created_at).to.not.be.null;
    pm.expect(response.last_accessed_at).to.match(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, "last_accessed_at doesn't match ISO format")
    pm.expect(response.created_at).to.match(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, "created_at doesn't match ISO format")
});

pm.test("Returns id and created_by in the correct format"), function () {
    pm.expect(response.id, "Didn't return id").to.not.be.null;
    pm.expect(response.created_by, "Didn't return created_by").to.not.be.null;
    pm.expect(response.id).to.match(/[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/, "id not valid uuid4")
    pm.expect(response.created_by).to.match(/[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/, "created_by not valid uuid4")
}

pm.test("Returns the link status"), function () {
    pm.expect(response.status, "Didn't return status").to.not.be.null;
    pm.expect(response.status, "Returned status isn't one of the allowed options").to.not.be.oneOf(["valid", "invalid", "unconfirmed", "token_required"]);
}

pm.test("Returns institution_user_id"), function () {
    pm.expect(response.institution_user_id).to.match(/[A-Za-z0-9_=]{44}/, "Doesn't match expected regex pattern")
}

// need to correct this test - it should be if external_id is present in the body, it should be returned.
if (reqBody.external_id === null) {
    pm.test("Returns external_id", function () {
    pm.expect(response.external_id).to.not.be.null;
});
}



// Ensure deprecated fields return null values

pm.test("Deprecated fields return null values", function () {
    pm.expect(loanData.limit_day).to.be.null;
});

if (response.credit_date !=== null) {
    pm.test("Deprecated fields return null values", function () {
        pm.expect(loanData.credit_date).to.be.null;
    });
    
}