describe('Signetic Test Suite', () => {
    // Shared state to keep track of appointment details
    let appointmentDetails;
  
    // Setup the initial appointment before running any tests
    beforeEach(() => {
      cy.visit('https://feature.qa.signetic.com/service/?lang=en');
      cy.intercept('GET', '/service/?lang=en').as('pageLoad');


      // Booking an appointment
      cy.contains('.Collapsible', 'API Clinical Services').click();
      cy.get('.Collapsible__contentInner .form-group .form-select-wrapper .form-control')
        .select('Medication Therapy Management', { force: true });
      cy.get('[data-qa="go-to-prescreening"]').click();
      
      // Filling in birth date details
      cy.get('#birthYear').select('2000');
      cy.get('[data-qa="prescreening-birthmonth"]').select('Mar');
      cy.get('#birthDay').select('4');
      cy.get('[data-qa="goto-subservicelist-btn"]').click();
      
      // Navigating to eligibility and selecting a time slot
      cy.get('[data-qa="go-to-eligibility"] > .m-0x').click();
      cy.get('.react-datepicker__day').contains('31').click({ force: true });
      cy.get('span.text-demibold').contains('09:00 am').click();
      cy.get('.m-0x').click();
      
      // Filling self-declaration form
      cy.get('[data-qa="self-declaration-fname"]').type('Bhagya');
      cy.get('[data-qa="self-declaration-mname"]').type('sanjay');
      cy.get('[data-qa="self-declaration-lname"]').type('shaha');
      cy.get('input[id="terms-conditions"]').click({ force: true });
      cy.get('[data-qa="go-to-screening"]').click();
      
      // Filling screening information
      cy.get('[data-qa="ethnicity-info-page"]').select('Not Hispanic/Latino');
      cy.get('[data-qa="race-info-page"]').select('Asian');
      cy.get('[data-qa="gender-info-page"]').select('Female');
      cy.get('[data-qa="mobile-info-page"]').type('9876543211');
      cy.get('[data-qa="home-phone-number-info-page"]').type('1234567899');
      cy.get('[data-qa="email-info-page"]').type('bhagya@gmail.com');
      cy.get('[data-qa="email-confirm-info-page"]').type('bhagya@gmail.com');
      cy.get('[data-qa="referred-by-info-page"]').type('NoOne');
      
      // Waiting for address validation
      cy.wait(2000);
      cy.get('.manual-address-link').click();
      cy.get('#homeAddress').type('123 Aetna Street');
      cy.get('[data-qa="city"]').type('Mingo Junction');
      cy.get('[data-qa="state"]').select('OH');
      cy.get('[data-qa="county"]').select('Jefferson');
      cy.get('#zipCode').type('43938');
      
      // Filling physician information
      cy.get('[data-qa="physician-name"]').type('Bhagya');
      cy.get('[data-qa="physician-phone-number"]').type('9876543211');
      cy.get('[data-qa="go-to-clinic-timing"]').click();
      cy.get('.btn-primary--outline').click();
      cy.get('[data-qa="allow-merge-for-old-patient"] > .m-0x').click();
      cy.get('#root > div.main-wrapper.PageWrapper_PageWrapper__YNUwY > div > div.patient-info > section > div > div:nth-child(1) > div > div > div > span:nth-child(3) > label').click();
      cy.get('[data-qa="go-to-clinic-timing"]').click();
      cy.get('#term-label').eq(0).click();
      cy.wait(2000);
      cy.get('[data-qa=terms-condition-1]').click({ force: true });
      cy.get('#consentedBy').select('Guardian');
      cy.get('[data-qa="patient-info-signature-add"]').click();
      cy.get('.signature-canvas').click();
      cy.intercept('Post','/api/v2/appointment').as('submit')
      cy.get('[data-qa="submit-appointment"]').click();
      cy.wait('@submit')
  
      // Assertion to ensure appointment was booked
      cy.contains('you').should('be.visible');
    });
  
    it('should successfully reschedule the appointment', () => {
      // Rescheduling the appointment
      cy.wait(18000)
      cy.contains('.m-0x', 'Reschedule').click();
      cy.get('[data-qa="confirm-reschedule-appt"]').click();
      cy.get('[data-qa="firstname-security-check"]').type('Bhagya');
      cy.get('[data-qa="middlename-security-check"]').type('sanjay');
      cy.get('[data-qa="lastname-security-check"]').type('shaha');
      cy.get('[data-qa="birthyear-security-check"]').select('2000');
      cy.get('[data-qa="birthmonth-security-check"]').select('Mar');
      cy.get('[data-qa="birthday-security-check"]').select('4');
      cy.get('[data-qa="submit-security-check"]').click();
      
      // Selecting a new time slot
      cy.get('.react-datepicker__day.react-datepicker__day--031').click();
      cy.wait(4000)
      //cy.get('.available-slots--light').contains('09:30 am').click();
      cy.get('[class="text-demibold"]').contains('09:30 am').click();
      cy.wait(12000)
      cy.get('[data-qa="btn-continue"]').click();
      cy.wait(12000)
      cy.get('[data-qa="confirm-and-submit-btn"]').click();
      cy.wait(12000)
      // Assertion to ensure reschedule was successful
      cy.contains('you').should('be.visible');
    });
  
    it('should successfully cancel the appointment', () => {
      // Cancelling the appointment
      cy.wait(18000)
      cy.get('[data-qa="cancel-appt-btn"]').click();
      cy.get('[data-qa="firstname-security-check"]').type('Bhagya');
      cy.get('[data-qa="middlename-security-check"]').type('sanjay');
      cy.get('[data-qa="lastname-security-check"]').type('shaha');
      cy.get('[data-qa="birthyear-security-check"]').select('2000');
      cy.get('[data-qa="birthmonth-security-check"]').select('Mar');
      cy.get('[data-qa="birthday-security-check"]').select('4');
      cy.get('[data-qa="submit-security-check"]').click();
      
      // Confirm cancellation
      cy.get('[data-qa="ok-cancel-modal"] > .m-0x').click();
    });
  });
  