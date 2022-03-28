const response = pm.response.json();
const loanData = response.loan_data;

pm.test("Return id and in the correct format", function () {
    pm.expect(response.id, "id isn't returned").to.not.be.null;
});

pm.test("Return link and in the correct format", function () {
    pm.expect(response.link, "link isn't returned").to.not.be.null;
});

pm.test("Return institution and in the correct format", function () {
    pm.expect(response.institution, "institution isn't returned").to.not.be.null;
});

pm.test("Return institution.name and in the correct format", function () {
    pm.expect(response.institution.name, "institution.name isn't returned").to.not.be.null;
});

pm.test("Return institution.type and in the correct format", function () {
    pm.expect(response.institution.type, "institution.type isn't returned").to.not.be.null;
});

pm.test("Return created_at and in the correct format", function () {
    pm.expect(response.created_at, "created_at isn't returned").to.not.be.null;
});

pm.test("Return collected_at and in the correct format", function () {
    pm.expect(response.collected_at, "collected_at isn't returned").to.not.be.null;
});

pm.test("Return internal_identification and in the correct format", function () {
    pm.expect(response.internal_identification, "internal_identification isn't returned").to.not.be.null;
});

pm.test("Return name and in the correct format", function () {
    pm.expect(response.name, "name isn't returned").to.not.be.null;
});

pm.test("Return type and in the correct format", function () {
    pm.expect(response.type, "type isn't returned").to.not.be.null;
});

if (loanData !== null) {
    // Deprecated fields
    pm.test("limit_day is deprecated and should return null values", function () {
        pm.expect(loanData.limit_day, "limit_day is returning data! Why!?").to.be.null;
    });

    pm.test("credit_limit is deprecated and should return null values", function () {
        pm.expect(loanData.credit_limit, "credit_limit is returning data! Why!?").to.be.null;
    });

    pm.test("next_payment_date should only return for credit card accounts", function () {
        pm.expect(loanData.next_payment_date, "next_payment_date is returning data! Why!?").to.be.null;
    });

    pm.test("last_period_balance is deprecated and should return null values", function () {
        pm.expect(loanData.last_period_balance, "last_period_balance is returning data! Why!?").to.be.null;
    });

    pm.test("interest_rate is deprecated and should return null values", function () {
        pm.expect(loanData.interest_rate, "interest_rate is returning data! Why!?").to.be.null;
    });

    pm.test("limit_day is deprecated and should return null values", function () {
        pm.expect(loanData.limit_day, "limit_day is returning data! Why!?").to.be.null;
    });

    pm.test("cutting_day is deprecated and should return null values", function () {
        pm.expect(loanData.cutting_day, "cutting_day is returning data! Why!?").to.be.null;
    });

    pm.test("cutting_date is deprecated and should return null values", function () {
        pm.expect(loanData.cutting_date, "cutting_date is returning data! Why!?").to.be.null;
    });

    pm.test("last_payment_date is deprecated and should return null values", function () {
        pm.expect(loanData.last_payment_date, "last_payment_date is returning data! Why!?").to.be.null;
    });

    pm.test("no_interest_payment is deprecated and should return null values", function () {
        pm.expect(loanData.no_interest_payment, "no_interest_payment is returning data! Why!?").to.be.null;
    });

    pm.test("monthly_payment is deprecated and should return null values", function () {
        pm.expect(loanData.monthly_payment, "monthly_payment is returning data! Why!?").to.be.null;
    });

    // correct schema

    pm.test("Return collected_at and in the correct format", function () {
        pm.expect(loanData.collected_at, "collected_at isn't returned").to.not.be.null;
    });

    pm.test("Return loan_type and in the correct format", function () {
        pm.expect(loanData.loan_type, "loan_type isn't returned").to.not.be.null;
    });

    pm.test("Return principal and in the correct format", function () {
        pm.expect(loanData.principal, "principal isn't returned").to.not.be.null;
    });

    pm.test("Return outstanding_principal and in the correct format", function () {
        pm.expect(loanData.outstanding_principal, "outstanding_principal isn't returned").to.not.be.null;
    });

    pm.test("Return outstanding_balance and in the correct format", function () {
        pm.expect(loanData.outstanding_balance, "outstanding_balance isn't returned").to.not.be.null;
    });

    pm.test("Return payment_day and in the correct format", function () {
        pm.expect(loanData.payment_day, "payment_day isn't returned").to.not.be.null;
    });

    // Need to improve this by also checkling the rest of the fields within the interest_rates object
    pm.test("Return interest_rates and in the correct format", function () {
        pm.expect(loanData.interest_rates, "interest_rates isn't returned").to.not.be.null;
    });

    pm.test("Return monthly_payment and in the correct format", function () {
        pm.expect(loanData.monthly_payment, "monthly_payment isn't returned").to.not.be.null;
    });

    pm.test("Return number_of_installments_total and in the correct format", function () {
        pm.expect(loanData.number_of_installments_total, "number_of_installments_total isn't returned").to.not.be.null;
    });

    pm.test("Return number_of_installments_outstanding and in the correct format", function () {
        pm.expect(loanData.number_of_installments_outstanding, "number_of_installments_outstanding isn't returned").to.not.be.null;
    });

    pm.test("Return contract_start_date and in the correct format", function () {
        pm.expect(loanData.contract_start_date, "contract_start_date isn't returned").to.not.be.null;
    });

    pm.test("Return contract_number and in the correct format", function () {
        pm.expect(loanData.contract_number, "contract_number isn't returned").to.not.be.null;
        pm.expect(loanData.contract_number).to.be.a('string');
    });

} else if (response.funds_data !== null) {
    pm.test("Return name and in the correct format", function () {
        pm.expect(response.funds_data.name, "name isn't returned").to.not.be.null;
    });
    pm.test("Return type and in the correct format", function () {
        pm.expect(response.funds_data.type, "type isn't returned").to.not.be.null;
    });
    pm.test("Return public_identifiers and in the correct format", function () {
        pm.expect(response.funds_data.public_identifiers, "public_identifiers isn't returned").to.not.be.null;
    });
    pm.test("Return balance and in the correct format", function () {
        pm.expect(response.funds_data.balance, "balance isn't returned").to.not.be.null;
    });
    pm.test("Return percentage and in the correct format", function () {
        pm.expect(response.funds_data.percentage, "percentage isn't returned").to.not.be.null;
    });
    
} else if (response.credit !== null) {
    // Deprecated check
    pm.test("monthly_payment is deprecated and should return null values", function () {
            pm.expect(response.credit_card.monthly_payment, "monthly_payment is returning data! Why!?").to.be.null;
        });
    pm.test("last_payment_date is deprecated and should return null values", function () {
            pm.expect(response.credit_card.last_payment_date, "last_payment_date is returning data! Why!?").to.be.null;
        });
    pm.test("last_period_balance is deprecated and should return null values", function () {
            pm.expect(response.credit_card.last_period_balance, "last_period_balance is returning data! Why!?").to.be.null;
        });
    pm.test("end_date is deprecated and should return null values", function () {
            pm.expect(response.credit_card.end_date, "end_date is returning data! Why!?").to.be.null;
        });
}




