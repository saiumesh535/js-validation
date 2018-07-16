var validation=require("../../index");


describe("Validation",function(){

    console.log("Executing Tests!!");

    it("should verify missing data",function() {
        const config = {
            name: {
            max: 22,
            min: 3,
            }
        }
        
        const input = {};
        const isValid = validation.validate(input, config);
        expect(isValid[0].errorType).toContain('data missing');
    });

    it("should verify minimum and maximum length",function() {
    const config = {
        name: {
        max: 22,
        min: 3,
        }
    }
    
    const input = {
        name: 'sai umesh'
    }
    const isValid = validation.validate(input, config);
    expect(isValid.length).toEqual(0);
    });

    it("should verify if the email is invalid",function() {
        const config = {
            email: {
            max: 22,
            min: 3,
            type:'email'
            }
        }
        
        const input = {
            email: 'sai.umesh@gmail@.com'
        }
        const isValid = validation.validate(input, config);
        expect(isValid.length).toEqual(1);
        expect(isValid[0].errorType).toContain('email');
    });
});