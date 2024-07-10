describe('Signetic test suite', () => {

  // Using beforeEach to set up preconditions before each test
  beforeEach(() => {
      cy.visit('https://feature.qa.signetic.com/service/?lang=en');
  });

  it('signetic flow', () => {
      // Intercepting the initial page load request
      cy.intercept('GET', '/service/?lang=en').as('pageLoad');
     // cy.wait('@pageLoad');
      
      // Click on API Clinical Services
      cy.contains('.Collapsible', 'API Clinical Services').click();
      
      // Intercepting the request after clicking API Clinical Services
      cy.intercept('GET', '/api/clinicalservices').as('clinicalServices');
     // cy.wait('@clinicalServices');
     // cy.wait(2000)
      // Selecting Medication Therapy Management
      cy.get('div.Collapsible__contentInner #vaccine-selection').eq(2).select('Medication Therapy Management', { force: true });

      // Intercepting go to prescreening request
      cy.intercept('POST', '/prescreening').as('goToPrescreening');
      cy.get('[data-qa="go-to-prescreening"]').click();
    //  cy.wait('@goToPrescreening');

      // Filling in birth date details
      cy.get('#birthYear').select('2000');
      cy.get('[data-qa="prescreening-birthmonth"]').select('Mar');
      cy.get('#birthDay').select('4');
      cy.get('[data-qa="goto-subservicelist-btn"]').click();

      // Navigating to eligibility
      cy.get('[data-qa="go-to-eligibility"] > .m-0x').click();
      cy.intercept('GET', '/eligibility').as('goToEligibility');
     // cy.wait('@goToEligibility');

      // Selecting a time slot
      cy.get('#root > div.main-wrapper.PageWrapper_PageWrapper__YNUwY > div > div.clinic-and-timing > section > div > div:nth-child(2) > div > div > div > div.col-5-md > div > div:nth-child(1) > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(5) > div.react-datepicker__day.react-datepicker__day--028').click()
      cy.get('#root > div.main-wrapper.PageWrapper_PageWrapper__YNUwY > div > div.clinic-and-timing > section > div > div:nth-child(2) > div > div > div > div.col-7-md.AvailableTimeslots_availableTimeSlots__tbPiy > div.select-time-wrapper.location-time-wrapper > span:nth-child(3) > label > span > span.text-demibold').click()
     // cy.contains('..text-demibold', '04:00 am').click();
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
    //  cy.get('[data-qa="home-address"]').type('123 a');

      // Waiting for address validation
      cy.intercept('GET', '/validateaddress').as('validateAddress');
      cy.wait(2000);
     // cy.get(':nth-child(1) > .address-item_label > .address-item_content > :nth-child(1)').should('be.visible').click();
     // cy.wait(2000);
     //cy.get('#root > div.main-wrapper.PageWrapper_PageWrapper__YNUwY > div > section:nth-child(4) > div.manual-address-link').click()
     cy.get('.manual-address-link').click()
      //cy.get('[data-qa="home-address"]').should('be.visible').click().type('123 Aetna Street')
     // cy.get('.m-0x').click().
     cy.get('#homeAddress').type('123 Aetna Street')
     cy.get('[data-qa="city"]').type('Mingo Junction')
     cy.get('[data-qa="state"]').type('OH')
   //  cy.get('[data-qa="county"]').select('Jefferson')
     cy.get('#county').select('Jefferson')
     cy.get('#zipCode').type('43938')
      
      // Filling physician information
      cy.get('[data-qa="physician-name"]').type('Bhagya');
      cy.get('[data-qa="physician-phone-number"]').type('9876543211');
      cy.get('[data-qa="go-to-clinic-timing"]').click();
      cy.wait(2000)
      cy.get('.btn-primary--outline').click()
      cy.get('#root > div.main-wrapper.PageWrapper_PageWrapper__YNUwY > div > div.patient-info > section > div > div:nth-child(1) > div > div > div > span:nth-child(3) > label').click()
      cy.get('[data-qa="go-to-clinic-timing"]').click()
      cy.get('#term-label').eq(0).click()
      cy.wait(2000)
      cy.get('[data-qa=terms-condition-1]').click({force:true})
      cy.get('#guardianFirstName').type('bhagya')
      cy.get('#guardianLastName').type('shah')
      cy.get('[data-qa="patient-info-signature-add"]').click()
      cy.get('.signature-canvas').click()
      cy.get('[data-qa="submit-appointment"]').click()
      //assertation
      cy.contains('you').should('be.visible');
      // resechulde
      cy.contains('.m-0x','Reschedule').click()
      cy.get('[data-qa="confirm-reschedule-appt"]').click()
      cy.get('[data-qa="firstname-security-check"]').type('Bhagya')
      cy.get('[data-qa="lastname-security-check"]').type('shaha')
      cy.get('[data-qa="birthyear-security-check"]').select('2000');
      cy.get('[data-qa="birthmonth-security-check"]').select('Mar');
      cy.get('[data-qa="birthday-security-check"]').select('4');
      cy.get('[data-qa="submit-security-check"]').click();
      cy.get('#root > div.main-wrapper.PageWrapper_PageWrapper__YNUwY > div > div.clinic-and-timing > section > div > div:nth-child(2) > div > div > div > div.col-5-md > div > div:nth-child(1) > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(5) > div.react-datepicker__day.react-datepicker__day--031').click();
      cy.get('#root > div.main-wrapper.PageWrapper_PageWrapper__YNUwY > div > div.clinic-and-timing > section > div > div:nth-child(2) > div > div > div > div.col-7-md.AvailableTimeslots_availableTimeSlots__tbPiy > div.select-time-wrapper.location-time-wrapper > span:nth-child(5) > label > span > span.available-slots.available-slots--light.d-block').click();
      cy.get('[data-qa="btn-continue"]').click()   
      cy.get('[data-qa="confirm-and-submit-btn"]').click()
      //assertation
      cy.contains('you').should('be.visible');

   });


  });

