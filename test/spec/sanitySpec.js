describe("sanity suite", function() {
    'use strict';

    it("should be true", function() {
        expect(true).toBe(true);
    });
    it("should be true", function() {
        expect(true).toBeTruthy();
    });
    it('should be false', function() {
        expect(false).toBe(false);
    });
    it('should be false', function() {
        expect(false).toBeFalsy();
    });
});
